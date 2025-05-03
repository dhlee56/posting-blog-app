import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Blog</h1>
        <p className="text-lg mb-6">
          Share your thoughts, explore new ideas, and connect with others. 
          Start your blogging journey today!
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="/posts"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            View Posts
          </a>
          <a
            href="/create-post"
            className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition"
          >
            Create Post
          </a>
        </div>
      </div>
      <div className="mt-10">
        <Image
          src="/blog-illustration.png" // Replace with your image path
          alt="Blog Illustration"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
}
