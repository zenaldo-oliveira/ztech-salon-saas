import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    id: 1,
    name: 'Carolina Mendes',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    rating: 5,
    text: 'A experiência no Studio Blessed é indescritível! A Anna tem mãos de fada, o ambiente é super acolhedor e os resultados dos procedimentos superaram todas as minhas expectativas.'
  },
  {
    id: 2,
    name: 'Amanda Vasconcelos',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    rating: 5,
    text: 'Profissionalismo do começo ao fim. Faço minhas unhas em gel e limpeza de pele apenas com elas. O cuidado e atenção aos detalhes fazem toda a diferença na minha autoestima.'
  },
  {
    id: 3,
    name: 'Beatriz Fonseca',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    rating: 5,
    text: 'Lugar maravilhoso! Eu sempre tive muito medo de fazer depilação por conta da dor, mas no Studio Blessed o procedimento é quase indolor e a pele fica perfeita.'
  },
  {
    id: 4,
    name: 'Juliana Castro',
    photo: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04',
    rating: 5,
    text: 'Encontrei meu refúgio de beleza. O banho de lua é maravilhoso e a equipe te faz sentir única. Sem dúvida, o melhor estúdio da região!'
  },
  {
    id: 5,
    name: 'Isabella Rocha',
    photo: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43',
    rating: 5,
    text: 'Atendimento humanizado de verdade. A Anna sempre me explica cada etapa do tratamento estético. Confio de olhos fechados e indico para todas as minhas amigas.'
  }
];

function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div 
      className="relative max-w-4xl mx-auto py-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden relative min-h-[300px] md:min-h-[250px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute w-full px-4 md:px-12"
          >
            <div className="glass-effect p-8 md:p-10 rounded-3xl shadow-xl flex flex-col md:flex-row gap-8 items-center md:items-start relative border border-primary/10">
              <Quote className="absolute top-6 right-8 w-16 h-16 text-primary/10 -z-10 rotate-180" />
              
              <div className="flex-shrink-0 text-center md:text-left flex flex-col items-center md:items-start">
                <Avatar className="w-24 h-24 border-4 border-accent shadow-md mb-4">
                  <AvatarImage src={testimonials[currentIndex].photo} alt={testimonials[currentIndex].name} />
                  <AvatarFallback className="bg-primary/20 text-primary font-bold text-xl">
                    {testimonials[currentIndex].name.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex space-x-1 mb-2">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <h4 className="font-serif font-bold text-lg text-foreground">
                  {testimonials[currentIndex].name}
                </h4>
              </div>

              <div className="flex-grow">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed italic text-center md:text-left">
                  "{testimonials[currentIndex].text}"
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center space-x-6 mt-8">
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-background/50 border border-border text-foreground hover:bg-primary hover:text-white transition-all hover:shadow-md"
          aria-label="Depoimento anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <div className="flex space-x-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === idx ? 'bg-primary w-8' : 'bg-primary/30 hover:bg-primary/50'
              }`}
              aria-label={`Ir para depoimento ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full flex items-center justify-center bg-background/50 border border-border text-foreground hover:bg-primary hover:text-white transition-all hover:shadow-md"
          aria-label="Próximo depoimento"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default TestimonialCarousel;