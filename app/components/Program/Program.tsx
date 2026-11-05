import { MODULES } from "../../content";
import { Accordion } from "../Accordion/Accordion";
import styles from "./Program.module.scss";

export function Program() {
  return (
    <section id="program" className={`container ${styles.section}`}>
      <p className="eyebrow">Програма курсу</p>
      <h2 className={`h2 ${styles.heading}`}>Шість модулів</h2>
      <Accordion items={MODULES} numbered defaultOpen={0} />
    </section>
  );
}
