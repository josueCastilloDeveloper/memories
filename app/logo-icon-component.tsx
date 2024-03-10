import React, { useState } from 'react';
import Image from 'next/image';
import './layout.css';

const LogoIconComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openInstagram, setOpenInstagram] = useState(false);
  const [openFacebook, setOpenFacebook] = useState(false);
  const [openTikTok, setOpenTikTok] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    setOpenInstagram(!openInstagram);
    setOpenFacebook(!openFacebook);
    setOpenTikTok(!openTikTok);
  };

  return (
    <div>
      <button onClick={toggleOpen} className="">
        <Image
          src="/foto-perfil-giovanny.png"
          className="image-icon"
          width={50}
          height={50}
          alt="Diseniun Logo"
        />
      </button>
    </div>
  );
};

export default LogoIconComponent;
