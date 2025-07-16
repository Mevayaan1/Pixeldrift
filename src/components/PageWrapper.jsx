// import { motion } from 'framer-motion';

// const pageVariants = {
//   initial: {
//     opacity: 0,
//     y: -100
//   },
//   animate: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.9,
//       ease: "easeOut"
//     }
//   },
//   exit: {
//     opacity: 0,
//     x: 100,
//     transition: {
//       duration: 0.3
//     }
//   }
// };

// export default function PageWrapper({ children }) {
//   return (
//     <motion.div
//       variants={pageVariants}
//       initial="initial"
//       animate="animate"
//       exit="exit"
//       className="pt-16 min-h-screen"
//     >
//       {children}
//     </motion.div>
//   );
// }

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