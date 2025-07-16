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

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <motion.h2 
        className="text-3xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        Featured Products
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredProducts.map((product, index) => {
          const hueA = 200 + (index * 30);
          const hueB = 230 + (index * 30);
          const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

          return (
            <motion.div
              key={product.id}
              className="relative overflow-visible py-12 -my-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
            >
              {/* Animated splash background */}
              <motion.div
                className="absolute inset-0 rounded-xl pointer-events-none"
                style={{ background }}
                initial={{ scale: 0.8, opacity: 0, y: 40 }}
                whileInView={{ 
                  scale: 1,
                  opacity: 0.2,
                  y: 0,
                  transition: { delay: 0.2, duration: 0.6 }
                }}
                viewport={{ once: true }}
              />
              
              {/* Product card */}
              <motion.div
                className="bg-white/90 rounded-2xl p-6 shadow-lg flex flex-col items-center text-center h-full border border-gray-200"
                initial={{ y: 100, opacity: 0, rotate: -5 }}
                whileInView={{ 
                  y: 0, 
                  opacity: 1, 
                  rotate: 0,
                  transition: { 
                    type: "spring", 
                    bounce: 0.4, 
                    duration: 0.8 
                  }
                }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
                viewport={{ once: true }}
                style={{ minHeight: 380 }}
              >
                <span className="text-6xl mb-6">{product.emoji}</span>
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <span 
                  className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4"
                  style={{ 
                    backgroundColor: `${hue(hueA)}10`,
                    color: hue(hueA)
                  }}
                >
                  {product.category}
                </span>
                <Link
                  to={`/products/${product.id}`}
                  className="mt-auto flex items-center font-medium group"
                  style={{ color: hue(hueA) }}
                >
                  Explore
                  <motion.span 
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    className="ml-1 transition-transform"
                  >
                    →
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default FeatureCards;