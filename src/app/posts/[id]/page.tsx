import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type PostProps = {
  params: {
    id: string;
  };
};

export default async function Post({ params }: PostProps) {
  // Fetch the post by ID from the SQLite database
  const post = await (await prisma).post.findUnique({
    where: {
      id: parseInt((await params).id, 10),
    },
  });

  if (!post) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-lg text-gray-600">{post.body}</p>
    </div>
  );
}