import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaFilePdf, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import toast from "react-hot-toast";

const contactCards = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "sawaraunak31@gmail.com",
    href: "mailto:sawaraunak31@gmail.com",
  },
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    value: "linkedin.com/in/raunak-sawa",
    href: "https://www.linkedin.com/in/raunak-sawa",
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    value: "github.com/sawaraunakk31",
    href: "https://github.com/sawaraunakk31",
  },
];

const Contact = () => {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (event) => {
    event.preventDefault();

    if (!formRef.current) {
      return;
    }

    setIsSending(true);

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_zsy5lsg";
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_zesviwi";
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "E9X8qzxFaFSSajbR8";

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      toast.success("Message sent successfully.");
      formRef.current.reset();
    } catch {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65 }}
        className="mx-auto max-w-3xl text-center"
      >
        <span className="eyebrow">Contact</span>
        <h2 className="gradient-title text-4xl font-semibold sm:text-5xl">Let us build something great</h2>
        <p className="mt-4 text-base leading-relaxed text-zinc-300 sm:text-lg">
          Share your idea, role, or collaboration brief. I will reply quickly.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.aside
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          className="space-y-4"
        >
          {contactCards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="glass-panel interactive-lift flex items-center gap-3 p-4 transition hover:border-amber-200/45"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] text-amber-100">
                {card.icon}
              </span>
              <span>
                <p className="text-xs uppercase tracking-[0.14em] text-zinc-400">{card.title}</p>
                <p className="text-sm text-zinc-100">{card.value}</p>
              </span>
            </a>
          ))}

          <a
            href="/resume-viewer.html"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel interactive-lift flex items-center justify-between gap-3 border-amber-200/35 bg-amber-200/10 p-4 text-amber-100"
          >
            <span>
              <p className="text-xs uppercase tracking-[0.14em] text-amber-100/80">Resume</p>
              <p className="text-sm font-semibold">Open latest PDF version</p>
            </span>
            <FaFilePdf className="text-xl" />
          </a>
        </motion.aside>

        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="glass-panel interactive-lift p-5 sm:p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm text-zinc-200">
              Name
              <input
                type="text"
                name="user_name"
                required
                className="mt-2 w-full rounded-xl border border-white/20 bg-zinc-950/45 px-3 py-2.5 text-sm text-white outline-none transition focus:border-amber-200/60"
              />
            </label>

            <label className="block text-sm text-zinc-200">
              Email
              <input
                type="email"
                name="user_email"
                required
                className="mt-2 w-full rounded-xl border border-white/20 bg-zinc-950/45 px-3 py-2.5 text-sm text-white outline-none transition focus:border-amber-200/60"
              />
            </label>
          </div>

          <label className="mt-4 block text-sm text-zinc-200">
            Message
            <textarea
              name="message"
              rows="6"
              required
              className="mt-2 w-full resize-none rounded-xl border border-white/20 bg-zinc-950/45 px-3 py-2.5 text-sm text-white outline-none transition focus:border-amber-200/60"
            />
          </label>

          <button
            type="submit"
            disabled={isSending}
            className="btn-primary interactive-pill mt-5 w-full disabled:cursor-not-allowed disabled:opacity-60"
          >
            <FaPaperPlane />
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
