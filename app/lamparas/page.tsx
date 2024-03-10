'use client';
import React from 'react';
import MultiCarousel from '../MultiCarrousel';
import carouselImages from '../dataImages/lamaparasImages';
import '../layout.css';

export default function Page() {
  return (
    <div className="esculturas-page">
      <MultiCarousel carousels={carouselImages} />
    </div>
  );
}
