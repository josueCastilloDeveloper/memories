'use client';
// Import React and necessary hooks
import React, { useEffect } from 'react';
import AOS from 'aos';
// Import the GalleryPage component
import GalleryPage from './GalleryPage';
import ReactCarrousel from './ReactCarrousel';
import './layout.css';

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

  return (
    <div style={{ padding: '0px 15px' }}>
      <ReactCarrousel />
      <div style={{ marginTop: '20px' }}>
        <ReactCarrousel />
      </div>
      <div style={{ marginTop: '20px' }}>
        <ReactCarrousel />
      </div>
      <div style={{ marginTop: '20px' }}>
        <ReactCarrousel />
      </div>
    </div>
  );
}
