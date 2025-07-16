import { motion } from 'framer-motion';
import PageWrapper from '../components/PageWrapper';
import { container, item } from './Home';
import Footer from '../components/footer';

const designProjects = [
  { 
    id: 1, 
    title: "E-Commerce Platform", 
    type: "Web Design",
    description: "Modern online shopping experience with intuitive navigation",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    tags: ["UI/UX", "E-commerce", "Responsive"],
    size: "wide"
  },
  { 
    id: 2, 
    title: "Mobile Banking App", 
    type: "App Design",
    description: "Secure financial management on iOS and Android",
    image: "https://images.unsplash.com/photo-1601597111151-9f41e2207094?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    tags: ["Fintech", "Mobile", "Security"],
    size: "tall"
  },
  { 
    id: 3, 
    title: "Tech Startup Branding", 
    type: "Brand Identity",
    description: "Complete visual identity for innovative SaaS company",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    tags: ["Logo", "Typography", "Visual System"],
    size: "big"
  },
  { 
    id: 4, 
    title: "Restaurant Website", 
    type: "Web Design",
    description: "Appetizing online presence for gourmet dining",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    tags: ["Food", "CMS", "Photography"],
    size: "tall"
  },
  { 
    id: 5, 
    title: "Fitness Tracker", 
    type: "App Design",
    description: "Motivational workout companion with social features",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    tags: ["Health", "Gamification", "Social"],
    size: "wide"
  },
  { 
    id: 6, 
    title: "Corporate Rebrand", 
    type: "Brand Identity",
    description: "Refreshed identity for established financial firm",
    image: "https://images.unsplash.com/photo-1626785774625-6a0391d403f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    tags: ["Rebrand", "Print", "Digital"],
    size: "wide"
  },
];

const DesignPortfolio = () => {
  return (
    <PageWrapper>
      {/* Hero Header */}
      <section className="min-h-screen flex items-center justify-center bg-fm-dark text-white pt-16 pb-24 mb-3 overflow-hidden relative">
        {/* Background elements */}
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
                Our Design Portfolio
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-xl md:text-2xl text-fm-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              Where <span className="font-medium text-white">creativity meets strategy</span> to build remarkable digital experiences
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

      {/* Portfolio Grid */}
      <div className="">
        <div className="max-w-7xl mx-auto pb-5 my-10 px-6">
          {/* Uneven Grid Container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]"
          >
            {designProjects.map((project) => {
              const gridClass = 
                project.size === 'wide' ? 'md:col-span-2' : 
                project.size === 'tall' ? 'md:row-span-2' :
                project.size === 'big' ? 'md:col-span-2 md:row-span-2' : '';
              
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className={`group relative rounded-xl overflow-hidden shadow-2xl ${gridClass}`}
                >
                  {/* Image placeholder with loading animation */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    loading="lazy"
                  />
                  
                  {/* Project Info */}
                  <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                    <span className="text-sm font-medium text-indigo-400">
                      {project.type}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mt-2">{project.description}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="px-3 py-1 bg-gray-800/80 text-white text-xs rounded-full backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA Section */}
        
        </div>
        <Footer/>
      </div>
    </PageWrapper>
  );
};

export default DesignPortfolio;