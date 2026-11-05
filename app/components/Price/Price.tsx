import { PRICE } from "../../content";
import { Button } from "../Button/Button";
import styles from "./Price.module.scss";

export function Price() {
  return (
    <section id="price" className={styles.section}>
      <div className="container">
        <div className={styles.card}>
          <div>
            <p className={`eyebrow ${styles.label}`}>IV Course</p>
            <h2 className={`h2 ${styles.heading}`}>IV-терапія в естетичній та anti-age медицині</h2>
            <p className={styles.text}>Понад 8 годин науково обґрунтованого навчання з теоретичною та практичною складовою — на рік вперед.</p>
          </div>
          <div className={styles.buy}>
            <p className={styles.caption}>Вартість</p>
            <p className={styles.price}>{PRICE}</p>
            <Button>Придбати курс</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
