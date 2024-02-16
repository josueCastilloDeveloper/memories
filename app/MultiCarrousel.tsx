import React from 'react';
import DemoCarousel from './ReactCarrousel'; // Ensure this path is correct
import './layout.css';

interface ImageObject {
  src: string;
  alt: string;
}

interface MultiCarouselProps {
  carousels: ImageObject[][];
}

const MultiCarousel: React.FC<MultiCarouselProps> = ({ carousels }) => {
  return (
    <div className="grid-container">
      {carousels.map((images, index) => (
        <div key={index} className="grid-item">
          <DemoCarousel images={images} />
        </div>
      ))}
    </div>
  );
};

export default MultiCarousel;
