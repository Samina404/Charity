'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import type { GalleryImage } from '@/types';

interface GalleryLightboxProps {
  images: GalleryImage[];
  initialIndex?: number;
  onClose: () => void;
}

export default function GalleryLightbox({
  images,
  initialIndex = 0,
  onClose,
}: GalleryLightboxProps) {
  const [current, setCurrent] = useState(initialIndex);

  const prev = useCallback(() => {
    setCurrent((i) => (i === 0 ? images.length - 1 : i - 1));
  }, [images.length]);

  const next = useCallback(() => {
    setCurrent((i) => (i === images.length - 1 ? 0 : i + 1));
  }, [images.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, prev, next]);

  const img = images[current];

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      onClick={onClose}
    >
      <div className="lightbox__inner" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox__close" onClick={onClose} aria-label="Close">✕</button>
        <button className="lightbox__prev" onClick={prev} aria-label="Previous image">‹</button>
        <div className="lightbox__image-wrap">
          <Image
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
            className="lightbox__image"
            priority
          />
          <p className="lightbox__caption">{img.caption}</p>
        </div>
        <button className="lightbox__next" onClick={next} aria-label="Next image">›</button>
        <p className="lightbox__counter">{current + 1} / {images.length}</p>
      </div>
    </div>
  );
}
