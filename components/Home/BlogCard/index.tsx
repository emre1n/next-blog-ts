import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BlogCard = () => {
  return (
    <Link
      href="/"
      className="flex gap-4 items-center p-4 border border-base-100 rounded-lg"
    >
      <div className="relative w-24 h-24">
        <Image
          className="rounded-lg object-cover"
          src="https://picsum.photos/200/300"
          alt="Blog card image"
          fill
        />
      </div>
      <div>
        <h3 className="font-bold">Title</h3>
        <p>Lorem Ipsum</p>
      </div>
    </Link>
  );
};

export default BlogCard;
