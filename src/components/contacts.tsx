"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

const socialContacts = [
  {
    id: 1,
    name: "phone",
    icon: <FaPhone className="size-6 fill-primary" />,
    href: "tel:+5511968336094",
  },

  {
    id: 2,
    name: "whatsApp",
    icon: <FaWhatsapp className="size-6 fill-primary " />,
    href: "https://wa.me/5511968336094?text=Olá,%20gostaria%20de%20saber%20mais%20informações!",
  },
  {
    id: 3,
    name: "email",
    icon: <MdOutlineAlternateEmail className="size-6 fill-primary" />,
    href: "mailto:emmanuel.front-end@gmail.com",
  },
];

export default function Contacts() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ delay: 0.5 }}
      className="flex gap-3"
    >
      {socialContacts.map((contact) => (
        <Link
          key={contact.id}
          className="border border-input  p-2 rounded-md hover:bg-muted-foreground/10"
          target="_blank"
          href={contact.href}
        >
          {contact.icon}
        </Link>
      ))}
    </motion.div>
  );
}
