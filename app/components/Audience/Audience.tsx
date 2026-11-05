import { AUDIENCE } from "../../content";
import styles from "./Audience.module.scss";

export function Audience() {
  return (
    <section id="audience" className={`container ${styles.section}`}>
      <p className="eyebrow">Для кого цей курс</p>
      <h2 className={`h2 ${styles.heading}`}>Три напрями — один науковий підхід</h2>
      <div className={styles.grid}>
        {AUDIENCE.map((a, i) => (
          <article key={a.title} className={styles.card}>
            <span className={styles.number}>{String(i + 1).padStart(2, "0")}</span>
            <h3 className="h3">{a.title}</h3>
            <p>{a.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
