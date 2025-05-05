"use server";

export async function handleCreatePost(formData: FormData) {
  const title = formData.get("title");
  const body = formData.get("body");

  console.log("Title:", title);
  console.log("Body:", body);
}