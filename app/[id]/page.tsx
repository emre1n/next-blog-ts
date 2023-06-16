import { Post } from '.prisma/client';
import getPosts from '../actions/getPosts';
import PostDetail from '@/components/PostDetail';

interface Props {
  params: { id: string };
}

export default async function PostDetailPage({ params }: Props) {
  const posts = await getPosts();
  const post: Post | undefined = posts.find(
    post => post.id === Number(params.id)
  );
  return (
    <div>
      <PostDetail post={post} />
    </div>
  );
}
