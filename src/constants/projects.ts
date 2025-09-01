import Project from "@/models/project";

export const projetos: Project[] = [
  {
    slug: "forest",
    name: "Forest",
    description: "Venha experimentar a vida na Floresta",
    imageURL:
      "https://res.cloudinary.com/delo0gvyb/image/upload/v1755931028/forest_e8qhqx.png",
    images: [
      "https://res.cloudinary.com/delo0gvyb/image/upload/v1755991483/forest-tablet_jfzrji.png",
    ],
    onLine: "https://forest-ofs.netlify.app/",
    gitHub: "https://github.com/emmanuelmarcosdeoliveira/forest",
    destaque: false,
    type: "front-end",
    technologies: ["Typescript", "Tailwind", "Html", "CSS"],
  },
  {
    slug: "adivinhe",
    name: "Adivinhe",
    description:
      "Tente adivinhar a palavra sugerida pela aplicação adivinhe. Essa aplicação foi desenvolvida com React e TypeScript. O Objetivo dela é ser um game de adivinhar as palavras sugeridas pela aplicação. A cada recarregamento do site são sugeridas novas palavras e as dicas para podermos tentar adivinhar. Boa Sorte!",
    imageURL:
      "https://res.cloudinary.com/delo0gvyb/image/upload/v1755930472/adivinhe_rhnvip.png",
    onLine: "https://adivinhe-sage.vercel.app/",
    gitHub: "https://github.com/emmanuelmarcosdeoliveira/adivinhe",
    images: [
      "https://res.cloudinary.com/delo0gvyb/image/upload/v1755990556/adivinhe-tablet_rlhl7p.png",
    ],
    destaque: true,
    type: "front-end",
    technologies: ["React", "Typescript", "CSS-modules"],
  },
  {
    slug: "snitap",
    name: "Snitap",
    description:
      "Essa é uma landing Page de uma loja de Patins. Essa aplicação foi desenvolvida com HTML, CSS, e JavaScript",
    imageURL:
      "https://res.cloudinary.com/delo0gvyb/image/upload/v1755931991/sintap_y21mri.png",
    images: [
      "https://res.cloudinary.com/delo0gvyb/image/upload/v1755990954/sitanp-tablet_s49qy8.png",
    ],

    onLine: "https://snitap-eight.vercel.app/#",
    gitHub: "https://github.com/emmanuelmarcosdeoliveira/snitap",
    destaque: false,
    type: "front-end",
    technologies: ["HTML", "CSS"],
  },
  {
    slug: "refund",
    name: "Refund",
    description:
      "Essa é uma aplicação JavaScript desenvolvida para  coletar os gastos feitos para um posterior Reembolso,",
    imageURL:
      "https://res.cloudinary.com/delo0gvyb/image/upload/v1755932722/refund_tp2wfb.png",
    images: [
      "https://res.cloudinary.com/delo0gvyb/image/upload/v1755985073/agentsTablet_svxtin.png",
    ],
    onLine: "https://refund-sigma.vercel.app/",
    gitHub: "https://github.com/emmanuelmarcosdeoliveira/refund",
    destaque: true,
    type: "fullstack",
    technologies: ["HTML", "CSS", "JavaScript"],
  },

  {
    slug: "agent",
    name: "Let me Aks",
    description:
      "Essa é uma aplicação FullStack desenvolvida em React com TypeScript onde temos uma interface moderna e responsiva, onde podemos cadastrar salas de audio, onde conseguir fazer gravações de audio com intuito de podemos fazer perguntas sobre o que foi gravado e a API do Gemini ira nos retornar uma resposta dentro do contexto do audio gravado",
    imageURL:
      "https://res.cloudinary.com/delo0gvyb/image/upload/v1755930809/agent_zoaljo.png",
    images: [
      "https://res.cloudinary.com/delo0gvyb/image/upload/v1755985073/agentsTablet_svxtin.png",
    ],
    onLine: "https://agents-web-ia.vercel.app/",
    gitHub: "https://github.com/emmanuelmarcosdeoliveira/agents-web",
    destaque: true,
    type: "fullstack",
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind",
      "TanStack Query",
      "React Router",
      "Gemini",
      "Zod",
      "React Form",
    ],
  },
];
