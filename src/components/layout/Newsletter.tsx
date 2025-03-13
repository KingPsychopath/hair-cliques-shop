import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function Newsletter() {
  return (
    <section className="py-24 bg-linear-to-r from-pink-100 to-purple-100">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-pink-600 mb-4">Join Our Community</h2>
            <p className="text-pink-700">
              Subscribe to our newsletter for style tips, exclusive discounts, and be the first to know about new product launches.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-full border border-pink-200 focus:border-pink-400 focus:outline-hidden focus:ring-2 focus:ring-pink-200"
              />
              <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-6">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-pink-600 mt-3">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from Hair Cliques.
            </p>
          </div>

          <div className="mt-12 pt-12 border-t border-pink-200">
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-pink-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-pink-800">Free Shipping</p>
                  <p className="text-sm text-pink-600">On orders over $30</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-pink-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-pink-800">Quality Guarantee</p>
                  <p className="text-sm text-pink-600">1-year warranty</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-pink-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-pink-800">Secure Checkout</p>
                  <p className="text-sm text-pink-600">100% protected</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
