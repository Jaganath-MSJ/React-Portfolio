import data from '@/data/data.json';
import { scrollToId } from '@/shared/lib/scrollToId';
import { IcArrowRight, IcDownload, IcGithub, IcLinkedIn, IcMail } from '@/shared/icons';
import { RoleRotator } from './RoleRotator';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className="shell">
        <h1 className={styles.title}>
          {data.profile.name} <span className={styles.accent}>M S</span>
        </h1>
        <div className={styles.sub}>
          <p className={styles.roles}>
            {data.hero.rolePrefix}&nbsp;
            <RoleRotator words={data.hero.roles} />.
          </p>
          <address className={styles.meta}>
            <span className={styles.lbl}>{data.hero.currentlyLabel}</span>
            <span className={styles.val}>{data.hero.role}</span>
            <span className={styles.lbl}>{data.hero.basedInLabel}</span>
            <span className={styles.val}>{data.profile.place}</span>
          </address>
        </div>
        <div className={styles.cta}>
          <button className="btn btn-primary" type="button" onClick={() => scrollToId('Projects')}>
            {data.hero.ctaProjects} <IcArrowRight width={14} height={14} className="arrow" />
          </button>
          <a className="btn btn-ghost" href={data.profile.resume} target="_blank" rel="noreferrer">
            {data.hero.ctaResume} <IcDownload width={14} height={14} />
          </a>
          <div className={styles.socials}>
            <a href={data.profile.linkedInLink} target="_blank" rel="noreferrer" className="icon-btn" aria-label="LinkedIn">
              <IcLinkedIn />
            </a>
            <a href={data.profile.githubLink} target="_blank" rel="noreferrer" className="icon-btn" aria-label="GitHub">
              <IcGithub />
            </a>
            <a href={`mailto:${data.profile.email}`} className="icon-btn" aria-label="Email">
              <IcMail />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
