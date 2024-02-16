import React from 'react';
import DemoCarousel from './ReactCarrousel'; // Adjust the import path as needed

interface ImageObject {
  src: string;
  alt: string;
}

interface MultiCarouselProps {
  carousels: ImageObject[][];
}

const MultiCarousel: React.FC<MultiCarouselProps> = ({ carousels }) => {
  return (
    <div>
      {carousels.map((images, index) => (
        <div key={index} style={{ margin: '10px 0' }}>
          <DemoCarousel images={images} />
        </div>
      ))}
    </div>
  );
};

export default MultiCarousel;
