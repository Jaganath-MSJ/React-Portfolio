import type { CSSProperties } from 'react';
import data from '@/data/data.json';
import { SectionHead } from '@/shared/ui/SectionHead';
import { useReveal } from '@/shared/hooks/useReveal';
import { useUi } from '@/app/providers/UiProvider';
import { IcCheck, IcCopy, IcMail, IcPhone, IcPin } from '@/shared/icons';
import { ContactForm } from './ContactForm';
import styles from './Contact.module.css';

export function Contact() {
  const ref = useReveal();
  const { copy, copiedKey } = useUi();

  const cc = data.contact;
  const cards = [
    { key: 'email', lbl: cc.emailLabel, val: data.profile.email, icon: <IcMail width={16} height={16} /> },
    { key: 'phone', lbl: cc.phoneLabel, val: data.profile.phone, icon: <IcPhone width={16} height={16} /> },
    { key: 'location', lbl: cc.locationLabel, val: data.profile.place, icon: <IcPin width={16} height={16} /> },
  ];

  return (
    <section id="Contact" aria-label="Contact">
      <div className="shell" ref={ref}>
        <SectionHead label={cc.label} title={cc.title} accent={cc.accent} caption={cc.caption} />
        <div className={styles.grid}>
          <div className={`reveal ${styles.intro}`} style={{ '--i': 1 } as CSSProperties}>
            <h3>
              {cc.introTitle} <span className={styles.accent}>{cc.introAccent}</span>
            </h3>
            <p>{cc.introText}</p>
            <ul className={styles.cards}>
              {cards.map((c) => (
                <li className={`card ${styles.card}`} key={c.key}>
                  <span className={styles.ico}>{c.icon}</span>
                  <span className={styles.lbl}>{c.lbl}</span>
                  <span className={styles.val}>{c.val}</span>
                  <button
                    type="button"
                    className={`${styles.copyBtn} ${copiedKey === c.key ? styles.copied : ''}`}
                    onClick={() => copy(c.val, c.key)}
                    aria-label={`Copy ${c.lbl}`}
                  >
                    {copiedKey === c.key ? (
                      <>
                        <IcCheck width={12} height={12} /> Copied
                      </>
                    ) : (
                      <>
                        <IcCopy width={12} height={12} /> Copy
                      </>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal" style={{ '--i': 2 } as CSSProperties}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
