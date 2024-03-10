'use client';
// Import React and necessary hooks
import React, { useEffect } from 'react';
import AOS from 'aos';
// Import the GalleryPage component
import GalleryPage from './GalleryPage';
import ReactCarrousel from './ReactCarrousel';
import MultiCarousel from './MultiCarrousel';

import carouselImages from './dataImages/allImages.js';
import './layout.css';

export default function Page() {
  useEffect(() => {
    AOS.init({
      duration: 5000,
      once: false,
    });
  }, []);

  return (
    <div className="esculturas-page">
      <MultiCarousel carousels={carouselImages} />
    </div>
  );
}
