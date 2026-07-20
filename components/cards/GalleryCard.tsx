'use client';

import Image from 'next/image';
import { useState } from 'react';
import type { GalleryImage } from '@/types';
import GalleryLightbox from '@/components/common/GalleryLightbox';

interface GalleryCardProps {
  image: GalleryImage;
  allImages: GalleryImage[];
  index: number;
}

export default function GalleryCard({ image, allImages, index }: GalleryCardProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <button
        className="gallery-card"
        onClick={() => setLightboxOpen(true)}
        aria-label={`View image: ${image.caption}`}
      >
        <div className="gallery-card__wrap">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="gallery-card__image"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="gallery-card__overlay">
            <span className="gallery-card__icon">🔍</span>
            <p className="gallery-card__caption">{image.caption}</p>
          </div>
        </div>
      </button>

      {lightboxOpen && (
        <GalleryLightbox
          images={allImages}
          initialIndex={index}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
