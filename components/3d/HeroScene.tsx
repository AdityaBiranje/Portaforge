import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Float, PerspectiveCamera, PresentationControls, ContactShadows, Sphere, RoundedBox } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"

function ProfileCard() {
    const group = useRef<THREE.Group>(null)

    // Animation for floating elements
    useFrame((state) => {
        if (group.current) {
            // Subtle floating for the whole card
            group.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1
            group.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.02
        }
    })

    return (
        <group ref={group} rotation={[0, -0.2, 0]}>
            <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
                {/* Main Glass Card */}
                <RoundedBox args={[3.2, 2, 0.1]} radius={0.1} smoothness={4}>
                    <meshPhysicalMaterial
                        color="#ffffff"
                        metalness={0.1}
                        roughness={0.1}
                        transmission={0.95}
                        thickness={0.5}
                        envMapIntensity={1.5}
                        clearcoat={1}
                    />
                </RoundedBox>

                {/* Card Content (Floating slightly in front) */}
                <group position={[0, 0, 0.1]}>
                    {/* Avatar */}
                    <group position={[-1, 0, 0]}>
                        <Sphere args={[0.6, 32, 32]}>
                            <meshStandardMaterial color="#3b82f6" roughness={0.2} metalness={0.5} />
                        </Sphere>
                        {/* Ring around avatar */}
                        <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
                            <torusGeometry args={[0.7, 0.02, 16, 32]} />
                            <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={2} />
                        </mesh>
                    </group>

                    {/* Text Lines */}
                    <group position={[0.5, 0.3, 0]}>
                        {/* Name Line */}
                        <RoundedBox args={[1.8, 0.25, 0.02]} radius={0.05} position={[0, 0, 0]}>
                            <meshStandardMaterial color="#1e293b" />
                        </RoundedBox>
                        {/* Bio Line 1 */}
                        <RoundedBox args={[1.8, 0.1, 0.02]} radius={0.05} position={[0, -0.35, 0]}>
                            <meshStandardMaterial color="#94a3b8" />
                        </RoundedBox>
                        {/* Bio Line 2 */}
                        <RoundedBox args={[1.2, 0.1, 0.02]} radius={0.05} position={[-0.3, -0.55, 0]}>
                            <meshStandardMaterial color="#94a3b8" />
                        </RoundedBox>
                    </group>

                    {/* Decorative Elements */}
                    <Float speed={4} rotationIntensity={1} floatIntensity={1}>
                        <Sphere args={[0.15, 16, 16]} position={[1.4, 0.8, 0.2]}>
                            <meshStandardMaterial color="#ec4899" roughness={0.2} />
                        </Sphere>
                    </Float>
                    <Float speed={3} rotationIntensity={1} floatIntensity={0.5}>
                        <RoundedBox args={[0.2, 0.2, 0.2]} radius={0.05} position={[1.2, -0.8, 0.3]} rotation={[0, 0, Math.PI / 4]}>
                            <meshStandardMaterial color="#06b6d4" roughness={0.2} />
                        </RoundedBox>
                    </Float>
                </group>
            </Float>
        </group>
    )
}

function Scene() {
    return (
        <group>
            <PresentationControls
                global

                snap={true}
                rotation={[0, -0.2, 0]}
                polar={[-Math.PI / 6, Math.PI / 6]}
                azimuth={[-Math.PI / 6, Math.PI / 6]}
            >
                <ProfileCard />
            </PresentationControls>

            <ContactShadows resolution={512} scale={20} blur={2} opacity={0.3} far={10} color="#000000" />
            <Environment preset="city" />

            {/* Lighting */}
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
            <pointLight position={[0, 0, 5]} intensity={0.2} color="#ffffff" />
        </group>
    )
}

export function HeroScene() {
    return (
        <div className="w-full h-full min-h-[400px] relative">
            <Canvas gl={{ antialias: true, alpha: true }} dpr={[1, 2]} className="pointer-events-auto">
                <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />
                <Scene />
            </Canvas>
        </div>
    )
}
