import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-dark-900">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950/50 via-dark-900 to-dark-900 -z-10" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 0.5 }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary-700 rounded-full blur-3xl"
        />
      </div>

      <Container>
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-50 mb-6"
          >
            Turning Your Digital Vision
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent block mt-2">
              Into Reality
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-dark-300 mb-8 md:mb-10"
          >
            I craft custom software solutions that solve real business problems. 
            With expertise in modern web technologies, I transform complex ideas 
            into elegant, scalable applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a 
              href="#contact"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary-600 to-primary-700 
                       text-white font-medium hover:from-primary-700 hover:to-primary-800 
                       transition-all duration-300 shadow-lg shadow-primary-600/20
                       hover:shadow-primary-700/30"
            >
              Let's Build Something Great
            </a>
            <a 
              href="#process"
              className="px-8 py-3 rounded-lg border border-dark-700 text-dark-200 
                       hover:bg-dark-800 hover:border-dark-600 transition-all duration-300"
            >
              See How I Work
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12"
          >
            {[
              { number: '3+', label: 'Years Experience' },
              { number: '50+', label: 'Projects Completed' },
              { number: '100%', label: 'Client Satisfaction' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </h3>
                <p className="text-dark-400 font-medium">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;