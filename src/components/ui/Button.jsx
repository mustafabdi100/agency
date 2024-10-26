// src/components/ui/Button.jsx
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  href = '#',
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center';
  const variants = {
    primary: 'btn-primary',
    outline: 'btn-outline',
  };

  const Component = href ? 'a' : motion.button;
  
  return (
    <Component
      href={href}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;