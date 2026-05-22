import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Stars({ count = 5000 }) {
  const ref = useRef()
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 50 + Math.random() * 150
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)
    }
    return pos
  }, [count])

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.015
      ref.current.rotation.y -= delta * 0.012
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#d4b896" size={0.1} transparent opacity={0.55} depthWrite={false} sizeAttenuation />
    </points>
  )
}

function NearStars() {
  const ref = useRef()
  const positions = useMemo(() => {
    const pos = new Float32Array(1200 * 3)
    for (let i = 0; i < 1200; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 60
      pos[i * 3 + 1] = (Math.random() - 0.5) * 60
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30
    }
    return pos
  }, [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.03
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={1200} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#c94f00" size={0.05} transparent opacity={0.4} depthWrite={false} sizeAttenuation />
    </points>
  )
}

function LiquidSphere({ mouse }) {
  const meshRef = useRef()
  const matRef = useRef()

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uColorA: { value: new THREE.Color('#c94f00') },
      uColorB: { value: new THREE.Color('#7a3000') },
    }),
    []
  )

  const vertexShader = `
    varying vec3 vNormal;
    varying vec3 vPos;
    varying float vDisplace;
    uniform float uTime;
    uniform vec2  uMouse;

    float hash(vec3 p) { return fract(sin(dot(p, vec3(127.1,311.7,74.7)))*43758.5453123); }
    float noise(vec3 p) {
      vec3 i = floor(p); vec3 f = fract(p);
      f = f*f*(3.0-2.0*f);
      return mix(mix(mix(hash(i),hash(i+vec3(1,0,0)),f.x),
                     mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),
                 mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),
                     mix(hash(i+vec3(0,1,1)),hash(i+vec3(1,1,1)),f.x),f.y),f.z);
    }

    void main() {
      vNormal = normalize(normalMatrix * normal);
      float n = noise(position * 0.8 + uTime * 0.4);
      float mouseInfluence = length(uMouse) * 0.5;
      float displace = 0.55 * n + 0.35 * sin(uTime * 0.6 + position.x * 1.2) + mouseInfluence * 0.3;
      vDisplace = displace;
      vec3 newPos = position + normal * displace;
      vec4 mv = modelViewMatrix * vec4(newPos, 1.0);
      vPos = mv.xyz;
      gl_Position = projectionMatrix * mv;
    }
  `

  const fragmentShader = `
    varying vec3 vNormal;
    varying vec3 vPos;
    varying float vDisplace;
    uniform float uTime;
    uniform vec3 uColorA;
    uniform vec3 uColorB;

    void main() {
      float fresnel = pow(1.0 - abs(dot(vNormal, normalize(-vPos))), 2.2);
      vec3 col = mix(uColorA, uColorB, fresnel + vDisplace * 0.4);
      float pulse = 0.6 + 0.4 * sin(uTime * 1.2);
      gl_FragColor = vec4(col, fresnel * 0.55 * pulse + 0.06);
    }
  `

  useFrame((state) => {
    if (matRef.current) {
      matRef.current.uniforms.uTime.value = state.clock.elapsedTime
      matRef.current.uniforms.uMouse.value.set(mouse.current.x, mouse.current.y)
    }
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.08
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.12
      meshRef.current.position.x += (mouse.current.x * 1.5 - meshRef.current.position.x) * 0.05
      meshRef.current.position.y += (mouse.current.y * 1.0 - meshRef.current.position.y) * 0.05
    }
  })

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[3.4, 32]} />
      <shaderMaterial
        ref={matRef}
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  )
}

function Rings({ mouse }) {
  const r1 = useRef(), r2 = useRef(), r3 = useRef()
  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (r1.current) {
      r1.current.rotation.x = t * 0.3 + mouse.current.y * 0.2
      r1.current.rotation.y = t * 0.2 + mouse.current.x * 0.2
    }
    if (r2.current) {
      r2.current.rotation.x = -t * 0.2 + mouse.current.y * 0.15
      r2.current.rotation.z = t * 0.15
    }
    if (r3.current) {
      r3.current.rotation.x = Math.sin(t * 0.4) * 0.4
      r3.current.rotation.y = -t * 0.1
    }
  })
  return (
    <group>
      <mesh ref={r1}>
        <torusGeometry args={[6, 0.04, 16, 100]} />
        <meshBasicMaterial color="#c94f00" transparent opacity={0.4} />
      </mesh>
      <mesh ref={r2}>
        <torusGeometry args={[8, 0.03, 16, 100]} />
        <meshBasicMaterial color="#f0e0cc" transparent opacity={0.15} />
      </mesh>
      <mesh ref={r3}>
        <torusGeometry args={[11, 0.02, 16, 100]} />
        <meshBasicMaterial color="#e07030" transparent opacity={0.2} />
      </mesh>
    </group>
  )
}

function FloatingShapes() {
  const groupRef = useRef()
  const shapes = useMemo(() => Array.from({ length: 8 }, (_, i) => ({
    pos: [
      (Math.random() - 0.5) * 40,
      (Math.random() - 0.5) * 25,
      (Math.random() - 0.5) * 20 - 10,
    ],
    rotSpeed: (Math.random() - 0.5) * 0.005,
    type: ['octa', 'tetra', 'icosa', 'dodeca'][i % 4],
    size: 0.4 + Math.random() * 0.6,
    color: ['#c94f00', '#f0e0cc', '#e07030'][i % 3],
    offset: Math.random() * Math.PI * 2,
  })), [])

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.elapsedTime
    groupRef.current.children.forEach((m, i) => {
      m.rotation.x += shapes[i].rotSpeed
      m.rotation.y += shapes[i].rotSpeed * 1.2
      m.position.y = shapes[i].pos[1] + Math.sin(t * 0.5 + shapes[i].offset) * 0.8
    })
  })

  return (
    <group ref={groupRef}>
      {shapes.map((s, i) => {
        const Geo = {
          octa: <octahedronGeometry args={[s.size]} />,
          tetra: <tetrahedronGeometry args={[s.size]} />,
          icosa: <icosahedronGeometry args={[s.size]} />,
          dodeca: <dodecahedronGeometry args={[s.size]} />,
        }[s.type]
        return (
          <mesh key={i} position={s.pos}>
            {Geo}
            <meshStandardMaterial
              color={s.color}
              wireframe
              transparent
              opacity={0.3}
              emissive={s.color}
              emissiveIntensity={0.4}
            />
          </mesh>
        )
      })}
    </group>
  )
}

function MouseTracker({ mouse }) {
  useFrame((state) => {
    mouse.current.x += (state.pointer.x - mouse.current.x) * 0.08
    mouse.current.y += (state.pointer.y - mouse.current.y) * 0.08
  })
  return null
}

function CameraRig({ mouse }) {
  useFrame((state) => {
    state.camera.position.x += (mouse.current.x * 3 - state.camera.position.x) * 0.04
    state.camera.position.y += (mouse.current.y * 2 - state.camera.position.y) * 0.04
    state.camera.lookAt(0, 0, 0)
  })
  return null
}

export default function HeroCanvas() {
  const mouse = useRef({ x: 0, y: 0 })
  const [dpr, setDpr] = useState(1.5)

  useEffect(() => {
    setDpr(Math.min(window.devicePixelRatio, 2))
  }, [])

  return (
    <Canvas
      camera={{ position: [0, 0, 22], fov: 65 }}
      dpr={dpr}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <ambientLight intensity={0.3} color="#c94f00" />
      <pointLight position={[15, 15, 15]} intensity={2} color="#c94f00" />
      <pointLight position={[-15, -10, 10]} intensity={1.5} color="#f0a060" />
      <pointLight position={[0, 0, 10]} intensity={1} color="#e07030" />

      <MouseTracker mouse={mouse} />
      <CameraRig mouse={mouse} />

      <Stars />
      <NearStars />
      <LiquidSphere mouse={mouse} />
      <Rings mouse={mouse} />
      <FloatingShapes />
    </Canvas>
  )
}
