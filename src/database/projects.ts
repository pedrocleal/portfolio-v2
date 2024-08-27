import topSuplementosImg from "@/assets/projects/top-suplementos.png";
import tradsCorretoraImg from "@/assets/projects/trads-corretora.png";
import dentalLiderImg from "@/assets/projects/dental-lider.png";

export default [
  {
    id: 1,
    title: "Abexpay Marketplace",
    type: "professional",
    description: "Plataforma de marketplace para parcelamento de débitos.",
    key: "abexpay",
    demo: "https://abexpay.com",
    techs: [
      "Next.js",
      "React.js",
      "Typescript",
      "React Query",
      "Hook form",
      "Zod",
      "Sentry",
      "Auth",
      "Google Analytics",
    ],
    private: true,
  },
  {
    id: 5,
    title: "Monitore",
    key: "monitore",
    type: "professional",
    description:
      "Aplicativo de monitoramento de infraestrutura através do gerenciamento de logs, instâncias e serviços.",
    techs: ["Next.js", "React.js", "Typescript", "TailwindCSS", "Shadcn", "Hook form", "Zod"],
    "in-progress": true,
    private: true,
  },
  {
    id: 2,
    title: "Hiper Médica",
    key: "hiper-medica",
    type: "professional",
    description: "Website para uma clínica médica.",
    demo: "https://hipermedica.vercel.app",
    techs: ["Next.js", "React.js", "Javascript", "Styled Components"],
    private: true,
  },
  {
    id: 3,
    title: "Fast Store",
    key: "fast-store",
    type: "personal",
    description:
      "Projeto pessoal de um e-commerce fake. Desenvolvido com o intuito de praticar os meus estudos.",
    demo: "https://fast-store.vercel.app/",
    "repo-url": "https://github.com/pedrocleal/fast-store",
    techs: ["Next.js", "React.js", "TailwindCSS", "TypeScript"],
    private: false,
  },
  {
    id: 4,
    title: "Dental Líder",
    key: "dental-lider",
    type: "professional",
    description: "Website para uma clínica odontológica.",
    demo: "https://dentallider.com.br",
    techs: ["Next.js", "React.js", "Javascript", "Styled Components"],
    private: false,
  },
  {
    id: 6,
    title: "Portfolio V2",
    key: "portfolio-v2",
    type: "personal",
    description:
      "Repositório do projeto que você está vendo agora. Uma repaginação do meu antigo portfolio utilizando tecnologias novas!",
    "repo-url": "https://github.com/pedrocleal/portfolio-v2",
    techs: ["Next.js", "React.js", "Typescript", "TailwindCSS", "Shadcn", "Hook form", "Zod"],
    "in-progress": true,
    private: true,
  },
];
