import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import TransformingIndustries from './components/TransformingIndustries';
import ProductShowcase from './components/ProductShowcase';
import BlogFeed from './components/BlogFeed';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app bg-[#0A0A0A] min-h-screen text-white">
      <Header />
      <Hero />
      <Features />
      <TransformingIndustries />
      <ProductShowcase />
      <BlogFeed />
      <Footer />
    </div>
  );
}

export default App;
