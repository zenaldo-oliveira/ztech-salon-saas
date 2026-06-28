import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart, ShieldCheck, Sparkles, Gem, Phone } from 'lucide-react';

function AnnaOliveiraSection() {
  const highlights = [
    { icon: Heart, label: "Humanização" },
    { icon: ShieldCheck, label: "Experiência" },
    { icon: Sparkles, label: "Paixão" },
    { icon: Gem, label: "Profissionalismo" }
  ];

  return (
    <section className="py-24 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/20 rounded-[2.5rem] transform -rotate-6 scale-[1.02] -z-10" />
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/20">
              <img
                src="https://images.unsplash.com/photo-1624574966266-1cdd65b74500"
                alt="Anna Oliveira - Especialista em Estética"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-xl font-serif font-bold">Anna Oliveira</p>
                <p className="text-white/80 font-medium">Fundadora & Esteticista Chefe</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-3 block">
                A Alma do Studio
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
                Cuidar de você é a minha maior vocação.
              </h2>
            </div>

            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                Desde o início da minha jornada no mundo da estética, meu propósito nunca foi apenas realizar procedimentos, mas sim <strong>tocar vidas</strong>.
              </p>
              <p>
                Acredito que cada mulher que entra no Studio Blessed carrega uma história única. Meu trabalho é oferecer um ambiente seguro, acolhedor e altamente profissional, onde você possa se reconectar com a sua essência e aflorar a sua beleza natural.
              </p>
              <p>
                Utilizo técnicas refinadas e produtos de altíssima qualidade, mas o ingrediente principal de cada atendimento sempre será o carinho e a atenção aos detalhes.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 bg-accent/50 p-4 rounded-xl">
                  <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-semibold text-foreground text-sm">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-primary/25 transition-all">
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 mr-2" />
                  Agendar Consulta
                </a>
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default AnnaOliveiraSection;