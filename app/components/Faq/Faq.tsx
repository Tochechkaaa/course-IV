import { FAQ } from "../../content";
import { Accordion } from "../Accordion/Accordion";
import styles from "./Faq.module.scss";

export function Faq() {
  return (
    <section id="faq" className={`container ${styles.section}`}>
      <p className={`eyebrow ${styles.center}`}>FAQ</p>
      <h2 className={`h2 ${styles.center} ${styles.heading}`}>Часті запитання</h2>
      <div className={styles.list}>
        <Accordion items={FAQ} />
      </div>
    </section>
  );
}
