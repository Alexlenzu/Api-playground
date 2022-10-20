import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='p-5 bg-white shadow md:flex md:items-center md:justify-between'>
      <div className='flex justify-center'>
        <h1 className='text-3xl cursor-pointer'>Api Playground</h1>
      </div>
      <ul className='text-center md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7  transition-all ease-in duration-500'>
        <li className='mx-4 my-6 md:my-0'>
          <a href='#' className='text-xl hover:text-cyan-500 duration-200'>
            HOME
          </a>
        </li>
        <li className='mx-4 my-6 md:my-0'>
          <a href='#' className='text-xl hover:text-cyan-500 duration-200'>
            API
          </a>
        </li>
        <li className='mx-4 my-6 md:my-0'>
          <a href='#' className='text-xl hover:text-cyan-500 duration-200'>
            ABOUT ME
          </a>
        </li>
        <li className='mx-4 my-6 md:my-0'>
          <a href='#' className='text-xl hover:text-cyan-500 duration-200'>
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
