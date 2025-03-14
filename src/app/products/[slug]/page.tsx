'use client';

import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Heart, Star, ChevronRight, Share2, Truck, RotateCcw } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Product database
const products = {
    'star-hair-clique': {
        id: 1,
        name: 'Star Hair Clique',
        description:
            'Our star-shaped magnetic hair clip provides excellent hold while adding a touch of celestial elegance to your hairstyle. Perfect for all hair types and textures.',
        price: 19.99,
        images: [
            'https://i.kickstarter.com/assets/047/956/098/41303b8f4cb52ca1b9f9a2dcc1a592ff_original.jpg?fit=scale-down&origin=ugc&q=92&v=1737832349&width=680&sig=kifSLLI%2FhscJaG75qnHtD2dgxHZzE%2FHxafbsf1%2BvNhc%3D',
            'https://i.kickstarter.com/assets/047/956/089/c30fce263e41565dde59c83db9f1d4b7_original.jpeg?fit=scale-down&origin=ugc&q=92&v=1737832284&width=680&sig=7xSQKXvZW9R%2BzuRYbjchtwOeuDZT3JQUuMF3aTQyQnI%3D',
        ],
        colors: [
            { name: 'Aqua Blue', value: '#5CE1E6' },
            { name: 'Pink', value: '#FF80AB' },
            { name: 'Gold', value: '#FFD700' },
            { name: 'Purple', value: '#9C27B0' },
        ],
        features: [
            'Gentle magnetic closure - no pulling or breaking',
            'Star design adds a unique touch to any hairstyle',
            'Works on all hair types including thick and curly hair',
            'Secure hold without damage',
            'Water-resistant finish',
        ],
        specs: {
            dimensions: '2.5 inches diameter',
            weight: '0.8 oz',
            materials: 'Eco-friendly plastic, neodymium magnets',
            warranty: '1-year manufacturer warranty',
        },
        reviews: {
            average: 4.8,
            count: 124,
        },
        category: 'Stars',
        related: ['bow-hair-clique', 'heart-hair-clique'],
        inStock: true,
        bestseller: true,
    },
    'bow-hair-clique': {
        id: 2,
        name: 'Bow Hair Clique',
        description:
            'Add a touch of feminine charm to your hairstyle with our bow-shaped magnetic hair clip. The powerful magnetic closure ensures your style stays in place all day without causing damage.',
        price: 18.99,
        images: [
            'https://i.kickstarter.com/assets/047/931/840/37c2df67a3c683473664a303696e80cd_original.gif?fit=scale-down&origin=ugc&q=92&v=1737638809&width=680&sig=%2BpSgGJYDK5SBixZgM3HdYUhE62vKelLi5R6HoET5ljo%3D',
            'https://i.kickstarter.com/assets/047/931/634/41303b8f4cb52ca1b9f9a2dcc1a592ff_original.jpg',
        ],
        colors: [
            { name: 'Pink', value: '#FF80AB' },
            { name: 'Aqua Blue', value: '#5CE1E6' },
            { name: 'Gold', value: '#FFD700' },
            { name: 'Purple', value: '#9C27B0' },
        ],
        features: [
            'Gentle magnetic closure - no pulling or breaking',
            'Elegant bow design for a feminine touch',
            'Works on all hair types including fine and straight hair',
            'Secure hold without damage',
            'Lightweight and comfortable for all-day wear',
        ],
        specs: {
            dimensions: '2.2 inches wide, 1.5 inches tall',
            weight: '0.7 oz',
            materials: 'Eco-friendly plastic, neodymium magnets',
            warranty: '1-year manufacturer warranty',
        },
        reviews: {
            average: 4.7,
            count: 98,
        },
        category: 'Bows',
        related: ['star-hair-clique', 'heart-hair-clique'],
        inStock: true,
        new: true,
    },
    'heart-hair-clique': {
        id: 3,
        name: 'Heart Hair Clique',
        description:
            'Express your love for great hair with our heart-shaped magnetic hair clip. The innovative magnetic design provides a secure hold without pulling or damaging your beautiful locks.',
        price: 20.99,
        images: [
            '/heartclip.jpg',
            '/heartclip2.jpg',
        ],
        colors: [
            { name: 'Purple', value: '#9C27B0' },
            { name: 'Pink', value: '#FF80AB' },
            { name: 'Aqua Blue', value: '#5CE1E6' },
            { name: 'Gold', value: '#FFD700' },
        ],
        features: [
            'Gentle magnetic closure - no pulling or breaking',
            'Adorable heart design adds a romantic touch',
            'Works on all hair types including thick and curly hair',
            'Secure hold without damage',
            'Premium finish that resists fading',
        ],
        specs: {
            dimensions: '2.3 inches wide, 2 inches tall',
            weight: '0.9 oz',
            materials: 'Eco-friendly plastic, neodymium magnets',
            warranty: '1-year manufacturer warranty',
        },
        reviews: {
            average: 4.9,
            count: 156,
        },
        category: 'Hearts',
        related: ['star-hair-clique', 'bow-hair-clique'],
        inStock: true,
        bestseller: true,
    },
};

// Star rating component
const StarRating = ({ rating }: { rating: number }) => {
    return (
        <div className="flex items-center">
            {[1, 2, 3, 4, 5].map(star => (
                <Star
                    key={star}
                    className={`h-4 w-4 ${
                        star <= Math.round(rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                    }`}
                />
            ))}
        </div>
    );
};

export default function ProductPage({ params }: { params: { slug: string } }) {
    const { slug } = params;

    // Check if the product exists
    if (!products[slug as keyof typeof products]) {
        return (
            <div className="flex min-h-screen flex-col">
                <Header />
                <main className="flex grow items-center justify-center">
                    <div className="text-center">
                        <h1 className="mb-4 text-3xl font-bold text-pink-600">Product Not Found</h1>
                        <p className="mb-6 text-pink-700">
                            Sorry, we couldn't find the product you're looking for.
                        </p>
                        <Link href="/shop">
                            <Button className="bg-pink-500 text-white hover:bg-pink-600">
                                Return to Shop
                            </Button>
                        </Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    // Get the product
    const product = products[slug as keyof typeof products];

    // State for selected color and quantity
    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [quantity, setQuantity] = useState(1);
    const [activeImage, setActiveImage] = useState(0);

    // Format price
    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(product.price);

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="grow">
                {/* Breadcrumbs */}
                <div className="bg-pink-50 py-4">
                    <div className="container">
                        <div className="flex items-center text-sm">
                            <Link href="/" className="text-pink-500 hover:text-pink-600">
                                Home
                            </Link>
                            <ChevronRight className="mx-2 h-3 w-3 text-pink-300" />
                            <Link href="/shop" className="text-pink-500 hover:text-pink-600">
                                Shop
                            </Link>
                            <ChevronRight className="mx-2 h-3 w-3 text-pink-300" />
                            <Link
                                href={`/shop/${product.category.toLowerCase()}`}
                                className="text-pink-500 hover:text-pink-600"
                            >
                                {product.category}
                            </Link>
                            <ChevronRight className="mx-2 h-3 w-3 text-pink-300" />
                            <span className="text-pink-700">{product.name}</span>
                        </div>
                    </div>
                </div>

                {/* Product detail */}
                <section className="py-12">
                    <div className="container">
                        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                            {/* Product images */}
                            <div className="space-y-4">
                                <div className="relative aspect-square overflow-hidden rounded-xl border border-pink-100">
                                    <img
                                        src={product.images[activeImage]}
                                        alt={product.name}
                                        className="h-full w-full object-cover"
                                    />
                                    {product.bestseller && (
                                        <div className="absolute top-4 left-4 rounded bg-pink-500 px-2 py-1 text-xs font-medium text-white">
                                            Bestseller
                                        </div>
                                    )}
                                    {product.new && (
                                        <div className="absolute top-4 left-4 rounded bg-blue-500 px-2 py-1 text-xs font-medium text-white">
                                            New
                                        </div>
                                    )}
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="absolute top-4 right-4 rounded-full bg-white/80 text-pink-500 hover:bg-white hover:text-pink-600"
                                    >
                                        <Heart className="h-4 w-4" />
                                        <span className="sr-only">Add to wishlist</span>
                                    </Button>
                                </div>

                                <div className="flex gap-2">
                                    {product.images.map((image, index) => (
                                        <button
                                            key={index}
                                            className={`aspect-square w-16 overflow-hidden rounded-md border ${
                                                activeImage === index
                                                    ? 'border-pink-500'
                                                    : 'border-gray-200'
                                            }`}
                                            onClick={() => setActiveImage(index)}
                                        >
                                            <img
                                                src={image}
                                                alt={`${product.name} - view ${index + 1}`}
                                                className="h-full w-full object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Product info */}
                            <div className="space-y-6">
                                <div>
                                    <h1 className="text-3xl font-bold text-pink-600">
                                        {product.name}
                                    </h1>
                                    <div className="mt-2 flex items-center gap-4">
                                        <div className="flex items-center gap-1">
                                            <StarRating rating={product.reviews.average} />
                                            <span className="text-sm text-pink-700">
                                                {product.reviews.average}
                                            </span>
                                        </div>
                                        <span className="text-sm text-pink-700">
                                            {product.reviews.count} reviews
                                        </span>
                                    </div>
                                </div>

                                <p className="text-2xl font-bold text-pink-600">{formattedPrice}</p>

                                <div className="prose prose-pink max-w-none">
                                    <p>{product.description}</p>
                                </div>

                                {/* Color selection */}
                                <div>
                                    <h3 className="mb-3 text-sm font-medium text-pink-700">
                                        Color
                                    </h3>
                                    <div className="flex gap-2">
                                        {product.colors.map(color => (
                                            <button
                                                key={color.name}
                                                type="button"
                                                className={`flex h-9 w-9 items-center justify-center rounded-full ${
                                                    selectedColor.name === color.name
                                                        ? 'ring-2 ring-pink-500 ring-offset-2'
                                                        : ''
                                                }`}
                                                onClick={() => setSelectedColor(color)}
                                                title={color.name}
                                            >
                                                <span
                                                    className="h-7 w-7 rounded-full border border-gray-200"
                                                    style={{ backgroundColor: color.value }}
                                                />
                                            </button>
                                        ))}
                                    </div>
                                    <p className="mt-2 text-sm text-pink-700">
                                        Selected: {selectedColor.name}
                                    </p>
                                </div>

                                {/* Quantity */}
                                <div>
                                    <h3 className="mb-3 text-sm font-medium text-pink-700">
                                        Quantity
                                    </h3>
                                    <div className="flex h-9 w-32">
                                        <button
                                            type="button"
                                            className="flex flex-1 items-center justify-center rounded-l-md border border-r-0 border-pink-200 bg-white text-pink-600 hover:bg-pink-50"
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        >
                                            -
                                        </button>
                                        <div className="flex flex-1 items-center justify-center border-y border-pink-200 bg-white text-pink-700">
                                            {quantity}
                                        </div>
                                        <button
                                            type="button"
                                            className="flex flex-1 items-center justify-center rounded-r-md border border-l-0 border-pink-200 bg-white text-pink-600 hover:bg-pink-50"
                                            onClick={() => setQuantity(quantity + 1)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                {/* Add to cart */}
                                <div className="space-y-4 pt-4">
                                    <Button className="h-12 w-full gap-2 bg-pink-500 text-base text-white hover:bg-pink-600">
                                        <ShoppingCart className="h-5 w-5" />
                                        Add to Cart
                                    </Button>

                                    <Button
                                        variant="outline"
                                        className="h-12 w-full gap-2 border-pink-200 text-base text-pink-600 hover:bg-pink-50"
                                    >
                                        <Share2 className="h-5 w-5" />
                                        Share
                                    </Button>
                                </div>

                                {/* Shipping info */}
                                <div className="space-y-3 border-t border-pink-100 pt-4">
                                    <div className="flex items-start gap-3">
                                        <Truck className="mt-0.5 h-5 w-5 text-pink-500" />
                                        <div>
                                            <h4 className="font-medium text-pink-700">
                                                Free Shipping
                                            </h4>
                                            <p className="text-sm text-pink-600">
                                                2-5 business days
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <RotateCcw className="mt-0.5 h-5 w-5 text-pink-500" />
                                        <div>
                                            <h4 className="font-medium text-pink-700">
                                                Easy Returns
                                            </h4>
                                            <p className="text-sm text-pink-600">
                                                30-day return policy
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Product details & features */}
                <section className="bg-pink-50 py-12">
                    <div className="container">
                        <div className="mx-auto max-w-4xl">
                            <h2 className="mb-8 text-2xl font-bold text-pink-600">
                                Product Details
                            </h2>

                            <div className="overflow-hidden rounded-xl bg-white shadow-xs">
                                <div className="grid grid-cols-1 divide-y divide-pink-100 md:grid-cols-2 md:divide-x md:divide-y-0">
                                    <div className="p-6">
                                        <h3 className="mb-4 text-lg font-medium text-pink-600">
                                            Features
                                        </h3>
                                        <ul className="space-y-2">
                                            {product.features.map((feature, index) => (
                                                <li key={index} className="flex items-start gap-2">
                                                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                                                        <svg
                                                            className="h-3 w-3"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </span>
                                                    <span className="text-pink-700">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="p-6">
                                        <h3 className="mb-4 text-lg font-medium text-pink-600">
                                            Specifications
                                        </h3>
                                        <dl className="space-y-3">
                                            <div>
                                                <dt className="text-sm text-pink-500">
                                                    Dimensions
                                                </dt>
                                                <dd className="font-medium text-pink-700">
                                                    {product.specs.dimensions}
                                                </dd>
                                            </div>
                                            <div>
                                                <dt className="text-sm text-pink-500">Weight</dt>
                                                <dd className="font-medium text-pink-700">
                                                    {product.specs.weight}
                                                </dd>
                                            </div>
                                            <div>
                                                <dt className="text-sm text-pink-500">Materials</dt>
                                                <dd className="font-medium text-pink-700">
                                                    {product.specs.materials}
                                                </dd>
                                            </div>
                                            <div>
                                                <dt className="text-sm text-pink-500">Warranty</dt>
                                                <dd className="font-medium text-pink-700">
                                                    {product.specs.warranty}
                                                </dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Related products */}
                <section className="py-12">
                    <div className="container">
                        <h2 className="mb-8 text-2xl font-bold text-pink-600">You May Also Like</h2>

                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {product.related.map(relatedSlug => {
                                const relatedProduct =
                                    products[relatedSlug as keyof typeof products];
                                return (
                                    <motion.div
                                        key={relatedProduct.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        viewport={{ once: true }}
                                        className="group relative overflow-hidden rounded-xl bg-pink-50 shadow-xs transition-shadow hover:shadow-md"
                                    >
                                        <Link href={`/products/${relatedSlug}`}>
                                            <div className="relative aspect-square overflow-hidden">
                                                <img
                                                    src={relatedProduct.images[0]}
                                                    alt={relatedProduct.name}
                                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-linear-to-t from-pink-600/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                                            </div>

                                            <div className="p-4">
                                                <h3 className="mb-1 font-medium text-pink-700">
                                                    {relatedProduct.name}
                                                </h3>
                                                <div className="flex items-center justify-between">
                                                    <p className="font-bold text-pink-600">
                                                        ${relatedProduct.price}
                                                    </p>

                                                    <div className="flex items-center gap-2">
                                                        {relatedProduct.colors
                                                            .slice(0, 3)
                                                            .map(color => (
                                                                <div
                                                                    key={color.name}
                                                                    className="h-3 w-3 rounded-full border border-white"
                                                                    style={{
                                                                        backgroundColor:
                                                                            color.value,
                                                                    }}
                                                                />
                                                            ))}
                                                        {relatedProduct.colors.length > 3 && (
                                                            <span className="text-xs text-pink-500">
                                                                +{relatedProduct.colors.length - 3}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
