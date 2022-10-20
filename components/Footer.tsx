import React from 'react';

function Footer() {
  return (
    <footer className='flex-column p-4 bg-white rounded-lg shadow md:px-6 md:py-8  bottom-0 '>
      <div className=' content-center sm:flex sm:items-center sm:justify-between '>
        <a href='#' className='flex items-center justify-center mb-4 sm:mb-0'>
          <span className='self-center text-2xl font-semibold '>
            Alexanders Api Playground
          </span>
        </a>
        <ul className='flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0  justify-center '>
          <li>
            <a href='#' className='mr-4 hover:underline md:mr-6 '>
              About
            </a>
          </li>
          <li>
            <a href='#' className='mr-4 hover:underline md:mr-6'>
              Privacy Policy
            </a>
          </li>
          <li>
            <a href='#' className='mr-4 hover:underline md:mr-6 '>
              Licensing
            </a>
          </li>
          <li>
            <a href='#' className='hover:underline'>
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr className='my-6 border-gray-200 sm:mx-auto  lg:my-8' />
      <span className='block text-center text-sm text-gray-500 sm:text-center '>
        © 2022{' '}
        <a href='#' className='hover:underline'>
          AOV
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}

export default Footer;
