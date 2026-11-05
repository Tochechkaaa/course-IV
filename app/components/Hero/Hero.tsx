import Image from "next/image";
import { STATS, YOUTUBE_ID } from "../../content";
import { Button } from "../Button/Button";
import styles from "./Hero.module.scss";

export function Hero() {
  // YouTube дозволяє автозапуск лише без звуку.
  const video = `https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_ID}&playsinline=1&rel=0`;

  return (
    <section id="top" className={styles.hero}>
      <span className={styles.ring} aria-hidden="true" />
      <span className={styles.disc} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <div>
          <p className="eyebrow">EstyDerm · IV Course</p>
          <h1 className={styles.title}>IV-терапія в естетичній та anti-age медицині</h1>
          <p className={styles.lead}>Від біохімічних механізмів до персоналізованих рішень у клінічній практиці</p>
          <Button>Придбати курс</Button>
        </div>
        <Image className={styles.logo} src="/images/logo-hero.png" alt="IV Course" width={340} height={317} priority />
        <div className={styles.video}>
          {YOUTUBE_ID ? (
            <iframe src={video} title="Відео про курс IV-терапії" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
          ) : (
            <p className={styles.placeholder}>Тут буде відео з YouTube</p>
          )}
        </div>
        <dl className={styles.stats}>
          {STATS.map((s) => (
            <div key={s.label}>
              <dt>{s.value}</dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
