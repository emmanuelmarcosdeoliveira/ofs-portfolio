import Project from "@/models/project";

export const projetos: Project[] = [
  {
    slug: "forest",
    name: "Forest",
    description:
      "Imagine uma landing-page elegante, convidativa, que te transporta para um retiro-natural cheio de charme: paisagens, acomodações aconchegantes, passeios únicos e tudo para despertar o desejo de explorar. Essa é a Forest uma experiência visual e interativa que une design, usabilidade e leveza.",
    imageURL:
      "https://res.cloudinary.com/delo0gvyb/image/upload/v1755931028/forest_e8qhqx.png",
    images: [
      "https://res.cloudinary.com/delo0gvyb/image/upload/v1755991483/forest-tablet_jfzrji.png",
    ],
    features: [
      "Vite + TypeScript: desenvolvimento ágil, tipagem estática e build otimizado.",
      "Arquitetura modular: componentes reutilizáveis e fácil manutenção.",
      "Alto desempenho: carregamento rápido e responsivo em diferentes dispositivos.",
      "Experiência centrada no usuário: formulários interativos e layout pensado para conversão.",
    ],
    challenges: [
      "desenvolver uma aplicação com Vite e TypeScript adotando uma arquitetura baseada em componentes, construindo cada parte da interface de forma modular e integrando tudo em uma solução única, escalável e de fácil manutenção.",
    ],
    onLine: "https://forest-ofs.netlify.app/",
    gitHub: "https://github.com/emmanuelmarcosdeoliveira/forest",
    destaque: false,
    type: "front-end",
    technologies: ["typescript", "tailwind", "html", "css", "vite", "bun"],
  },
  {
    slug: "adivinhe",
    name: "Adivinhe",
    description:
      "Adivinhe o jogo interativo que une lógica, tipagem forte e experiência do usuário. Desenvolvido com React + TypeScript + CSS-Modules, esse desafio me permitiu criar um jogo de adivinhar palavras com lógica dinâmica, componentes limpos e uso de hooks. Cada nova letra é um suspense; a cada jogada, uma interface responsiva.",
    imageURL:
      "https://res.cloudinary.com/delo0gvyb/image/upload/v1755930472/adivinhe_rhnvip.png",
    onLine: "https://adivinhe-sage.vercel.app/",
    gitHub: "https://github.com/emmanuelmarcosdeoliveira/adivinhe",
    images: [
      "https://res.cloudinary.com/delo0gvyb/image/upload/v1755990556/adivinhe-tablet_rlhl7p.png",
    ],
    features: [
      "React + Hooks: gerenciamento dinâmico de estado e interatividade fluida",
      "TypeScript: tipagem estática para maior segurança e manutenção do código",
      "CSS-Modules para gerenciamento de estilos: permite escopo local de estilos, evitando conflitos, facilitando manutenção visual",
      "Arquitetura modular: componentes reutilizáveis, facilitando escalabilidade",
    ],
    challenges: [],
    destaque: true,
    type: "front-end",
    technologies: ["react", "typescript", "css-modules", "vite"],
  },
  {
    slug: "snitap",
    name: "Snitap",
    description:
      "Snitap – Landing Page de loja de patins com design dinâmico e animações envolventes",
    imageURL:
      "https://res.cloudinary.com/delo0gvyb/image/upload/v1755931991/sintap_y21mri.png",
    images: [
      "https://res.cloudinary.com/delo0gvyb/image/upload/v1755990954/sitanp-tablet_s49qy8.png",
    ],
    features: ["Uso criativo de animações css", "Layout e visual impactante"],
    challenges: [],
    onLine: "https://snitap-eight.vercel.app/#",
    gitHub: "https://github.com/emmanuelmarcosdeoliveira/snitap",
    destaque: false,
    type: "front-end",
    technologies: ["html", "css", "vite", "bun"],
  },
  {
    slug: "refund",
    name: "Refund",
    description:
      "Refund – Gerenciador de Despesas para Reembolso Projeto desenvolvido para resolver um problema real: organizar despesas que precisam ser ressarcidas, com interface simples, limpa e usabilidade clara",
    imageURL:
      "https://res.cloudinary.com/delo0gvyb/image/upload/v1755932722/refund_tp2wfb.png",
    images: [
      "https://res.cloudinary.com/delo0gvyb/image/upload/v1756782307/refund-tablet_ibhirh.png",
    ],
    features: [
      "adicionar e remover despesas de forma eficiente",
      "modularização de código",
      "interface simples, limpa e usabilidade clara.",
    ],
    challenges: [],
    onLine: "https://refund-sigma.vercel.app/",
    gitHub: "https://github.com/emmanuelmarcosdeoliveira/refund",
    destaque: true,
    type: "front-end",
    technologies: ["html", "css", "javaScript", "bun", "vite"],
  },

  {
    slug: "agent",
    name: "Let me ask ",
    description:
      "Agents – Aplicativo Full-Stack para Geração de Perguntas com Áudio Projeto desenvolvido com front-end e back-end integrados para permitir que os usuários gravem/transmitam áudio e recebam perguntas geradas automaticamente com base nesse áudio.",

    imageURL:
      "https://res.cloudinary.com/delo0gvyb/image/upload/v1755930809/agent_zoaljo.png",
    images: [
      "https://res.cloudinary.com/delo0gvyb/image/upload/v1755985073/agentsTablet_svxtin.png",
    ],
    features: [
      "Interface moderna e responsiva, com transições visuais e componentes focados em usabilidade;",
      "No back-end, uma API robusta que lida com processamento de áudio, lógica de geração e retorno de dados de forma segura e eficiente.",
    ],
    challenges: [
      "Um dos principais desafios foi a sincronização entre front-end e back-end: gerenciar upload ou streaming de áudio, processar dados no servidor, lidar com latência e entregar respostas em tempo real à interface, exigindo atenção especial à performance e à experiência do usuário.",
    ],
    onLine: "https://agents-web-ia.vercel.app/",
    gitHub: "https://github.com/emmanuelmarcosdeoliveira/agents-web",
    destaque: true,
    type: "fullstack",
    technologies: [
      "react",
      "vite",
      "typescript",
      "tailwind",
      "react router",
      "tanStack query",
    ],
  },
  {
    slug: "dogs",
    name: "Dogs",
    description:
      "Essa aplicação simula uma rede social voltada para amantes de cães. Utilizei React com JavaScript e diversas boas práticas modernas para construção de interface, roteamento, gestão de estado e consumo de API. O backend é uma REST API fornecida por WordPress. O projeto me permitiu aprofundar habilidades técnicas e resolver desafios do mundo real de desenvolvimento web.",

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
      "Disney+ Clone Projeto de Landing Page replicando experiência visual premium",

    imageURL:
      "https://res.cloudinary.com/delo0gvyb/image/upload/v1757696118/disneypluscapa_drp4zh.png",
    images: [
      "https://res.cloudinary.com/delo0gvyb/image/upload/v1757696688/disney-pc_ctkahl.png",
    ],
    features: [
      "layout responsivo, otimização de imagens e scripts",
      "compressão e minificação para garantir carregamento mais rápido",
    ],
    challenges: [
      "Prática em fidelidade visual: recriei a interface da Disney+ com atenção a detalhes de tipografia, cores, espaçamento e responsividade",

      "Organização de estilos com SCSS: aprendi a estruturar CSS de forma modular, reutilizando variáveis e mixins para manter o código limpo e escalável.",

      "Automação de tarefas com Gulp: implementei pipeline de build para compilar SCSS, minificar arquivos e otimizar imagens, garantindo melhor desempenho no carregamento.",
    ],
    onLine: "https://disney-plus-clone-dev-oliveira.vercel.app/",
    gitHub: "https://github.com/emmanuelmarcosdeoliveira/disney-plus-ofs",
    destaque: false,
    type: "front-end",
    technologies: ["html", "scss", "javaScript", "gulp"],
  },
  {
    slug: "bikcraft",
    name: "Bikcraft",
    description:
      "Bikcraft transformando design limpo e interatividade em uma experiência digital envolvente para promover bicicletas elétricas.",

    imageURL:
      "https://res.cloudinary.com/delo0gvyb/image/upload/v1757697911/bikcraft-capa_ujmoer.png",
    images: [
      "https://res.cloudinary.com/delo0gvyb/image/upload/v1757697910/bikcraft-2_m3ayi8.png",
    ],
    features: [
      "Estruturação semântica e acessível do conteúdo.",
      "Estilização moderna e responsiva, garantindo uma experiência de usuário otimizada em diversos dispositivos.",
      "Automação de tarefas, como minificação de arquivos e otimização de imagens, para melhorar o desempenho da página.",
    ],
    challenges: [],
    onLine: "https://bikcraft-woad.vercel.app/",
    gitHub: "https://github.com/emmanuelmarcosdeoliveira/bikcraft-ofs",
    destaque: true,
    type: "front-end",
    technologies: ["html", "css", "javaScript", "webpack", "gulp"],
  },
  {
    slug: "toDo",
    name: "toDo List React ",
    description:
      "toDo React, uma aplicação de lista de tarefas moderna, responsiva e eficiente, construída com React, TypeScript e TailwindCSS para entregar experiência de usuário intuitiva e fluida.",
    imageURL:
      "https://res.cloudinary.com/delo0gvyb/image/upload/v1758320203/ToDoNote_m5bqd1.png",
    images: [
      "https://res.cloudinary.com/delo0gvyb/image/upload/v1758320201/ToDoPc_xxvhal.png",
    ],
    features: [
      "Gerenciamento de Estado: Utilização eficiente do estado local do React para controlar as tarefas.",
      "Design Limpo e Funcional: Interface intuitiva que facilita a interação do usuário com a aplicação.",
    ],
    challenges: [],
    onLine: "https://to-do-react-gamma-five.vercel.app/",
    gitHub: "https://github.com/emmanuelmarcosdeoliveira/toDo-react",
    destaque: true,
    type: "front-end",
    technologies: ["react", "tailwind", "typescript", "vite", "biome"],
  },
];
