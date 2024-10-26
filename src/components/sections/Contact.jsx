import { motion } from 'framer-motion';
import Container from '../ui/Container';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  const contactMethods = [
    {
      icon: EnvelopeIcon,
      title: 'Email',
      value: 'info@mustafa.co.ke',
      link: 'mailto:mail@mustafa.co.ke',
      description: 'Drop me an email anytime',
    },
    {
      icon: GlobeAltIcon,
      title: 'Social',
      value: '@mustafa',
      link: '#',
      description: 'Lets connect on social media',
    },
    {
      icon: MapPinIcon,
      title: 'Location',
      value: 'Nairobi, Kenya',
      link: '#',
      description: 'Available for local meetups',
    }
  ];

  return (
    <section id="contact" className="section-padding relative bg-dark-900/50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-700/10 rounded-full blur-3xl" />
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
            Ready to Bring Your
            <span className="gradient-text block mt-1">Vision to Life?</span>
          </h2>
          <p className="text-dark-300 text-lg">
            Let's discuss how we can work together to create something extraordinary.
            I'm always excited to hear about new projects and challenges.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-dark-800 rounded-2xl p-8 border border-dark-700">
              <h3 className="text-xl font-bold mb-6 text-dark-50">Let's Connect</h3>
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.title}
                    href={method.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-dark-800 border border-dark-700 
                             hover:border-primary-500/30 group transition-all duration-300"
                  >
                    <div className="p-3 rounded-xl bg-dark-700/50 border border-dark-600 
                                  group-hover:border-primary-500/20 group-hover:bg-primary-500/10 
                                  transition-all duration-300">
                      <method.icon className="w-6 h-6 text-primary-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-100 mb-1 group-hover:text-primary-400 
                                   transition-colors duration-300">
                        {method.title}
                      </h4>
                      <p className="text-dark-400 text-sm mb-1">{method.description}</p>
                      <p className="text-dark-200">{method.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-dark-800 rounded-2xl p-8 border border-dark-700"
            >
              <h3 className="text-xl font-bold mb-6 text-dark-50">Social Profiles</h3>
              <div className="flex flex-wrap gap-4">
                {['GitHub', 'LinkedIn', 'Twitter', 'Instagram'].map((platform, index) => (
                  <motion.a
                    key={platform}
                    href="#"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ y: -2 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="px-6 py-3 rounded-xl bg-dark-700/50 border border-dark-600 
                             text-dark-200 hover:text-primary-400 hover:border-primary-500/30 
                             transition-all duration-300"
                  >
                    {platform}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="bg-dark-800 rounded-2xl p-8 border border-dark-700">
              <h3 className="text-xl font-bold mb-6 text-dark-50">Send a Message</h3>
              
              <div className="space-y-6">
                {/* Name Input */}
                <div>
                  <label className="block text-sm font-medium text-dark-200 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-xl 
                             text-dark-100 placeholder-dark-400
                             focus:outline-none focus:ring-2 focus:ring-primary-500/20 
                             focus:border-primary-500/30 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-medium text-dark-200 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-xl 
                             text-dark-100 placeholder-dark-400
                             focus:outline-none focus:ring-2 focus:ring-primary-500/20 
                             focus:border-primary-500/30 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-sm font-medium text-dark-200 mb-2">Message</label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-xl 
                             text-dark-100 placeholder-dark-400 resize-none
                             focus:outline-none focus:ring-2 focus:ring-primary-500/20 
                             focus:border-primary-500/30 transition-all duration-300"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full btn-primary group"
                >
                  <span className="flex items-center justify-center gap-2">
                    Send Message
                    <EnvelopeIcon className="w-5 h-5 transform transition-transform duration-300 
                                          group-hover:translate-x-1" />
                  </span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;