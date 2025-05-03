import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-gray-100 shadow-md">
      <Link href="/" className="text-xl font-bold">
        Logo
      </Link>
      <nav className="flex gap-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/posts" className="hover:underline">
          Posts
        </Link>
        <Link href="/create-post" className="hover:underline">
          Create Post
        </Link>
      </nav>
    </header>
  );
}