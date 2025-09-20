"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

const socialMedia = [
  {
    id: 1,
    name: "instagram",
    icon: <FiInstagram className="size-6  " />,
    href: "https://www.instagram.com/oliveirafullstack/",
  },

  {
    id: 2,
    name: "LinkedIn",
    icon: <FiLinkedin className="size-6 " />,
    href: "https://www.linkedin.com/in/oliveira-emmanuel/",
  },
  {
    id: 3,
    name: "gitHub",
    icon: <FiGithub className="size-6" />,
    href: "https://github.com/emmanuelmarcosdeoliveira",
  },
];

export default function SocialMedia() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.5, duration: 0.3 }}
      className="flex gap-3 mt-4"
    >
      {socialMedia.map((link) => (
        <Link
          key={link.id}
          className="border hover:scale-110 transition-all border-input rounded-md p-2"
          target="_blank"
          href={link.href}
        >
          {link.icon}
        </Link>
      ))}
    </motion.div>
  );
}
