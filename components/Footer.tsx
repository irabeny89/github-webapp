import Image from "next/image";
import styles from "styles/Home.module.css";

export default function Footer() {
  return (
    <footer className="text-center mt-5">
      Powered by{" "}
      <span className={styles.logo}>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </span>
      <div>Made by Ernest</div>
    </footer>
  );
}
