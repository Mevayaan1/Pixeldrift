const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-fm-dark text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.h1 variants={item} className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Build better animations</span>
          </motion.h1>
          
          <motion.p variants={item} className="text-xl md:text-2xl text-fm-gray-200 max-w-3xl mx-auto mb-8">
            A production-ready animation library for React
          </motion.p>
          
          <motion.div variants={item} className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-gradient-to-r from-fm-primary to-fm-accent text-white rounded-lg font-medium"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 border border-fm-gray-800 text-white rounded-lg font-medium"
            >
              Examples
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Animated preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-fm-gray-900 rounded-xl overflow-hidden shadow-2xl"
        >
          <div className="p-4 bg-fm-gray-800 flex items-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-xs text-fm-gray-400 ml-4">animation.jsx</div>
          </div>
          <div className="p-6">
            {/* Code preview would go here */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;