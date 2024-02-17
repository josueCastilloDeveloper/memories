import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel CSS
import Image from 'next/image';

interface ImageObject {
  src: string;
  alt: string;
}

interface CarouselProps {
  images: ImageObject[];
}

const DemoCarousel: React.FC<CarouselProps> = ({ images }) => {
  const [loadedImages, setLoadedImages] = useState([images[0].src]); // Initially load only the first image

  const handleLoadImage = (index: number) => {
    // Load image if not already loaded
    if (!loadedImages.includes(images[index].src)) {
      setLoadedImages((currentLoadedImages) => [
        ...currentLoadedImages,
        images[index].src,
      ]);
    }
  };

  return (
    <div style={{ borderRadius: '20px' }}>
      <Carousel
        className="carrousel"
        infiniteLoop={true}
        showThumbs={false}
        showArrows={true}
        showStatus={false}
        swipeable={true}
        emulateTouch={true}
        useKeyboardArrows={true}
        dynamicHeight={false}
        swipeScrollTolerance={20}
        onChange={(index) => handleLoadImage(index)} // Assuming `onChange` provides the new active index
      >
        {images.map((image, index) => (
          <div key={index}>
            {loadedImages.includes(image.src) ? (
              <Image src={image.src} width={560} height={620} alt={image.alt} />
            ) : (
              // Optionally render a placeholder or nothing until the image is loaded
              <div
                style={{
                  width: '560px',
                  height: '620px',
                  backgroundColor: '#f0f0f0',
                }}
              ></div>
            )}
            <p
              style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                color: 'white',
                padding: '40px 0',
                fontSize: '25px',
                fontFamily: 'Playfair Display',
                fontOpticalSizing: 'auto',
                fontWeight: 700,
              }}
            >
              {image.alt}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default DemoCarousel;
