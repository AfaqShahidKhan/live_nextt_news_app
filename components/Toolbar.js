import styles from "../styles/Toolbar.module.css";
import { useRouter } from "next/router";
import { main } from "@popperjs/core";
export const Toolbar = () => {
  const router = useRouter();
  return (
    <div className={styles.main}>
      <div onClick={() => router.push("/")}>Home</div>
      <div onClick={() => router.push("/feed/1")}>Feed</div>
      <div onClick={() => router.push("/EOM")}>EOM</div>
      <div
        onClick={() =>
          (window.location.href = "https://twitter.com/afaqshahidkhan")
        }
      >
        Twitter
      </div>
    </div>
  );
};
