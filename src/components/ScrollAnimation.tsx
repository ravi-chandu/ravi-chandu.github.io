import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollAnimationProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  variant?: 'fadeIn' | 'slideUp' | 'slideInLeft' | 'slideInRight';
}

const variants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  slideInRight: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  },
};

export const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  delay = 0,
  className = '',
  variant = 'slideUp',
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants[variant]}
      transition={{
        duration: 0.5,
        delay,
        ease: 'easeOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
