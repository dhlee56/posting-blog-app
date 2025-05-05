"use client";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { handleCreatePost } from "./actions";

export default function CreatePost() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Create Post</h1>
      <form
        action={handleCreatePost}
        className="flex flex-col gap-4 w-full max-w-md"
      >
        <input
          type="text"
          name="title"
          placeholder="Enter post title"
          className="px-4 py-2 border border-gray-300 rounded"
          required
        />
        <textarea
          name="body"
          placeholder="Enter post body"
          className="px-4 py-2 border border-gray-300 rounded"
          rows={5}
          required
        ></textarea>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      <button
        onClick={() => (window.location.href = "/api/auth/logout")}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Logout
      </button>
      {/* <LogoutLink>Log out</LogoutLink> */}

    </div>
  );
}