import { FORMAT } from "../../content";
import styles from "./Format.module.scss";

export function Format() {
  return (
    <section className={`container ${styles.section}`}>
      <p className="eyebrow">Формат навчання</p>
      <h2 className="h2">Все, що потрібно знати</h2>
      <dl className={styles.grid}>
        {FORMAT.map((f) => (
          <div key={f.label}>
            <dt>{f.label}</dt>
            <dd>{f.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
