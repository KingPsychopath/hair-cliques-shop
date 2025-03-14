import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import dynamic from 'next/dynamic';
import { useScrollPosition } from '@/lib/hooks/useScrollPosition';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Dynamically import the 3D scene with no SSR to prevent hydration issues
const HairClipScene = dynamic(() => import('@/components/3d/HairClipScene'), {
    ssr: false,
    loading: () => (
        <div className="absolute inset-0 bg-gradient-to-b from-white via-pink-50 to-purple-50" />
    )
});

export function Hero() {
    const scrollY = useScrollPosition();
    const [pulseEffect, setPulseEffect] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    // Create a pulsing effect for the scroll indicator
    useEffect(() => {
        const interval = setInterval(() => {
            setPulseEffect(prev => !prev);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    // Set a flag when component is mounted to ensure hydration is complete
    useEffect(() => {
        // Short timeout to ensure the component is fully mounted
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    const handleScrollClick = () => {
        // Find the next section after hero and scroll to it smoothly
        const nextSection = document.querySelector('.hero-section + *');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-pink-50 to-purple-50 hero-section">
            {/* 3D Model Animation - Only render when component is loaded */}
            <div className="absolute inset-0 z-0">
                {isLoaded && <HairClipScene scrollY={scrollY} />}
            </div>

            {/* Hero Content - Update z-index */}
            <div className="relative z-10 container pt-32 pb-36 md:pt-40 md:pb-48">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mx-auto max-w-2xl space-y-6 text-center"
                >
                    <div className="space-y-2">
                        <h2 className="text-lg font-medium text-pink-500">
                            The Future of Hair Styling
                        </h2>
                        <h1 className="text-4xl font-bold text-pink-600 md:text-6xl">
                            Hair Cliques
                            <span className="text-pink-400">2.0</span>
                        </h1>
                    </div>

                    <p className="mx-auto max-w-lg text-lg text-pink-700 md:text-xl">
                        Magnetic hair clips designed to hold hair in a low tension style. Works for
                        all hair textures and types.
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-1 gap-8 pt-16 md:grid-cols-3">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="rounded-xl bg-white/80 p-6 shadow-xs backdrop-blur-xs"
                        >
                            <h3 className="mb-2 font-bold text-pink-500">Magnetic Design</h3>
                            <p className="text-sm text-pink-700">
                                Securely holds your hair with powerful magnets, not clips or clamps
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="rounded-xl bg-white/80 p-6 shadow-xs backdrop-blur-xs"
                        >
                            <h3 className="mb-2 font-bold text-pink-500">Low Tension</h3>
                            <p className="text-sm text-pink-700">
                                Gentle on your hair with no pulling, breaking, or damage
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="rounded-xl bg-white/80 p-6 shadow-xs backdrop-blur-xs"
                        >
                            <h3 className="mb-2 font-bold text-pink-500">All Hair Types</h3>
                            <p className="text-sm text-pink-700">
                                Works beautifully on all hair textures and thicknesses
                            </p>
                        </motion.div>
                    </div>

                    <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
                        <Link href="/shop">
                            <Button className="rounded-full bg-pink-500 px-8 py-6 text-white hover:bg-pink-600">
                                Shop Now
                            </Button>
                        </Link>
                        <Link href="/about">
                            <Button
                                variant="outline"
                                className="rounded-full border-pink-300 px-8 py-6 text-pink-600 hover:bg-pink-100"
                            >
                                Learn More
                            </Button>
                        </Link>
                    </div>
                </motion.div>

                {/* Enhanced Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
                >
                    <motion.div
                        className="flex flex-col items-center cursor-pointer"
                        onClick={handleScrollClick}
                        role="button"
                        tabIndex={0}
                        onKeyPress={(e) => e.key === 'Enter' && handleScrollClick()}
                        animate={{
                            y: pulseEffect ? -4 : 0,
                        }}
                        transition={{
                            duration: 1.2,
                            ease: "easeInOut",
                        }}
                        whileHover={{ scale: 1.05 }}
                    >
                        {/* Glowing text */}
                        <p className="mb-3 text-base font-medium text-pink-600 drop-shadow-lg"
                           style={{
                               textShadow: "0 0 10px rgba(236, 72, 153, 0.5), 0 0 20px rgba(236, 72, 153, 0.3)"
                           }}>
                            Scroll to explore
                        </p>

                        {/* Smoother bouncing dots */}
                        <div className="flex flex-col items-center gap-1">
                            <motion.div
                                className="h-2 w-2 rounded-full bg-pink-400"
                                animate={{ y: [0, -6, 0] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 1.5,
                                    ease: "easeInOut",
                                    delay: 0,
                                    repeatDelay: 0.1
                                }}
                                style={{ boxShadow: "0 0 8px rgba(236, 72, 153, 0.6)" }}
                            />
                            <motion.div
                                className="h-2 w-2 rounded-full bg-pink-400"
                                animate={{ y: [0, -6, 0] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 1.5,
                                    ease: "easeInOut",
                                    delay: 0.2,
                                    repeatDelay: 0.1
                                }}
                                style={{ boxShadow: "0 0 8px rgba(236, 72, 153, 0.6)" }}
                            />
                            <motion.div
                                className="h-2 w-2 rounded-full bg-pink-400"
                                animate={{ y: [0, -6, 0] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 1.5,
                                    ease: "easeInOut",
                                    delay: 0.4,
                                    repeatDelay: 0.1
                                }}
                                style={{ boxShadow: "0 0 8px rgba(236, 72, 153, 0.6)" }}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
