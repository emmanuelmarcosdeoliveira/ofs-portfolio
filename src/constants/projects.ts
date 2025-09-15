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
    features: [],
    challenges: [],
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
    features: [],
    challenges: [],
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
    features: [],
    challenges: [],
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
      "https://res.cloudinary.com/delo0gvyb/image/upload/v1756782307/refund-tablet_ibhirh.png",
    ],
    features: [],
    challenges: [],
    onLine: "https://refund-sigma.vercel.app/",
    gitHub: "https://github.com/emmanuelmarcosdeoliveira/refund",
    destaque: true,
    type: "front-end",
    technologies: ["HTML", "CSS", "JavaScript"],
  },

  {
    slug: "agent",
    name: "Let me ask ",
    description:
      "Essa é uma aplicação FullStack desenvolvida em React com TypeScript onde temos uma interface moderna e responsiva, onde podemos cadastrar salas de audio, onde conseguir fazer gravações de audio com intuito de podemos fazer perguntas sobre o que foi gravado e a API do Gemini ira nos retornar uma resposta dentro do contexto do audio gravado",

    imageURL:
      "https://res.cloudinary.com/delo0gvyb/image/upload/v1755930809/agent_zoaljo.png",
    images: [
      "https://res.cloudinary.com/delo0gvyb/image/upload/v1755985073/agentsTablet_svxtin.png",
    ],
    features: [],
    challenges: [""],
    onLine: "https://agents-web-ia.vercel.app/",
    gitHub: "https://github.com/emmanuelmarcosdeoliveira/agents-web",
    destaque: true,
    type: "fullstack",
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "CSS Modules",
      "React Router",
    ],
  },
  {
    slug: "dogs",
    name: "Dogs",
    description:
      "Desenvolvi uma aplicação web completa com foco em frontend, que simula uma rede social voltada para amantes de cães. Utilizei React com JavaScript e diversas boas práticas modernas para construção de interface, roteamento, gestão de estado e consumo de API. O backend é uma REST API fornecida por WordPress. O projeto me permitiu aprofundar habilidades técnicas e resolver desafios do mundo real de desenvolvimento web.",

    imageURL:
      "https://res.cloudinary.com/delo0gvyb/image/upload/v1757694632/dogs-duo_tht555.png",
    images: [
      "https://res.cloudinary.com/delo0gvyb/image/upload/v1757694631/dogs-pc_n8x4fd.png",
      "https://res.cloudinary.com/delo0gvyb/image/upload/v1757694631/dogs-pc-2_eegprr.png",
      "https://res.cloudinary.com/delo0gvyb/image/upload/v1757694632/dogs-note_qbfexr.png",
    ],
    features: [
      "Criação de usuário, autenticação",
      "Visualização de estatísticas (gráficos) de visualizações de fotos usando a biblioteca Victory.",
      "possibilidade de inserir comentários das fotos",
      "Upload e postagem de fotos.",
    ],
    challenges: [
      "Implementar toda a lógica de fluxo de usuário: cadastro, login, segurança, reset de senha.",
    ],
    onLine: "https://agents-web-ia.vercel.app/",
    gitHub: "https://ofs-dogs.vercel.app/",
    destaque: true,
    type: "fullstack",
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "CSS Modules",
      "React Router",
    ],
  },
  {
    slug: "disneyplus",
    name: "Disney + clone",
    description:
      "Esse Projeto é um Clone do Site da Disney+, Nesse Projeto utilizei Gulp como principal ferramenta para me auxiliar na construção dessa Landig Page, com o Gulp foi feito a compactação do código JavaScript e compressão das imagens",

    imageURL:
      "https://res.cloudinary.com/delo0gvyb/image/upload/v1757696118/disneypluscapa_drp4zh.png",
    images: [
      "https://res.cloudinary.com/delo0gvyb/image/upload/v1757696688/disney-pc_ctkahl.png",
    ],
    features: [],
    challenges: [],
    onLine: "https://disney-plus-clone-dev-oliveira.vercel.app/",
    gitHub: "https://github.com/emmanuelmarcosdeoliveira/disney-plus-ofs",
    destaque: true,
    type: "front-end",
    technologies: ["HTML", "CSS", "JavaScript", "Gulp"],
  },
  {
    slug: "bikcraft",
    name: "Bikcraft",
    description:
      "Esse projeto simula uma loja de Bicicletas Elétricas onde podemos ver os 3 modelos de Bicicletas que a Bikcraft produz.",

    imageURL:
      "https://res.cloudinary.com/delo0gvyb/image/upload/v1757697911/bikcraft-capa_ujmoer.png",
    images: [
      "https://res.cloudinary.com/delo0gvyb/image/upload/v1757697910/bikcraft-2_m3ayi8.png",
    ],
    features: [],
    challenges: [],
    onLine: "https://bikcraft-woad.vercel.app/",
    gitHub: "https://github.com/emmanuelmarcosdeoliveira/bikcraft-ofs",
    destaque: true,
    type: "front-end",
    technologies: ["HTML", "CSS", "JavaScript", "Webpack"],
  },
  {
    slug: "zigen",
    name: "Zigen",
    description:
      "Você gosta de música? então venha conhecer o Zingen. É uma landing page de um aplicativo de música.",
    imageURL:
      "https://res.cloudinary.com/delo0gvyb/image/upload/v1757697911/bikcraft-capa_ujmoer.png",
    images: [
      "https://res.cloudinary.com/delo0gvyb/image/upload/v1757697910/bikcraft-2_m3ayi8.png",
    ],
    features: [],
    challenges: [],
    onLine: "https://zingen-nine.vercel.app/",
    gitHub: "https://github.com/emmanuelmarcosdeoliveira/zingen",
    destaque: true,
    type: "front-end",
    technologies: ["Astro", "SASS", "JavaScript"],
  },
  {
    slug: "toDo",
    name: "toDo List React ",
    description: "To Do list desenvolvida com React",
    imageURL:
      "https://res.cloudinary.com/delo0gvyb/image/upload/v1757697911/bikcraft-capa_ujmoer.png",
    images: [
      "https://res.cloudinary.com/delo0gvyb/image/upload/v1757697910/bikcraft-2_m3ayi8.png",
    ],
    features: [],
    challenges: [],
    onLine: "https://to-do-react-gamma-five.vercel.app/",
    gitHub: "https://github.com/emmanuelmarcosdeoliveira/toDo-react",
    destaque: true,
    type: "front-end",
    technologies: ["Astro", "SASS", "JavaScript"],
  },
  {
    slug: "Restaura",
    name: "Restaurante",
    description: "To Do list desenvolvida com React",
    imageURL:
      "https://res.cloudinary.com/delo0gvyb/image/upload/v1757697911/bikcraft-capa_ujmoer.png",
    images: [
      "https://res.cloudinary.com/delo0gvyb/image/upload/v1757697910/bikcraft-2_m3ayi8.png",
    ],
    features: [],
    challenges: [],
    onLine: "https://to-do-react-gamma-five.vercel.app/",
    gitHub: "https://github.com/emmanuelmarcosdeoliveira/toDo-react",
    destaque: true,
    type: "front-end",
    technologies: ["Astro", "SASS", "JavaScript"],
  },
];
