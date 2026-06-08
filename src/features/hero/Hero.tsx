import data from '@/data/data.json';
import { scrollToId } from '@/shared/lib/scrollToId';
import { IcArrowRight, IcDownload, IcGithub, IcLinkedIn, IcMail, IcTelegram } from '@/shared/icons';
import { RoleRotator } from './RoleRotator';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className="shell">
        <h1 className={styles.title}>
          {data.name} <span className={styles.accent}>M S</span>
        </h1>
        <div className={styles.sub}>
          <p className={styles.roles}>
            Building accessible, performant interfaces as a&nbsp;
            <RoleRotator words={data.roles} />.
          </p>
          <address className={styles.meta}>
            <span className={styles.lbl}>Currently</span>
            <span className={styles.val}>{data.role}</span>
            <span className={styles.lbl}>Based in</span>
            <span className={styles.val}>{data.place}</span>
          </address>
        </div>
        <div className={styles.cta}>
          <button className="btn btn-primary" type="button" onClick={() => scrollToId('Projects')}>
            See projects <IcArrowRight width={14} height={14} className="arrow" />
          </button>
          <a className="btn btn-ghost" href={data.resume} target="_blank" rel="noreferrer">
            Download resume <IcDownload width={14} height={14} />
          </a>
          <div className={styles.socials}>
            <a href={data.linkedInLink} target="_blank" rel="noreferrer" className="icon-btn" aria-label="LinkedIn">
              <IcLinkedIn />
            </a>
            <a href={data.githubLink} target="_blank" rel="noreferrer" className="icon-btn" aria-label="GitHub">
              <IcGithub />
            </a>
            <a href={data.telegramLink} target="_blank" rel="noreferrer" className="icon-btn" aria-label="Telegram">
              <IcTelegram />
            </a>
            <a href={`mailto:${data.email}`} className="icon-btn" aria-label="Email">
              <IcMail />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
