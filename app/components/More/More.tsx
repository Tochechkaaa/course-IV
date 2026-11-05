import Image from "next/image";
import { MORE } from "../../content";
import styles from "./More.module.scss";

export function More() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.top}>
          <div>
            <p className="eyebrow">Більше, ніж теорія</p>
            <p className={styles.big}>8+</p>
            <h2 className={`h2 ${styles.heading}`}>годин концентрованих знань</h2>
          </div>
          <ol className={styles.list}>
            {MORE.map((text, i) => (
              <li key={text}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {text}
              </li>
            ))}
          </ol>
        </div>
        <figure>
          <div className={styles.photo}>
            <Image src="/images/practice.jpg" alt="Наталія Чекальська та Надія Крижановська" fill sizes="(max-width: 899px) 100vw, 1296px" />
          </div>
          <figcaption className={styles.caption}>Практична частина курсу</figcaption>
        </figure>
      </div>
    </section>
  );
}
