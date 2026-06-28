import React from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import BrandingSection from '@/components/BrandingSection.jsx';
import ServiceHighlights from '@/components/ServiceHighlights.jsx';
import BeforeAfterSlider from '@/components/BeforeAfterSlider.jsx';
import TestimonialCarousel from '@/components/TestimonialCarousel.jsx';
import NumbersSection from '@/components/NumbersSection.jsx';
import AnnaOliveiraSection from '@/components/AnnaOliveiraSection.jsx';

import { beforeAfterData } from '@/data/BeforeAfterData.js';

function HomePage() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const whatsappNumber = '5511999999999';

  return (
    <>
      <Helmet>
        <title>Studio Blessed - Beleza, Cuidado e Autoestima</title>
        <meta
          name="description"
          content="Premium beauty studio in São Paulo. Transforme sua autoestima com nossos tratamentos estéticos, unhas, depilação e muito mais."
        />
      </Helmet>

      <Header />

      <main className="bg-background">
        {/* HERO SECTION */}
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
          <motion.div
            style={{ y: heroY, opacity }}
            className="absolute inset-0 z-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1633681926019-03bd9325ec20)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-background/95" />
          </motion.div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3 mb-8"
            >
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 mr-2 text-secondary" />
                Especialista em Beleza Feminina
              </span>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 mr-2 text-secondary" />
                Ambiente Premium
              </span>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 mr-2 text-secondary" />
                Atendimento Personalizado
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold text-white mb-6 leading-tight max-w-4xl text-balance"
              style={{ letterSpacing: '-0.02em' }}
            >
              Seu Momento de Beleza, Cuidado e Autoestima
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-2xl text-white/80 mb-12 max-w-2xl font-light"
            >
              Experimente tratamentos estéticos de luxo desenhados exclusivamente para realçar a sua essência.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto"
            >
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-primary/30 transition-all hover:scale-105 active:scale-95">
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 mr-2" />
                  Agendar Agora
                </a>
              </Button>
              
              <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 rounded-full px-8 py-6 text-lg transition-all hover:scale-105 active:scale-95">
                <a href="#services">
                  Conhecer Serviços
                </a>
              </Button>
            </motion.div>

          </div>
        </section>

        {/* BRANDING SECTION */}
        <BrandingSection />

        {/* FEATURED SERVICES */}
        <section id="services" className="py-24 bg-accent/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
                Serviços em Destaque
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Especialidades criadas para proporcionar resultados surpreendentes e momentos de relaxamento.
              </p>
            </div>
            
            <ServiceHighlights />
          </div>
        </section>

        {/* BEFORE & AFTER SECTION */}
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
                Resultados Reais
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Acompanhe as transformações das nossas clientes. Deslize para comparar o antes e depois de cada procedimento.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {beforeAfterData.slice(0, 6).map((item, index) => (
                <BeforeAfterSlider key={item.id} item={item} index={index} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 rounded-full">
                <a href="/gallery">Ver Mais Resultados</a>
              </Button>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="py-24 bg-gradient-to-br from-accent/40 via-background to-accent/40 border-y border-border/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4 text-balance">
                Experiências Inesquecíveis
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                O que dizem as clientes que já vivenciaram a magia do Studio Blessed.
              </p>
            </div>
            
            <TestimonialCarousel />
          </div>
        </section>

        {/* NUMBERS SECTION */}
        <NumbersSection />

        {/* ANNA OLIVEIRA SECTION */}
        <AnnaOliveiraSection />

        {/* FINAL CTA SECTION */}
        <section className="relative py-32 overflow-hidden bg-background">
          <div className="absolute inset-0 z-0 flex items-center justify-center">
            <div className="w-full max-w-5xl h-full bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 blur-3xl opacity-50" />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-3xl p-10 md:p-16 text-center border border-primary/20 shadow-2xl"
            >
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance leading-tight">
                Agende Seu Horário e Viva Sua Melhor Versão
              </h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Permita-se um momento de cuidado, autoestima e bem-estar. Estamos prontas para realçar toda a beleza que existe em você.
              </p>
              
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-8 text-xl shadow-xl hover:shadow-primary/30 transition-all hover:scale-105 active:scale-95">
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                  <Phone className="w-6 h-6 mr-3" />
                  Falar pelo WhatsApp
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

export default HomePage;