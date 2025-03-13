import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera, Stars } from '@react-three/drei';
import HairClipModel from './HairClipModel';

export default function HairClipScene({ scrollY = 0 }) {
  return (
    <div className="absolute inset-0 w-full h-full -z-10 opacity-90">
      <Canvas shadows dpr={[1, 2]}>
        {/* Ambient lighting */}
        <ambientLight intensity={0.8} />

        {/* Main key light */}
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={2}
          castShadow
          color="#ffccd5"
        />

        {/* Fill light for the other side */}
        <pointLight position={[-10, 5, -10]} intensity={0.5} color="#c4f1f9" />

        {/* Rim light for edge highlighting */}
        <pointLight position={[0, -10, 0]} intensity={0.2} color="#fff" />

        {/* Set up camera */}
        <PerspectiveCamera makeDefault position={[0, 0, 4.5]} fov={35} />

        <Suspense fallback={null}>
          {/* The hair clip model */}
          <HairClipModel scrollY={scrollY} />

          {/* Environment adds realistic lighting and reflections */}
          <Environment preset="sunset" />

          {/* Add some stars in the background for depth */}
          <Stars radius={50} depth={50} count={1000} factor={4} fade speed={1} />
        </Suspense>

        {/* Controls for interactive rotation */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={scrollY > 0.05 ? 0.5 : 2.5}
          rotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}
