'use client';

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="grow">
                {/* Hero section */}
                <section className="bg-linear-to-r from-pink-100 via-pink-200 to-purple-100 py-16 md:py-24">
                    <div className="container">
                        <div className="mx-auto max-w-3xl text-center">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="mb-4 text-4xl font-bold text-pink-600 md:text-5xl"
                            >
                                Our Story
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="mb-6 text-lg text-pink-700"
                            >
                                Revolutionizing hair accessories with magnetic technology
                            </motion.p>
                        </div>
                    </div>
                </section>

                {/* Our mission */}
                <section className="bg-white py-16">
                    <div className="container">
                        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <div className="relative aspect-square overflow-hidden rounded-xl shadow-lg">
                                    <img
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&auto=format&fit=crop"
                                        alt="Woman with curly hair"
                                        className="h-full w-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-pink-600/30 to-transparent"></div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                <h2 className="text-3xl font-bold text-pink-600">Our Mission</h2>
                                <p className="text-lg text-pink-700">
                                    At Hair Cliques, we believe that hair accessories should be
                                    gentle, versatile, and suitable for all hair types. Our
                                    innovative magnetic clips are designed to provide secure hold
                                    without causing damage or tension.
                                </p>
                                <p className="text-pink-700">
                                    Founded in 2022, Hair Cliques was born from a personal struggle
                                    with traditional hair clips that would either break hair, cause
                                    headaches, or simply not work with thicker hair textures. Our
                                    founder, Jessica Chen, spent two years developing our
                                    patent-pending magnetic technology.
                                </p>
                                <div className="pt-4">
                                    <div className="flex gap-6">
                                        <div className="text-center">
                                            <p className="text-4xl font-bold text-pink-500">30k+</p>
                                            <p className="text-pink-600">Happy Customers</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-4xl font-bold text-pink-500">12</p>
                                            <p className="text-pink-600">Design Options</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-4xl font-bold text-pink-500">100%</p>
                                            <p className="text-pink-600">Satisfaction</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Why Hair Cliques */}
                <section className="bg-pink-50 py-16">
                    <div className="container">
                        <div className="mb-12 text-center">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="mb-4 text-3xl font-bold text-pink-600"
                            >
                                Why Hair Cliques?
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="mx-auto max-w-2xl text-lg text-pink-700"
                            >
                                Our magnetic hair clips are designed with your hair health and style
                                in mind.
                            </motion.p>
                        </div>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="rounded-xl bg-white p-6 shadow-xs"
                            >
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-pink-100">
                                    <svg
                                        className="h-6 w-6 text-pink-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="mb-2 text-xl font-medium text-pink-600">
                                    Gentle on Hair
                                </h3>
                                <p className="text-pink-700">
                                    Our magnetic technology eliminates the need for tension-causing
                                    clips and clamps, reducing breakage and damage.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="rounded-xl bg-white p-6 shadow-xs"
                            >
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-pink-100">
                                    <svg
                                        className="h-6 w-6 text-pink-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                                        />
                                    </svg>
                                </div>
                                <h3 className="mb-2 text-xl font-medium text-pink-600">
                                    For All Hair Types
                                </h3>
                                <p className="text-pink-700">
                                    Whether you have fine, straight hair or thick, curly locks, our
                                    clips are designed to work with all hair textures and
                                    thicknesses.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="rounded-xl bg-white p-6 shadow-xs"
                            >
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-pink-100">
                                    <svg
                                        className="h-6 w-6 text-pink-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="mb-2 text-xl font-medium text-pink-600">
                                    Sustainably Made
                                </h3>
                                <p className="text-pink-700">
                                    Our clips are made with eco-friendly materials and designed to
                                    last, reducing the need for frequent replacements.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Our Team */}
                <section className="bg-white py-16">
                    <div className="container">
                        <div className="mb-12 text-center">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="mb-4 text-3xl font-bold text-pink-600"
                            >
                                Meet Our Team
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="mx-auto max-w-2xl text-lg text-pink-700"
                            >
                                The passionate minds behind Hair Cliques
                            </motion.p>
                        </div>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="relative mx-auto mb-4 h-40 w-40 overflow-hidden rounded-full">
                                    <img
                                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&auto=format&fit=crop"
                                        alt="Jessica Chen"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-medium text-pink-600">Jessica Chen</h3>
                                <p className="text-pink-700">Founder & CEO</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="mx-auto mb-4 h-40 w-40 overflow-hidden rounded-full">
                                    <img
                                        src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&h=200&auto=format&fit=crop"
                                        alt="Maya Rodriguez"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-medium text-pink-600">
                                    Maya Rodriguez
                                </h3>
                                <p className="text-pink-700">Lead Designer</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="mx-auto mb-4 h-40 w-40 overflow-hidden rounded-full">
                                    <img
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop"
                                        alt="David Kim"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-medium text-pink-600">David Kim</h3>
                                <p className="text-pink-700">Product Engineer</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="mx-auto mb-4 h-40 w-40 overflow-hidden rounded-full">
                                    <img
                                        src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=200&h=200&auto=format&fit=crop"
                                        alt="Sarah Johnson"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-medium text-pink-600">Sarah Johnson</h3>
                                <p className="text-pink-700">Marketing Director</p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className="bg-linear-to-r from-pink-100 to-purple-100 py-16">
                    <div className="container">
                        <div className="mb-12 text-center">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="mb-4 text-3xl font-bold text-pink-600"
                            >
                                Our Values
                            </motion.h2>
                        </div>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="rounded-xl bg-white p-6 shadow-xs"
                            >
                                <h3 className="mb-2 text-xl font-medium text-pink-600">
                                    Innovation
                                </h3>
                                <p className="text-pink-700">
                                    We're constantly pushing the boundaries of what's possible in
                                    hair accessories, seeking new solutions to common problems.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="rounded-xl bg-white p-6 shadow-xs"
                            >
                                <h3 className="mb-2 text-xl font-medium text-pink-600">
                                    Inclusivity
                                </h3>
                                <p className="text-pink-700">
                                    We design our products to work for everyone, regardless of hair
                                    type, texture, or thickness.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="rounded-xl bg-white p-6 shadow-xs"
                            >
                                <h3 className="mb-2 text-xl font-medium text-pink-600">
                                    Sustainability
                                </h3>
                                <p className="text-pink-700">
                                    We're committed to reducing our environmental impact through
                                    eco-friendly materials and practices.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
