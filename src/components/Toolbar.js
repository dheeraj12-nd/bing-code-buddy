import React from 'react';
import HamburgerMenu from './HamburgerMenu';
import logo from '../assets/bing-logo.png'

const Toolbar = () => {
  return (
    <div className='toolbar-sec container'>
    <div className="flex justify-between items-center text-white logo-sec">
      <div className="logo flex gap-x-16">
      <a href='#'><img src={logo} alt="logo" /></a>

      <div className="search-options flex gap-x-6">
        <a href='#'>Images</a>
        <a href='#'>Videos</a>
        <a href='#'>Translate</a>
      </div>
      </div>
      <HamburgerMenu />
    </div>
    </div>
  );
};

export default Toolbar;
