'use client';
import { Users, Target, Lightbulb, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function RefinedAbout() {
  const stats = [
    { number: "3+", label: "Years Experience" },
    { number: "150+", label: "Happy Clients" },
    { number: "500+", label: "Projects Delivered" },
    { number: "24/7", label: "Support Available" }
  ];

  const values = [
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on delivering measurable outcomes that directly impact your bottom line and operational efficiency."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We stay ahead of the curve, implementing cutting-edge AI technologies to give you competitive advantages."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our success. We work closely with you to understand your unique challenges and goals."
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Every solution undergoes rigorous testing and quality checks to ensure reliability and performance."
    }
  ];

  return (
    <motion.section
      id="about"
      className="py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <motion.h2
                className="text-4xl lg:text-6xl font-extralight text-white mb-6 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                Transforming Businesses with 
                <span className="font-light bg-gradient-to-r from-[#A855F7] to-[#D946EF] bg-clip-text text-transparent"> AI Innovation</span>
              </motion.h2>
              <motion.p
                className="text-lg font-light text-gray-100 leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                We are a team of AI specialists and automation experts dedicated to helping businesses 
                harness the power of artificial intelligence. Our mission is to make advanced automation 
                accessible to companies of all sizes.
              </motion.p>
              <motion.p
                className="text-lg font-light text-gray-100 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                From startups to enterprise organizations, we've helped hundreds of clients streamline 
                their operations, reduce costs, and accelerate growth through intelligent automation solutions.
              </motion.p>
            </div>

            <motion.div
              className="grid grid-cols-2 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15
                  }
                }
              }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-[#A855F7]/15 to-[#D946EF]/15 border border-[#A855F7]/20"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-3xl font-extralight bg-gradient-to-r from-[#A855F7] to-[#D946EF] bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-light text-sm tracking-widest uppercase">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-[#A855F7]/30 to-[#D946EF]/30 backdrop-blur-sm border-2 border-[#D946EF]/30 p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <motion.h3
                  className="text-2xl font-light mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                >
                  Why Choose AutoFlow AI?
                </motion.h3>
                <div className="space-y-6">
                  {/* Animating each value block */}
                  <motion.div className="flex items-start space-x-4" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6, delay: 0.1 }}>
                    <div className="bg-white/20 p-2 border border-white/30 flex-shrink-0">
                      <Target className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-light mb-2">Proven Track Record</h4>
                      <p className="text-gray-200 text-sm font-light">Successfully delivered automation solutions across various industries</p>
                    </div>
                  </motion.div>
                  <motion.div className="flex items-start space-x-4" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6, delay: 0.2 }}>
                    <div className="bg-white/20 p-2 border border-white/30 flex-shrink-0">
                      <Lightbulb className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-light mb-2">Cutting-Edge Technology</h4>
                      <p className="text-gray-200 text-sm font-light">Latest AI frameworks and automation tools for optimal performance</p>
                    </div>
                  </motion.div>
                  <motion.div className="flex items-start space-x-4" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.6, delay: 0.3 }}>
                    <div className="bg-white/20 p-2 border border-white/30 flex-shrink-0">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-light mb-2">Dedicated Support</h4>
                      <p className="text-gray-200 text-sm font-light">Ongoing support and maintenance for all our automation solutions</p>
                    </div>
                  </motion.div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            </div>
          </motion.div>
        </div>

        <div className="mt-20">
          <motion.h3
            className="text-3xl font-light text-center text-white mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Our Core Values
          </motion.h3>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="bg-gradient-to-br from-[#A855F7]/20 to-[#D946EF]/20 border border-[#A855F7]/30 p-6 mb-4 group-hover:border-[#D946EF]/40 transition-all duration-300">
                    <IconComponent className="h-8 w-8 text-[#D946EF] mx-auto mb-4" />
                    <h4 className="font-light text-white mb-2">{value.title}</h4>
                    <p className="text-sm text-gray-300 leading-relaxed font-light">{value.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
