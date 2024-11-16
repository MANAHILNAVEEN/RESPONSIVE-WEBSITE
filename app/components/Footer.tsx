
import React from 'react';
import { FaTwitter, FaInstagram, FaFacebook, FaEnvelope, FaPhoneAlt, FaComment } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center bg-pink-50 px-4 py-8 mt-8">
      
     
      <p className="text-4xl font-bold font-serif mb-6">Dior</p>

     
      <div className="text-center mb-4">
        <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">Follow Us:</p>
        <div className="flex space-x-6 justify-center mb-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl sm:text-3xl hover:text-pink-400" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl sm:text-3xl hover:text-pink-400" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl sm:text-3xl hover:text-pink-400" />
          </a>
        </div>
      </div>

      
      <div className="text-center mb-4">
        <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">Contact Us:</p>
        <div className="flex space-x-6 justify-center mb-4">
          <a href="mailto:example@example.com">
            <FaEnvelope className="text-2xl sm:text-3xl hover:text-pink-400" />
          </a>
          <a href="tel:+123456789">
            <FaPhoneAlt className="text-2xl sm:text-3xl hover:text-pink-400" />
          </a>
          <a href="sms:+123456789">
            <FaComment className="text-2xl sm:text-3xl hover:text-pink-400" />
          </a>
        </div> 
      </div>

     
      <div className="text-center">
        <p className="text-xs sm:text-sm">Made by Manahil.</p>
        <p className="text-xs sm:text-sm">2024 All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;