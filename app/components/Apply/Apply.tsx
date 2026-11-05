import { APPLY } from "../../content";
import styles from "./Apply.module.scss";

export function Apply() {
  return (
    <section className={styles.section}>
      <div className="container">
        <p className="eyebrow">Практична цінність</p>
        <h2 className="h2">Що ви зможете застосувати у своїй практиці?</h2>
        <ol className={styles.grid}>
          {APPLY.map((text, i) => (
            <li key={text}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <p>{text}</p>
            </li>
          ))}
        </ol>
        <p className={styles.note}>Курс має освітній характер і не гарантує конкретних клінічних результатів.</p>
      </div>
    </section>
  );
}
