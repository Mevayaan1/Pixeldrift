import { useState } from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import Footer from '../components/footer';
import { container, item } from './Home';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      alert(`Thank you, ${formData.name}! We'll contact you soon.`);
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <PageWrapper>
      {/* Hero Header - Matching Home Page */}
   
      <section className="min-h-screen flex items-center justify-center bg-fm-dark text-white pt-16 pb-24  overflow-hidden ">

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
                Contact Us
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-xl md:text-2xl text-fm-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed"
            >
               We'd {" "}
              <span className="font-medium text-white">
               love to hear 
              </span>{" "}
              from you
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

      {/* Contact Content */}
      <div className="py-16 bg-fm-panel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-fm-text mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-fm-text-secondary mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-fm-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fm-primary"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-fm-text-secondary mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-fm-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fm-primary"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-fm-text-secondary mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-fm-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fm-primary"
                  ></textarea>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full px-6 py-3 bg-fm-primary text-white rounded-md hover:bg-fm-primary-dark transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-fm-panel-light p-8 rounded-lg border border-fm-gray-200"
            >
              <h2 className="text-2xl font-bold text-fm-text mb-6">Our Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-fm-primary/10 p-3 rounded-full mr-4">
                    <svg className="w-5 h-5 text-fm-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-fm-text">Address</h3>
                    <p className="text-fm-text-secondary">123 Business Avenue<br />San Francisco, CA 94107</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-fm-primary/10 p-3 rounded-full mr-4">
                    <svg className="w-5 h-5 text-fm-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-fm-text">Phone</h3>
                    <p className="text-fm-text-secondary">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-fm-primary/10 p-3 rounded-full mr-4">
                    <svg className="w-5 h-5 text-fm-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-fm-text">Email</h3>
                    <p className="text-fm-text-secondary">info@company.com</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
       <Footer/>
    </PageWrapper>
  );
};

export default Contact;