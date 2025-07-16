import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import { container, item } from "./Home";
import Footer from "../components/footer";

const directors = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Chief Executive Officer",
    bio: "With over 15 years of industry experience, Sarah founded the company in 2015 with a vision to transform business technology. She holds an MBA from Harvard and previously led product development at TechCorp.",
    shortBio: "Founder & CEO with 15+ years experience",
    img: "https://images.unsplash.com/photo-1748306124059-0126087eaed3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D", // Replace with actual image path
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Chief Technology Officer",
    bio: "Michael spearheads our technical innovation with expertise in AI and cloud computing. A Stanford PhD graduate, he's published numerous papers on machine learning applications in business.",
    shortBio: "CTO specializing in AI and cloud systems",
    img: "https://images.unsplash.com/photo-1747106649672-c17636e6c6a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDg0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D", // Replace with actual image path
  },
  {
    id: 3,
    name: "David Rodriguez",
    role: "Chief Financial Officer",
    bio: "David brings 20 years of financial leadership from Fortune 500 companies. He's instrumental in our global expansion and sustainable growth strategy.",
    shortBio: "CFO with Fortune 500 experience",
    img: "https://images.unsplash.com/photo-1745853707137-bde430b762aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3MHx0b3dKWkZza3BHZ3x8ZW58MHx8fHx8 ", // Replace with actual image path
  },
  {
    id: 4,
    name: "Emily Wilson",
    role: "Chief Marketing Officer",
    bio: "Emily's creative strategies have won multiple industry awards. She combines data-driven approaches with compelling storytelling to build our brand.",
    shortBio: "Award-winning marketing strategist",
    img: "https://images.unsplash.com/photo-1748015879337-ef95556c3749?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDg4fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D", // Replace with actual image path
  },
];

const DirectorCard = ({ director, onClick }) => (
  <motion.div
    whileHover={{ y: -10 }}
    whileTap={{ scale: 0.98 }}
    className="cursor-pointer"
    onClick={() => onClick(director.id)}
  >
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
      <div className="relative pb-[75%] bg-gray-200">
        {director.img && (
          <img
            src={director.img}
            alt={director.name}
            className="absolute h-full w-full object-cover"
          />
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800">{director.name}</h3>
        <p className="text-blue-600 mb-2">{director.role}</p>
        <p className="text-gray-600">{director.shortBio}</p>
      </div>
    </div>
  </motion.div>
);

const BioModal = ({ director, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.9, y: 50 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.9, y: 50 }}
      className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-200 h-64 md:h-full">
            {director.img && (
              <img
                src={director.img}
                alt={director.name}
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {director.name}
            </h2>
            <p className="text-blue-600 text-lg mb-6">{director.role}</p>
            <p className="text-gray-700 whitespace-pre-line">{director.bio}</p>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <a
                href={`mailto:${director.name
                  .split(" ")[0]
                  .toLowerCase()}@company.com`}
                className="inline-flex items-center text-blue-600 hover:text-blue-800"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Contact {director.name.split(" ")[0]}
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const Directors = () => {
  const [selectedDirector, setSelectedDirector] = useState(null);

  return (
    <PageWrapper>
    <>
     {/* Hero Header */}
      <motion.section 
        initial={{
            scale : 1,
            height: "150vh",
          
        }}
        animate={{
            height : "60vh",    
        }}
    transition={{
    
        // delay: 1,
        duration:1,
    }}
      className=" flex items-center justify-center bg-fm-dark text-white pt-16 pb-24  overflow-hidden">

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
                Meet Our Leadership
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-xl md:text-2xl text-fm-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              The visionary{" "}
              <span className="font-medium text-white">
                team driving our company forward
              </span>{" "}
              company forward
            </motion.p>

            <motion.div variants={item} className="mb-16">
              <div className="relative inline-block">
                <div className="w-24 h-1 bg-gradient-to-r from-fm-primary to-fm-accent rounded-full" />
                <div className="absolute inset-0 bg-gradient-to-r from-fm-primary to-fm-accent rounded-full opacity-0 hover:opacity-100 transition-opacity duration-500 blur-sm" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Team Grid */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {directors.map((director) => (
              <DirectorCard
                key={director.id}
                director={director}
                onClick={setSelectedDirector}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bio Modal */}
      <AnimatePresence>
        {selectedDirector && (
          <BioModal
            director={directors.find((d) => d.id === selectedDirector)}
            onClose={() => setSelectedDirector(null)}
          />
        )}
         
      </AnimatePresence>
      <Footer/>
    </>
     
    </PageWrapper>
  );
};

export default Directors;
