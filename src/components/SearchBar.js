import React, { useState } from 'react';
import { FaMicrophone, FaSearch, FaBarcode } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../assets/css/style.css';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleVoiceRecognition = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
      setSearchQuery(event.results[0][0].transcript);
    };

    recognition.start();
  };

  const handleSearch = () => {
    // Implement the search functionality here
    console.log(`Searching for: ${searchQuery}`);
    // You can add logic to handle the search, like making an API call or filtering data
  };

  const handleScanner = () => {
    // Implement the scanner functionality here
    console.log('Barcode scanner clicked');
    // You can integrate a barcode scanner library here
  };

  const languages = [
    { name: 'hindi', displayName: 'हिंदी' },
    { name: 'bengali', displayName: 'বাংলা' },
    { name: 'urdu', displayName: 'اردو' },
    { name: 'punjabi', displayName: 'ਪੰਜਾਬੀ' },
    { name: 'marathi', displayName: 'मराठी' },
    { name: 'telugu', displayName: 'తెలుగు' },
    { name: 'tamil', displayName: 'தமிழ்' },
    { name: 'kannada', displayName: 'ಕನ್ನಡ' },
    { name: 'gujarati', displayName: 'ગુજરાતી' },
    { name: 'malayalam', displayName: 'മലയാളം' },
    { name: 'odia', displayName: 'ଓଡ଼ିଆ' }
  ];

  return (
    <div className="search-bar flex flex-col justify-center container">
      <div className="relative w-2/4">
        <input
          type="text"
          className="w-full p-2 pl-10 pr-24 border border-gray-300 rounded"
          placeholder=""
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <FaMicrophone
          className="absolute top-4 right-16 text-gray-500 cursor-pointer"
          onClick={handleVoiceRecognition}
        />
        <FaBarcode
          className="absolute top-4 right-10 text-gray-500 cursor-pointer"
          onClick={handleScanner}
        />
        <FaSearch
          className="absolute top-4 right-4 text-gray-500 cursor-pointer"
          onClick={handleSearch}
        />
      </div>
      <div className="mt-4 flex flex-wrap justify-center language-txt">
        {languages.map((lang) => (
          <a key={lang.name} to={`/${lang.name}`} className="mx-1 text-blue-500 hover:underline">
            {lang.displayName}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
