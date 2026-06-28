import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sparkles, Flower2, Scissors, Wand2, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

function ServiceHighlights() {
  const mainServices = [
    {
      icon: Wand2,
      name: "Unhas em Gel",
      description: "Alongamento perfeito com aspecto natural, máxima resistência e durabilidade prolongada."
    },
    {
      icon: Flower2,
      name: "Estética Facial",
      description: "Limpeza profunda e tratamentos específicos para renovar e iluminar a sua pele."
    },
    {
      icon: Scissors,
      name: "Depilação Premium",
      description: "Remoção de pelos com ceras de alta qualidade, garantindo conforto e pele macia."
    },
    {
      icon: Sparkles,
      name: "Spa dos Pés",
      description: "Momento de relaxamento intenso com esfoliação, hidratação e esmaltação impecável."
    },
    {
      icon: Star,
      name: "Banho de Lua",
      description: "Clareamento dos pelos e hidratação profunda corporal, deixando a pele iluminada."
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
      {mainServices.map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex flex-col h-full bg-card rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-xl hover:border-primary/30 transition-all duration-300 group"
        >
          <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform duration-300">
            <service.icon className="w-7 h-7 text-primary" />
          </div>
          
          <h3 className="text-xl font-serif font-bold text-foreground mb-3">{service.name}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
            {service.description}
          </p>
          
          <Button 
            asChild 
            variant="ghost" 
            className="w-full mt-auto justify-center hover:bg-primary hover:text-white transition-colors border border-transparent group-hover:border-primary/20"
          >
            <Link to="/services">Conhecer Mais</Link>
          </Button>
        </motion.div>
      ))}
    </div>
  );
}

export default ServiceHighlights;