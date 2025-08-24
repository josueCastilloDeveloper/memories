import React, { useState } from 'react';
import Image from 'next/image';
import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';
import './layout.css';

const FloatingActionButtons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openInstagram, setOpenInstagram] = useState(false);
  const [openFacebook, setOpenFacebook] = useState(false);
  const [openTikTok, setOpenTikTok] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    // Toggle the visibility of the action buttons
    setOpenInstagram(!openInstagram);
    setOpenFacebook(!openFacebook);
    setOpenTikTok(!openTikTok);
  };

  return (
    <div>
      {/* <button onClick={toggleOpen} className=""> */}
        <Image
          src="/nadine_logo.jpg"
          className="diseniun-logo"
          width={50}
          height={50}
          alt="Diseniun Logo"
        />
      {/* </button> */}

      {/* <button
        className="instagram-logo"
        style={{ display: isOpen ? 'block' : 'none' }}
      >
        <FaInstagram
          size={35}
          style={{
            position: 'absolute',
            top: '3',
            left: '2',
            color: '#f6048e',
          }}
        />
      </button>
      <button
        className="facebook-logo"
        style={{ display: isOpen ? 'block' : 'none' }}
      >
        <FaFacebookF
          style={{
            position: 'absolute',
            top: '4',
            left: '3',
            color: '#1877f2',
          }}
          size={33}
        />
      </button>
      <button
        className="tiktok-logo"
        style={{ display: isOpen ? 'block' : 'none' }}
      >
        <FaTiktok
          style={{
            position: 'absolute',
            top: '4',
            left: '4',
            color: '#000000',
          }}
          size={32}
        />
      </button> */}
    </div>
  );
};

export default FloatingActionButtons;
