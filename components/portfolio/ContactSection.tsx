"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { contactData } from "@/data";
import SectionHeading from "./SectionHeading";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    window.setTimeout(() => {
      setIsSubmitting(false);
      setName("");
      setEmail("");
      setMessage("");
      setShowToast(true);
      window.setTimeout(() => setShowToast(false), 2400);
    }, 850);
  };

  return (
    <section id="contact" className="pb-24 pt-24">
      <SectionHeading
        eyebrow="Section 5"
        title="Contact"
        description="Open to full-time opportunities, internships, freelance projects, and high-impact collaborations."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-bold text-white">Direct Reach</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-200">
            <li>
              Email:{" "}
              <a href={`mailto:${contactData.email}`} className="text-cyan-300">
                {contactData.email}
              </a>
            </li>
            <li>
              GitHub:{" "}
              <a
                href={contactData.github}
                target="_blank"
                rel="noreferrer"
                className="text-cyan-300"
              >
                {contactData.github}
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a
                href={contactData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-cyan-300"
              >
                {contactData.linkedin}
              </a>
            </li>
            <li>
              Phone:{" "}
              <a href={`tel:${contactData.phone}`} className="text-cyan-300">
                {contactData.phone}
              </a>
            </li>
          </ul>
        </article>

        <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-bold text-white">Send a Message</h3>
          <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              type="text"
              required
              placeholder="Name"
              className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300"
            />
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              required
              placeholder="Email"
              className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300"
            />
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
              rows={4}
              placeholder="Message"
              className="w-full rounded-xl border border-white/15 bg-black/30 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300"
            />

            <motion.button
              whileTap={{ scale: 0.97 }}
              disabled={isSubmitting}
              type="submit"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-2.5 text-sm font-bold text-slate-950 disabled:opacity-70"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </motion.button>
          </form>
        </article>
      </div>

      <AnimatePresence>
        {showToast ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="fixed bottom-6 right-6 z-[100] rounded-lg border border-cyan-300/30 bg-slate-900/95 px-4 py-3 text-sm text-cyan-200 shadow-lg"
          >
            Message sent successfully.
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
