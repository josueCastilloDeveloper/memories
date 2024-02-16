import React from 'react';
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

const disableScroll = () => {
  document.body.style.overflow = 'hidden';
};

const enableScroll = () => {
  document.body.style.overflow = '';
};

const DemoCarousel: React.FC<CarouselProps> = ({ images }) => {
  const handleSwipeStart = () => {
    disableScroll();
  };

  const handleSwipeEnd = () => {
    enableScroll();
  };

  return (
    <div style={{ borderRadius: '20px' }}>
      <Carousel
        className="carrousel"
        infiniteLoop={true}
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        swipeable={true}
        emulateTouch={true}
        useKeyboardArrows={true}
        dynamicHeight={true}
        swipeScrollTolerance={20}
        // Uncomment these if you have defined the event handlers
        // onSwipeStart={handleSwipeStart}
        // onSwipeEnd={handleSwipeEnd}
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
                // fontWeight: <weight>;
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
