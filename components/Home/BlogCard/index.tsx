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
      className="flex gap-4 p-4 border-t border-t-negative-text"
    >
      <div className="w-2/3">
        <h3 className="text-2xl text-secondary">{post.title}</h3>
        <p className="text-sm">{post.content}</p>
      </div>
      <div className="h-24 w-24 relative overflow-hidden rounded-lg">
        <Image
          src={`https://picsum.photos/200/300?random=${post.id}`}
          alt="Blog card image"
          width={200}
          height={300}
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
        />
      </div>
    </Link>
  );
};

export default BlogCard;
