import BlogCard from '@/components/Home/BlogCard';
import getPosts from './actions/getPosts';
import { Post } from '@prisma/client';

export default async function Home() {
  const posts = await getPosts();
  console.log('prisma-data', posts);

  return (
    <div className="flex flex-col gap-2">
      {posts.map((post: Post) => {
        return <BlogCard key={post.id} post={post} />;
      })}
    </div>
  );
}
