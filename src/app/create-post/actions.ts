"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export async function handleCreatePost(formData: FormData) {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect("/api/auth/login?redirectUrl=/create-post");
    //post_login_redirect_url
  }
  const title = formData.get("title");
  const body = formData.get("body");

  console.log("Title:", title);
  console.log("Body:", body);
}