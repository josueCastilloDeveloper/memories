'use client';
// Import React and necessary hooks
import React, { useEffect } from 'react';
import AOS from 'aos';
// Import the GalleryPage component
import GalleryPage from '../GalleryPage';
import ReactCarrousel from '../ReactCarrousel';
import MultiCarousel from '../MultiCarrousel';
import '../layout.css';

export default function Page() {
  useEffect(() => {
    AOS.init({
      duration: 5000,
      once: false,
    });
  }, []);

  // Define the array of images to be passed to the GalleryPage component
  const images = [
    {
      src: '/esculturas/lamparas/lampara1.png',
      alt: 'Screenshot of the dashboard project showing mobile version',
      width: 560,
      height: 620,
    },
    {
      src: '/esculturas/lamparas/lampara1.png',
      alt: 'Screenshot of the dashboard project showing mobile version',
      width: 560,
      height: 620,
    },
    // Add more image objects as needed
  ];

  const carouselImages = [
    [
      { src: '/esculturas/exclusivos/e1/i1.JPG', alt: 'Description 1' },
      { src: '/esculturas/exclusivos/e1/i2.JPG', alt: 'Description 1' },
      // More images for the second carousel
    ],
    // More image arrays for additional carousels
  ];

  return (
    <div className="esculturas-page">
      <MultiCarousel carousels={carouselImages} />
    </div>
  );
}
