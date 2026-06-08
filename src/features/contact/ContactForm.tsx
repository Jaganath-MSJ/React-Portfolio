import { useState, type ChangeEvent, type FormEvent } from 'react';
import emailjs from 'emailjs-com';
import data from '@/data/data.json';
import { useUi } from '@/app/providers/UiProvider';
import { IcArrowUR, IcSend } from '@/shared/icons';
import styles from './Contact.module.css';

const EMAILJS_SERVICE = 'service_oovklos';
const EMAILJS_TEMPLATE = 'template_d32swih';
const EMAILJS_PUBLIC_KEY = 'f0DXl-qv80B9XXFLP';

const EMAIL_RE = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

interface FormState {
  name: string;
  email: string;
  message: string;
}

const EMPTY: FormState = { name: '', email: '', message: '' };

export function ContactForm() {
  const { showToast } = useUi();
  const [form, setForm] = useState<FormState>(EMPTY);
  const [err, setErr] = useState('');
  const [sending, setSending] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  function change(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  }

  function mailtoHref() {
    const subj = encodeURIComponent(`Hello from ${form.name || 'your portfolio'}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
    return `mailto:${data.email}?subject=${subj}&body=${body}`;
  }

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (form.name.trim().length < 2) return setErr('Name is too short');
    if (!EMAIL_RE.test(form.email)) return setErr('Email is invalid');
    if (form.message.trim().length < 10) return setErr('Message is too short');
    setErr('');
    setSending(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        {
          from_mail: form.email,
          name: form.name.trim(),
          message: form.message.trim(),
          contact: `email : ${form.email}`,
        },
        EMAILJS_PUBLIC_KEY
      );
      showToast('Message sent — I’ll get back to you soon');
      setForm(EMPTY);
      setShowFallback(false);
    } catch {
      showToast("Couldn't send right now");
      setErr("Sending failed — use the mail-client link below instead.");
      setShowFallback(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={submit} noValidate>
      <div className={styles.fieldRow}>
        <div className={styles.field}>
          <label htmlFor="cf-name">Your name</label>
          <input
            id="cf-name"
            name="name"
            value={form.name}
            onChange={change}
            placeholder="Jane Doe"
            autoComplete="name"
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="cf-email">Email</label>
          <input
            id="cf-email"
            name="email"
            type="email"
            value={form.email}
            onChange={change}
            placeholder="jane@studio.com"
            autoComplete="email"
          />
        </div>
      </div>
      <div className={styles.field}>
        <label htmlFor="cf-msg">Message</label>
        <textarea
          id="cf-msg"
          name="message"
          value={form.message}
          onChange={change}
          placeholder="What are we building?"
        />
      </div>
      <div className={styles.formFooter}>
        <p className={`${styles.status} ${err ? styles.statusErr : ''}`}>
          {err || 'Pressing Send delivers this message straight to my inbox.'}
        </p>
        <button type="submit" className="btn btn-primary" disabled={sending}>
          {sending ? 'Sending…' : 'Send message'} <IcSend width={14} height={14} />
        </button>
      </div>
      {showFallback && (
        <a className={styles.fallback} href={mailtoHref()}>
          Send via your mail client instead <IcArrowUR width={12} height={12} />
        </a>
      )}
    </form>
  );
}
