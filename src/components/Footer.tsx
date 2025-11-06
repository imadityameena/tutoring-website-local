import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, BookOpen } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'One-on-One Tutoring', path: '/services' },
    { name: 'Assignment Help', path: '/services' },
    { name: 'Instant Help (24hrs)', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
  ],
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Contact', path: '/about' },
    { name: 'Admin', path: '/login' },
  ],
};

const contactInfo = [
  { icon: Mail, text: 'support@tutoring.com', href: 'mailto:support@tutoring.com' },
  { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
  { icon: MapPin, text: '123 Education St, Learning City, LC 12345', href: null },
];

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <motion.div
        className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              >
                <BookOpen className="h-8 w-8 text-blue-500" />
              </motion.div>
              <span className="text-white font-semibold">EduHelp Pro</span>
            </Link>
            <p className="text-sm text-gray-400">
              Empowering students to achieve their academic goals through personalized tutoring and expert guidance.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 pt-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <motion.li key={link.name} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <motion.li key={link.name} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.map((info) => (
                <motion.li
                  key={info.text}
                  className="flex items-start space-x-3"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <info.icon className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-sm text-gray-400 hover:text-blue-500 transition-colors"
                    >
                      {info.text}
                    </a>
                  ) : (
                    <span className="text-sm text-gray-400">{info.text}</span>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} EduHelp Pro. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <motion.a
                href="#"
                className="text-sm text-gray-400 hover:text-blue-500 transition-colors"
                whileHover={{ y: -2 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                className="text-sm text-gray-400 hover:text-blue-500 transition-colors"
                whileHover={{ y: -2 }}
              >
                Terms of Service
              </motion.a>
              <motion.a
                href="#"
                className="text-sm text-gray-400 hover:text-blue-500 transition-colors"
                whileHover={{ y: -2 }}
              >
                Cookie Policy
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
