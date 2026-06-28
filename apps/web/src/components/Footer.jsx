import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Phone, Instagram, Facebook } from 'lucide-react';

function Footer() {
  const whatsappNumber = '5511999999999';
  const socialLinks = [
    { icon: Phone, href: `https://wa.me/${whatsappNumber}`, label: 'WhatsApp' },
    { icon: Instagram, href: 'https://instagram.com/studioblessed', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com/studioblessed', label: 'Facebook' }
  ];

  return (
    <footer className="bg-secondary/5 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-serif font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              Studio Blessed
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Seu momento de beleza, cuidado e autoestima começa aqui. Tratamentos estéticos personalizados com excelência.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4">Links Rápidos</h3>
            <nav className="space-y-2">
              <Link to="/services" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Serviços
              </Link>
              <Link to="/gallery" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Galeria
              </Link>
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Sobre
              </Link>
              <Link to="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Contato
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Rua das Flores, 123<br />
                  São Paulo, SP
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Seg-Sex: 9h às 19h<br />
                  Sáb: 9h às 15h
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2026 Studio Blessed. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Política de Privacidade
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Termos de Serviço
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;