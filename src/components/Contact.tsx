import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { profile } from "../data/content";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const field =
  "w-full rounded-[10px] border border-[#3A3668] bg-[#24213F] px-4 py-3.5 font-serif text-[17px] text-ink placeholder:text-[#9B96C4]";
const label = "mb-2 block font-ui text-[15px] font-semibold";

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [note, setNote] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  /* A static site has no server, so this opens the visitor's email app with the
     message filled in. To receive messages without that, use a form service
     such as Formspree (see README.md). */
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = form;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setNote("Please fill in your name, email and message.");
      return;
    }
    const subject = `Portfolio message from ${name.trim()}`;
    const body = `${message.trim()}\n\n${name.trim()}\n${email.trim()}`;
    setNote("Opening your email app…");
    window.location.href = `mailto:${
      profile.email
    }?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      id="contact"
      className="relative z-[1] mt-[clamp(64px,9vw,112px)] border-t border-line bg-deep pb-10 pt-[clamp(64px,9vw,112px)]"
    >
      <div className="wrap">
        <h2 className="mb-3 font-ui text-[clamp(30px,3.6vw,48px)] font-extrabold leading-[1.1] tracking-[-0.02em] [font-stretch:112%]">
          Get in touch
        </h2>
        <p className="mb-[clamp(32px,5vw,56px)] max-w-[36em] text-muted">
          Looking for a junior developer or an intern? Send me a message.
        </p>

        <div className="grid gap-[clamp(24px,4vw,48px)] min-[861px]:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-[18px] border border-line bg-surface p-[clamp(22px,3vw,36px)]"
          >
            <div className="mb-5">
              <label htmlFor="f-name" className={label}>
                Your name
              </label>
              <input
                id="f-name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="What's your name?"
                required
                value={form.name}
                onChange={onChange}
                className={field}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="f-email" className={label}>
                Your email
              </label>
              <input
                id="f-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="What's your email address?"
                required
                value={form.email}
                onChange={onChange}
                className={field}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="f-msg" className={label}>
                Your message
              </label>
              <textarea
                id="f-msg"
                name="message"
                placeholder="How can I help you?"
                required
                value={form.message}
                onChange={onChange}
                className={`${field} min-h-[150px] resize-y`}
              />
            </div>
            <button
              type="submit"
              className="inline-flex min-h-12 w-full cursor-pointer items-center justify-center rounded-[10px] border-2 border-pale bg-pale px-[22px] font-ui text-base font-bold text-bg transition hover:border-accent hover:bg-accent"
            >
              Send message
            </button>
            <p
              role="status"
              className="mt-3.5 min-h-[1.6em] font-ui text-[14.5px] text-muted"
            >
              {note}
            </p>
          </form>

          <div className="flex flex-col justify-center rounded-[18px] border border-line bg-[color-mix(in_srgb,var(--color-accent)_8%,var(--color-deep))] p-[clamp(22px,3vw,36px)]">
            <p className="mb-5 max-w-[26em] text-soft">
              The quickest way to reach me is email. My code is on GitHub, and
              I'm based in {profile.location}.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mb-7 inline-block break-words font-ui text-[clamp(20px,2.6vw,30px)] font-extrabold leading-[1.2] tracking-[-0.02em]  transition-all duration-200 [font-stretch:100%] hover:decoration-[7px] hover:underline-offset-[9px]"
            >
              {profile.email}
            </a>
            <div>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center rounded-[10px] border-2 border-ink px-[22px] font-ui text-base font-bold transition hover:bg-ink hover:text-bg"
              >
                {profile.githubLabel}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-[clamp(48px,7vw,88px)] flex flex-wrap justify-between gap-x-6 gap-y-2 border-t border-[#3B3568] pt-5 font-ui text-[14.5px] text-[#C3BEE3]">
          <span>
            {profile.name} · {profile.location}
          </span>
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
        </div>
      </div>
    </section>
  );
}
