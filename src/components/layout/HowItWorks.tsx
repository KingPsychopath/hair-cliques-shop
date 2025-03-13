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
        <section className="bg-white py-20">
            <div className="container">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-pink-600">How Hair Cliques Work</h2>
                    <p className="mx-auto max-w-2xl text-pink-700">
                        Our innovative magnetic design makes styling your hair effortless,
                        comfortable, and damage-free. Here's how easy it is:
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
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
                                <div className="relative mx-auto mb-6 aspect-square max-w-[200px] overflow-hidden rounded-full border-4 border-pink-200">
                                    <img
                                        src={step.image}
                                        alt={step.title}
                                        className="h-full w-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-pink-600/40 to-transparent"></div>
                                    <div className="absolute top-1/2 left-1/2 z-10 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-pink-500 text-2xl font-bold text-white">
                                        {step.id}
                                    </div>
                                </div>

                                {/* Connector line between steps */}
                                {index < steps.length - 1 && (
                                    <div className="absolute top-1/2 left-[calc(100%-8px)] hidden h-0.5 w-16 bg-pink-200 md:block">
                                        <div className="absolute top-1/2 right-0 h-2 w-2 translate-y-[-50%] transform rounded-full bg-pink-400"></div>
                                    </div>
                                )}
                            </div>

                            <h3 className="mb-2 text-xl font-bold text-pink-600">{step.title}</h3>
                            <p className="text-sm text-pink-700">{step.description}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mx-auto mt-16 max-w-3xl rounded-2xl bg-pink-50 p-8">
                    <h3 className="mb-4 text-center text-xl font-bold text-pink-600">
                        Why Magnetic Hair Clips?
                    </h3>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <div className="mt-0.5 mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-pink-400 text-xs font-bold text-white">
                                ✓
                            </div>
                            <p className="text-pink-700">
                                <span className="font-semibold">No Pulling:</span> Unlike
                                traditional clips that grip and pull hair, our magnetic design
                                distributes tension evenly.
                            </p>
                        </li>
                        <li className="flex items-start">
                            <div className="mt-0.5 mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-pink-400 text-xs font-bold text-white">
                                ✓
                            </div>
                            <p className="text-pink-700">
                                <span className="font-semibold">Less Breakage:</span> The gentle
                                hold prevents hair breakage and split ends common with conventional
                                clips.
                            </p>
                        </li>
                        <li className="flex items-start">
                            <div className="mt-0.5 mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-pink-400 text-xs font-bold text-white">
                                ✓
                            </div>
                            <p className="text-pink-700">
                                <span className="font-semibold">All Hair Types:</span> Works for all
                                hair textures from straight and fine to thick and curly.
                            </p>
                        </li>
                        <li className="flex items-start">
                            <div className="mt-0.5 mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-pink-400 text-xs font-bold text-white">
                                ✓
                            </div>
                            <p className="text-pink-700">
                                <span className="font-semibold">Stylish Designs:</span> Beautiful
                                shapes and colors to complement any outfit or occasion.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
