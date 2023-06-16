'use client';
import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { BsList, BsX } from 'react-icons/bs';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(value => !value);
  }, []);

  return (
    <header className="flex justify-between items-center w-full p-4 bg-base-100">
      <div className="flex justify-center items-center gap-4">
        <Link href="/" className="text-xl font-bold">
          BLOG
        </Link>
      </div>
      <nav>
        {isMenuOpen ? (
          <BsX
            onClick={toggleMenu}
            className="transition-all hover:cursor-pointer active:scale-90"
            size="24"
          />
        ) : (
          <BsList
            onClick={toggleMenu}
            className="transition-all hover:cursor-pointer active:scale-90"
            size="24"
          />
        )}

        <ul
          className={`${
            isMenuOpen ? 'absolute' : 'hidden'
          } top-16 right-1 p-4 bg-base-100 rounded w-52 flex flex-col items-end gap-4`}
        >
          <li>
            <a>Homepage</a>
          </li>
          <li>
            <a>Portfolio</a>
          </li>
          <li>
            <a>About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
