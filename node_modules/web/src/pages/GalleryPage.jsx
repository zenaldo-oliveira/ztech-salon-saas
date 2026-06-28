import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import GalleryCard from '@/components/GalleryCard.jsx';
import BeforeAfterSlider from '@/components/BeforeAfterSlider.jsx';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { beforeAfterData } from '@/data/BeforeAfterData.js';

function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = ['Todos', 'Unhas', 'Depilação', 'Limpeza de Pele', 'Banho de Lua', 'Ambiente'];

  const galleryImages = [
    {
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371',
      category: 'Unhas',
      alt: 'Manicure profissional com esmalte vermelho'
    },
    {
      image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc',
      category: 'Unhas',
      alt: 'Unhas decoradas com nail art'
    },
    {
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2',
      category: 'Unhas',
      alt: 'Alongamento de unhas em gel'
    },
    {
      image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8',
      category: 'Limpeza de Pele',
      alt: 'Tratamento facial profissional'
    },
    {
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035',
      category: 'Unhas',
      alt: 'Pedicure com esmalte rosa'
    },
    {
      image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e',
      category: 'Unhas',
      alt: 'Esmaltação em gel com cores vibrantes'
    },
    {
      image: 'https://images.unsplash.com/photo-1633681926019-03bd9325ec20',
      category: 'Ambiente',
      alt: 'Interior elegante do Studio Blessed'
    },
    {
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef',
      category: 'Limpeza de Pele',
      alt: 'Limpeza de pele profunda'
    },
    {
      image: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937',
      category: 'Depilação',
      alt: 'Depilação profissional'
    }
  ];

  const filteredImages =
    selectedCategory === 'Todos'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  // Ensure we have valid data before rendering the sliders
  const validBeforeAfterData = beforeAfterData?.filter(
    item => item && item.beforeImage && item.afterImage
  ) || [];

  return (
    <>
      <Helmet>
        <title>Galeria - Studio Blessed</title>
        <meta
          name="description"
          content="Veja nossos trabalhos e transformações. Galeria de fotos com resultados reais de manicure, pedicure, limpeza de pele e outros tratamentos."
        />
      </Helmet>

      <Header />

      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1
              className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight"
              style={{ textWrap: 'balance', letterSpacing: '-0.02em' }}
            >
              Nossa Galeria
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Confira nossos trabalhos e se inspire para sua próxima transformação
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {filteredImages.map((image, index) => (
              <GalleryCard
                key={index}
                {...image}
                index={index}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>

          <div className="mb-12">
            <h2
              className="text-3xl md:text-4xl font-serif font-bold text-center mb-12"
              style={{ textWrap: 'balance' }}
            >
              Antes e Depois
            </h2>
            
            {validBeforeAfterData.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {validBeforeAfterData.slice(0, 4).map((item, index) => (
                  <BeforeAfterSlider key={item.id || index} item={item} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center p-12 bg-muted rounded-2xl border border-border/50">
                <p className="text-muted-foreground">Nenhuma transformação disponível no momento.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={selectedImage.image}
                  alt={selectedImage.alt}
                  className="w-full h-auto"
                />
                <div className="p-6 bg-card">
                  <span className="inline-block px-3 py-1 rounded-lg bg-primary/10 text-primary text-sm font-medium mb-2">
                    {selectedImage.category}
                  </span>
                  <p className="text-muted-foreground">{selectedImage.alt}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>

      <Footer />
    </>
  );
}

export default GalleryPage;