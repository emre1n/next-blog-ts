import React from 'react';
import Link from 'next/link';
import { BsList, BsX } from 'react-icons/bs';

const Header = () => {
  return (
    <header className="flex justify-between items-center w-full p-4 bg-base-100">
      <div className="flex justify-center items-center gap-4">
        <Link href="/" className="text-xl font-bold">
          BLOG
        </Link>
      </div>
      <nav>
        <BsList
          className="transition-all hover:cursor-pointer active:scale-90"
          size="24"
        />
      </nav>
    </header>
  );
};

export default Header;
