import Link from "next/link";
import React from "react";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";

const socialMedia = [
  {
    id: 1,
    name: "instagram",
    icon: (
      <FiInstagram className="size-6 fill-primary hover:fill-none transition-all" />
    ),
    href: "https://www.instagram.com/oliveirafullstack/",
  },

  {
    id: 2,
    name: "LinkedIn",
    icon: (
      <FiLinkedin className="size-6 fill-primary hover:fill-none transition-all" />
    ),
    href: "https://www.linkedin.com/in/oliveira-emmanuel/",
  },
  {
    id: 3,
    name: "gitHub",
    icon: (
      <FiGithub className="size-6 fill-primary hover:fill-none transition-all" />
    ),
    href: "https://github.com/emmanuelmarcosdeoliveira",
  },
];

export default function SocialMedia() {
  return (
    <div className="flex gap-3 mt-4">
      {socialMedia.map((link) => (
        <Link
          key={link.id}
          className="border border-input rounded-md p-2"
          target="_blank"
          href={link.href}
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
}
