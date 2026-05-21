/* ====================================================
   THREE.JS 3D PORTFOLIO — main.js
   ==================================================== */

/* ── Navbar scroll effect ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

/* ── Mobile nav toggle ── */
const navToggle = document.getElementById('navToggle');
const navLinks  = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

/* ──────────────────────────────────────────────────
   HERO CANVAS  — particle galaxy + floating orbs
   ────────────────────────────────────────────────── */
(function heroScene() {
  const canvas = document.getElementById('heroCanvas');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(70, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
  camera.position.z = 60;

  /* Stars / particles */
  const starGeo = new THREE.BufferGeometry();
  const starCount = 2200;
  const positions = new Float32Array(starCount * 3);
  const scales    = new Float32Array(starCount);
  for (let i = 0; i < starCount; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * 300;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 300;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 200;
    scales[i] = Math.random();
  }
  starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  starGeo.setAttribute('aScale',   new THREE.BufferAttribute(scales, 1));

  const starMat = new THREE.ShaderMaterial({
    transparent: true,
    uniforms: {
      uTime: { value: 0 },
      uColor1: { value: new THREE.Color('#6c63ff') },
      uColor2: { value: new THREE.Color('#ff6584') },
    },
    vertexShader: `
      attribute float aScale;
      uniform float uTime;
      varying float vScale;
      void main() {
        vScale = aScale;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = (aScale * 3.0 + 1.0) * (60.0 / -mv.z);
        gl_Position = projectionMatrix * mv;
      }
    `,
    fragmentShader: `
      uniform vec3 uColor1;
      uniform vec3 uColor2;
      uniform float uTime;
      varying float vScale;
      void main() {
        vec2 uv = gl_PointCoord - 0.5;
        float d = length(uv);
        if (d > 0.5) discard;
        float alpha = (0.5 - d) * 2.0;
        alpha *= 0.6 + 0.4 * sin(uTime * 2.0 + vScale * 10.0);
        vec3 col = mix(uColor1, uColor2, vScale);
        gl_FragColor = vec4(col, alpha);
      }
    `,
  });

  scene.add(new THREE.Points(starGeo, starMat));

  /* Floating icosahedra */
  const orbs = [];
  const orbColors = [0x6c63ff, 0xff6584, 0x43e97b, 0x4facfe, 0xf7971e];
  const orbGeos = [
    new THREE.IcosahedronGeometry(2.5, 0),
    new THREE.OctahedronGeometry(2, 0),
    new THREE.TetrahedronGeometry(2.2, 0),
    new THREE.DodecahedronGeometry(1.8, 0),
    new THREE.IcosahedronGeometry(1.6, 1),
    new THREE.OctahedronGeometry(3, 0),
  ];

  const spreadX = 50, spreadY = 28, spreadZ = 20;
  orbGeos.forEach((geo, i) => {
    const mat = new THREE.MeshStandardMaterial({
      color: orbColors[i % orbColors.length],
      wireframe: true,
      transparent: true,
      opacity: 0.5,
      emissive: orbColors[i % orbColors.length],
      emissiveIntensity: 0.3,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(
      (Math.random() - 0.5) * spreadX,
      (Math.random() - 0.5) * spreadY,
      (Math.random() - 0.5) * spreadZ - 10
    );
    mesh.userData = {
      rotX: (Math.random() - 0.5) * 0.015,
      rotY: (Math.random() - 0.5) * 0.015,
      floatOffset: Math.random() * Math.PI * 2,
      floatSpeed: 0.4 + Math.random() * 0.4,
    };
    scene.add(mesh);
    orbs.push(mesh);
  });

  /* Central glowing sphere */
  const coreSphere = new THREE.Mesh(
    new THREE.SphereGeometry(6, 64, 64),
    new THREE.ShaderMaterial({
      transparent: true,
      uniforms: { uTime: { value: 0 } },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPos;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPos = (modelViewMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        varying vec3 vNormal;
        varying vec3 vPos;
        void main() {
          float rim = pow(1.0 - abs(dot(vNormal, normalize(-vPos))), 2.5);
          vec3 c = mix(vec3(0.42, 0.39, 1.0), vec3(1.0, 0.4, 0.52), rim);
          float pulse = 0.5 + 0.5 * sin(uTime * 1.5);
          gl_FragColor = vec4(c, rim * 0.55 * (0.7 + 0.3 * pulse));
        }
      `,
    })
  );
  scene.add(coreSphere);

  /* Ring around core */
  const ringMesh = new THREE.Mesh(
    new THREE.TorusGeometry(9, 0.18, 16, 120),
    new THREE.MeshStandardMaterial({ color: 0x6c63ff, emissive: 0x6c63ff, emissiveIntensity: 0.8 })
  );
  ringMesh.rotation.x = Math.PI / 2.5;
  scene.add(ringMesh);

  const ring2 = new THREE.Mesh(
    new THREE.TorusGeometry(12, 0.08, 16, 120),
    new THREE.MeshStandardMaterial({ color: 0xff6584, emissive: 0xff6584, emissiveIntensity: 0.6 })
  );
  ring2.rotation.x = Math.PI / 3;
  ring2.rotation.z = Math.PI / 5;
  scene.add(ring2);

  /* Lighting */
  scene.add(new THREE.AmbientLight(0x6c63ff, 0.6));
  const pLight = new THREE.PointLight(0x6c63ff, 2.5, 100);
  pLight.position.set(0, 0, 20);
  scene.add(pLight);
  const pLight2 = new THREE.PointLight(0xff6584, 1.5, 80);
  pLight2.position.set(20, -10, 10);
  scene.add(pLight2);

  /* Mouse parallax */
  let mx = 0, my = 0;
  window.addEventListener('mousemove', e => {
    mx = (e.clientX / window.innerWidth  - 0.5) * 2;
    my = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  /* Resize */
  window.addEventListener('resize', () => {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  });

  /* Animate */
  let t = 0;
  function animate() {
    requestAnimationFrame(animate);
    t += 0.01;

    starMat.uniforms.uTime.value = t;
    coreSphere.material.uniforms.uTime.value = t;

    ringMesh.rotation.y = t * 0.3;
    ringMesh.rotation.z = t * 0.1;
    ring2.rotation.y = -t * 0.2;
    ring2.rotation.x = Math.PI / 3 + Math.sin(t * 0.5) * 0.1;

    orbs.forEach(o => {
      o.rotation.x += o.userData.rotX;
      o.rotation.y += o.userData.rotY;
      o.position.y += Math.sin(t * o.userData.floatSpeed + o.userData.floatOffset) * 0.02;
    });

    camera.position.x += (mx * 8 - camera.position.x) * 0.04;
    camera.position.y += (-my * 4 - camera.position.y) * 0.04;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
  }
  animate();
})();

/* ──────────────────────────────────────────────────
   ABOUT CANVAS  — floating dots grid
   ────────────────────────────────────────────────── */
(function aboutScene() {
  const canvas = document.getElementById('aboutCanvas');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 200);
  camera.position.z = 40;

  const dotGeo = new THREE.BufferGeometry();
  const cols = 20, rows = 12;
  const pts = [];
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      pts.push((i - cols/2) * 3.5, (j - rows/2) * 3.5, 0);
    }
  }
  dotGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pts), 3));

  const dotMat = new THREE.PointsMaterial({
    color: 0x6c63ff, size: 0.2, transparent: true, opacity: 0.25,
  });
  scene.add(new THREE.Points(dotGeo, dotMat));

  window.addEventListener('resize', () => {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  });

  let t = 0;
  function animate() {
    requestAnimationFrame(animate);
    t += 0.005;
    scene.rotation.x = Math.sin(t) * 0.05;
    scene.rotation.y = Math.cos(t * 0.7) * 0.05;
    renderer.render(scene, camera);
  }
  animate();
})();

/* ──────────────────────────────────────────────────
   SKILLS CANVAS  — flowing wave ribbons
   ────────────────────────────────────────────────── */
(function skillsScene() {
  const canvas = document.getElementById('skillsCanvas');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 200);
  camera.position.z = 30;

  const ribbonGeo = new THREE.BufferGeometry();
  const count = 600;
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    pos[i*3]   = (i / count - 0.5) * 80;
    pos[i*3+1] = 0;
    pos[i*3+2] = 0;
  }
  ribbonGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));

  const ribbons = [];
  const ribbonColors = [0x6c63ff, 0xff6584, 0x43e97b];
  ribbonColors.forEach((c, ri) => {
    const mat = new THREE.LineBasicMaterial({ color: c, transparent: true, opacity: 0.18 + ri * 0.06 });
    const mesh = new THREE.Line(ribbonGeo.clone(), mat);
    mesh.userData.offset = ri * 1.8;
    scene.add(mesh);
    ribbons.push(mesh);
  });

  window.addEventListener('resize', () => {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  });

  let t = 0;
  function animate() {
    requestAnimationFrame(animate);
    t += 0.008;
    ribbons.forEach((r, ri) => {
      const p = r.geometry.attributes.position.array;
      for (let i = 0; i < count; i++) {
        const x = p[i*3];
        p[i*3+1] = Math.sin(x * 0.08 + t + r.userData.offset) * 4 +
                   Math.sin(x * 0.03 + t * 0.5 + r.userData.offset) * 6;
        p[i*3+2] = Math.cos(x * 0.05 + t * 0.7 + r.userData.offset) * 2;
      }
      r.geometry.attributes.position.needsUpdate = true;
    });
    renderer.render(scene, camera);
  }
  animate();
})();

/* ──────────────────────────────────────────────────
   PROJECTS CANVAS  — spinning hexagon mesh
   ────────────────────────────────────────────────── */
(function projectsScene() {
  const canvas = document.getElementById('projectsCanvas');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 200);
  camera.position.z = 30;

  const hexes = [];
  const cols2 = [0x6c63ff, 0xff6584, 0x43e97b, 0x4facfe];
  for (let i = 0; i < 12; i++) {
    const geo = new THREE.CircleGeometry(1 + Math.random() * 1.5, 6);
    const edges = new THREE.EdgesGeometry(geo);
    const mat = new THREE.LineBasicMaterial({
      color: cols2[i % cols2.length],
      transparent: true,
      opacity: 0.1 + Math.random() * 0.15,
    });
    const mesh = new THREE.LineSegments(edges, mat);
    mesh.position.set(
      (Math.random() - 0.5) * 60,
      (Math.random() - 0.5) * 40,
      (Math.random() - 0.5) * 10
    );
    mesh.userData.rot = (Math.random() - 0.5) * 0.01;
    scene.add(mesh);
    hexes.push(mesh);
  }

  window.addEventListener('resize', () => {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  });

  let t = 0;
  function animate() {
    requestAnimationFrame(animate);
    t += 0.005;
    hexes.forEach(h => { h.rotation.z += h.userData.rot; });
    renderer.render(scene, camera);
  }
  animate();
})();

/* ──────────────────────────────────────────────────
   CONTACT CANVAS  — DNA helix
   ────────────────────────────────────────────────── */
(function contactScene() {
  const canvas = document.getElementById('contactCanvas');
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 200);
  camera.position.set(0, 0, 40);

  const helixCount = 200;
  const helixPoints1 = [], helixPoints2 = [];
  for (let i = 0; i < helixCount; i++) {
    const t = (i / helixCount) * Math.PI * 6 - Math.PI * 3;
    helixPoints1.push(new THREE.Vector3(Math.cos(t) * 8, t * 2.5, Math.sin(t) * 8));
    helixPoints2.push(new THREE.Vector3(Math.cos(t + Math.PI) * 8, t * 2.5, Math.sin(t + Math.PI) * 8));
  }

  const makeLine = (pts, color, op = 0.2) => {
    const geo = new THREE.BufferGeometry().setFromPoints(pts);
    const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity: op });
    return new THREE.Line(geo, mat);
  };

  const helix1 = makeLine(helixPoints1, 0x6c63ff, 0.25);
  const helix2 = makeLine(helixPoints2, 0xff6584, 0.25);
  scene.add(helix1, helix2);

  /* Rungs */
  for (let i = 0; i < helixCount; i += 8) {
    const t = (i / helixCount) * Math.PI * 6 - Math.PI * 3;
    const rungGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(Math.cos(t) * 8, t * 2.5, Math.sin(t) * 8),
      new THREE.Vector3(Math.cos(t + Math.PI) * 8, t * 2.5, Math.sin(t + Math.PI) * 8),
    ]);
    scene.add(new THREE.Line(rungGeo,
      new THREE.LineBasicMaterial({ color: 0x4facfe, transparent: true, opacity: 0.1 })));
  }

  window.addEventListener('resize', () => {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  });

  let t = 0;
  function animate() {
    requestAnimationFrame(animate);
    t += 0.004;
    helix1.rotation.y = t;
    helix2.rotation.y = t;
    renderer.render(scene, camera);
  }
  animate();
})();

/* ──────────────────────────────────────────────────
   SCROLL ANIMATIONS
   ────────────────────────────────────────────────── */

/* Skill cards fade-in */
const skillCards = document.querySelectorAll('.skill-card');
const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const delay = parseInt(e.target.dataset.delay) || 0;
      setTimeout(() => {
        e.target.classList.add('visible');
        /* Animate skill bars */
        e.target.querySelectorAll('.bar-fill').forEach(bar => {
          bar.style.width = bar.dataset.width + '%';
        });
      }, delay);
      cardObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.2 });

skillCards.forEach(c => cardObserver.observe(c));

/* Counter animation */
const counters = document.querySelectorAll('.stat-num');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const target = parseInt(e.target.dataset.target);
      let current = 0;
      const step = Math.ceil(target / 50);
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        e.target.textContent = current;
        if (current >= target) clearInterval(timer);
      }, 30);
      counterObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });

counters.forEach(c => counterObserver.observe(c));

/* Contact form */
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const btn = this.querySelector('button[type="submit"]');
  btn.disabled = true;
  btn.querySelector('span').textContent = 'Sending…';
  setTimeout(() => {
    document.getElementById('formSuccess').classList.add('show');
    this.reset();
    btn.disabled = false;
    btn.querySelector('span').textContent = 'Send Message';
  }, 1200);
});

/* 3D card tilt on mouse move */
document.querySelectorAll('[data-tilt]').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    card.style.transform = `perspective(800px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateZ(8px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) translateZ(0)';
  });
});
