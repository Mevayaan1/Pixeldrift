import { motion } from 'framer-motion';

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

export const slideUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 }
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

export const fadeInItem = {
  initial: { opacity: 0 },
  animate: { opacity: 1 }
};

export const hoverScale = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.98 }
};

export const navItemVariants = {
  closed: { opacity: 0, x: -20 },
  open: { opacity: 1, x: 0 }
};