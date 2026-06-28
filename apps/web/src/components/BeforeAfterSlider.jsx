import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

function BeforeAfterSlider({ item, beforeImage, afterImage, title, description, category, result, alt, before, after, index = 0 }) {
  // 1. ALL Hooks declared at the very top to prevent React Hook order violations
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  // 2. Data processing
  const data = item || {};
  
  const imgBefore = data?.beforeImage || beforeImage || data?.before || before;
  const imgAfter = data?.afterImage || afterImage || data?.after || after;
  const displayTitle = data?.title || data?.serviceName || title || alt || data?.alt || 'Transformação';
  const displayDesc = data?.description || description || 'Arraste para ver a diferença antes e depois do procedimento.';
  const displayCat = data?.category || category || 'Resultado';
  const displayResult = data?.result || result || '';

  // 3. Data validation and early return AFTER hooks
  if (!imgBefore || !imgAfter) {
    console.error('BeforeAfterSlider Error: Missing required image data.', { item, beforeImage, afterImage, before, after });
    return (
      <div className="flex items-center justify-center w-full aspect-[4/3] bg-muted rounded-2xl border border-border/50">
        <p className="text-muted-foreground text-sm">Imagem indisponível</p>
      </div>
    );
  }

  // 4. Handlers
  const handleMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = e.type.includes('mouse') ? e.clientX : e.touches?.[0]?.clientX;
    
    if (clientX === undefined) return;

    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    
    setSliderPosition(percentage);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') setSliderPosition((prev) => Math.max(0, prev - 5));
    if (e.key === 'ArrowRight') setSliderPosition((prev) => Math.min(100, prev + 5));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col h-full bg-card rounded-2xl overflow-hidden shadow-lg border border-border/40 hover:shadow-xl transition-all duration-300"
    >
      <div 
        ref={containerRef}
        className="relative w-full aspect-square md:aspect-[4/3] overflow-hidden cursor-ew-resize select-none touch-none bg-muted"
        onMouseMove={handleMove}
        onTouchMove={handleMove}
        onMouseDown={(e) => {
          setIsDragging(true);
          handleMove(e);
        }}
        onTouchStart={(e) => {
          setIsDragging(true);
          handleMove(e);
        }}
      >
        {/* After Image (Base) */}
        <img
          src={imgAfter}
          alt={`${displayTitle} - Resultado Depois`}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          draggable="false"
          onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1633681926019-03bd9325ec20'; }}
        />

        {/* Before Image (Clipped overlay) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={imgBefore}
            alt={`${displayTitle} - Antes do procedimento`}
            className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none"
            style={{ width: '100%', height: '100%' }}
            draggable="false"
            onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1633681926019-03bd9325ec20'; }}
          />
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] z-10"
          style={{ left: `${sliderPosition}%` }}
        >
          <button
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center focus-visible:ring-4 focus-visible:ring-primary focus:outline-none transition-transform hover:scale-110 active:scale-95"
            aria-label="Ajustar comparação de imagem"
            aria-valuenow={sliderPosition}
            onKeyDown={handleKeyDown}
          >
            <div className="flex space-x-1">
              <div className="w-0.5 h-4 bg-primary/60 rounded-full"></div>
              <div className="w-0.5 h-4 bg-primary/60 rounded-full"></div>
            </div>
          </button>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-black/50 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider z-10 pointer-events-none">
          Antes
        </div>
        <div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-black/50 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider z-10 pointer-events-none">
          Depois
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-3">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-accent text-accent-foreground">
            {displayCat}
          </span>
        </div>
        <h3 className="text-xl font-serif font-bold text-foreground mb-2">
          {displayTitle}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
          {displayDesc}
        </p>
        {displayResult && (
          <p className="text-primary font-medium text-sm flex items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></span>
            {displayResult}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default BeforeAfterSlider;