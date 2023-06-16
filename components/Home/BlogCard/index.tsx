import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@prisma/client';

interface BlogCardProps {
  post: Post;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link
      href={`${post.id}`}
      className="flex gap-4 items-center p-4 border border-base-100 rounded-lg"
    >
      <div className="relative w-24 h-24">
        <Image
          className="rounded-lg"
          src={`https://picsum.photos/200/300?random=${post.id}`}
          alt="Blog card image"
          fill
        />
      </div>
      <div className="w-2/3">
        <h3 className="font-bold text-secondary">{post.title}</h3>
        <p>{post.content}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
