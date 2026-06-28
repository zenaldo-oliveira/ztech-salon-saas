import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Heart, Award, Users, Sparkles, Target, Star } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Cuidado Personalizado',
      description: 'Cada cliente é única e merece atenção especial. Adaptamos nossos serviços às suas necessidades individuais.'
    },
    {
      icon: Award,
      title: 'Excelência Profissional',
      description: 'Técnicas atualizadas, produtos premium e certificações que garantem resultados superiores.'
    },
    {
      icon: Users,
      title: 'Relacionamento Genuíno',
      description: 'Construímos laços de confiança e amizade com cada cliente que passa por nossa porta.'
    },
    {
      icon: Sparkles,
      title: 'Ambiente Acolhedor',
      description: 'Um espaço pensado para seu conforto e bem-estar, onde você pode relaxar e se sentir em casa.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sobre - Studio Blessed</title>
        <meta
          name="description"
          content="Conheça a história do Studio Blessed e Anna Oliveira. Mais de 5 anos dedicados à beleza e autoestima com atendimento personalizado."
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
              Nossa História
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Uma jornada de paixão, dedicação e transformação através da beleza
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://horizons-cdn.hostinger.com/65ea25b5-0f1b-4f0f-b262-30e157f45500/56b0037e2051aaf19d7fdfb2b528a2c6.png"
                alt="Anna Oliveira - Fundadora do Studio Blessed"
                className="rounded-2xl shadow-2xl w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl font-serif font-bold mb-4">Anna Oliveira</h2>
                <p className="text-lg text-primary font-medium mb-4">Fundadora e Esteticista</p>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Minha jornada na estética começou há mais de 5 anos, movida por uma paixão genuína em fazer as pessoas se sentirem bem consigo mesmas. O que começou como um sonho se transformou no Studio Blessed, um espaço onde beleza e autoestima caminham juntas.
                </p>
                <p>
                  Ao longo dos anos, tive o privilégio de atender mais de 500 clientes, cada uma com sua história única e necessidades especiais. Essa experiência me ensinou que beleza vai muito além da aparência - é sobre como você se sente quando olha no espelho.
                </p>
                <p>
                  Investi em formações especializadas, cursos de atualização e certificações para oferecer sempre o melhor. Mas o que realmente me move é ver o sorriso de satisfação no rosto de cada cliente ao final de cada atendimento.
                </p>
                <p>
                  No Studio Blessed, você não é apenas mais uma cliente. Você é parte da nossa família, e seu bem-estar é minha prioridade. Cada procedimento é realizado com técnica, carinho e dedicação absoluta.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-lg">
                  <Star className="w-5 h-5 text-primary" />
                  <span className="font-medium">Certificada</span>
                </div>
                <div className="flex items-center space-x-2 bg-secondary/10 px-4 py-2 rounded-lg">
                  <Target className="w-5 h-5 text-secondary" />
                  <span className="font-medium">+5 Anos</span>
                </div>
                <div className="flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-lg">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="font-medium">+500 Clientes</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mb-20">
            <h2
              className="text-3xl md:text-4xl font-serif font-bold text-center mb-12"
              style={{ textWrap: 'balance' }}
            >
              Nossos Valores
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-effect rounded-2xl p-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="glass-effect rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Venha Nos Conhecer
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              Estamos ansiosas para receber você e proporcionar uma experiência única de beleza e cuidado. Agende seu horário e descubra o que torna o Studio Blessed tão especial.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default AboutPage;