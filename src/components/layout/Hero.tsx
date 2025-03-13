import React from 'react';
import { Button } from '@/components/ui/button';
import HairClipScene from '@/components/3d/HairClipScene';
import { useScrollPosition } from '@/lib/hooks/useScrollPosition';
import { motion } from 'framer-motion';

export function Hero() {
    const scrollY = useScrollPosition();

    return (
        <div className="relative min-h-screen overflow-hidden bg-linear-to-b from-white via-pink-50 to-purple-50">
            {/* 3D Model Animation */}
            <HairClipScene scrollY={scrollY} />

            {/* Hero Content */}
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

                    <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row">
                        <Button className="rounded-full bg-pink-500 px-8 py-6 text-white hover:bg-pink-600">
                            Shop Now
                        </Button>
                        <Button
                            variant="outline"
                            className="rounded-full border-pink-300 px-8 py-6 text-pink-600 hover:bg-pink-100"
                        >
                            Learn More
                        </Button>
                    </div>

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
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
                >
                    <div className="flex flex-col items-center text-pink-400">
                        <p className="mb-2 text-sm">Scroll to explore</p>
                        <div className="h-8 w-0.5 animate-pulse bg-pink-300"></div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
