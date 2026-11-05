import Image from "next/image";
import { SPEAKERS } from "../../content";
import styles from "./Leaders.module.scss";

export function Leaders() {
  return (
    <section className={styles.section}>
      <div className="container">
        <p className="eyebrow">Наукові керівники</p>
        <h2 className={`h2 ${styles.heading}`}>Наукове керівництво курсу</h2>
        <div className={styles.photo}>
          <Image src="/images/practice.jpg" alt="Наталія Чекальська та Надія Крижановська" fill sizes="680px" />
        </div>
        <div className={styles.people}>
          {SPEAKERS.map((s) => (
            <article key={s.name} className={styles.person}>
              <div className={styles.portrait}>
                <Image src={s.photo} alt="" fill sizes="130px" style={{ objectPosition: s.position }} />
              </div>
              <div>
                <h3 className="h3">{s.name}</h3>
                <p className={styles.role}>{s.role}</p>
                <p className={styles.duty}>Спікерка та науковий керівник курсу</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
