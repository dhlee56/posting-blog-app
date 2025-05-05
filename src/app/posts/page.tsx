import Link from "next/link";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function Posts() {
  // Fetch posts from the SQLite database
  const posts = await prisma.post.findMany();

  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-8 text-center">
      <h1 className="w-full max-w-2xl text-left text-4xl font-bold mb-4">Posts</h1>
      <ul className="w-full max-w-2xl text-left">
        {posts.map((post) => (
          <li key={post.id} className="mb-2">
            <Link
              href={`/posts/${post.id}`}
              className="text-blue-500 hover:underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
