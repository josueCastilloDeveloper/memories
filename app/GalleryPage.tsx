// Import necessary libraries
import Image from 'next/image';
import AOS from 'aos';
import React, { useEffect } from 'react';

// Define the type for a single image object
type ImageObject = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

// Define the type for the component props
interface GalleryPageProps {
  images: ImageObject[];
}

// The component now accepts `GalleryPageProps` as its type
const GalleryPage: React.FC<GalleryPageProps> = ({ images }) => {
  useEffect(() => {
    AOS.init({
      duration: 5000,
      once: false,
    });
  }, []);

  return (
    <div className="lm:p-[60px_90px] mt-4 grid grid-cols-1 justify-items-center gap-y-6 p-[0px_10px] sm:grid-cols-2 sm:p-[50px_40px]">
      {images.map((image, index) => (
        <div key={index} className="image-hover-effect" data-aos="fade-up">
          <Image
            src={image.src}
            className="rounded-lg"
            width={image.width}
            height={image.height}
            alt={image.alt}
          />
        </div>
      ))}
    </div>
  );
};

export default GalleryPage;
