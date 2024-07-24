import React from 'react';
import Toolbar from './components/Toolbar';
// import HamburgerMenu from './components/HamburgerMenu';
import SearchBar from './components/SearchBar';
import Carousel from './components/Carousel';

const App = () => {
  return (
    <div className='main'>
      <Toolbar />
      <SearchBar/>
      <Carousel />
    </div>
  );
};

export default App;
