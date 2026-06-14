import { useState, type ChangeEvent, type FormEvent } from 'react';
import data from '@/data/data.json';
import { useUi } from '@/app/providers/UiProvider';
import { IcSend } from '@/shared/icons';
import styles from './Contact.module.css';

interface FormState {
  name: string;
  message: string;
}

const EMPTY: FormState = { name: '', message: '' };

export function ContactForm() {
  const { showToast } = useUi();
  const [form, setForm] = useState<FormState>(EMPTY);
  const [err, setErr] = useState('');

  function change(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  }

  function mailtoHref() {
    const subj = encodeURIComponent(`Hello from ${form.name || 'your portfolio'}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}`);
    return `mailto:${data.profile.email}?subject=${subj}&body=${body}`;
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    if (form.name.trim().length < 2) return setErr('Name is too short');
    if (form.message.trim().length < 10) return setErr('Message is too short');
    setErr('');
    window.location.href = mailtoHref();
    showToast('Opening your mail client…');
    setForm(EMPTY);
  }

  const cc = data.contact;
  return (
    <form className={styles.form} onSubmit={submit} noValidate>
      <div className={styles.field}>
        <label htmlFor="cf-name">{cc.nameLabel}</label>
        <input
          id="cf-name"
          name="name"
          value={form.name}
          onChange={change}
          placeholder={cc.namePlaceholder}
          autoComplete="name"
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="cf-msg">{cc.messageLabel}</label>
        <textarea
          id="cf-msg"
          name="message"
          value={form.message}
          onChange={change}
          placeholder={cc.messagePlaceholder}
        />
      </div>
      <div className={styles.formFooter}>
        <p className={`${styles.status} ${err ? styles.statusErr : ''}`}>{err || cc.formHint}</p>
        <button type="submit" className="btn btn-primary">
          {cc.submit} <IcSend width={14} height={14} />
        </button>
      </div>
    </form>
  );
}
