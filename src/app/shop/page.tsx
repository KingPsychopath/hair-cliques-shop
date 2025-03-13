'use client';

import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Heart, Filter, ChevronDown } from 'lucide-react';
import Link from 'next/link';

// Product database
const shopProducts = [
  {
    id: 1,
    name: 'Star Hair Clique - Aqua Blue',
    price: '$19.99',
    image: 'https://i.kickstarter.com/assets/047/931/634/41303b8f4cb52ca1b9f9a2dcc1a592ff_original.jpg',
    colors: ['#5CE1E6', '#FF80AB', '#FFD700', '#9C27B0'],
    category: 'Stars',
    featured: true,
    bestseller: true,
    slug: 'star-hair-clique',
  },
  {
    id: 2,
    name: 'Bow Hair Clique - Pink',
    price: '$18.99',
    image: 'https://i.kickstarter.com/assets/047/910/042/a24f91ace19a0a8891f9dba42d9eee9d_original.jpeg',
    colors: ['#FF80AB', '#5CE1E6', '#FFD700', '#9C27B0'],
    category: 'Bows',
    featured: true,
    slug: 'bow-hair-clique',
  },
  {
    id: 3,
    name: 'Heart Hair Clique - Purple',
    price: '$20.99',
    image: 'https://i.kickstarter.com/assets/047/931/634/41303b8f4cb52ca1b9f9a2dcc1a592ff_original.jpg',
    colors: ['#9C27B0', '#FF80AB', '#5CE1E6', '#FFD700'],
    category: 'Hearts',
    featured: true,
    bestseller: true,
    slug: 'heart-hair-clique',
  },
  {
    id: 4,
    name: 'Round Hair Clique - Gold',
    price: '$17.99',
    image: 'https://i.kickstarter.com/assets/047/910/042/a24f91ace19a0a8891f9dba42d9eee9d_original.jpeg',
    colors: ['#FFD700', '#9C27B0', '#FF80AB', '#5CE1E6'],
    category: 'Classic',
    featured: true,
    slug: 'round-hair-clique',
  },
  {
    id: 5,
    name: 'Butterfly Hair Clique - Teal',
    price: '$21.99',
    image: 'https://i.kickstarter.com/assets/047/931/634/41303b8f4cb52ca1b9f9a2dcc1a592ff_original.jpg',
    colors: ['#5CE1E6', '#FF80AB', '#FFD700'],
    category: 'Nature',
    new: true,
    slug: 'butterfly-hair-clique',
  },
  {
    id: 6,
    name: 'Flower Hair Clique - Pink',
    price: '$18.99',
    image: 'https://i.kickstarter.com/assets/047/910/042/a24f91ace19a0a8891f9dba42d9eee9d_original.jpeg',
    colors: ['#FF80AB', '#5CE1E6', '#FFD700', '#9C27B0'],
    category: 'Nature',
    bestseller: true,
    slug: 'flower-hair-clique',
  },
  {
    id: 7,
    name: 'Moon Hair Clique - Silver',
    price: '$22.99',
    image: 'https://i.kickstarter.com/assets/047/931/634/41303b8f4cb52ca1b9f9a2dcc1a592ff_original.jpg',
    colors: ['#C0C0C0', '#9C27B0', '#5CE1E6'],
    category: 'Celestial',
    new: true,
    slug: 'moon-hair-clique',
  },
  {
    id: 8,
    name: 'Classic Hair Clique - Black',
    price: '$15.99',
    image: 'https://i.kickstarter.com/assets/047/910/042/a24f91ace19a0a8891f9dba42d9eee9d_original.jpeg',
    colors: ['#000000', '#FFFFFF', '#FF80AB'],
    category: 'Classic',
    slug: 'classic-hair-clique',
  },
];

type CategoryType = 'All' | 'Stars' | 'Hearts' | 'Bows' | 'Classic' | 'Nature' | 'Celestial';
type SortType = 'featured' | 'newest' | 'price-low' | 'price-high';

export default function Shop() {
  const [category, setCategory] = useState<CategoryType>('All');
  const [sortBy, setSortBy] = useState<SortType>('featured');
  const [filterOpen, setFilterOpen] = useState(false);

  // Filter products by category
  const filteredProducts = category === 'All'
    ? shopProducts
    : shopProducts.filter(product => product.category === category);

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return a.new ? -1 : b.new ? 1 : 0;
      case 'price-low':
        return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
      case 'price-high':
        return parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''));
      case 'featured':
      default:
        return a.featured ? -1 : b.featured ? 1 : 0;
    }
  });

  const categories: CategoryType[] = ['All', 'Stars', 'Hearts', 'Bows', 'Classic', 'Nature', 'Celestial'];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow">
        {/* Hero banner */}
        <div className="bg-linear-to-r from-pink-100 via-pink-200 to-purple-100 py-12">
          <div className="container">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-pink-600 mb-2">Shop Hair Cliques</h1>
              <p className="text-pink-700 max-w-xl mx-auto">
                Browse our collection of magnetic hair clips designed for all hair types and styles.
              </p>
            </div>
          </div>
        </div>

        <div className="container py-12">
          {/* Filters and sort */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
            <div className="w-full md:w-auto">
              <Button
                variant="outline"
                className="flex items-center gap-2 border-pink-200 text-pink-600"
                onClick={() => setFilterOpen(!filterOpen)}
              >
                <Filter className="h-4 w-4" />
                Filter
                <ChevronDown className={`h-4 w-4 transition-transform ${filterOpen ? 'rotate-180' : ''}`} />
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-pink-600">Sort by:</span>
              <select
                className="border border-pink-200 rounded-md p-2 text-pink-700 focus:outline-hidden focus:ring-2 focus:ring-pink-300"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortType)}
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Category filters */}
          {filterOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-8"
            >
              <div className="p-4 bg-pink-50 rounded-xl">
                <h3 className="font-medium text-pink-700 mb-3">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <Button
                      key={cat}
                      variant={category === cat ? "default" : "outline"}
                      className={
                        category === cat
                          ? "bg-pink-500 hover:bg-pink-600 text-white"
                          : "border-pink-200 text-pink-600 hover:bg-pink-100"
                      }
                      onClick={() => setCategory(cat)}
                    >
                      {cat}
                    </Button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Results count */}
          <div className="mb-6">
            <p className="text-sm text-pink-600">
              Showing {sortedProducts.length} {sortedProducts.length === 1 ? 'product' : 'products'}
            </p>
          </div>

          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {sortedProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-pink-50 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="absolute top-2 left-2 z-10 flex gap-1">
                  {product.new && (
                    <span className="bg-blue-500 text-white text-xs font-medium px-2 py-1 rounded">New</span>
                  )}
                  {product.bestseller && (
                    <span className="bg-pink-500 text-white text-xs font-medium px-2 py-1 rounded">Bestseller</span>
                  )}
                </div>

                <Link href={`/products/${product.slug}`} className="block">
                  <div className="aspect-square overflow-hidden relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-pink-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 bg-white/80 text-pink-500 hover:bg-white hover:text-pink-600 rounded-full"
                    >
                      <Heart className="h-4 w-4" />
                      <span className="sr-only">Add to wishlist</span>
                    </Button>
                  </div>
                </Link>

                <div className="p-4">
                  <Link href={`/products/${product.slug}`} className="block">
                    <h3 className="font-medium text-pink-700 mb-1 hover:text-pink-600 transition-colors">{product.name}</h3>
                  </Link>
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-pink-600">{product.price}</p>

                    <div className="flex items-center gap-2">
                      {product.colors.map((color, i) => (
                        <div
                          key={i}
                          className="w-3 h-3 rounded-full border border-white"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mt-4">
                    <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white gap-2">
                      <ShoppingCart className="h-4 w-4" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty state */}
          {sortedProducts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-pink-600 mb-2">No products found</h3>
              <p className="text-pink-500 mb-6">Try adjusting your filters or browse all products</p>
              <Button
                variant="default"
                className="bg-pink-500 hover:bg-pink-600"
                onClick={() => setCategory('All')}
              >
                View All Products
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
