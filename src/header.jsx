import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/Users/kasturinath/Documents/react/ToDo/dailygoals/src/logo.png'; // Ensure correct path to the logo

const Header = () => {
  return (
    <>
      
      <div className='tags'>
        <img src={logo} alt="Daily Goals Logo" /> {/* Fixed incorrect src reference */}
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </>
  );
};

export default Header;
