import React from 'react';
import BlogCard from '../BlogCard';
import { Post } from '@prisma/client';

interface BlogCardListProps {
  posts: Post[];
}

const BlogCardList = ({ posts }: BlogCardListProps) => {
  return (
    <div className="flex flex-col gap-2">
      {posts.map((post: Post) => {
        return <BlogCard key={post.id} post={post} />;
      })}
    </div>
  );
};

export default BlogCardList;
