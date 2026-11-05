import Image from "next/image";
import { Button } from "../Button/Button";
import styles from "./Cta.module.scss";

export function Cta() {
  return (
    <section className={styles.section}>
      <span className={styles.ring} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <Image className={styles.logo} src="/images/logo-cta.png" alt="IV Course" width={103} height={96} />
        <h2 className={styles.title}>
          <span>Поглиблюйте експертизу.</span> <em>Розширюйте клінічні можливості.</em>{" "}
          <span>Інтегруйте нові знання у свою практику.</span>
        </h2>
        <Button>Придбати IV Course</Button>
      </div>
    </section>
  );
}
