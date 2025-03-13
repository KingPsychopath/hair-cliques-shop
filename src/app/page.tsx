'use client';

import React from 'react';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/layout/Hero';
import { FeaturedProducts } from '@/components/products/FeaturedProducts';
import { HowItWorks } from '@/components/layout/HowItWorks';
import { SimpleTestimonials } from '@/components/layout/SimpleTestimonials';
import { Newsletter } from '@/components/layout/Newsletter';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow">
        <Hero />
        <FeaturedProducts />
        <HowItWorks />
        <SimpleTestimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
