import { motion } from 'framer-motion';
import Container from '../ui/Container';
import { CodeBracketIcon, WindowIcon, CpuChipIcon, CommandLineIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Web Development',
    description: 'I create responsive, fast-loading websites that work flawlessly across all devices. From simple landing pages to complex web applications.',
    icon: WindowIcon,
    features: [
      'Custom Web Applications',
      'E-commerce Solutions',
      'Progressive Web Apps',
      'Responsive Design',
      'Performance Optimization'
    ]
  },
  {
    title: 'Software Development',
    description: 'Delivering tailored software solutions that streamline your business operations. I focus on creating maintainable, secure applications.',
    icon: CodeBracketIcon,
    features: [
      'Custom Business Applications',
      'API Development',
      'System Integration',
      'Database Design',
      'Cloud Solutions'
    ]
  },
  {
    title: 'Backend Development',
    description: 'Robust server-side solutions that power your applications. Focusing on scalability, security, and performance.',
    icon: CpuChipIcon,
    features: [
      'API Architecture',
      'Database Management',
      'Server Configuration',
      'Security Implementation',
      'Performance Optimization'
    ]
  },
  {
    title: 'Technical Consultation',
    description: 'Strategic technical guidance to help you make informed decisions about your project\'s architecture and technology stack.',
    icon: CommandLineIcon,
    features: [
      'Architecture Planning',
      'Technology Selection',
      'Security Assessment',
      'Performance Audits',
      'Technical Documentation'
    ]
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-dark-900/50 relative">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900/95 to-dark-900 -z-10" />
      
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
            Expert Services to Power Your
            <span className="gradient-text block mt-1">Digital Success</span>
          </h2>
          <p className="text-dark-300 text-lg">
            Comprehensive software development solutions tailored to your business needs.
            Each service is delivered with expertise, attention to detail, and a focus on value.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-dark-800 rounded-xl p-8 h-full 
                            border border-dark-700/50 
                            transition-all duration-500 ease-out
                            hover:border-primary-500/30
                            hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]
                            overflow-hidden">
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Animated Corner Borders */}
                <div className="absolute top-0 left-0 w-20 h-20">
                  <div className="absolute top-0 left-0 w-[2px] h-0 bg-primary-500 
                                group-hover:h-full transition-all duration-700" />
                  <div className="absolute top-0 left-0 h-[2px] w-0 bg-primary-500 
                                group-hover:w-full transition-all duration-700" />
                </div>
                <div className="absolute bottom-0 right-0 w-20 h-20">
                  <div className="absolute bottom-0 right-0 w-[2px] h-0 bg-primary-500 
                                group-hover:h-full transition-all duration-700" />
                  <div className="absolute bottom-0 right-0 h-[2px] w-0 bg-primary-500 
                                group-hover:w-full transition-all duration-700" />
                </div>

                {/* Service Header */}
                <div className="flex items-start gap-4 mb-8 relative">
                  <div className="p-4 rounded-xl bg-dark-700/50 border border-dark-600
                                group-hover:bg-primary-500/10 group-hover:border-primary-500/20
                                transition-all duration-300">
                    <service.icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-dark-100 group-hover:text-primary-400 
                                 transition-colors duration-300">{service.title}</h3>
                    <p className="text-dark-300">{service.description}</p>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-4 relative">
                  {service.features.map((feature) => (
                    <li 
                      key={feature} 
                      className="flex items-center gap-3 text-dark-200 group/item
                               hover:text-dark-100 transition-colors duration-300"
                    >
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
                      {feature}
                    </li>
                  ))}
                </ul>
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
          className="text-center mt-16"
        >
          <a 
            href="#contact" 
            className="btn-primary group inline-flex items-center gap-2"
          >
            Discuss Your Project
            <svg
              className="w-5 h-5 transform transition-transform group-hover:translate-x-1"
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

export default Services;