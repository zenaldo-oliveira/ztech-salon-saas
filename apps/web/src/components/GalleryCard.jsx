import React from 'react';
import { motion } from 'framer-motion';

function GalleryCard({ image, category, alt, onClick, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-square"
    >
      <img
        src={image}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-4 left-4 right-4">
          <span className="inline-block px-3 py-1 rounded-lg bg-primary/90 text-white text-sm font-medium">
            {category}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default GalleryCard;