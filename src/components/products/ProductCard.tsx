import { Product } from '@/types/product';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
    product: Product;
    priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="group relative overflow-hidden rounded-xl bg-pink-50 shadow-xs transition-shadow hover:shadow-md"
        >
            {/* Product badges */}
            <div className="absolute top-2 left-2 z-10 flex gap-1">
                {product.new && (
                    <span className="rounded bg-blue-500 px-2 py-1 text-xs font-medium text-white" role="status">
                        New
                    </span>
                )}
                {product.bestseller && (
                    <span className="rounded bg-pink-500 px-2 py-1 text-xs font-medium text-white" role="status">
                        Bestseller
                    </span>
                )}
            </div>

            {/* Product image and wishlist */}
            <Link href={`/products/${product.slug}`} className="block" aria-label={`View ${product.name}`}>
                <div className="relative aspect-square overflow-hidden">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        priority={priority}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-pink-600/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 rounded-full bg-white/80 text-pink-500 hover:bg-white hover:text-pink-600"
                        aria-label="Add to wishlist"
                    >
                        <Heart className="h-4 w-4" />
                    </Button>
                </div>
            </Link>

            {/* Product info */}
            <div className="p-4">
                <Link href={`/products/${product.slug}`} className="block">
                    <h3 className="mb-1 font-medium text-pink-700 transition-colors hover:text-pink-600">
                        {product.name}
                    </h3>
                </Link>

                <div className="flex items-center justify-between">
                    <p className="font-bold text-pink-600">{product.price}</p>
                    <div className="flex items-center gap-2" aria-label="Available colors">
                        {product.colors.map((color, i) => (
                            <div
                                key={i}
                                className="h-3 w-3 rounded-full border border-white"
                                style={{ backgroundColor: color }}
                                role="img"
                                aria-label={`Color ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>

                <div className="mt-4">
                    <Button
                        className="w-full gap-2 bg-pink-500 text-white hover:bg-pink-600"
                        disabled={product.stock === 0}
                    >
                        <ShoppingCart className="h-4 w-4" />
                        {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                    </Button>
                </div>
            </div>
        </motion.div>
    );
}
