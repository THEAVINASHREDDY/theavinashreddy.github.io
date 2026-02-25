import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search } from 'lucide-react';
import RetroGridBackground from '../components/RetroGridBackground';

const NotFound = () => {
  return (
    <main className="relative min-h-screen bg-slate-900 text-white flex items-center justify-center overflow-hidden">
      <RetroGridBackground />

      <div className="relative z-10 text-center px-6 max-w-lg">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="font-mono text-[8rem] md:text-[10rem] font-bold leading-none bg-clip-text text-transparent bg-gradient-to-b from-cyan-400 to-slate-700 select-none" aria-hidden="true">
            404
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <h1 className="text-2xl md:text-3xl font-bold mb-3 mt-2">
            Signal Lost
          </h1>
          <p className="text-slate-400 mb-10 max-w-sm mx-auto">
            The coordinates you followed don't map to any known node. The page may have moved or never existed.
          </p>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          aria-label="404 navigation"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3 border border-cyan-500/50 rounded-full text-cyan-400 hover:bg-cyan-500/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            Back to Home
          </Link>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-8 py-3 border border-slate-700 rounded-full text-slate-200 hover:border-cyan-500/50 hover:text-cyan-300 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Read the Blog
          </Link>
        </motion.nav>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-slate-600 font-mono text-xs"
        >
          ERR::NODE_NOT_FOUND &middot; GRID_COORD::NULL
        </motion.p>
      </div>
    </main>
  );
};

export default NotFound;
