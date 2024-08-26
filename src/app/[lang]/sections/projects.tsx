import { Button } from "@/shad-components/button";
import { Badge } from "@/shad-components/ui/badge";
import Image, { StaticImageData } from "next/image";
import topSuplementosImg from "@/assets/projects/top-suplementos.png";
import tradsCorretoraImg from "@/assets/projects/trads-corretora.png";
import dentalLiderImg from "@/assets/projects/dental-lider.png";
import { GitHubLogoIcon, OpenInNewWindowIcon } from "@radix-ui/react-icons";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Trads Corretora",
    img: tradsCorretoraImg,
    type: "professional",
    description:
      "Projeto de marketplace para a Abexpay. Desenvolvido com Next.js, TailwindCSS e TypeScript. O projeto foi desenvolvido com o intuito de ser uma plataforma de vendas de produtos e serviços para os clientes da Abexpay.",
    link: "https://github.com",
    techs: ["Next.js", "TailwindCSS", "TypeScript", "React", "Node.js", "MongoDB", "GraphQL"],
    private: true,
  },
  {
    id: 2,
    title: "Dental Líder",
    img: dentalLiderImg,
    type: "professional",
    description:
      "Projeto de agenda de contatos. Desenvolvido com Next.js, TailwindCSS e TypeScript. O projeto foi desenvolvido com o intuito de ser uma agenda de contatos para os usuários.",
    demo: "https://dentallider.com.br",
    link: "https://github.com",
    techs: ["Next.js", "TailwindCSS", "TypeScript", "React", "Node.js", "MongoDB", "GraphQL"],
    private: false,
  },
  {
    id: 3,
    title: "Top Suplementos",
    img: topSuplementosImg,
    type: "personal",
    description:
      "Projeto pessoal de e-commerce. Desenvolvido com Next.js, TailwindCSS e TypeScript. O projeto foi desenvolvido com o intuito de ser uma loja virtual de suplementos alimentares.",
    demo: "https://top-suplementos.netlify.app/",
    link: "https://github.com/pedrocleal/top-suplementos",
    techs: ["Next.js", "TailwindCSS", "TypeScript", "React", "Node.js", "MongoDB", "GraphQL"],
    private: false,
  },
];

export default function Projects() {

  const [activeType, setActiveType] = useState<"all" | "personal" | "professional">("all");

  return (
    <section className="w-full mb-36">
      <div className="flex flex-col text-left">
        <h3 className="mb-1 text-3xl font-bold leading-none tracking-tight text-slate-800 md:text-4xl lg:text-4xl dark:text-white ">
          Projetos
        </h3>
        <p className="text-sm text-slate-400">Alguns dos meus projetos mais recentes.</p>
      </div>

      <div className="flex flex-col gap-4 mt-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col items-start justify-between gap-4 p-4 bg-transparent rounded-lg shadow-sm border dark:bg-transparent dark:border-slate-900 min-[480px]:flex-row min-[480px]:items-center min-[480px]:justify-between min-[480px]:gap-8"
          >
            <div className="flex flex-col gap-6 items-start justify-start min-[480px]:flex-row">
              <Image
                src={project.img as StaticImageData}
                className=" rounded-md object-contain mt-1"
                alt={project.title}
                width={150}
                height={10}
              />
              <div>
                <h4 className="text-lg font-bold">{project.title}</h4>
                {/* <p className="text-sm text-slate-500 dark:text-slate-500">{project.description}</p> */}

                <div className="mt-2">
                  {project.techs.map((tech) => (
                    <Badge variant={"secondary"} key={tech} className="mr-2">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-2 items-start justify-start min-[480px]:flex-col">
              <Button variant={"outline"} size={"icon"}>
                <OpenInNewWindowIcon />
              </Button>

              <Button variant={"outline"} size={"icon"} className="text-sm">
                <GitHubLogoIcon />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
