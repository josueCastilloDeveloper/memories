'use client';
import Image from 'next/image';
import Link from 'next/link';
import AOS from 'aos';
import React, { useEffect } from 'react';

export default function Page() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      // AOS options
      duration: 5000, // Animation duration in milliseconds
      once: false, // Whether animation should only happen once
    });
  }, []);
  return (
    <div
      className=" mt-4 grid grid-cols-1 justify-items-center gap-y-6 sm:grid-cols-2"
      style={{ padding: '60px 90px' }}
    >
      <div
        className="image-hover-effect" // Example AOS animation
      >
        <Image
          src="/giovanny-main-page.png"
          className="rounded-lg"
          width={560}
          height={620}
          alt="Screenshot of the dashboard project showing mobile version"
        />
      </div>
    </div>
  );
}
