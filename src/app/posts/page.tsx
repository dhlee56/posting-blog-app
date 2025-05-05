import Link from "next/link";

export default async function Posts() {
  const res = await fetch("https://dummyjson.com/posts?limit=10");
  const data = await res.json();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center bg-amber-400">
      <h1 className="text-4xl font-bold mb-4">Posts</h1>
      <ul className="w-full max-w-2xl text-left">
        {data.posts.map((post: { id: number; title: string }) => (
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