'use client';
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Link from 'next/link';
import './layout.css';
import React, { useState, useEffect } from 'react';
import { LuLampDesk } from 'react-icons/lu';
import { GiWoodFrame } from 'react-icons/gi';
import { GiAlienFire } from 'react-icons/gi';
import { FaStar } from 'react-icons/fa6';
import ImageWithActions from './image-with-actions';
import LogoIconComponent from './logo-icon-component';
import { usePathname } from 'next/navigation';
import path from 'path';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  console.log('pathname', pathname);

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
    <html style={{ overscrollBehavior: 'none' }} lang="en">
      <body
        style={{ overscrollBehavior: 'none' }}
        className={`${inter.className} antialiased`}
      >
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
              <nav>
                <ul>
                  <li>
                    <Link href="/">
                      <FaStar
                        size={30}
                        className={`transition duration-300 ease-in-out hover:text-purple-500 ${
                          pathname === '/' ? 'text-purple-500' : ''
                        }`}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="/lamparas">
                      <LuLampDesk
                        size={30}
                        className={`transition duration-300 ease-in-out hover:text-blue-500 ${
                          pathname === '/lamparas' ? 'text-blue-500' : ''
                        }`}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="/decoracion">
                      <GiWoodFrame
                        size={30}
                        className={`transition duration-300 ease-in-out hover:text-green-700 ${
                          pathname === '/decoracion' ? 'text-green-700' : ''
                        }  `}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="/exclusivos">
                      <GiAlienFire
                        size={30}
                        className={`transition duration-300 ease-in-out hover:text-orange-500 ${
                          pathname === '/exclusivos' ? 'text-orange-500' : ''
                        }`}
                      />
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <LogoIconComponent />
          <main className="content">{children}</main>
        </div>
      </body>
    </html>
  );
}
