"use client"

import Image from "next/image";
import { getDictionary } from "../../../../get-dictionary";
import techs from "@/database/techs";

export default function Techs({
  dictionary
}: { dictionary: Awaited<ReturnType<typeof getDictionary>>["techs"] }) {
  return (
    <section className="w-full mb-32">
      <div className="flex flex-col text-left">
        <h3 className="mb-1 text-3xl font-bold leading-none tracking-tight text-slate-800 md:text-4xl lg:text-4xl dark:text-white ">
          {dictionary.title}
        </h3>
        <p className="text-sm text-slate-400">{dictionary.subtitle}</p>
      </div>

      <div className="mt-8 flex flex-wrap w-full gap-8">
        {techs.map((tech) => (
          <Image
            key={tech.name}
            width={30}
            height={30}
            src={tech.iconSrc}
            alt=""
          />
        ))}
      </div>
    </section>
  )
}