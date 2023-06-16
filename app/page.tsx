import BlogCard from '@/components/Home/BlogCard';
import getPosts from './actions/getPosts';
import { Post } from '@prisma/client';
import BlogCardList from '@/components/Home/BlogCardList';

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      <h2 className="py-4">The Latest</h2>
      <BlogCardList posts={posts} />
    </>
  );
}
