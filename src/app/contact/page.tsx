'use client';

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
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
                                Get in Touch
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="mb-6 text-lg text-pink-700"
                            >
                                We'd love to hear from you! Reach out with any questions, feedback,
                                or wholesale inquiries.
                            </motion.p>
                        </div>
                    </div>
                </section>

                {/* Contact section */}
                <section className="bg-white py-16">
                    <div className="container">
                        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                            {/* Contact form */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="rounded-xl bg-white p-8 shadow-xs"
                            >
                                <h2 className="mb-6 text-2xl font-bold text-pink-600">
                                    Send Us a Message
                                </h2>

                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                        <div className="space-y-2">
                                            <Label htmlFor="first-name" className="text-pink-700">
                                                First Name
                                            </Label>
                                            <Input
                                                id="first-name"
                                                placeholder="Enter your first name"
                                                className="border-pink-200 focus:border-pink-400 focus:ring-pink-400"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="last-name" className="text-pink-700">
                                                Last Name
                                            </Label>
                                            <Input
                                                id="last-name"
                                                placeholder="Enter your last name"
                                                className="border-pink-200 focus:border-pink-400 focus:ring-pink-400"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-pink-700">
                                            Email Address
                                        </Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="Enter your email address"
                                            className="border-pink-200 focus:border-pink-400 focus:ring-pink-400"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="subject" className="text-pink-700">
                                            Subject
                                        </Label>
                                        <Input
                                            id="subject"
                                            placeholder="What is your message about?"
                                            className="border-pink-200 focus:border-pink-400 focus:ring-pink-400"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message" className="text-pink-700">
                                            Message
                                        </Label>
                                        <textarea
                                            id="message"
                                            rows={5}
                                            placeholder="Please type your message here..."
                                            className="min-h-[120px] w-full rounded-md border-pink-200 p-3 focus:border-pink-400 focus:ring-pink-400"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full bg-pink-500 text-white hover:bg-pink-600"
                                    >
                                        Send Message
                                    </Button>
                                </form>
                            </motion.div>

                            {/* Contact info */}
                            <div className="space-y-8">
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <h2 className="mb-6 text-2xl font-bold text-pink-600">
                                        Contact Information
                                    </h2>

                                    <div className="space-y-6">
                                        <div className="flex items-start space-x-4">
                                            <div className="rounded-full bg-pink-100 p-3 text-pink-500">
                                                <MapPin className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <h3 className="font-medium text-pink-600">
                                                    Our Location
                                                </h3>
                                                <address className="mt-1 text-pink-700 not-italic">
                                                    123 Hair Clip Avenue
                                                    <br />
                                                    Beauty District
                                                    <br />
                                                    San Francisco, CA 94105
                                                </address>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4">
                                            <div className="rounded-full bg-pink-100 p-3 text-pink-500">
                                                <Phone className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <h3 className="font-medium text-pink-600">
                                                    Phone Number
                                                </h3>
                                                <p className="mt-1 text-pink-700">
                                                    <a
                                                        href="tel:+1-800-hair-clip"
                                                        className="hover:underline"
                                                    >
                                                        +1 (800) HAIR-CLIP
                                                    </a>
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4">
                                            <div className="rounded-full bg-pink-100 p-3 text-pink-500">
                                                <Mail className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <h3 className="font-medium text-pink-600">
                                                    Email Address
                                                </h3>
                                                <p className="mt-1 text-pink-700">
                                                    <a
                                                        href="mailto:hello@haircliques.com"
                                                        className="hover:underline"
                                                    >
                                                        hello@haircliques.com
                                                    </a>
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-4">
                                            <div className="rounded-full bg-pink-100 p-3 text-pink-500">
                                                <Clock className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <h3 className="font-medium text-pink-600">
                                                    Business Hours
                                                </h3>
                                                <p className="mt-1 text-pink-700">
                                                    Monday - Friday: 9AM - 5PM PST
                                                    <br />
                                                    Saturday: 10AM - 3PM PST
                                                    <br />
                                                    Sunday: Closed
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="mt-8 rounded-xl bg-pink-50 p-6"
                                >
                                    <h3 className="mb-3 text-xl font-medium text-pink-600">
                                        Wholesale Inquiries
                                    </h3>
                                    <p className="mb-4 text-pink-700">
                                        Interested in carrying Hair Cliques in your salon or store?
                                        We offer competitive wholesale pricing and custom display
                                        options.
                                    </p>
                                    <Button className="bg-pink-500 text-white hover:bg-pink-600">
                                        Contact Wholesale Team
                                    </Button>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
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
                                Frequently Asked Questions
                            </motion.h2>
                        </div>

                        <div className="mx-auto max-w-3xl">
                            <div className="space-y-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    viewport={{ once: true }}
                                    className="rounded-xl bg-white p-6 shadow-xs"
                                >
                                    <h3 className="mb-2 text-lg font-medium text-pink-600">
                                        How long does shipping take?
                                    </h3>
                                    <p className="text-pink-700">
                                        We typically process orders within 1-2 business days.
                                        Domestic shipping takes 3-5 business days, while
                                        international shipping can take 7-14 business days depending
                                        on the destination.
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="rounded-xl bg-white p-6 shadow-xs"
                                >
                                    <h3 className="mb-2 text-lg font-medium text-pink-600">
                                        What is your return policy?
                                    </h3>
                                    <p className="text-pink-700">
                                        We offer a 30-day satisfaction guarantee. If you're not
                                        completely happy with your purchase, you can return it for a
                                        full refund or exchange within 30 days of delivery.
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    viewport={{ once: true }}
                                    className="rounded-xl bg-white p-6 shadow-xs"
                                >
                                    <h3 className="mb-2 text-lg font-medium text-pink-600">
                                        Are Hair Cliques safe for children?
                                    </h3>
                                    <p className="text-pink-700">
                                        Our clips are designed to be safe for ages 8 and up with
                                        adult supervision. The magnets are securely encased to
                                        prevent detachment. For children under 8, we recommend our
                                        Kids Collection which features smaller clips with additional
                                        safety features.
                                    </p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    viewport={{ once: true }}
                                    className="rounded-xl bg-white p-6 shadow-xs"
                                >
                                    <h3 className="mb-2 text-lg font-medium text-pink-600">
                                        How do I care for my Hair Cliques?
                                    </h3>
                                    <p className="text-pink-700">
                                        To keep your clips looking new, simply wipe them with a
                                        soft, damp cloth. Avoid submerging them in water or using
                                        harsh chemicals, as this may damage the magnets or
                                        decorative elements.
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
