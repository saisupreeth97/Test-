import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Stars() {
  const ref = useRef()
  const positions = useMemo(() => {
    const pos = new Float32Array(4000 * 3)
    for (let i = 0; i < 4000; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 300
      pos[i * 3 + 1] = (Math.random() - 0.5) * 300
      pos[i * 3 + 2] = (Math.random() - 0.5) * 150
    }
    return pos
  }, [])

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.025
      ref.current.rotation.y -= delta * 0.018
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={4000} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#a855f7" size={0.18} transparent opacity={0.65} depthWrite={false} sizeAttenuation />
    </points>
  )
}

function NearStars() {
  const ref = useRef()
  const positions = useMemo(() => {
    const pos = new Float32Array(800 * 3)
    for (let i = 0; i < 800; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 80
      pos[i * 3 + 1] = (Math.random() - 0.5) * 80
      pos[i * 3 + 2] = (Math.random() - 0.5) * 40
    }
    return pos
  }, [])

  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.elapsedTime * 0.04
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={800} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#06b6d4" size={0.08} transparent opacity={0.4} depthWrite={false} sizeAttenuation />
    </points>
  )
}

function FloatingMesh() {
  const meshRef = useRef()
  const outerRef = useRef()

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.18
      meshRef.current.rotation.y = t * 0.26
      meshRef.current.position.y = Math.sin(t * 0.5) * 0.6
    }
    if (outerRef.current) {
      outerRef.current.rotation.x = -t * 0.12
      outerRef.current.rotation.z = t * 0.1
    }
  })

  return (
    <group>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[4, 1]} />
        <meshStandardMaterial
          color="#7c3aed"
          wireframe
          transparent
          opacity={0.12}
          emissive="#7c3aed"
          emissiveIntensity={0.5}
        />
      </mesh>
      <mesh ref={outerRef}>
        <torusGeometry args={[6.5, 0.15, 16, 100]} />
        <meshStandardMaterial
          color="#06b6d4"
          transparent
          opacity={0.2}
          emissive="#06b6d4"
          emissiveIntensity={0.6}
        />
      </mesh>
      <mesh>
        <torusGeometry args={[9, 0.06, 16, 100]} />
        <meshStandardMaterial
          color="#a855f7"
          transparent
          opacity={0.12}
          emissive="#a855f7"
          emissiveIntensity={0.4}
        />
      </mesh>
    </group>
  )
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 22], fov: 70 }}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} color="#7c3aed" />
      <pointLight position={[15, 15, 15]} intensity={1.5} color="#7c3aed" />
      <pointLight position={[-15, -10, 10]} intensity={1} color="#06b6d4" />
      <Stars />
      <NearStars />
      <FloatingMesh />
    </Canvas>
  )
}
