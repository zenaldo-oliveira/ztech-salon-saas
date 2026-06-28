import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

function InstagramFeed() {
  const instagramPosts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371',
      alt: 'Manicure profissional'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc',
      alt: 'Unhas decoradas'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8',
      alt: 'Tratamento de pele'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2',
      alt: 'Alongamento de unhas'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035',
      alt: 'Pedicure relaxante'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e',
      alt: 'Esmalte em gel'
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4" style={{ textWrap: 'balance' }}>
            Siga no Instagram
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Acompanhe nossos trabalhos e novidades
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href="https://instagram.com/studioblessed"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <img
                src={post.image}
                alt={post.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white" />
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white"
          >
            <a
              href="https://instagram.com/studioblessed"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5 mr-2" />
              Seguir @studioblessed
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default InstagramFeed;