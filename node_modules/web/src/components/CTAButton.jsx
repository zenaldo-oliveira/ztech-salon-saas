import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

function CTAButton({ text = 'Agendar Agora', message, className = '', variant = 'default' }) {
  const whatsappNumber = '5511999999999';
  const defaultMessage = 'Olá! Gostaria de agendar um horário no Studio Blessed.';

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button
        asChild
        size="lg"
        variant={variant}
        className={`bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
      >
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message || defaultMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Phone className="w-5 h-5 mr-2" />
          {text}
        </a>
      </Button>
    </motion.div>
  );
}

export default CTAButton;