import React from 'react';
// Assuming you have these icons from React Icons or similar
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white'>
      <div className='max-w-6xl mx-auto px-4 py-10 md:py-12'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
          <div>
            <h3 className='font-bold text-xl mb-4'>Ventura</h3>
            <p className='text-gray-400'>
              Streamlining your organizational and operational efficiency.
            </p>
          </div>
          <div>
            <h4 className='font-semibold mb-4'>Quick Links</h4>
            <ul className='text-gray-400'>
              <li className='mb-2 hover:text-white'>
                <a href='/'>Home</a>
              </li>
              <li className='mb-2 hover:text-white'>
                <a href='/#about'>About Us</a>
              </li>
              <li className='mb-2 hover:text-white'>
                <a href='/#features'>Features</a>
              </li>
              <li className='mb-2 hover:text-white'>
                <a href='/#pricing'>Pricing</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-4'>Resources</h4>
            <ul className='text-gray-400'>
              <li className='mb-2 hover:text-white'>
                <a href='#'>Blog</a>
              </li>
              <li className='mb-2 hover:text-white'>
                <a href='/#about'>FAQs</a>
              </li>
              <li className='mb-2 hover:text-white'>
                <a href='/#docs'>Support</a>
              </li>
              <li className='mb-2 hover:text-white'>
                <a href='#'>Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold mb-4'>Follow Us</h4>
            <div className='flex space-x-4'>
              <a
                href='#'
                className='hover:text-blue-500'
              >
                <FaFacebookF />
              </a>
              <a
                href='#'
                className='hover:text-blue-300'
              >
                <FaTwitter />
              </a>
              <a
                href='#'
                className='hover:text-pink-400'
              >
                <FaInstagram />
              </a>
              <a
                href='#'
                className='hover:text-blue-700'
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <div className='text-center text-gray-400 pt-10 md:pt-12'>
          <p>&copy; {new Date().getFullYear()} Ventura. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
