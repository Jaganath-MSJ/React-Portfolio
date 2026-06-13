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

  const cards = [
    { key: 'email', lbl: 'Email', val: data.email, icon: <IcMail width={16} height={16} /> },
    { key: 'phone', lbl: 'Phone', val: data.phone, icon: <IcPhone width={16} height={16} /> },
    { key: 'location', lbl: 'Location', val: data.place, icon: <IcPin width={16} height={16} /> },
  ];

  return (
    <section id="Contact" aria-label="Contact">
      <div className="shell" ref={ref}>
        <SectionHead label="05 — Contact" title="Let's make" accent="something." caption={data.thankYou} />
        <div className={styles.grid}>
          <div className={`reveal ${styles.intro}`} style={{ '--i': 1 } as CSSProperties}>
            <h3>
              Got a project in <span className={styles.accent}>mind?</span>
            </h3>
            <p>Drop a line and I'll get back within a day. For longer briefs, attach context to the email.</p>
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
