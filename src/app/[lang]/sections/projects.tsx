"use client";

import { Button } from "@/shad-components/button";
import { Badge } from "@/shad-components/ui/badge";
import Image, { StaticImageData } from "next/image";
import { GitHubLogoIcon, OpenInNewWindowIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import projects from "@/database/projects";
import { Tabs, TabsList, TabsTrigger } from "@/shad-components/ui/tabs";
import { ComponentWithDictionary } from "@/app/types/dictionary";
import { getDictionary } from "../../../../get-dictionary";

export default function Projects({ dictionary }: { dictionary: Awaited<ReturnType<typeof getDictionary>>["projects"] }) {
  const [activeType, setActiveType] = useState<"all" | "personal" | "professional">("all");

  const filteredProjects = projects.filter((project) => {
    if (activeType === "all") return true;
    return project.type === activeType;
  });

  return (
    <section className="w-full mb-36">
      <div className="flex flex-col text-left">
        <h3 className="mb-1 text-3xl font-bold leading-none tracking-tight text-slate-800 md:text-4xl lg:text-4xl dark:text-white ">
          {dictionary.title}
        </h3>
        <p className="text-sm text-slate-400">{dictionary.subtitle}</p>
      </div>

      <Tabs className="mt-6" defaultValue="all">
        <TabsList className="w-full">
          <TabsTrigger className="w-full" value="all" onClick={() => setActiveType("all")}>
            {dictionary.tabs.all}
          </TabsTrigger>
          <TabsTrigger className="w-full" value="personal" onClick={() => setActiveType("personal")}>
            {dictionary.tabs.professional}
          </TabsTrigger>
          <TabsTrigger className="w-full" value="professional" onClick={() => setActiveType("professional")}>
            {dictionary.tabs.personal}
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="flex flex-col gap-4 my-4 max-h-[400px] overflow-auto">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col items-start justify-between gap-4 p-4 bg-transparent rounded-lg shadow-sm border dark:bg-transparent dark:border-slate-900 min-[480px]:flex-row min-[480px]:items-center min-[480px]:justify-between min-[480px]:gap-8"
          >
            <div className="flex flex-col gap-6 items-start justify-start min-[480px]:flex-row">
              {/* <Image
                src={project.img}
                className=" rounded-md object-contain mt-1"
                alt={project.title}
                width={150}
                height={10}
              /> */}
              <div>
                <h4 className="text-lg font-bold flex gap-2 items-center">
                  {project.title}
                  {project["in-progress"] && (
                    <Badge className="bg-green-500/30 text-green-500" variant={"outline"}>
                      {dictionary["in-progress"]}
                    </Badge>
                  )}
                </h4>
                {/* todo: resolve this */}
                {/* @ts-ignore */}
                <p className="text-xs text-slate-500 dark:text-slate-500">{dictionary["projects-list-descriptions"][project.key]}</p>

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
              <Button
                variant={"outline"}
                size={"icon"}
                disabled={!project["demo"]}
                onClick={() => window.open(project["demo"])}
              >
                <OpenInNewWindowIcon />
              </Button>

              <Button
                disabled={!project["repo-url"]}
                variant={"outline"}
                size={"icon"}
                className="text-sm"
                onClick={() => window.open(project["repo-url"])}
              >
                <GitHubLogoIcon />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
