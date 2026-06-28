import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

function TestimonialCard({ name, photo, review, rating = 5, index = 0 }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-effect rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
        ))}
      </div>

      <p className="text-muted-foreground leading-relaxed mb-6 italic">
        "{review}"
      </p>

      <div className="flex items-center space-x-3">
        <Avatar className="w-12 h-12 rounded-xl">
          <AvatarImage src={photo} alt={name} />
          <AvatarFallback className="rounded-xl bg-primary/10 text-primary font-semibold">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-muted-foreground">Cliente</p>
        </div>
      </div>
    </motion.div>
  );
}

export default TestimonialCard;