import React from 'react';
import { Helmet } from 'react-helmet';
import { Sparkles, Scissors, Droplet, Sun, Flower2, Wand2, Palette, Heart, Star, Zap } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';

function ServicesPage() {
  const services = [
    {
      icon: Sparkles,
      title: 'Manicure',
      description: 'Cuidado completo para suas mãos com técnicas profissionais, cutilagem perfeita e acabamento impecável.'
    },
    {
      icon: Flower2,
      title: 'Pedicure',
      description: 'Tratamento relaxante para seus pés com esfoliação, hidratação profunda e esmaltação de alta qualidade.'
    },
    {
      icon: Wand2,
      title: 'Alongamento de Unhas',
      description: 'Unhas longas e perfeitas com técnicas modernas de alongamento em gel ou fibra de vidro.'
    },
    {
      icon: Palette,
      title: 'Esmaltação em Gel',
      description: 'Durabilidade de até 3 semanas com brilho intenso e cores vibrantes que não descascam.'
    },
    {
      icon: Heart,
      title: 'Epilação Íntima',
      description: 'Procedimento delicado e higiênico com cera de qualidade premium e técnicas que minimizam o desconforto.'
    },
    {
      icon: Scissors,
      title: 'Depilação Feminina',
      description: 'Depilação completa com cera quente ou fria, produtos hipoalergênicos e pele macia por mais tempo.'
    },
    {
      icon: Droplet,
      title: 'Limpeza de Pele',
      description: 'Tratamento profundo que remove impurezas, cravos e oleosidade, deixando sua pele renovada e radiante.'
    },
    {
      icon: Star,
      title: 'Clareamento',
      description: 'Tratamentos clareadores para manchas e uniformização do tom da pele com produtos de alta performance.'
    },
    {
      icon: Sun,
      title: 'Banho de Lua',
      description: 'Bronzeamento artificial seguro e uniforme para um tom dourado natural sem exposição ao sol.'
    },
    {
      icon: Zap,
      title: 'Tratamentos Estéticos',
      description: 'Procedimentos personalizados para rejuvenescimento, hidratação e cuidados especiais com sua pele.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Serviços - Studio Blessed</title>
        <meta
          name="description"
          content="Conheça todos os serviços do Studio Blessed: manicure, pedicure, alongamento de unhas, depilação, limpeza de pele, banho de lua e muito mais."
        />
      </Helmet>

      <Header />

      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1
              className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight"
              style={{ textWrap: 'balance', letterSpacing: '-0.02em' }}
            >
              Nossos Serviços
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Tratamentos estéticos premium com técnicas modernas e produtos de alta qualidade para realçar sua beleza natural
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>

          <div className="mt-16 text-center glass-effect rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Não encontrou o que procura?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              Entre em contato conosco pelo WhatsApp e descubra como podemos ajudar você a alcançar seus objetivos de beleza
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default ServicesPage;