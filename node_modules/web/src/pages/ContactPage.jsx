import React from 'react';
import { Helmet } from 'react-helmet';
import { MapPin, Clock, Phone, Mail, Instagram } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';

function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'Rua das Flores, 123\nSão Paulo, SP - CEP 01234-567'
    },
    {
      icon: Clock,
      title: 'Horário de Funcionamento',
      content: 'Segunda a Sexta: 9h às 19h\nSábado: 9h às 15h\nDomingo: Fechado'
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '(11) 99999-9999'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contato@studioblessed.com.br'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contato - Studio Blessed</title>
        <meta
          name="description"
          content="Entre em contato com o Studio Blessed. Agende seu horário pelo WhatsApp ou preencha nosso formulário. Estamos em São Paulo, SP."
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
              Entre em Contato
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Estamos prontas para atender você. Escolha a forma de contato que preferir
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-serif font-bold mb-6">Envie uma Mensagem</h2>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-2xl font-serif font-bold mb-6">Informações de Contato</h2>
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="glass-effect rounded-xl p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{info.title}</h3>
                        <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                          {info.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="glass-effect rounded-xl p-6">
                <h3 className="font-semibold mb-4">Redes Sociais</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-200"
                    aria-label="WhatsApp"
                  >
                    <Phone className="w-6 h-6" />
                  </a>
                  <a
                    href="https://instagram.com/studioblessed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-200"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0977!2d-46.6333!3d-23.5505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAxLjgiUyA0NsKwMzcnNTkuOSJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Studio Blessed"
            ></iframe>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default ContactPage;