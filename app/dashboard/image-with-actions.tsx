import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { LuInstagram } from 'react-icons/lu';
import { FaFacebook } from 'react-icons/fa';

const FloatingActionButtons = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | undefined;
    if (isOpen) {
      // Set a timer to close the buttons after 3 seconds
      timer = setTimeout(() => {
        setIsOpen(false);
      }, 2000); // 3000 milliseconds = 3 seconds
    }

    // Clean up the timer when the component unmounts or isOpen changes
    return () => clearTimeout(timer);
  }, [isOpen]); // This effect depends on the isOpen state

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="fixed left-5 top-5 flex flex-col items-center space-y-2">
      <button className="rounded-full" onClick={toggleOpen}>
        <Image
          src="/diseniun_logo.jpeg"
          className="rounded-full"
          width={80}
          height={80}
          alt="Diseniun Logo"
        />
      </button>
      {isOpen && (
        <>
          <button className="rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
            <LuInstagram size={20} />
          </button>
          <button className="rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
            <FaFacebook size={20} />
          </button>
          {/* Additional buttons can be added here */}
        </>
      )}
    </div>
  );
};

export default FloatingActionButtons;
