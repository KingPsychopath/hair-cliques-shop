import React, { Suspense, useRef, useCallback, type ComponentRef, useState, useEffect, lazy } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera, Stars, useProgress, Html } from '@react-three/drei';
import type { OrbitControls as DreiOrbitControls } from '@react-three/drei';
import HairClipModel from './HairClipModel';
import { useFrame } from '@react-three/fiber';
import { motion, AnimatePresence } from 'framer-motion';

// Enhanced loading screen component with beautiful minimalist design
function Loader() {
    const { progress, active } = useProgress();
    const [showLoader, setShowLoader] = useState(true);

    // Keep loader visible for at least 800ms after loading completes
    // to prevent jarring transitions
    useEffect(() => {
        if (progress === 100 && !active) {
            const timer = setTimeout(() => {
                setShowLoader(false);
            }, 800);
            return () => clearTimeout(timer);
        }
    }, [progress, active]);

    return (
        <AnimatePresence>
            {showLoader && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-pink-50 via-pink-100 to-pink-200 z-50"
                >
                    <motion.div
                        className="relative w-24 h-24"
                        animate={{
                            scale: [1, 1.05, 1],
                            rotate: 360
                        }}
                        transition={{
                            scale: {
                                repeat: Infinity,
                                duration: 2,
                                ease: "easeInOut"
                            },
                            rotate: {
                                repeat: Infinity,
                                duration: 8,
                                ease: "linear"
                            }
                        }}
                    >
                        {/* Outer glow effect */}
                        <div className="absolute inset-0 rounded-full bg-pink-200 opacity-30 blur-md"
                             style={{
                                 animation: "pulse 2s infinite ease-in-out",
                                 transform: `scale(${1.2 + (progress / 500)})`
                             }}
                        />

                        {/* Main progress circle */}
                        <svg
                            viewBox="0 0 100 100"
                            className="absolute inset-0 drop-shadow-lg"
                            style={{ filter: "drop-shadow(0px 0px 8px rgba(236, 72, 153, 0.5))" }}
                        >
                            {/* Background circle */}
                            <circle
                                cx="50" cy="50" r="45"
                                fill="none"
                                stroke="rgba(236, 72, 153, 0.2)"
                                strokeWidth="4"
                            />

                            {/* Progress circle */}
                            <circle
                                cx="50" cy="50" r="45"
                                fill="none"
                                stroke="rgba(236, 72, 153, 0.9)"
                                strokeWidth="6"
                                strokeLinecap="round"
                                strokeDasharray="283"
                                strokeDashoffset={283 - (283 * progress) / 100}
                                transform="rotate(-90 50 50)"
                                style={{
                                    transition: "stroke-dashoffset 0.3s ease"
                                }}
                            />

                            {/* Decorative elements */}
                            <motion.circle
                                cx="50" cy="5" r="3"
                                fill="#EC4899"
                                animate={{
                                    opacity: [0.5, 1, 0.5],
                                    scale: [0.8, 1.2, 0.8]
                                }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2,
                                    ease: "easeInOut"
                                }}
                            />

                            {/* Small decorative dots around the circle */}
                            {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                                <motion.circle
                                    key={i}
                                    cx={50 + 45 * Math.cos(angle * Math.PI / 180)}
                                    cy={50 + 45 * Math.sin(angle * Math.PI / 180)}
                                    r="2"
                                    fill="#EC4899"
                                    animate={{
                                        opacity: [0.3, 0.8, 0.3],
                                        scale: [0.8, 1.2, 0.8]
                                    }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 2,
                                        delay: i * 0.3,
                                        ease: "easeInOut"
                                    }}
                                />
                            ))}
                        </svg>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

// Pull String component
function PullString({ isNightMode, onClick, isTransitioning }: { isNightMode: boolean; onClick: () => void; isTransitioning: boolean }) {
    const [isPulled, setIsPulled] = useState(false);

    const handlePull = () => {
        if (isTransitioning) return; // Prevent pulling during transition

        setIsPulled(true);
        onClick();
        setTimeout(() => setIsPulled(false), 800);
    };

    return (
        <div
            className={`absolute right-12 top-0 z-10 cursor-pointer transform-gpu transition-transform duration-500 ease-in-out origin-top ${isTransitioning ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
            style={{
                transform: isPulled ? 'scaleY(0.85)' : 'scaleY(1)',
            }}
            onClick={handlePull}
        >
            <div className="w-1 h-24 bg-gradient-to-b from-pink-300 to-pink-400 rounded-full shadow-md" />
            <div className="w-4 h-4 rounded-full bg-pink-400 -mt-1 ml-[-6px] shadow-lg" />
        </div>
    );
}

// Separate component for animated elements to prevent re-renders
function AnimatedScene({ scrollY, isNightMode, transitionProgress }: { scrollY: number; isNightMode: boolean; transitionProgress: number }) {
    const controlsRef = useRef<ComponentRef<typeof OrbitControls>>(null);

    useFrame(() => {
        if (controlsRef.current) {
            controlsRef.current.autoRotateSpeed = scrollY > 0.05 ? 0.5 : 2.5;
        }
    });

    // Calculate star visibility based on transition
    const starVisibility = isNightMode
        ? Math.min(0.2 + transitionProgress * 0.8, 1)
        : Math.max(1 - transitionProgress * 1.2, 0);

    return (
        <>
            <HairClipModel scrollY={scrollY} />
            <OrbitControls
                ref={controlsRef}
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={2.5}
                rotateSpeed={0.5}
                maxPolarAngle={Math.PI / 1.8}
                minPolarAngle={Math.PI / 3}
            />
            {/* Apply visibility through material opacity in useFrame */}
            <Stars
                radius={100}
                depth={50}
                count={1500}
                factor={starVisibility * 6}
                saturation={starVisibility}
                fade
                speed={1.5}
            />
        </>
    );
}

// Main scene component with 3D content
function Scene({ scrollY, isNightMode, transitionProgress }: { scrollY: number; isNightMode: boolean; transitionProgress: number }) {
    return (
        <Canvas
            shadows
            dpr={[1, 1.5]}
            performance={{ min: 0.5 }}
            gl={{
                powerPreference: "high-performance",
                antialias: true,
                alpha: true,
                stencil: false
            }}
        >
            <Suspense fallback={null}>
                <ambientLight intensity={isNightMode ? 0.6 - transitionProgress * 0.2 : 0.6 + transitionProgress * 0.2} />
                <spotLight
                    position={[10, 10, 10]}
                    angle={0.15}
                    penumbra={1}
                    intensity={isNightMode ? 1.5 - transitionProgress * 0.5 : 1.5 + transitionProgress * 0.5}
                    castShadow
                    color={isNightMode
                        ? `rgb(${235 - transitionProgress * 30}, ${220 - transitionProgress * 40}, ${250 - transitionProgress * 20})`
                        : `rgb(${255}, ${200 + transitionProgress * 4}, ${100 + transitionProgress * 113})`
                    }
                />
                <pointLight
                    position={[-10, 5, -10]}
                    intensity={isNightMode ? 0.3 - transitionProgress * 0.1 : 0.3 + transitionProgress * 0.2}
                    color={isNightMode
                        ? `rgb(${180 - transitionProgress * 30}, ${180 - transitionProgress * 20}, ${250 - transitionProgress * 20})`
                        : `rgb(${196 + transitionProgress * 59}, ${241}, ${249})`
                    }
                />
                <pointLight
                    position={[0, -10, 0]}
                    intensity={0.2}
                    color="#fff"
                />
                <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={50} />
                <AnimatedScene
                    scrollY={scrollY}
                    isNightMode={isNightMode}
                    transitionProgress={transitionProgress}
                />
                <Environment preset={isNightMode ? "night" : "sunset"} />
            </Suspense>
        </Canvas>
    );
}

export default function HairClipScene({ scrollY = 0 }) {
    const [isNightMode, setIsNightMode] = useState(false);
    const [transitionProgress, setTransitionProgress] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [sceneLoaded, setSceneLoaded] = useState(false);
    const [isSceneReady, setIsSceneReady] = useState(false);

    // Mark scene as loaded when it's first rendered
    useEffect(() => {
        const timer = setTimeout(() => {
            setSceneLoaded(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    // Delay scene rendering to prevent layout shifts
    useEffect(() => {
        // Use a longer timeout to ensure the page has fully loaded
        const timer = setTimeout(() => {
            setIsSceneReady(true);
        }, 300);
        return () => clearTimeout(timer);
    }, []);

    // Smooth transition effect with easing
    React.useEffect(() => {
        let startTime: number;
        const duration = 3000; // 3 seconds for a more gradual transition
        setIsTransitioning(true);

        const easeInOutCubic = (t: number): number => {
            return t < 0.5
                ? 4 * t * t * t
                : 1 - Math.pow(-2 * t + 2, 3) / 2;
        };

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const rawProgress = Math.min(elapsed / duration, 1);

            // Apply easing function for smoother transition
            const easedProgress = easeInOutCubic(rawProgress);

            setTransitionProgress(isNightMode ? easedProgress : 1 - easedProgress);

            if (rawProgress < 1) {
                requestAnimationFrame(animate);
            } else {
                setIsTransitioning(false);
            }
        };

        requestAnimationFrame(animate);
    }, [isNightMode]);

    // Calculate sun/moon position based on transition
    const celestialBodyPosition = isNightMode
        ? `translate(-50%, ${100 - transitionProgress * 100}%)`
        : `translate(-50%, ${transitionProgress * 100}%)`;

    // Calculate sun/moon color and size
    const celestialBodyColor = isNightMode
        ? `rgba(230, 230, 250, ${transitionProgress})`
        : `rgba(255, 200, 100, ${1 - transitionProgress})`;

    const celestialBodySize = isNightMode
        ? `${30 + transitionProgress * 10}px`
        : `${50 - transitionProgress * 20}px`;

    // Calculate sky colors for more natural sunrise/sunset
    const skyTopColor = isNightMode
        ? `rgba(${20 + (1 - transitionProgress) * 235}, ${20 + (1 - transitionProgress) * 221}, ${50 + (1 - transitionProgress) * 192}, 1)`
        : `rgba(${135 + transitionProgress * 120}, ${206 + transitionProgress * 35}, ${235}, 1)`;

    const skyMiddleColor = isNightMode
        ? `rgba(${40 + (1 - transitionProgress) * 212}, ${10 + (1 - transitionProgress) * 221}, ${80 + (1 - transitionProgress) * 169}, 0.8)`
        : `rgba(${255}, ${158 + transitionProgress * 83}, ${173 + transitionProgress * 82}, 0.8)`;

    const skyBottomColor = isNightMode
        ? `rgba(${76}, ${29}, ${149}, ${0.5 + transitionProgress * 0.3})`
        : `rgba(${249}, ${168}, ${212}, ${0.7 - transitionProgress * 0.2})`;

    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Only show pull string after scene is loaded */}
            {sceneLoaded && (
                <PullString
                    isNightMode={isNightMode}
                    onClick={() => setIsNightMode(!isNightMode)}
                    isTransitioning={isTransitioning}
                />
            )}

            {/* Sun/Moon */}
            <div
                className="absolute left-1/2 z-0 rounded-full shadow-lg transition-all duration-3000"
                style={{
                    width: celestialBodySize,
                    height: celestialBodySize,
                    backgroundColor: celestialBodyColor,
                    transform: celestialBodyPosition,
                    boxShadow: isNightMode
                        ? `0 0 30px 5px rgba(230, 230, 250, ${transitionProgress * 0.7})`
                        : `0 0 50px 10px rgba(255, 200, 100, ${(1 - transitionProgress) * 0.7})`,
                }}
            />

            <div
                className="absolute inset-0 -z-10 h-screen w-full"
                style={{
                    background: `linear-gradient(to bottom,
                        ${skyTopColor} 0%,
                        ${skyMiddleColor} 50%,
                        ${skyBottomColor} 100%)`,
                    transition: 'all 3000ms cubic-bezier(0.4, 0, 0.2, 1)',
                }}
            >
                {/* Only render the 3D scene when ready to prevent layout shifts */}
                {isSceneReady && (
                    <Scene
                        scrollY={scrollY}
                        isNightMode={isNightMode}
                        transitionProgress={transitionProgress}
                    />
                )}
            </div>

            {/* Loader outside the Canvas to prevent layout shifts */}
            <Loader />
        </div>
    );
}
