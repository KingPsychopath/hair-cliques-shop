import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-50 to-purple-50 border-t border-pink-100">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-pink-600">Hair Cliques</h3>
            <p className="text-pink-700 text-sm">
              Beautiful, magnetic hair clips designed for all hair types. Low tension styling that keeps your hair healthy and beautiful.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-pink-600 hover:text-pink-800">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-pink-600 hover:text-pink-800">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-pink-600 hover:text-pink-800">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-pink-600 mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/shop" className="text-pink-700 hover:text-pink-900">All Products</Link>
              </li>
              <li>
                <Link href="/products/star-hair-clique" className="text-pink-700 hover:text-pink-900">Star Hair Clique</Link>
              </li>
              <li>
                <Link href="/products/bow-hair-clique" className="text-pink-700 hover:text-pink-900">Bow Hair Clique</Link>
              </li>
              <li>
                <Link href="/products/heart-hair-clique" className="text-pink-700 hover:text-pink-900">Heart Hair Clique</Link>
              </li>
              <li>
                <Link href="/shop/new" className="text-pink-700 hover:text-pink-900">New Arrivals</Link>
              </li>
              <li>
                <Link href="/shop/bestsellers" className="text-pink-700 hover:text-pink-900">Bestsellers</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-pink-600 mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-pink-700 hover:text-pink-900">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="text-pink-700 hover:text-pink-900">Contact</Link>
              </li>
              <li>
                <Link href="/faqs" className="text-pink-700 hover:text-pink-900">FAQs</Link>
              </li>
              <li>
                <Link href="/blog" className="text-pink-700 hover:text-pink-900">Blog</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-pink-600 mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="text-pink-700 hover:text-pink-900">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/privacy" className="text-pink-700 hover:text-pink-900">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/returns" className="text-pink-700 hover:text-pink-900">Returns Policy</Link>
              </li>
              <li>
                <Link href="/shipping" className="text-pink-700 hover:text-pink-900">Shipping Information</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-pink-200">
          <p className="text-center text-sm text-pink-600">
            &copy; {new Date().getFullYear()} Hair Cliques. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
