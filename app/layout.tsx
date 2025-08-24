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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
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
              <div style={{ textAlign: 'center' }}>
  <h1
    style={{
      margin: 0,
      padding: '12px 8px',
      fontSize: 'clamp(28px, 6vw, 64px)',
      fontWeight: 800,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: '#111827',
      textShadow: '0 8px 24px rgba(0,0,0,0.2)',
      backgroundImage:
        'linear-gradient(90deg, rgba(99,102,241,.25), rgba(236,72,153,.25))',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 10px',
      backgroundPosition: '0 100%',
      borderRadius: 6,
      display: 'inline-block',
    }}
  >
    Memorias
  </h1>
</div>

            </div>
          </div>
          <LogoIconComponent />
          <main className="content">{children}</main>
        </div>
      </body>
    </html>
  );
}
