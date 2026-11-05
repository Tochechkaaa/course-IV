import Image from "next/image";
import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <Image src="/images/logo-footer.png" alt="IV Course" width={46} height={26} />
        <p>© EstyDerm · IV Course</p>
        <p>Освітній курс для лікарів</p>
      </div>
    </footer>
  );
}
