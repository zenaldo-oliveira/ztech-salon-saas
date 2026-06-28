import React from 'react';
import { motion } from 'framer-motion';
import { Users, HeartHandshake, Award, ThumbsUp } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

function NumbersSection() {
  const stats = [
    { 
      icon: Users, 
      end: 500, 
      suffix: '+', 
      label: 'Clientes Atendidas',
      description: 'Mulheres que transformaram sua autoestima conosco.'
    },
    { 
      icon: HeartHandshake, 
      end: 1000, 
      suffix: '+', 
      label: 'Procedimentos Realizados',
      description: 'Serviços feitos com excelência e dedicação extrema.'
    },
    { 
      icon: Award, 
      end: 5, 
      suffix: '+', 
      label: 'Anos de Experiência',
      description: 'Aprimorando técnicas e trazendo as melhores novidades.'
    },
    { 
      icon: ThumbsUp, 
      end: 98, 
      suffix: '%', 
      label: 'Taxa de Satisfação',
      description: 'O sorriso de cada cliente é a nossa maior recompensa.'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background via-accent/30 to-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4"
          >
            Nosso Compromisso em Números
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            A transparência e a dedicação que construíram a confiança do nosso espaço.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect rounded-3xl p-8 text-center border border-border/50 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
                <stat.icon className="w-8 h-8" />
              </div>
              
              <div className="mb-2">
                <AnimatedCounter end={stat.end} suffix={stat.suffix} />
              </div>
              
              <h3 className="text-lg font-bold text-foreground mb-3">{stat.label}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NumbersSection;