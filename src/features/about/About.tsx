import data from '@/data/data.json';
import { SectionHead } from '@/shared/ui/SectionHead';
import { useFadeIn } from '@/shared/hooks/useFadeIn';
import styles from './About.module.css';

export function About() {
  const ref = useFadeIn();
  return (
    <section id="About" aria-label="About">
      <div className="shell" ref={ref}>
        <SectionHead
          label="01 — About"
          title="A frontend"
          accent="generalist."
          caption="EEE graduate by training, web developer by trade. I gravitate to the seam where visual design meets the code that actually runs it."
        />
        <div className={styles.grid}>
          <figure className={styles.portrait}>
            <img src={data.img} alt={data.nameInc} draggable="false" loading="lazy" decoding="async" />
            <figcaption>
              {data.nameInc} · {data.place}
            </figcaption>
          </figure>
          <div className={styles.body}>
            <h3>
              I'm {data.name}, a <span className={styles.accent}>frontend engineer</span> shipping React +
              TypeScript at Workhall.
            </h3>
            <p>{data.blurb}</p>
            <p>{data.blurb2}</p>
            <dl className={styles.stats}>
              {data.stats.map((s) => (
                <div className={`card ${styles.statCard}`} key={s.lbl}>
                  <dt className={styles.num}>{s.num}</dt>
                  <dd className={styles.statLbl}>{s.lbl}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
