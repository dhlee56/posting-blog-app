import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div>
        <Link href="/">
          <p className="text-xl font-bold cursor-pointer">Logo</p>
        </Link>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <p className="cursor-pointer">Home</p>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <p className="cursor-pointer">Posts</p>
            </Link>
          </li>
          <li>
            <Link href="/create-post">
              <p className="cursor-pointer">Create Post</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}