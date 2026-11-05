import type { ReactNode } from "react";
import { BUY_URL } from "../../content";
import styles from "./Button.module.scss";

export function Button({ children, small }: { children: ReactNode; small?: boolean }) {
  return (
    <a href={BUY_URL} className={`${styles.button} ${small ? styles.small : ""}`}>
      {children}
    </a>
  );
}
