import Image from "next/image";
import { getUser } from "@/lib/data";
import styles from "./postUser.module.css";

/*
// FETCH DATA WITH AN API
const getData = async (userId) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache:"no-store"});
  
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
  
    return res.json();
  };
  */

export default async function PostUser ({ userId }) {

     // FETCH DATA WITH AN API
   //const user = await getData(userId);

  // FETCH DATA WITHOUT AN API
  const user = await getUser(userId);
    
  return (
    <div className={styles.container}>
      <Image
            src={user.img ? user.img : "/noavatar.png"}
            alt=""
            width={50}
            height={50}
            className={styles.avatar}
          />
    <div className={styles.texts}>
      <span className={styles.title}>Author</span>
      <span className={styles.username}>{user.username}</span>
    </div>
  </div>
  )
}

