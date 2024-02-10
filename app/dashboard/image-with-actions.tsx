import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { LuInstagram } from 'react-icons/lu';
import { FaFacebook } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

import './layout.css';

const FloatingActionButtons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isUnhovering, setIsUnhovering] = useState(false);
  const [openInstagram, setOpenInstagram] = useState(false);
  const [openFacebook, setOpenFacebook] = useState(false);
  const [openTikTok, setOpenTikTok] = useState(false);

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    if (isHovering) {
      console.log('hola1');
      // Set a timer to close the buttons after 3 seconds
      setTimeout(() => {
        setOpenInstagram(true);
        console.log('holaIns');
      }, 10); // 3000 milliseconds = 3 seconds
      setTimeout(() => {
        setOpenFacebook(true);
      }, 40); // 3000 milliseconds = 3 seconds
      setTimeout(() => {
        setOpenTikTok(true);
      }, 70); // 3000 milliseconds = 3 seconds
    }
    if (isUnhovering) {
      setTimeout(() => {
        setOpenTikTok(false);
        console.log('holaIns');
      }, 1000); // 3000 milliseconds = 3 seconds
      setTimeout(() => {
        setOpenFacebook(false);
      }, 1080); // 3000 milliseconds = 3 seconds
      setTimeout(() => {
        setOpenInstagram(false);
      }, 1160); // 3000 milliseconds = 3 seconds
    }
  }, [isHovering, isUnhovering]); // This effect depends on the isOpen state

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className=" ">
      <button
        onMouseEnter={() => {
          setIsHovering(true);
          setIsUnhovering(false);
          console.log('hola');
        }}
        onMouseLeave={() => {
          setIsHovering(false);
          setIsUnhovering(true);
          console.log('adios');
        }}
        className=""
      >
        <Image
          src="/diseniun_logo.jpeg"
          className="diseniun-logo"
          width={80}
          height={80}
          alt="Diseniun Logo"
        />
      </button>
      <button
        className="instagram-logo"
        style={{ display: openInstagram ? 'block' : 'none' }}
      >
        <LuInstagram size={30} />
      </button>
      <button
        className="facebook-logo"
        style={{ display: openFacebook ? 'block' : 'none' }}
      >
        <FaFacebook size={30} />
      </button>
      <button
        className="tiktok-logo"
        style={{ display: openTikTok ? 'block' : 'none' }}
      >
        <SiTiktok size={30} />
      </button>
    </div>
  );
};

export default FloatingActionButtons;
