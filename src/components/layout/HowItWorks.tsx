import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: 1,
    title: 'Form your hairstyle',
    description: 'Create the hairstyle you want - ponytail, bun, or half-up style.',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Position the clip halves',
    description: 'Place one half of the clip above your hair and the other half below.',
    image: 'https://i.kickstarter.com/assets/047/910/042/a24f91ace19a0a8891f9dba42d9eee9d_original.jpeg',
  },
  {
    id: 3,
    title: 'Let the magnets connect',
    description: 'The powerful magnets will attract and securely hold your hair in place.',
    image: 'https://i.kickstarter.com/assets/047/931/634/41303b8f4cb52ca1b9f9a2dcc1a592ff_original.jpg',
  },
  {
    id: 4,
    title: 'Enjoy your style all day',
    description: 'Your hair stays perfectly styled without tension or damage.',
    image: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=400&auto=format&fit=crop',
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-pink-600 mb-4">How Hair Cliques Work</h2>
          <p className="text-pink-700 max-w-2xl mx-auto">
            Our innovative magnetic design makes styling your hair effortless,
            comfortable, and damage-free. Here's how easy it is:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative">
                <div className="aspect-square rounded-full overflow-hidden mb-6 mx-auto border-4 border-pink-200 relative max-w-[200px]">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-600/40 to-transparent"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-pink-500 text-white flex items-center justify-center text-2xl font-bold z-10">
                    {step.id}
                  </div>
                </div>

                {/* Connector line between steps */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-[calc(100%-8px)] w-16 h-0.5 bg-pink-200">
                    <div className="absolute right-0 top-1/2 transform translate-y-[-50%] w-2 h-2 bg-pink-400 rounded-full"></div>
                  </div>
                )}
              </div>

              <h3 className="text-xl font-bold text-pink-600 mb-2">{step.title}</h3>
              <p className="text-pink-700 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-pink-50 rounded-2xl max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-pink-600 mb-4 text-center">Why Magnetic Hair Clips?</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="w-5 h-5 rounded-full bg-pink-400 flex items-center justify-center text-white font-bold text-xs mt-0.5 mr-3">✓</div>
              <p className="text-pink-700"><span className="font-semibold">No Pulling:</span> Unlike traditional clips that grip and pull hair, our magnetic design distributes tension evenly.</p>
            </li>
            <li className="flex items-start">
              <div className="w-5 h-5 rounded-full bg-pink-400 flex items-center justify-center text-white font-bold text-xs mt-0.5 mr-3">✓</div>
              <p className="text-pink-700"><span className="font-semibold">Less Breakage:</span> The gentle hold prevents hair breakage and split ends common with conventional clips.</p>
            </li>
            <li className="flex items-start">
              <div className="w-5 h-5 rounded-full bg-pink-400 flex items-center justify-center text-white font-bold text-xs mt-0.5 mr-3">✓</div>
              <p className="text-pink-700"><span className="font-semibold">All Hair Types:</span> Works for all hair textures from straight and fine to thick and curly.</p>
            </li>
            <li className="flex items-start">
              <div className="w-5 h-5 rounded-full bg-pink-400 flex items-center justify-center text-white font-bold text-xs mt-0.5 mr-3">✓</div>
              <p className="text-pink-700"><span className="font-semibold">Stylish Designs:</span> Beautiful shapes and colors to complement any outfit or occasion.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
