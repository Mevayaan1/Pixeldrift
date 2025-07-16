import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import { useRef, useEffect, useState } from 'react';
import FeatureCard from '../components/FeatureCard';
import Footer from '../components/footer';


const galleryImages = [
  { 
    id: 1, 
    alt: "Product in use",
    src: "https://picsum.photos/id/20/800/600"  // Product/tech themed
  },
  { 
    id: 2, 
    alt: "Workspace setup",
    src: "https://picsum.photos/id/1060/800/600"  // Office/workspace themed
  },
  { 
    id: 3, 
    alt: "Team working",
    src: "https://picsum.photos/id/1074/800/600"  // People/team themed
  },
  { 
    id: 4, 
    alt: "Happy customer",
    src: "https://picsum.photos/id/1071/800/600"  // Happy person themed
  }
];

// Animation variants
export const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

export const item = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

const cardVariants = {
  offscreen: {
    y: 100,
    opacity: 0,
    scale: 0.95
  },
  onscreen: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};



export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-16 justify-center bg-fm-dark text-white relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-fm-primary blur-3xl -translate-x-1/2 -translate-y-1/2"
        />
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{ delay: 0.3, duration: 1.5, ease: "easeOut" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-fm-accent blur-3xl translate-x-1/2 translate-y-1/2"
        />
        
        <div className="relative z-10">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.h1 variants={item} className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
              <span className="text-gradient animate-gradient">Design. Develop. Deliver.</span>
            </motion.h1>
            
            <motion.p variants={item} className="text-xl md:text-2xl text-fm-gray-200 max-w-3xl mx-auto mb-10">
              We create <span className="text-fm-primary font-medium">digital experiences</span> that transform businesses and delight users.
            </motion.p>
            
            <motion.div variants={item} className="flex flex-col sm:flex-row justify-center gap-6">
              <motion.button
                whileHover={{ 
                  y: -4,
                  boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-fm-primary to-fm-accent text-white rounded-xl font-medium text-lg relative overflow-hidden"
              >
                <span className="relative z-10">Start a Project</span>
                <motion.span 
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                />
              </motion.button>
              <motion.button
                whileHover={{ 
                  y: -4,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)"
                }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border-2 border-fm-gray-700 hover:border-fm-primary text-white rounded-xl font-medium text-lg"
              >
                Explore Services
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <div className="bg-fm-panel py-24 border-t border-fm-gray-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-4xl font-bold text-fm-text mb-6"
              >
                <span className="text-gradient inline-block">Who We Are</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-fm-text-secondary text-lg mb-8"
              >
                We're a team of passionate innovators dedicated to creating solutions that 
                transform businesses. Founded in 2015, we've helped over 500 clients 
                achieve their goals through technology.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <Link 
                  to="/about" 
                  className="inline-flex items-center px-6 py-3 border-2 border-fm-primary text-fm-primary rounded-lg hover:bg-fm-primary hover:text-white transition-all duration-300 group"
                >
                  <span>Our Story</span>
                  <motion.span 
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    className="ml-2 transition-transform"
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative"
            >
              <div className="bg-fm-gray-900 rounded-2xl h-96 border-2 border-fm-gray-800 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    animate={{ 
                      rotate: 360,
                      transition: { 
                        duration: 20, 
                        repeat: Infinity, 
                        ease: "linear" 
                      } 
                    }}
                    className="w-64 h-64 rounded-full border-2 border-dashed border-fm-primary/30"
                  />
                </div>
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-fm-primary w-32 h-32 rounded-2xl -z-10"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/*  Featured Section */}
      
     <FeatureCard/>

      {/* Gallery Preview */}
      <div className="py-24 bg-fm-panel border-t border-fm-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-fm-text mb-4">Our Work in Action</h2>
            <p className="text-fm-text-secondary text-lg max-w-2xl mx-auto">
              See how our solutions create real impact
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {galleryImages.map((image, index) => (
  <motion.div
    key={image.id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ scale: 1.05 }}
    className="relative group overflow-hidden rounded-xl border-2 border-fm-gray-800 hover:border-fm-primary transition-all duration-300"
  >
    <div className="relative pb-[100%] bg-fm-gray-900">
      {/* Add the image here */}
      <img 
        src={image.src} 
        alt={image.alt}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-fm-primary/10 to-fm-accent/10 flex items-center justify-center">
        <motion.span 
          initial={{ scale: 0.8 }}
          whileHover={{ scale: 1 }}
          className="text-4xl text-white/30"
        >
          {index + 1}
        </motion.span>
      </div>
    </div>
    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-500 flex items-center justify-center">
      <Link 
        to="/gallery"
        className="opacity-0 group-hover:opacity-100 transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 bg-white text-fm-primary px-4 py-2 rounded-lg font-medium shadow-lg"
      >
        View All
      </Link>
    </div>
  </motion.div>
))}
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <Footer/>
    </PageWrapper>
  );
}