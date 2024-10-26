import { motion } from 'framer-motion';
import Container from '../ui/Container';

const technologies = {
  frontend: [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Next.js', level: 85 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Vue.js', level: 80 }
  ],
  backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Python', level: 80 },
    { name: 'Django', level: 75 },
    { name: 'PostgreSQL', level: 85 },
    { name: 'MongoDB', level: 80 }
  ],
  tools: [
    { name: 'Git', level: 90 },
    { name: 'Docker', level: 80 },
    { name: 'AWS', level: 75 },
    { name: 'Linux', level: 85 },
    { name: 'CI/CD', level: 80 }
  ]
};

const TechCategory = ({ title, items }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-primary-700/10 
                    blur-xl rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <div className="relative bg-dark-800 rounded-xl p-8 border border-dark-700 
                    hover:border-primary-500/30 transition-all duration-500
                    hover:shadow-lg hover:shadow-primary-500/10">
        <h3 className="text-xl font-bold mb-8 text-dark-50 group-hover:text-primary-400 
                     transition-colors duration-300">{title}</h3>
        
        <div className="space-y-6">
          {items.map((tech) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group/item"
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium text-dark-200 group-hover/item:text-dark-50 
                               transition-colors duration-300">{tech.name}</span>
                <span className="text-primary-400 font-semibold">{tech.level}%</span>
              </div>
              <div className="h-2 bg-dark-700 rounded-full overflow-hidden p-[1px]">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tech.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Technologies = () => {
  return (
    <section id="technologies" className="section-padding bg-dark-900/50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-primary-700/20 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <Container>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-50">
            Cutting-Edge Technologies
            <span className="gradient-text block mt-1">Modern Stack</span>
          </h2>
          <p className="text-dark-300 text-lg">
            I stay up-to-date with the latest technologies to deliver 
            modern, efficient, and scalable solutions for your business.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TechCategory title="Frontend Development" items={technologies.frontend} />
          <TechCategory title="Backend Development" items={technologies.backend} />
          <TechCategory title="Tools & Deployment" items={technologies.tools} />
        </div>

        {/* Additional Tech Stack Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-primary-700/10 
                       blur-xl rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative bg-dark-800 rounded-xl p-8 border border-dark-700 
                       hover:border-primary-500/30 transition-all duration-500
                       hover:shadow-lg hover:shadow-primary-500/10">
            <h3 className="text-xl font-bold mb-8 text-dark-50 text-center">Additional Technologies & Tools</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'GraphQL', 'Redux', 'Jest', 'Webpack', 'Firebase',
                'Redis', 'Nginx', 'GitHub Actions', 'Kubernetes', 'Sass'
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 bg-dark-700 border border-dark-600 hover:border-primary-500/50
                           text-dark-200 hover:text-primary-400 rounded-full text-sm font-medium
                           transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-4 text-dark-50">Need a specific technology?</h3>
          <p className="text-dark-300 mb-8 max-w-2xl mx-auto">
            I'm always eager to learn and adapt to new technologies based on project requirements.
            Let's discuss your specific needs and find the perfect solution.
          </p>
          <a href="#contact" className="btn-primary group inline-flex items-center gap-2">
            Discuss Your Project
            <svg
              className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </Container>
    </section>
  );
};

export default Technologies;