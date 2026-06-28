import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Star } from 'lucide-react';

function BrandingSection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-effect rounded-[2.5rem] p-10 md:p-16 text-center shadow-xl border border-primary/10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none">
            <Star className="w-24 h-24 text-secondary rotate-12" />
          </div>
          <div className="absolute bottom-0 left-0 p-8 opacity-20 pointer-events-none">
            <Sparkles className="w-24 h-24 text-primary -rotate-12" />
          </div>

          <div className="inline-flex items-center justify-center p-3 bg-accent rounded-2xl mb-8">
            <Heart className="w-6 h-6 text-primary fill-primary/20" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold text-foreground mb-6 tracking-tight">
            Studio Blessed
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto mb-12">
            Seu Espaço de Beleza, Cuidado e Autoestima
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Unhas</span>
              <div className="h-1 w-12 bg-accent rounded-full" />
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Pele</span>
              <div className="h-1 w-12 bg-accent rounded-full" />
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Depilação</span>
              <div className="h-1 w-12 bg-accent rounded-full" />
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Tratamentos</span>
              <div className="h-1 w-12 bg-accent rounded-full" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default BrandingSection;