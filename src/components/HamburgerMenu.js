
import React, { useState } from 'react';
import { FaCog, FaLock, FaSearch, FaUser, FaShieldAlt, FaCommentDots, FaHome } from 'react-icons/fa';
import { AiOutlineGlobal } from 'react-icons/ai';
import { MdLocationOn, MdVoiceChat } from 'react-icons/md';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import '../assets/css/style.css';
import '../assets/css/HumburgerMenu.css';



const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCustomizeOpen, setIsCustomizeOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  return (
    <div className="relative">
      <button className="hamburger-button" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      {/* {isOpen && ( */}
        <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <FaCog className="menu-icon" /> <span>Settings</span>
            </li>
            <li>
              <FaLock className="menu-icon" /> <span>Language</span> <span className="subtext">English</span>
            </li>
            <li>
              <AiOutlineGlobal className="menu-icon" /> <span>Country/Region</span> <span className="subtext">India</span>
            </li>
            <li>
              <MdLocationOn className="menu-icon" /> <span>Location</span>
            </li>
            <li>
              <MdVoiceChat className="menu-icon" /> <span>Voice search</span>
            </li>
            <li onClick={() => setIsMoreOpen(!isMoreOpen)}>
              <FaCog className="menu-icon" /> <span>More</span> {isMoreOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
            </li>
            {/* {isMoreOpen && ( */}
              <>
                <li>
                  <FaShieldAlt className="menu-icon" /> <span>SafeSearch</span> <span className="subtext">Moderate</span>
                </li>
                <li>
                  <FaSearch className="menu-icon" /> <span>Search history</span>
                </li>
                <li>
                  <FaUser className="menu-icon" /> <span>My Bing</span>
                </li>
                <li>
                  <FaShieldAlt className="menu-icon" /> <span>Privacy</span>
                </li>
                <li>
                  <FaCommentDots className="menu-icon" /> <span>Feedback</span>
                </li>
              </>
            {/* )} */}
            <li onClick={() => setIsCustomizeOpen(!isCustomizeOpen)}>
              <FaHome className="menu-icon" /> <span>Customise your homepage</span> {isCustomizeOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
            </li>
            {isCustomizeOpen && (
              <>
                <li>
                  <span>Show menu bar</span>
                  <input type="checkbox" className="toggle" />
                </li>
                <li>
                  <span>Show news and interests</span>
                  <input type="checkbox" className="toggle" />
                </li>
                <li>
                  <span>Show homepage image</span>
                  <input type="checkbox" className="toggle" />
                </li>
              </>
            )}
          </ul>
          <div className="footer">
            <p>Privacy and Cookies • Legal • Advertise • About our ads • Help</p>
            <p>© 2022 Microsoft</p>
          </div>
        </div>
      {/* )} */}
    </div>
  );
};

export default HamburgerMenu;