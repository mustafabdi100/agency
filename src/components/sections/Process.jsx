import { motion } from 'framer-motion';
import Container from '../ui/Container';
import { 
  MagnifyingGlassIcon, 
  PencilSquareIcon, 
  CodeBracketIcon, 
  BeakerIcon, 
  RocketLaunchIcon 
} from '@heroicons/react/24/outline';

const processes = [
  {
    icon: MagnifyingGlassIcon,
    title: 'Discovery',
    description: 'I start by understanding your business, goals, and challenges. Through detailed discussions, I ensure every solution aligns perfectly with your vision.',
    points: [
      'Requirements gathering',
      'Business analysis',
      'Project scoping',
      'Timeline planning'
    ]
  },
  {
    icon: PencilSquareIcon,
    title: 'Planning',
    description: 'Converting requirements into actionable technical blueprints. I create detailed roadmaps ensuring transparent timelines and milestones.',
    points: [
      'Architecture design',
      'Technology selection',
      'Project roadmap',
      'Resource planning'
    ]
  },
  {
    icon: CodeBracketIcon,
    title: 'Development',
    description: 'Writing clean, efficient code with regular updates and open communication. You\'re always in the loop about your project\'s progress.',
    points: [
      'Agile development',
      'Regular updates',
      'Code reviews',
      'Progress tracking'
    ]
  },
  {
    icon: BeakerIcon,
    title: 'Testing',
    description: 'Rigorous testing ensures your solution works flawlessly. Security, performance, and reliability are never compromised.',
    points: [
      'Quality assurance',
      'Performance testing',
      'Security testing',
      'User acceptance'
    ]
  },
  {
    icon: RocketLaunchIcon,
    title: 'Launch & Support',
    description: 'Beyond deployment, I provide ongoing support and maintenance to keep your solution running smoothly.',
    points: [
      'Deployment',
      'Performance monitoring',
      'Ongoing maintenance',
      'Future updates'
    ]
  }
];

const Process = () => {
  return (
    <section id="process" className="section-padding bg-dark-900/50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-700/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <Container className="relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark-50">
            A Proven Process for
            <span className="gradient-text block mt-1">Successful Delivery</span>
          </h2>
          <p className="text-dark-300 text-lg">
            My structured approach ensures transparent communication and 
            consistent results while maintaining flexibility for your unique needs.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-primary-500/20 to-transparent hidden lg:block" />

          {processes.map((process, index) => (
            <motion.div
              key={process.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12 lg:mb-32 last:mb-0 group"
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16`}>
                {/* Process Number & Icon */}
                <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative"
                  >
                    {/* Animated Ring */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-primary-700/20 rounded-full 
                                  blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Icon Container */}
                    <div className="relative w-20 h-20 rounded-full bg-dark-800 border border-primary-500/30 
                                  flex items-center justify-center transform transition-transform duration-500
                                  group-hover:border-primary-500/50 group-hover:shadow-lg group-hover:shadow-primary-500/20">
                      <process.icon className="w-10 h-10 text-primary-400 transform transition-transform duration-500 
                                             group-hover:scale-110" />
                      
                      {/* Number Badge */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r 
                                    from-primary-600 to-primary-700 text-white flex items-center justify-center 
                                    text-sm font-bold border-2 border-dark-900">
                        {index + 1}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Process Content */}
                <div className="lg:w-1/2">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="relative p-8 rounded-xl bg-dark-800 border border-dark-700 
                             hover:border-primary-500/30 transition-all duration-500
                             hover:shadow-lg hover:shadow-primary-500/10"
                  >
                    {/* Content Gradient Border */}
                    <div className="absolute inset-px rounded-xl bg-gradient-to-br from-dark-800 to-dark-800/95" />
                    
                    <div className="relative">
                      <h3 className="text-xl font-bold mb-3 text-dark-50 group-hover:text-primary-400 
                                   transition-colors duration-300">{process.title}</h3>
                      <p className="text-dark-300 mb-6">{process.description}</p>
                      
                      {/* Points */}
                      <ul className="space-y-3">
                        {process.points.map((point) => (
                          <li key={point} className="flex items-center gap-3 text-dark-200 group/item
                                                   hover:text-dark-100 transition-colors duration-300">
                            <span className="flex-shrink-0 w-5 h-5 rounded-full border border-primary-500/20 
                                           flex items-center justify-center bg-primary-500/5">
                              <svg
                                className="w-3 h-3 text-primary-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-20"
        >
          <a 
            href="#contact" 
            className="btn-primary group inline-flex items-center gap-2"
          >
            Start Your Project
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

export default Process;

