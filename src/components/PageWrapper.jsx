
import { motion } from 'framer-motion';
import { fadeIn } from '../animations';

const PageWrapper = ({ children }) => (
  <motion.main
    {...fadeIn}
    transition={{ duration: 0.5 }}
    className="min-h-screen pt-16" // Account for fixed navbar
  >
    {children}
  </motion.main>
);

export default PageWrapper;