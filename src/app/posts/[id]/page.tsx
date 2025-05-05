type PostProps = {
  params: {
    id: string;
  };
};

export default async function Post({ params }: PostProps) {
  const res = await fetch(`https://dummyjson.com/posts/${(await params).id}`);
  const post = await res.json();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-lg text-gray-600">{post.body}</p>
    </div>
  );
}