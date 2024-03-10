import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
interface ImageObject {
  src: string;
  alt: string;
}

interface CarouselProps {
  images: ImageObject[];
}
const DemoCarousel: React.FC<CarouselProps> = ({ images }) => {
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
        swipeScrollTolerance={50}
        preventMovementUntilSwipeScrollTolerance={true}
      >
        {images.map((image, index) => (
          <div key={index}>
            <Image src={image.src} width={560} height={620} alt={image.alt} />
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
