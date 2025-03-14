import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Since we don't have an actual 3D model of the hair clip,
// we'll create a stylized representation using basic shapes
export function HairClipModel({ scrollY = 0 }) {
    const group = useRef<THREE.Group>(null);

    // Create a star shape geometry
    const starShape = useMemo(() => {
        return createStarShape(1, 0.5, 5);
    }, []);

    // Create a heart shape geometry
    const heartShape = useMemo(() => {
        return createHeartShape(0.7);
    }, []);

    // Animation based on scroll position
    useFrame(({ clock }) => {
        if (group.current) {
            const time = clock.getElapsedTime();

            // Add initial position to make sure it's in view
            group.current.position.set(0, 0, 0);

            // Rotate based on scroll position and add gentle floating movement
            group.current.rotation.y = scrollY * 0.2 + Math.sin(time * 0.5) * 0.1;
            group.current.position.y = Math.sin(time * 0.5) * 0.1;

            // Open/close animation based on scroll
            const openAmount = Math.min(Math.max(scrollY * 0.5, 0), 1);
            group.current.children.forEach((child, i) => {
                if (i > 0 && i < 3) {
                    // Only animate the clip parts
                    child.position.x =
                        i % 2 === 0 ? -0.5 - openAmount * 0.5 : 0.5 + openAmount * 0.5;
                }
            });

            // Add subtle breathing animation to the gems
            if (group.current.children.length > 5) {
                for (let i = 5; i < group.current.children.length; i++) {
                    const gem = group.current.children[i];
                    gem.scale.set(
                        1 + Math.sin(time * 2 + i) * 0.05,
                        1 + Math.sin(time * 2 + i) * 0.05,
                        1 + Math.sin(time * 2 + i) * 0.05
                    );
                }
            }
        }
    });

    return (
        <group ref={group} position={[0, 0, 0]} scale={1.5} dispose={null}>
            {/* Star shape base */}
            <mesh position={[0, 0, 0]} castShadow receiveShadow>
                <extrudeGeometry
                    args={[
                        starShape,
                        {
                            depth: 0.2,
                            bevelEnabled: true,
                            bevelThickness: 0.05,
                            bevelSize: 0.02,
                            bevelSegments: 3,
                        },
                    ]}
                />
                <meshPhysicalMaterial
                    color="#FF9BD2"
                    metalness={0.9}
                    roughness={0.1}
                    clearcoat={1}
                    clearcoatRoughness={0.2}
                    envMapIntensity={1}
                    reflectivity={1}
                />
            </mesh>

            {/* Left clip part */}
            <mesh position={[-0.5, 0, 0.1]} castShadow>
                <boxGeometry args={[0.4, 0.8, 0.1]} />
                <meshPhysicalMaterial
                    color="#FF9BD2"
                    metalness={0.8}
                    roughness={0.2}
                    clearcoat={0.5}
                    reflectivity={0.8}
                />
            </mesh>

            {/* Right clip part */}
            <mesh position={[0.5, 0, 0.1]} castShadow>
                <boxGeometry args={[0.4, 0.8, 0.1]} />
                <meshPhysicalMaterial
                    color="#FF9BD2"
                    metalness={0.8}
                    roughness={0.2}
                    clearcoat={0.5}
                    reflectivity={0.8}
                />
            </mesh>

            {/* Heart accent in the center */}
            <mesh position={[0, 0, 0.21]} castShadow scale={0.5}>
                <extrudeGeometry
                    args={[
                        heartShape,
                        {
                            depth: 0.1,
                            bevelEnabled: true,
                            bevelThickness: 0.02,
                            bevelSize: 0.02,
                            bevelSegments: 2,
                        },
                    ]}
                />
                <meshPhysicalMaterial
                    color="#FF5FA2"
                    metalness={0.7}
                    roughness={0.3}
                    emissive="#FF5FA2"
                    emissiveIntensity={0.2}
                />
            </mesh>

            {/* Decorative dots for the comb look */}
            {Array.from({ length: 5 }).map((_, i) => (
                <mesh key={i} position={[0, -0.3 + i * 0.15, 0.15]} castShadow>
                    <sphereGeometry args={[0.04, 16, 16]} />
                    <meshStandardMaterial color="white" emissive="white" emissiveIntensity={0.1} />
                </mesh>
            ))}

            {/* Decorative gems */}
            {Array.from({ length: 5 }).map((_, i) => {
                const angle = ((Math.PI * 2) / 5) * i;
                const radius = 0.8;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                    <mesh key={`gem-${i}`} position={[x, y, 0.25]} castShadow>
                        <octahedronGeometry args={[0.1, 0]} />
                        <meshPhysicalMaterial
                            color={i % 2 === 0 ? '#5CE1E6' : '#FFD700'}
                            metalness={0.5}
                            roughness={0}
                            transmission={0.9}
                            thickness={0.5}
                            ior={2.5}
                            clearcoat={1}
                            attenuationColor="#ffffff"
                        />
                    </mesh>
                );
            })}
        </group>
    );
}

// Helper function to create a star shape
function createStarShape(outerRadius = 1, innerRadius = 0.5, points = 5) {
    const shape = new THREE.Shape();

    for (let i = 0; i < points * 2; i++) {
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const angle = (Math.PI / points) * i;
        const x = Math.sin(angle) * radius;
        const y = Math.cos(angle) * radius;

        if (i === 0) {
            shape.moveTo(x, y);
        } else {
            shape.lineTo(x, y);
        }
    }

    shape.closePath();
    return shape;
}

// Helper function to create a heart shape
function createHeartShape(size = 1) {
    const shape = new THREE.Shape();

    shape.moveTo(0, size * 0.25);

    // Left curve
    shape.bezierCurveTo(
        -size * 0.25,
        -size * 0.25,
        -size * 0.75,
        -size * 0.25,
        -size * 0.5,
        -size * 0.75
    );

    // Bottom point
    shape.bezierCurveTo(-size * 0.25, -size * 1.25, size * 0.25, -size * 1.25, 0, -size * 0.75);

    // Right curve
    shape.bezierCurveTo(
        -size * 0.25,
        -size * 1.25,
        size * 0.25,
        -size * 1.25,
        size * 0.5,
        -size * 0.75
    );

    // Top right curve
    shape.bezierCurveTo(size * 0.75, -size * 0.25, size * 0.25, -size * 0.25, 0, size * 0.25);

    return shape;
}

export default HairClipModel;
