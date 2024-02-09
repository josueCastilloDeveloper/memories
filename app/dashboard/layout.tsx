'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { LuLampDesk } from 'react-icons/lu';
import { GiWoodFrame } from 'react-icons/gi';
import { GiAlienFire } from 'react-icons/gi';
import ImageWithActions from './image-with-actions';

import Link from 'next/link';
import './layout.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [opacity, setOpacity] = useState(1);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100;
      setOpacity(isTop ? 1 : 0.7);

      const scrollPercentage =
        (window.scrollY / (document.body.offsetHeight - window.innerHeight)) *
        100;

      setScrollProgress(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mouse event handlers
  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => window.scrollY >= 100 && setOpacity(0.5);

  return (
    <div style={{}}>
      <ImageWithActions />
      <div>
        <div
          className="navbar"
          style={{ opacity }}
          onMouseEnter={handleMouseEnter} // Restore opacity on hover
          onMouseLeave={handleMouseLeave} // Reapply condition when mouse leaves
        >
          <div
            className="navbar-border"
            style={{ width: `${scrollProgress}%` }}
          ></div>{' '}
          {/* Animated border */}
          <nav>
            <ul>
              <li>
                <Link href="/">
                  <LuLampDesk
                    size={30}
                    className="transition duration-300 ease-in-out hover:text-blue-500"
                  />
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <GiWoodFrame
                    size={30}
                    className="transition duration-300 ease-in-out hover:text-green-700"
                  />
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <GiAlienFire
                    size={30}
                    className="transition duration-300 ease-in-out hover:text-orange-500"
                  />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <main className="content">{children}</main>
    </div>
  );
}
