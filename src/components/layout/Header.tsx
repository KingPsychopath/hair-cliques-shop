import React from 'react';
import Link from 'next/link';
import { ShoppingCart, Heart, Menu, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-pink-100 bg-white/80 backdrop-blur-xs">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-6">
                    <Button variant="ghost" size="icon" className="text-pink-500 md:hidden">
                        <Menu />
                        <span className="sr-only">Toggle menu</span>
                    </Button>

                    <Link href="/" className="flex items-center gap-2">
                        <span className="bg-linear-to-r from-pink-400 to-purple-500 bg-clip-text text-2xl font-bold text-transparent">
                            Hair Cliques
                        </span>
                    </Link>

                    <nav className="hidden gap-6 md:flex">
                        <Link
                            href="/"
                            className="text-sm font-medium text-pink-500 transition-colors hover:text-pink-600"
                        >
                            Home
                        </Link>
                        <Link
                            href="/shop"
                            className="text-sm font-medium text-pink-500 transition-colors hover:text-pink-600"
                        >
                            Shop
                        </Link>
                        <Link
                            href="/about"
                            className="text-sm font-medium text-pink-500 transition-colors hover:text-pink-600"
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className="text-sm font-medium text-pink-500 transition-colors hover:text-pink-600"
                        >
                            Contact
                        </Link>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" className="text-pink-500">
                        <Heart className="h-5 w-5" />
                        <span className="sr-only">Wishlist</span>
                    </Button>

                    <Button variant="ghost" size="icon" className="text-pink-500">
                        <User className="h-5 w-5" />
                        <span className="sr-only">Account</span>
                    </Button>

                    <Button variant="ghost" size="icon" className="relative text-pink-500">
                        <ShoppingCart className="h-5 w-5" />
                        <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-pink-500 text-[10px] font-medium text-white">
                            0
                        </span>
                        <span className="sr-only">Cart</span>
                    </Button>
                </div>
            </div>
        </header>
    );
}
