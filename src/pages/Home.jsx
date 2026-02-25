import React from 'react';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import TechStack from '../components/TechStack';
import BlogPreview from '../components/BlogPreview';
import Contact from '../components/Contact';

const Home = ({ isLoading = false }) => {
  return (
    <div className="min-h-screen text-white font-sans overflow-x-hidden selection:bg-cyan-500/30">
      <a
        href="#experience"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-slate-900 focus:rounded-lg focus:font-bold focus:text-sm"
      >
        Skip to content
      </a>
      <main>
        <Hero />
        <Experience />
        <TechStack />
        <BlogPreview isLoading={isLoading} />
        <Contact isLoading={isLoading} />
      </main>

      <footer className="py-8 text-center text-slate-600 font-mono text-sm border-t border-slate-800" role="contentinfo">
        <p>&copy; {new Date().getFullYear()} Avinash Reddy. Engineered with First Principles.</p>
        <p className="mt-2 text-xs opacity-50">react // vite // tailwind // physics</p>
      </footer>
    </div>
  );
};

export default Home;
