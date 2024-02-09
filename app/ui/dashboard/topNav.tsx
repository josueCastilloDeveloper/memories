// Assuming your file structure, this might go in '@/app/ui/dashboard/TopNav.tsx'
import '@/app/ui/dashboard/topNav.css';
import React from 'react';

const TopNav: React.FC = () => {
  return (
    <nav className="top-nav">
      {/* Navigation links or buttons */}
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default TopNav;
