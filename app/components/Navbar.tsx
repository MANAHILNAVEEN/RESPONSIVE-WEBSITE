
'use client';  

import React, { useState } from 'react';
import { FaHeart, FaSearch, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative flex justify-between items-center h-16 bg-pink-50 px-4 py-2">
     
      <div className="text-3xl font-serif font-bold">
        Dior
      </div>

    
      <div className="ml-auto flex items-center space-x-8">
       
        <div className="md:hidden flex items-center cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <FaTimes className="text-2xl" /> 
          ) : (
            <FaBars className="text-2xl" /> 
          )}
        </div>

       
        <div className="hidden md:flex space-x-6">
          <FaHeart className="text-xl cursor-pointer hover:text-pink-400" />
          <FaSearch className="text-xl cursor-pointer hover:text-pink-400" />
          <FaShoppingCart className="text-xl cursor-pointer hover:text-pink-400" />
        </div>
      </div>

     
      <div className={`absolute top-16 right-0 w-full bg-white ${menuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="flex flex-col items-center py-4 space-y-4">
          <a href="#whatsnew" className="text-lg">What's New</a>
          <a href="#blog" className="text-lg">Blog</a>
          <div className="flex space-x-6">
            <FaHeart className="text-xl cursor-pointer hover:text-pink-400" />
            <FaSearch className="text-xl cursor-pointer hover:text-pink-400" />
            <FaShoppingCart className="text-xl cursor-pointer hover:text-pink-400" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;