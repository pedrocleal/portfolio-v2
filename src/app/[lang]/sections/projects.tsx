"use client";

import { Button } from "@/shad-components/button";
import { Badge } from "@/shad-components/ui/badge";
import Image, { StaticImageData } from "next/image";
import { GitHubLogoIcon, OpenInNewWindowIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import projects from "@/database/projects";
import { Tabs, TabsList, TabsTrigger } from "@/shad-components/ui/tabs";

export default function Projects() {
  const [activeType, setActiveType] = useState<"all" | "personal" | "professional">("all");

  const filteredProjects = projects.filter((project) => {
    if (activeType === "all") return true;
    return project.type === activeType;
  });

  return (
    <section className="w-full mb-36">
      <div className="flex flex-col text-left">
        <h3 className="mb-1 text-3xl font-bold leading-none tracking-tight text-slate-800 md:text-4xl lg:text-4xl dark:text-white ">
          Projetos
        </h3>
        <p className="text-sm text-slate-400">Alguns dos meus projetos mais recentes.</p>
      </div>

      <Tabs className="mt-6" defaultValue="all">
        <TabsList className="w-full">
          <TabsTrigger className="w-full" value="all" onClick={() => setActiveType("all")}>
            Todos
          </TabsTrigger>
          <TabsTrigger className="w-full" value="personal" onClick={() => setActiveType("personal")}>
            Projetos pessoais
          </TabsTrigger>
          <TabsTrigger className="w-full" value="professional" onClick={() => setActiveType("professional")}>
            Projetos profissionais
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="flex flex-col gap-4 mt-4">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col items-start justify-between gap-4 p-4 bg-transparent rounded-lg shadow-sm border dark:bg-transparent dark:border-slate-900 min-[480px]:flex-row min-[480px]:items-center min-[480px]:justify-between min-[480px]:gap-8"
          >
            <div className="flex flex-col gap-6 items-start justify-start min-[480px]:flex-row">
              <Image
                src={project.img}
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
