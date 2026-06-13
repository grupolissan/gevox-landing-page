import React from 'react';
import { motion } from 'framer-motion';

const GevoxLogo = ({ className = "w-10 h-10", animated = false }) => {
  const imageProps = {
    src: "/logo-gevox.png",
    alt: "Gevox Logo",
    className: className,
  };

  if (animated) {
    return (
      <motion.img
        {...imageProps}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />
    );
  }

  return <img {...imageProps} />;
};

export default GevoxLogo;