"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function handleCreatePost(formData: FormData) {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login?redirectUrl=/create-post");
  }

  const title = formData.get("title") as string;
  const body = formData.get("body") as string;

  if (!title || !body) {
    throw new Error("Title and body are required.");
  }

  // Save the post to the database
  const post = await prisma.post.create({
    data: {
      title,
      body,
    },
  });

  console.log("Post created:", post);
}