import { useState } from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import { container, item } from './Home';
import Footer from '../components/footer';

const newsArticles = [
  {
    id: 1,
    title: "Company Wins 2023 Innovation Award",
    date: "May 15, 2023",
    excerpt: "We're proud to announce our recognition as the most innovative company in our sector this year.",
    category: "Awards",
    image: "https://picsum.photos/id/100/800/500",
    fullContent: "Full content about the award win..."
  },
  {
    id: 2,
    title: "New Product Line Launch",
    date: "April 2, 2023",
    excerpt: "Discover our revolutionary new products designed to transform your workflow.",
    category: "Product",
    image: "https://picsum.photos/id/200/800/500",
    fullContent: "Details about the new product line..."
  },
  {
    id: 3,
    title: "Annual Sustainability Report",
    date: "March 20, 2023",
    excerpt: "See how we reduced our carbon footprint by 40% this past year.",
    category: "Corporate",
    image: "https://picsum.photos/id/300/800/500",
    fullContent: "Complete sustainability report findings..."
  },
  {
    id: 4,
    title: "Partnership Announcement",
    date: "February 10, 2023",
    excerpt: "We're teaming up with industry leaders to deliver enhanced solutions.",
    category: "Partnerships",
    image: "https://picsum.photos/id/400/800/500",
    fullContent: "Partnership details and benefits..."
  }
];

const News = () => {
  const [expandedArticle, setExpandedArticle] = useState(null);
  const [email, setEmail] = useState('');

  const toggleArticle = (id) => {
    setExpandedArticle(expandedArticle === id ? null : id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with ${email}`);
    setEmail('');
  };

  return (
    <PageWrapper>
      
       <section className="min-h-screen flex items-center justify-center bg-fm-dark text-white pt-16 pb-24  overflow-hidden">

        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 0.2,
            x: "-30%",
            y: "-20%",
            transition: { duration: 2.5, ease: [0.16, 1, 0.3, 1] },
          }}
          className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-fm-primary blur-[110px]"
        />
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{
            scale: 1.2,
            opacity: 0.15,
            x: "30%",
            y: "30%",
            transition: { delay: 0.4, duration: 2.8, ease: [0.16, 1, 0.3, 1] },
          }}
          className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] rounded-full bg-fm-accent blur-[110px]"
        />

        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.h1
              variants={item}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fm-primary via-fm-accent to-fm-primary animate-gradient bg-[length:200%]">
                News & Updates


              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-xl md:text-2xl text-fm-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed"
            >
               Stay informed {" "}
              <span className="font-medium text-white">
                with our latest announcements 
              </span>{" "}
              and stories
            </motion.p>

            <motion.div variants={item} className="mb-16">
              <div className="relative inline-block">
                <div className="w-24 h-1 bg-gradient-to-r from-fm-primary to-fm-accent rounded-full" />
                <div className="absolute inset-0 bg-gradient-to-r from-fm-primary to-fm-accent rounded-full opacity-0 hover:opacity-100 transition-opacity duration-500 blur-sm" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {newsArticles.map((article) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-all"
              >
                <div className="relative pb-[56.25%] bg-gray-200">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="absolute h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-sm">{article.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">{article.title}</h2>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <motion.div
                    animate={{ 
                      height: expandedArticle === article.id ? 'auto' : 0,
                      opacity: expandedArticle === article.id ? 1 : 0
                    }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-gray-700 mb-4">{article.fullContent}</p>
                    </div>
                  </motion.div>
                  <button
                    onClick={() => toggleArticle(article.id)}
                    className="text-blue-600 hover:text-blue-800 font-medium mt-2"
                  >
                    {expandedArticle === article.id ? 'Show Less' : 'Read More'}
                  </button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="text-white py-16 bg-fm-dark border-t border-gray-200">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0  }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.h2
            initial={{
                opacity: 0,
                y: -10
            }}
             whileInView={{
                opacity: 1,
                 y: 0
              
             }} 
             className="text-3xl font-bold mb-4">Stay Updated</motion.h2>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter for the latest news and updates
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
      <Footer/>
    </PageWrapper>
  );
};

export default News;