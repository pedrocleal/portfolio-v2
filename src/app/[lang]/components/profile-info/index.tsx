"use client";

import { useLanguage } from "../../../context/language-provider";
import { getDictionary } from "../../../../../get-dictionary";
import { ComponentWithDictionary } from "@/app/types/dictionary";
import Avatar from "../avatar";

export default function ProfileInfo({ dictionary }: { dictionary: ComponentWithDictionary["profile-info"] }) {
  return (
    <div className="flex flex-col items-center">
      <Avatar />
      <h1 className="text-gray-800 font-bold text-2xl dark:text-gray-200">Pedro Leal</h1>
      <span className="text-gray-600 dark:text-gray-400">Software Engineer</span>
    </div>
  );
}
