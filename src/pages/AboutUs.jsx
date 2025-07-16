import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import { container, item } from "./Home";
import Footer from "../components/footer";

// Icons (using Heroicons)
const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-green-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const AboutUs = () => {
  // Timeline data
  const timeline = [
    { year: "2015", event: "Company founded with 3 team members" },
    { year: "2017", event: "First major client partnership" },
    { year: "2019", event: "Expanded to international markets" },
    { year: "2022", event: "Reached 100+ employees" },
    { year: "2023", event: "Launched flagship product line" },
  ];

  // Why Choose Us points
  const benefits = [
    "Industry-leading expertise",
    "Proven track record",
    "Innovative solutions",
    "Dedicated support team",
    "Competitive pricing",
    "Sustainable practices",
  ];

  return (
    <PageWrapper>
      {/* Hero Header */}

      <section className="min-h-screen flex items-center justify-center bg-fm-dark text-white pt-16 pb-24 relative overflow-hidden">
        {/* Enhanced background elements */}
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
                Crafting Digital Excellence
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-xl md:text-2xl text-fm-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
            >
              We are{" "}
              <span className="font-medium text-white">
                visionaries, creators, and problem-solvers
              </span>{" "}
              committed to building digital experiences that matter.
            </motion.p>

            <motion.div variants={item} className="mb-16">
              <div className="relative inline-block">
                <div className="w-24 h-1 bg-gradient-to-r from-fm-primary to-fm-accent rounded-full" />
                <div className="absolute inset-0 bg-gradient-to-r from-fm-primary to-fm-accent rounded-full opacity-0 hover:opacity-100 transition-opacity duration-500 blur-sm" />
              </div>
            </motion.div>

            <motion.div
              variants={item}
              className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              {[
                {
                  title: "Our Philosophy",
                  content:
                    "We believe in design that speaks and technology that works, creating harmony between form and function.",
                  color: "from-fm-primary to-purple-500",
                },
                {
                  title: "Our Difference",
                  content:
                    "What sets us apart is our relentless focus on user needs and business goals simultaneously.",
                  color: "from-fm-accent to-pink-500",
                },
                {
                  title: "Our Promise",
                  content:
                    "Delivering not just projects, but partnerships that grow with your business over time.",
                  color: "from-amber-400 to-orange-500",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{
                    opacity: 0.5,
                    y: 0,
                    transition: {
                      delay: index * 0.1,
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{
                    y: -8,
                    opacity: 1,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  className={`bg-gradient-to-br ${item.color} p-0.5 rounded-xl`}
                >
                  <div className="h-full bg-fm-gray-900/80 p-6 rounded-[11px] backdrop-blur-sm">
                    <h3 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r ${item.color}">
                      {item.title}
                    </h3>
                    <p className="text-fm-gray-300 leading-relaxed text-sm">
                      {item.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={item}
              className="mt-20 flex flex-col sm:flex-row justify-center gap-4"
            >
              <motion.button
                whileHover={{
                  y: -4,
                  boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.5)",
                }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="px-8 py-4 bg-gradient-to-r from-fm-primary to-fm-accent text-white rounded-xl font-medium text-lg relative overflow-hidden group"
              >
                <span className="relative z-10">Explore Our Culture</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full" />
              </motion.button>

              <motion.button
                whileHover={{
                  y: -4,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.15)",
                }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="px-8 py-4 bg-fm-gray-800/60 border-2 border-fm-gray-700 hover:border-fm-primary text-white rounded-xl font-medium text-lg backdrop-blur-sm"
              >
                See Our Work
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <div className="py-16 bg-fm-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12"
          >
            {/* Mission */}
            <motion.div
              initial={{ x: -50 }}
              whileInView={{ x: 0 }}
              transition={{ type: "spring" }}
              viewport={{ once: true }}
              className="bg-blue-50 p-8 rounded-lg"
            >
              <h2 className="text-2xl font-bold text-blue-800 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700 mb-4">
                To empower businesses through innovative technology solutions
                that drive growth, efficiency, and sustainable success.
              </p>
              <p className="text-gray-700">
                We believe in creating tools that don't just solve problems
                today, but transform how businesses operate tomorrow.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ x: 50 }}
              whileInView={{ x: 0 }}
              transition={{ type: "spring" }}
              viewport={{ once: true }}
              className="bg-indigo-50 p-8 rounded-lg"
            >
              <h2 className="text-2xl font-bold text-indigo-800 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-700 mb-4">
                To be the global leader in business transformation technology,
                recognized for our commitment to excellence and positive impact.
              </p>
              <p className="text-gray-700">
                We envision a world where every business has access to the tools
                they need to thrive in the digital age.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Our Story - Timeline */}
      <div className="py-16 bg-fm-panel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Journey
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-blue-200"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 2 }}
                viewport={{ once: true }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                }`}
              >
                <div
                  className={`md:flex ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}
                >
                  <div className="md:w-1/2">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="flex items-center md:hidden mb-2">
                        <div className="w-4 h-4 bg-blue-600 rounded-full mr-2"></div>
                        <span className="font-bold text-blue-600">
                          {item.year}
                        </span>
                      </div>
                      <p className="md:hidden text-gray-700">{item.event}</p>

                      {/* Desktop view */}
                      <div className="hidden md:block">
                        <h3 className="font-bold text-gray-800">
                          {item.event}
                        </h3>
                        <p className="text-blue-600 font-medium mt-2">
                          {item.year}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 bg-fm-panel text-black relative">
         <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 0.2,
            x: "-30%",
            y: "-20%",
            transition: { duration: 2.5, ease: [0.16, 1, 0.3, 1] },
          }}
          className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full  bg-fm-primary blur-[110px]"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 , scale:0 }}
            whileInView={{ opacity: 1, scale:1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Why Choose Us
          </motion.h2>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-6 rounded-lg flex z-10 items-start"
              >
                <CheckIcon />
                <span className="ml-3 text-gray-800">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          
        </div>
        
      </div>
      <Footer/>
    </PageWrapper>
  );
};

export default AboutUs;
