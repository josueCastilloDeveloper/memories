'use client';
import React from 'react';
import MultiCarousel from './MultiCarrousel';
import carouselImages from './dataImages/allImages.js';
import './layout.css';

export default function Page() {
  return (
    <div className="esculturas-page">
      <MultiCarousel carousels={carouselImages} />
    </div>
  );
}
