import React from 'react';
import Link from 'next/link';
import { BsList, BsX } from 'react-icons/bs';

const Header = () => {
  return (
    <header className="flex justify-between items-center w-full h-16 p-4 bg-base-100">
      <div className="flex justify-center items-center gap-4">
        <BsList
          className="transition-all hover:cursor-pointer active:scale-90"
          size="24"
        />
        <Link href="/" className="text-xl font-bold">
          BLOG
        </Link>
      </div>
      <nav>
        <Link href="/">About</Link>
      </nav>
    </header>
  );
};

export default Header;
