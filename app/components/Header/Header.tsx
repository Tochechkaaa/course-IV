"use client";

import Image from "next/image";
import { useState } from "react";
import { NAV } from "../../content";
import { Button } from "../Button/Button";
import styles from "./Header.module.scss";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <a href="#top" className={styles.brand} aria-label="EstyDerm IV Course, на початок сторінки">
          <Image src="/images/logo-nav.png" alt="" width={56} height={32} />
          <small>ESTYDERM</small>
        </a>
        <nav className={styles.nav} aria-label="Основна навігація">
          {NAV.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
          <Button small>Придбати курс</Button>
        </nav>
        <button type="button" className={styles.toggle} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          {open ? "Закрити" : "Меню"}
        </button>
      </div>
      {open && (
        <nav id="mobile-menu" className={styles.menu} aria-label="Мобільна навігація" onClick={() => setOpen(false)}>
          {NAV.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
          <Button>Придбати курс</Button>
        </nav>
      )}
    </header>
  );
}
