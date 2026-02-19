import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  ctas?: Array<{
    label: string;
    href: string;
    variant: 'primary' | 'secondary';
  }>;
}

export const Hero: React.FC<HeroProps> = ({ title, subtitle, description, ctas = [] }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-900 dark:to-slate-800">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-20 dark:opacity-10 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full opacity-20 dark:opacity-10 blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
            delay: 1,
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base font-semibold text-blue-600 dark:text-cyan-400 mb-4 tracking-wider"
        >
          {subtitle}
        </motion.p>

        {/* Title */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
            {title}
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          {description}
        </motion.p>

        {/* CTAs */}
        {ctas.length > 0 && (
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            {ctas.map((cta) => (
              <motion.a
                key={cta.href}
                href={cta.href}
                className={`px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 ${
                  cta.variant === 'primary'
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-lg hover:-translate-y-1 hover:from-blue-700 hover:to-cyan-600'
                    : 'border-2 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:border-blue-600 dark:hover:border-cyan-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cta.label}
              </motion.a>
            ))}
          </motion.div>
        )}

        {/* Scroll Indicator */}
        <motion.div
          className="mt-16 flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-gray-400 dark:text-gray-600">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
