import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import { Features, Curriculum, Instructor } from '../components/ContentSections';
import Solution from '../components/Solution';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-bg-main font-sans text-text-main selection:bg-primary/20">
      <Header />
      <main>
        <Hero />
        <Features />
        <Solution />
        <Curriculum />
        <Instructor />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

