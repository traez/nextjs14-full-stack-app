import { NextResponse } from "next/server";
import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";

export const GET = async (request) => {
  try {
    connectToDb();

    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};
