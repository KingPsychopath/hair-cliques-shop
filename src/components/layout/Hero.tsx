import React from 'react';
import { Button } from '@/components/ui/button';
import HairClipScene from '@/components/3d/HairClipScene';
import { useScrollPosition } from '@/lib/hooks/useScrollPosition';
import { motion } from 'framer-motion';

export function Hero() {
  const scrollY = useScrollPosition();

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-pink-50 to-purple-50">
      {/* 3D Model Animation */}
      <HairClipScene scrollY={scrollY} />

      {/* Hero Content */}
      <div className="container relative z-10 pt-32 pb-36 md:pt-40 md:pb-48">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl space-y-6 text-center mx-auto"
        >
          <div className="space-y-2">
            <h2 className="text-lg font-medium text-pink-500">The Future of Hair Styling</h2>
            <h1 className="text-4xl md:text-6xl font-bold text-pink-600">
              Hair Cliques
              <span className="text-pink-400">2.0</span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-pink-700 mx-auto max-w-lg">
            Magnetic hair clips designed to hold hair in a low tension style.
            Works for all hair textures and types.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-8 py-6">
              Shop Now
            </Button>
            <Button variant="outline" className="border-pink-300 text-pink-600 hover:bg-pink-100 rounded-full px-8 py-6">
              Learn More
            </Button>
          </div>

          {/* Features */}
          <div className="pt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm"
            >
              <h3 className="font-bold text-pink-500 mb-2">Magnetic Design</h3>
              <p className="text-pink-700 text-sm">
                Securely holds your hair with powerful magnets, not clips or clamps
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm"
            >
              <h3 className="font-bold text-pink-500 mb-2">Low Tension</h3>
              <p className="text-pink-700 text-sm">
                Gentle on your hair with no pulling, breaking, or damage
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm"
            >
              <h3 className="font-bold text-pink-500 mb-2">All Hair Types</h3>
              <p className="text-pink-700 text-sm">
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
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center text-pink-400">
            <p className="text-sm mb-2">Scroll to explore</p>
            <div className="w-0.5 h-8 bg-pink-300 animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
