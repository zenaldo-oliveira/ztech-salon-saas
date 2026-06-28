import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

function ServiceCard({ icon: Icon, title, description, index = 0 }) {
  const whatsappNumber = '5511999999999';
  const whatsappMessage = `Olá! Gostaria de agendar ${title}.`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group glass-effect rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
    >
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7 text-primary" />
      </div>

      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
        {description}
      </p>

      <Button
        asChild
        className="w-full bg-primary hover:bg-primary/90 text-white mt-auto"
      >
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Phone className="w-4 h-4 mr-2" />
          Agendar Agora
        </a>
      </Button>
    </motion.div>
  );
}

export default ServiceCard;