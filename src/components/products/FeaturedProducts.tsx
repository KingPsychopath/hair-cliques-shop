import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart } from 'lucide-react';

const products = [
    {
        id: 1,
        name: 'Star Hair Clique - Aqua Blue',
        price: '$19.99',
        image: 'https://i.kickstarter.com/assets/047/931/634/41303b8f4cb52ca1b9f9a2dcc1a592ff_original.jpg',
        colors: ['#5CE1E6', '#FF80AB', '#FFD700', '#9C27B0'],
        featured: true,
        slug: 'star-hair-clique',
    },
    {
        id: 2,
        name: 'Bow Hair Clique - Pink',
        price: '$18.99',
        image: 'https://i.kickstarter.com/assets/047/910/042/a24f91ace19a0a8891f9dba42d9eee9d_original.jpeg',
        colors: ['#FF80AB', '#5CE1E6', '#FFD700', '#9C27B0'],
        featured: true,
        slug: 'bow-hair-clique',
    },
    {
        id: 3,
        name: 'Heart Hair Clique - Purple',
        price: '$20.99',
        image: 'https://i.kickstarter.com/assets/047/931/634/41303b8f4cb52ca1b9f9a2dcc1a592ff_original.jpg',
        colors: ['#9C27B0', '#FF80AB', '#5CE1E6', '#FFD700'],
        featured: true,
        slug: 'heart-hair-clique',
    },
    {
        id: 4,
        name: 'Round Hair Clique - Gold',
        price: '$17.99',
        image: 'https://i.kickstarter.com/assets/047/910/042/a24f91ace19a0a8891f9dba42d9eee9d_original.jpeg',
        colors: ['#FFD700', '#9C27B0', '#FF80AB', '#5CE1E6'],
        featured: true,
        slug: 'round-hair-clique',
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
};

export function FeaturedProducts() {
    return (
        <section className="bg-white py-20">
            <div className="container">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-pink-600">Our Bestsellers</h2>
                    <p className="mx-auto max-w-2xl text-pink-700">
                        Discover our most loved hair cliques, designed to make you look and feel
                        amazing. Perfect for all hair types and styles.
                    </p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {products.map(product => (
                        <motion.div
                            key={product.id}
                            variants={item}
                            className="group relative overflow-hidden rounded-xl bg-pink-50 shadow-xs transition-shadow hover:shadow-md"
                        >
                            <Link href={`/products/${product.slug}`} className="block">
                                <div className="relative aspect-square overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-pink-600/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="absolute top-2 right-2 rounded-full bg-white/80 text-pink-500 hover:bg-white hover:text-pink-600"
                                    >
                                        <Heart className="h-4 w-4" />
                                        <span className="sr-only">Add to wishlist</span>
                                    </Button>
                                </div>
                            </Link>

                            <div className="p-4">
                                <Link href={`/products/${product.slug}`} className="block">
                                    <h3 className="mb-1 font-medium text-pink-700 transition-colors hover:text-pink-600">
                                        {product.name}
                                    </h3>
                                </Link>
                                <div className="flex items-center justify-between">
                                    <p className="font-bold text-pink-600">{product.price}</p>

                                    <div className="flex items-center gap-2">
                                        {product.colors.map((color, i) => (
                                            <div
                                                key={i}
                                                className="h-3 w-3 rounded-full border border-white"
                                                style={{ backgroundColor: color }}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <Button className="w-full gap-2 bg-pink-500 text-white hover:bg-pink-600">
                                        <ShoppingCart className="h-4 w-4" />
                                        Add to Cart
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-12 text-center">
                    <Link href="/shop">
                        <Button
                            variant="outline"
                            className="border-pink-300 px-8 text-pink-600 hover:bg-pink-100"
                        >
                            View All Products
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
