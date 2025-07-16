import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FeatureCards = () => {
  const featuredProducts = [
    { id: 1, emoji: "🚀", name: "Premium Plan", category: "Bestseller" },
    { id: 2, emoji: "✨", name: "Deluxe Package", category: "New" },
    { id: 3, emoji: "🎯", name: "Pro Tools", category: "Popular" },
    { id: 4, emoji: "🔮", name: "Starter Kit", category: "Basic" }
  ];

  // Hue generator function
  const hue = (h) => `hsl(${h}, 100%, 50%)`;

  // Animation variants for cards
  const cardVariants = {
    offscreen: { y: 100, opacity: 0, scale: 0.95 },
    onscreen: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.35,
        duration: 0.9
      }
    },
    hover: {
      y: -16,
      scale: 1.04,
      boxShadow: "0 12px 32px 0 rgba(0,0,0,0.12)",
      transition: { type: "spring", stiffness: 300, damping: 18 }
    }
  };

  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <motion.h2 
        className="text-4xl font-extrabold text-center mb-20 tracking-tight bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7 }}
      >
        Featured Products
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {featuredProducts.map((product, index) => {
          const hueA = 200 + (index * 30);
          const hueB = 230 + (index * 30);
          const background = `linear-gradient(135deg, ${hue(hueA)} 0%, ${hue(hueB)} 100%)`;

          return (
            <motion.div
              key={product.id}
              className="relative overflow-visible py-14 -my-14"
              initial="offscreen"
              whileInView="onscreen"
              whileHover="hover"
              viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
              variants={cardVariants}
            >
              {/* Animated splash background with blur and glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none blur-xl opacity-60"
                style={{ background }}
                initial={{ scale: 0.85, opacity: 0, y: 40 }}
                whileInView={{ 
                  scale: 1.1,
                  opacity: 0.5,
                  y: 0,
                  transition: { delay: 0.18, duration: 0.7 }
                }}
                viewport={{ once: true }}
              />
              {/* Product card */}
              <motion.div
                className="bg-white/90 rounded-3xl p-8 shadow-2xl flex flex-col items-center text-center h-full border border-gray-100 backdrop-blur-md relative z-10"
                style={{ minHeight: 400 }}
              >
                <span className="text-7xl mb-7 drop-shadow-lg animate-bounce-slow">{product.emoji}</span>
                <h3 className="text-2xl font-bold mb-2 tracking-tight text-gray-900">{product.name}</h3>
                <span 
                  className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-5 shadow-sm"
                  style={{ 
                    backgroundColor: `${hue(hueA)}15`,
                    color: hue(hueA),
                    border: `1.5px solid ${hue(hueA)}55`
                  }}
                >
                  {product.category}
                </span>
                <Link
                  to={`/products/${product.id}`}
                  className="mt-auto flex items-center font-semibold group text-base"
                  style={{ color: hue(hueA) }}
                >
                  Explore
                  <motion.span 
                    initial={{ x: 0 }}
                    whileHover={{ x: 8 }}
                    className="ml-1 transition-transform text-lg"
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.2s infinite;
        }
      `}</style>
    </section>
  );
};

export default FeatureCards;