import React from 'react';
import Link from 'next/link';
import { ShoppingCart, Heart, Menu, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-pink-100 bg-white/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Button variant="ghost" size="icon" className="md:hidden text-pink-500">
            <Menu />
            <span className="sr-only">Toggle menu</span>
          </Button>

          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text">Hair Cliques</span>
          </Link>

          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium text-pink-500 hover:text-pink-600 transition-colors">
              Home
            </Link>
            <Link href="/shop" className="text-sm font-medium text-pink-500 hover:text-pink-600 transition-colors">
              Shop
            </Link>
            <Link href="/about" className="text-sm font-medium text-pink-500 hover:text-pink-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-pink-500 hover:text-pink-600 transition-colors">
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

          <Button variant="ghost" size="icon" className="text-pink-500 relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-pink-500 text-[10px] font-medium text-white flex items-center justify-center">
              0
            </span>
            <span className="sr-only">Cart</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
