import { Post } from '@prisma/client';
import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface Props {
  post: Post | undefined;
}

const PostDetail = ({ post }: Props) => {
  if (!post?.id) {
    notFound();
  }
  return (
    <div className="flex flex-col items-center gap-6 p-4">
      <div className="relative flex justify-center">
        <Image
          className="rounded-lg"
          src={`https://picsum.photos/200/300?random=${post?.id}`}
          alt="Blog detail image"
          width={200}
          height={300}
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 800px"
          priority
        />
      </div>
      <hr className="border w-full border-negative-text" />
      <div className="flex flex-col w-full">
        <h3 className="text-3xl text-secondary">{post?.title}</h3>
        <p>{post?.content}</p>
      </div>
    </div>
  );
};

export default PostDetail;
