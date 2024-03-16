import { handleGithubLogin } from "@/lib/action";
import styles from "./login.module.css";

export default async function LoginPage() {

  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Login with Github</button>
      </form>
    </div>
  );
}
