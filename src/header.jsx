import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <>
      
      <div className='tags'>
        <img src="/mylogo.png" alt="Daily Goals Logo" /> {/* Fixed incorrect src reference */}
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </>
  );
};

export default Header;
