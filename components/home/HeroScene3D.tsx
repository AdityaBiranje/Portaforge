"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Float, PerspectiveCamera, MeshDistortMaterial, ContactShadows, PresentationControls } from "@react-three/drei"
import { useRef, Suspense } from "react"
import { Group } from "three"
import { GradientHero } from "./GradientHero"

function FloatingShape({ position, color, speed, scale = 1 }: { position: [number, number, number], color: string, speed: number, scale?: number }) {
    return (
        <Float speed={speed} rotationIntensity={1} floatIntensity={1}>
            <mesh position={position} scale={scale}>
                <sphereGeometry args={[1, 32, 32]} />
                <MeshDistortMaterial
                    color={color}
                    speed={2}
                    distort={0.4}
                    radius={1}
                    roughness={0.1}
                    metalness={0.8}
                />
            </mesh>
        </Float>
    )
}

function Scene() {
    const groupRef = useRef<Group>(null)

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05
        }
    })

    return (
        <group ref={groupRef}>
            <PresentationControls
                global
                rotation={[0, 0.3, 0]}
                polar={[-Math.PI / 3, Math.PI / 3]}
                azimuth={[-Math.PI / 1.4, Math.PI / 2]}
            >
                <FloatingShape position={[2, 0, 0]} color="#3b82f6" speed={2} />
                <FloatingShape position={[-2, -1, 1]} color="#8b5cf6" speed={1.5} scale={0.8} />
                <FloatingShape position={[0, 2, -2]} color="#ec4899" speed={1} scale={1.2} />
                <FloatingShape position={[-3, 2, -3]} color="#06b6d4" speed={1.2} scale={0.6} />
            </PresentationControls>

            <ContactShadows resolution={512} scale={20} blur={2} opacity={0.4} far={10} color="#000000" />
            <Environment preset="city" />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        </group>
    )
}

export function HeroScene3D() {
    return (
        <div className="absolute inset-0 -z-10 h-[120vh] w-full overflow-hidden">
            <Suspense fallback={<GradientHero />}>
                <Canvas gl={{ antialias: true, alpha: true }} dpr={[1, 2]} className="pointer-events-auto">
                    <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={45} />
                    <Scene />
                </Canvas>
            </Suspense>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
    )
}
