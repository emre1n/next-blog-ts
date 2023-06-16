import { Post } from '@prisma/client';
import React from 'react';
import Image from 'next/image';

interface Props {
  post: Post | undefined;
}

const PostDetail = ({ post }: Props) => {
  return (
    <div className="flex flex-col items-center gap-6 p-4">
      <div className="relative w-full h-72">
        <Image
          className="rounded-lg object-cover"
          src={`https://picsum.photos/200/300?random=${post?.id}`}
          alt="Blog card image"
          fill
        />
      </div>
      <hr className="border w-full border-negative-text" />
      <div className="flex flex-col w-full">
        <h3 className="font-bold text-3xl text-secondary">{post?.title}</h3>
        <p>{post?.content}</p>
      </div>
    </div>
  );
};

export default PostDetail;
