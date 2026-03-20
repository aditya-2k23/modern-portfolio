"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { contactData, heroData } from "@/data/index";
import { Mail, Linkedin, Github, Phone, Send } from "lucide-react";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";

const emailServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const emailTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const emailPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const location =
    heroData.quickFacts.find((f) => f.label === "Location")?.value ||
    "Punjab, India";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!emailServiceId || !emailTemplateId || !emailPublicKey) {
      setToast({
        message: "Email service is not configured yet. Add EmailJS keys first.",
        type: "error",
      });
      window.setTimeout(() => setToast(null), 3000);
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        emailServiceId,
        emailTemplateId,
        {
          name: name,
          from_name: name,
          from_email: email,
          subject,
          message,
          to_name: "Aditya",
          to_email: contactData.email,
        },
        {
          publicKey: emailPublicKey,
        },
      );

      setIsSubmitting(false);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setToast({
        message: "Message sent successfully.",
        type: "success",
      });
      window.setTimeout(() => setToast(null), 2400);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setIsSubmitting(false);
      setToast({
        message: "Failed to send message. Please try again.",
        type: "error",
      });
      window.setTimeout(() => setToast(null), 3000);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden pb-24 pt-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[url('/footer-grid.svg')] bg-[length:900px_auto] bg-top bg-no-repeat opacity-25"
      />
      <div className="relative z-10">
        <div className="mb-14 flex flex-col items-center justify-center space-y-4">
          {/* Mobile Badge - visibly hidden on desktop, matches mobile design */}
          <div className="lg:hidden mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Available for opportunities
          </div>

          <h2 className="text-center text-5xl md:text-6xl font-bold tracking-tight text-white">
            Get in <span className="text-purple">Touch</span>
          </h2>
          <p className="mx-auto max-w-lg text-center leading-relaxed text-slate-400">
            Currently seeking new challenges. Whether you have a project in mind
            or just want to say hi, my inbox is always open.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2 lg:gap-8">
          <article className="relative overflow-hidden group flex flex-col justify-between rounded-[2rem] border border-white/10 bg-[#0B0F19] p-8 lg:p-10">
            <DottedGlowBackground
              className="pointer-events-none mask-radial-to-90% mask-radial-at-center opacity-25 group-hover:opacity-50 transition-opacity duration-500"
              opacity={1}
              gap={10}
              radius={2}
              color="rgba(103,232,249,0.3)"
              glowColor="rgba(103,232,249,1)"
              backgroundOpacity={0}
              speedMin={0.3}
              speedMax={1.6}
              speedScale={1}
            />
            <div className="relative z-10">
              {/* Desktop Badge */}
              <div className="hidden lg:inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-cyan-300">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                Available for opportunities
              </div>

              <h3 className="hidden lg:block mt-8 text-4xl font-bold text-white leading-tight">
                Let&apos;s Build Something <br />
                <span className="text-cyan-300">Great</span>
              </h3>

              <div className="mt-2 lg:mt-12 flex flex-col gap-8">
                {/* Email */}
                <div className="flex items-center gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Email
                    </p>
                    <a
                      href={`mailto:${contactData.email}`}
                      className="mt-1 block text-sm md:text-base font-medium text-white hover:text-cyan-400 transition"
                    >
                      {contactData.email}
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-center gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <Github className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      GitHub
                    </p>
                    <a
                      href={contactData.github}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 block text-sm md:text-base font-medium text-white hover:text-cyan-400 transition"
                    >
                      {contactData.github.replace("https://", "")}
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <Linkedin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      LinkedIn
                    </p>
                    <a
                      href={contactData.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 block text-sm md:text-base font-medium text-white hover:text-cyan-400 transition"
                    >
                      {contactData.linkedin
                        .replace("https://", "")
                        .replace("www.", "")}
                    </a>
                  </div>
                </div>

                {/* Phone / Location */}
                <div className="flex items-center gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Phone
                    </p>
                    <a
                      href={`tel:${contactData.phone}`}
                      className="mt-1 block text-sm md:text-base font-medium text-white hover:text-cyan-400 transition"
                    >
                      {contactData.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="relative overflow-hidden group rounded-[2rem] border border-white/10 bg-[#0B0F19] p-6 lg:p-10">
            <DottedGlowBackground
              className="pointer-events-none mask-radial-to-90% mask-radial-at-center opacity-20 group-hover:opacity-40 transition-opacity duration-500"
              opacity={1}
              gap={10}
              radius={2}
              color="rgba(103,232,249,0.3)"
              glowColor="rgba(103,232,249,1)"
              backgroundOpacity={0}
              speedMin={0.3}
              speedMax={1.6}
              speedScale={1}
            />
            <div className="relative z-10">
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2 relative">
                  <label
                    htmlFor="name"
                    className="text-[15px] font-medium leading-none text-slate-300"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    type="text"
                    required
                    placeholder="e.g., John Doe"
                    className="w-full bg-[#111A28] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 outline-none transition-all shadow-[0_4px_10px_rgba(0,0,0,0.1)] focus:shadow-[0_0_15px_rgba(103,232,249,0.15)]"
                  />
                </div>

                <div className="flex flex-col gap-2 relative">
                  <label
                    htmlFor="email"
                    className="text-[15px] font-medium leading-none text-slate-300"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    type="email"
                    required
                    placeholder="e.g., john.doe@email.com"
                    className="w-full bg-[#111A28] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 outline-none transition-all shadow-[0_4px_10px_rgba(0,0,0,0.1)] focus:shadow-[0_0_15px_rgba(103,232,249,0.15)]"
                  />
                </div>

                <div className="flex flex-col gap-2 relative">
                  <label
                    htmlFor="subject"
                    className="text-[15px] font-medium leading-none text-slate-300"
                  >
                    Interested In
                  </label>
                  <input
                    id="subject"
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)}
                    type="text"
                    required
                    placeholder="e.g., Product Design"
                    className="w-full bg-[#111A28] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 outline-none transition-all shadow-[0_4px_10px_rgba(0,0,0,0.1)] focus:shadow-[0_0_15px_rgba(103,232,249,0.15)]"
                  />
                </div>

                <div className="flex flex-col gap-2 relative">
                  <label
                    htmlFor="message"
                    className="text-[15px] font-medium leading-none text-slate-300"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    required
                    rows={4}
                    placeholder="Type your message here..."
                    className="w-full bg-[#111A28] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50 outline-none transition-all resize-none shadow-[0_4px_10px_rgba(0,0,0,0.1)] focus:shadow-[0_0_15px_rgba(103,232,249,0.15)]"
                  />
                </div>

                <motion.button
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  type="submit"
                  className="mt-4 flex w-full lg:w-max lg:min-w-48 lg:ml-auto items-center justify-center gap-2 rounded-xl bg-[#228be6] lg:bg-gradient-to-r lg:from-cyan-400 lg:to-blue-500 px-8 py-4 lg:py-3.5 text-[15px] font-bold text-white lg:text-slate-950 transition hover:opacity-90 disabled:opacity-70 shadow-[0_0_20px_rgba(34,139,230,0.4)]"
                >
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  <Send className="h-4 w-4" />
                </motion.button>
              </form>
            </div>
          </article>
        </div>
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className={`fixed bottom-6 right-6 z-[100] rounded-lg border px-4 py-3 text-sm shadow-lg ${
              toast.type === "success"
                ? "border-cyan-300/30 bg-slate-900/95 text-cyan-200"
                : "border-rose-300/40 bg-slate-900/95 text-rose-200"
            }`}
          >
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
