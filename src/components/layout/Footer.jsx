import { motion } from 'framer-motion';
import Container from '../ui/Container';
import {
  EnvelopeIcon,
  MapPinIcon,
  ChatBubbleBottomCenterTextIcon
} from '@heroicons/react/24/outline';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { title: 'Services', href: '#services' },
    { title: 'Process', href: '#process' },
    { title: 'Technologies', href: '#technologies' },
    { title: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'Instagram', href: '#' },
  ];

  return (
    <footer className="relative bg-dark-900 pt-20 pb-10 border-t border-dark-800">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900/50 to-dark-900" />

      <Container className="relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 
                         bg-clip-text text-transparent mb-4">
              YourName
            </h3>
            <p className="text-dark-300 mb-6 max-w-md">
              Transforming ideas into exceptional digital experiences. 
              Specializing in modern web development and innovative software solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-2 rounded-lg bg-dark-800 border border-dark-700 
                           text-dark-300 hover:text-primary-400 hover:border-primary-500/30 
                           transition-all duration-300"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-dark-100 mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {navigationLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="text-dark-300 hover:text-primary-400 transition-colors duration-300 
                             flex items-center gap-2 group"
                  >
                    <span className="h-px w-4 bg-dark-700 group-hover:w-6 group-hover:bg-primary-500 
                                   transition-all duration-300" />
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-dark-100 mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:hello@yourdomain.com"
                  className="text-dark-300 hover:text-primary-400 transition-colors duration-300 
                           flex items-center gap-3 group"
                >
                  <EnvelopeIcon className="w-5 h-5 text-dark-400 group-hover:text-primary-400 
                                         transition-colors duration-300" />
                  info@mustafa.co.ke
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  className="text-dark-300 hover:text-primary-400 transition-colors duration-300 
                           flex items-center gap-3 group"
                >
                  <MapPinIcon className="w-5 h-5 text-dark-400 group-hover:text-primary-400 
                                      transition-colors duration-300" />
                  Nairobi, Kenya
                </a>
              </li>
              <li>
                <a 
                  href="#contact"
                  className="text-dark-300 hover:text-primary-400 transition-colors duration-300 
                           flex items-center gap-3 group"
                >
                  <ChatBubbleBottomCenterTextIcon className="w-5 h-5 text-dark-400 
                                                           group-hover:text-primary-400 
                                                           transition-colors duration-300" />
                  Let's Talk
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dark-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-dark-400 text-sm"
              >
                © {currentYear} Mustafa. All rights reserved.
              </motion.p>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-dark-400 hover:text-primary-400 text-sm 
                                   transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-dark-400 hover:text-primary-400 text-sm 
                                   transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;