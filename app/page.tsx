'use client';
// Import React and necessary hooks
import React, { useEffect } from 'react';
import AOS from 'aos';
// Import the GalleryPage component
import GalleryPage from './GalleryPage';
import ReactCarrousel from './ReactCarrousel';
import MultiCarousel from './MultiCarrousel';
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

  const carouselImages = [
    [
      { src: '/esculturas/lamparas/l1/i1.JPG', alt: 'Description 1' },
      { src: '/esculturas/lamparas/l1/i2.JPG', alt: 'Description 1' },
      { src: '/esculturas/lamparas/l1/i3.JPG', alt: 'Description 1' },
      { src: '/esculturas/lamparas/l1/i4.JPG', alt: 'Description 1' },
      { src: '/esculturas/lamparas/l1/i5.JPG', alt: 'Description 1' },
      { src: '/esculturas/lamparas/l1/i6.JPG', alt: 'Description 1' },
      { src: '/esculturas/lamparas/l1/i7.JPG', alt: 'Description 1' },
      { src: '/esculturas/lamparas/l1/i8.JPG', alt: 'Description 1' },
      { src: '/esculturas/lamparas/l1/i9.JPG', alt: 'Description 1' },
      { src: '/esculturas/lamparas/l1/i10.JPG', alt: 'Description 1' },
      { src: '/esculturas/lamparas/l1/i11.JPG', alt: 'Description 1' },
      { src: '/esculturas/lamparas/l1/i12.JPG', alt: 'Description 1' },
      { src: '/esculturas/lamparas/l1/i13.JPG', alt: 'Description 1' },
      // More images for the first carousel
    ],
    [
      { src: '/esculturas/lamparas/l2/i1.JPG', alt: 'Description 1' },
      { src: '/esculturas/lamparas/l2/i2.JPG', alt: 'Description 1' },
      { src: '/esculturas/lamparas/l2/i3.JPG', alt: 'Description 1' },
      { src: '/esculturas/lamparas/l2/i4.JPG', alt: 'Description 1' },
      { src: '/esculturas/lamparas/l2/i5.JPG', alt: 'Description 1' },
      { src: '/esculturas/lamparas/l2/i6.JPG', alt: 'Description 1' },
      { src: '/esculturas/lamparas/l2/i7.JPG', alt: 'Description 1' },
      { src: '/esculturas/lamparas/l2/i8.JPG', alt: 'Description 1' },
      { src: '/esculturas/lamparas/l2/i9.JPG', alt: 'Description 1' },
      { src: '/esculturas/lamparas/l2/i10.JPG', alt: 'Description 1' },
      { src: '/esculturas/lamparas/l2/i11.JPG', alt: 'Description 1' },
      { src: '/esculturas/lamparas/l2/i12.JPG', alt: 'Description 1' },
      { src: '/esculturas/lamparas/l2/i13.JPG', alt: 'Description 1' },
      // More images for the second carousel
    ],
    [
      { src: '/esculturas/lamparas/l3/i1.JPG', alt: 'Description 1' },
      { src: '/esculturas/lamparas/l3/i2.JPG', alt: 'Description 1' },
      { src: '/esculturas/lamparas/l3/i3.JPG', alt: 'Description 1' },
      { src: '/esculturas/lamparas/l3/i4.JPG', alt: 'Description 1' },
      { src: '/esculturas/lamparas/l3/i5.JPG', alt: 'Description 1' },
      { src: '/esculturas/lamparas/l3/i6.JPG', alt: 'Description 1' },
      { src: '/esculturas/lamparas/l3/i7.JPG', alt: 'Description 1' },
      // More images for the second carousel
    ],
    [
      { src: '/esculturas/lamparas/l4/i1.JPG', alt: 'Description 1' },
      { src: '/esculturas/lamparas/l4/i2.JPG', alt: 'Description 1' },
      { src: '/esculturas/lamparas/l4/i3.JPG', alt: 'Description 1' },
      { src: '/esculturas/lamparas/l4/i4.JPG', alt: 'Description 1' },
      { src: '/esculturas/lamparas/l4/i5.JPG', alt: 'Description 1' },
      { src: '/esculturas/lamparas/l4/i6.JPG', alt: 'Description 1' },
      { src: '/esculturas/lamparas/l4/i7.JPG', alt: 'Description 1' },
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
