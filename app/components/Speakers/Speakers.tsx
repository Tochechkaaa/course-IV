import Image from "next/image";
import { SPEAKERS } from "../../content";
import styles from "./Speakers.module.scss";

export function Speakers() {
  return (
    <section id="speakers" className={`container ${styles.section}`}>
      <p className="eyebrow">Спікери</p>
      <h2 className="h2">Двоє експертів курсу</h2>
      <div className={styles.grid}>
        {SPEAKERS.map((s) => (
          <article key={s.name}>
            <div className={styles.photo}>
              <Image src={s.photo} alt={s.name} fill sizes="(max-width: 899px) 100vw, 634px" style={{ objectPosition: s.position }} />
            </div>
            <h3 className={`h3 ${styles.name}`}>{s.name}</h3>
            <p className={styles.role}>{s.role}</p>
            <p>{s.bio}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
