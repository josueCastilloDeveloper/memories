// Import necessary libraries
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel CSS
import './layout.css';
// Define the type for the Carousel component props (if you have any)
interface CarouselProps {
  // Define any props here. For demonstration, we're using a static list,
  // so no props are defined.
}

// Define the functions inside the same component file for simplicity
const disableScroll = () => {
  document.body.style.overflow = 'hidden';
};

const enableScroll = () => {
  document.body.style.overflow = '';
};

const DemoCarousel: React.FC<CarouselProps> = () => {
  const handleSwipeStart = () => {
    disableScroll();
  };

  // Event handler to enable scroll
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
        swipeScrollTolerance={10}
        // onSwipeStart={handleSwipeStart}
        // onSwipeEnd={handleSwipeEnd}
      >
        <div>
          <img src="/esculturas/lamparas/lampara1.png" alt="Item 1" />
        </div>
        <div>
          <img src="/esculturas/decoracion/decoracion1.png" alt="Item 1" />{' '}
        </div>
        <div>
          <img src="/esculturas/lamparas/lampara1.png" alt="Item 1" />{' '}
        </div>
      </Carousel>
    </div>
  );
};

export default DemoCarousel;
