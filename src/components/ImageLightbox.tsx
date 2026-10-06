import { useEffect, useCallback, useState } from 'react';
import { useLocale } from '../i18n/LocaleContext';

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onIndexChange: (index: number) => void;
  title?: string;
}

export default function ImageLightbox({
  isOpen,
  onClose,
  images,
  currentIndex,
  onIndexChange,
  title,
}: ImageLightboxProps) {
  const { t } = useLocale();
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);

  const handlePrev = useCallback(() => {
    if (images.length <= 1) return;
    onIndexChange(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  }, [currentIndex, images.length, onIndexChange]);

  const handleNext = useCallback(() => {
    if (images.length <= 1) return;
    onIndexChange(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  }, [currentIndex, images.length, onIndexChange]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null || touchStartY === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX;
    const deltaY = e.changedTouches[0].clientY - touchStartY;
    // Check if horizontal swipe is dominant and greater than 45px
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 45) {
      if (deltaX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    setTouchStartX(null);
    setTouchStartY(null);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title || t('gallery_label')}
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-black/95 p-4 backdrop-blur-xl text-white animate-fade-in md:p-8"
      onClick={onClose}
    >
      {/* Top Bar */}
      <div
        className="flex items-center justify-between pb-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-4">
          <span className="text-xs font-mono tracking-widest text-white/70">
            {String(currentIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
          </span>
          {title && (
            <span className="hidden text-xs font-semibold uppercase tracking-[0.2em] text-white/90 sm:inline-block">
              {title}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label={t('close_lightbox')}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-theme-mad"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Main Image Stage with Touch Swipe */}
      <div
        className="relative flex flex-1 items-center justify-center overflow-hidden touch-pan-y"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {images.length > 1 && (
          <button
            type="button"
            onClick={handlePrev}
            aria-label={t('prev_image')}
            className="absolute left-2 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition hover:scale-105 hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-theme-mad md:left-6"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
        )}

        <img
          key={currentImage}
          src={currentImage}
          alt={title ? `${title} - ${currentIndex + 1}` : `Frame ${currentIndex + 1}`}
          className="max-h-[82vh] max-w-[92vw] select-none object-contain shadow-2xl animate-subtle-zoom transition-all duration-300"
          draggable={false}
        />

        {images.length > 1 && (
          <button
            type="button"
            onClick={handleNext}
            aria-label={t('next_image')}
            className="absolute right-2 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition hover:scale-105 hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-theme-mad md:right-6"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        )}
      </div>

      {/* Bottom hint */}
      <div
        className="flex items-center justify-center pt-3 text-center text-[11px] font-mono tracking-widest text-white/50"
        onClick={(e) => e.stopPropagation()}
      >
        <span>{t('gallery_lightbox_hint')}</span>
      </div>
    </div>
  );
}
