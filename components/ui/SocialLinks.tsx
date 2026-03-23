"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { contactData } from "@/data";
import { cn } from "@/lib/utils";

export function SocialLinks() {
  const links = [
    {
      name: "GitHub",
      url: contactData.github,
      icon: <FaGithub className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      url: contactData.linkedin,
      icon: <FaLinkedin className="w-5 h-5" />,
    },
    {
      name: "Email",
      url: `mailto:${contactData.email}`,
      icon: <FaEnvelope className="w-5 h-5" />,
    },
    {
      name: "Phone",
      url: `tel:${contactData.phone.replace(/[^0-9+]/g, "")}`,
      icon: <FaPhone className="w-5 h-5" />,
    },
  ];

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={cn(
              "p-2 rounded-full bg-white/5 border border-white/10 text-neutral-400 backdrop-blur-md",
              "transition-all duration-300 shadow-lg",
              "hover:scale-110 hover:text-sky-400 hover:border-sky-400 hover:bg-sky-400/10",
              "hover:shadow-[0_0_15px_rgba(56,189,248,0.5)]",
            )}
            title={link.name}
          >
            {link.icon}
          </div>
        </Link>
      ))}
    </div>
  );
}
