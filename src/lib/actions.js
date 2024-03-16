"use server"
import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";

export const addPost = async (formData) => {

  /*
const title = formData.get("title")
const desc = formData.get("desc")
const slug = formData.get("slug")
*/

const {title, desc, slug, userId} = Object.fromEntries(formData)

try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });
    await newPost.save();
    console.log("saved to db");
    revalidatePath("/blog");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
  console.log(title,desc,slug,userId)
}

export const deletePost = async (formData) => {
  
    const { id } = Object.fromEntries(formData);
  
    try {
        connectToDb();
    
        await Post.findByIdAndDelete(id);
        console.log("deleted from db");
        revalidatePath("/blog");
      } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
      }
  }