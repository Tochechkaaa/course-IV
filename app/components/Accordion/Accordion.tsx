"use client";

import { useId, useState } from "react";
import styles from "./Accordion.module.scss";

type Item = { title: string; text: string };

export function Accordion({ items, numbered, defaultOpen = null }: { items: Item[]; numbered?: boolean; defaultOpen?: number | null }) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();

  return (
    <ul className={`${styles.list} ${numbered ? styles.numbered : styles.plain}`}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={item.title} className={styles.item}>
            <h3>
              <button
                type="button"
                className={styles.trigger}
                aria-expanded={isOpen}
                aria-controls={`${id}-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                {numbered && <span className={styles.number}>{String(i + 1).padStart(2, "0")}</span>}
                <span className={styles.title}>{item.title}</span>
                <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`} aria-hidden="true">+</span>
              </button>
            </h3>
            <div id={`${id}-${i}`} className={`${styles.panel} ${isOpen ? styles.panelOpen : ""}`}>
              <div className={styles.panelInner}>
                <p className={styles.text}>{item.text}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
