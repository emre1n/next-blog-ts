import prisma from '@/libs/prismadb';

export default async function getPosts() {
  try {
    const data = await prisma.post.findMany();
    return data;
  } catch (error: any) {
    console.log('database failed');
    throw new Error(error);
  }
}
