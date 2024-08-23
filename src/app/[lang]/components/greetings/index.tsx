"use client";

import { Alert, AlertDescription, AlertTitle } from "@/shad-components/alert";
import { type getDictionary } from "../../../../../get-dictionary";

export default function Greetings({
  dictionary,
}: {
  // dictionary: ComponentWithDictionary["warning-message"];
  dictionary: Awaited<ReturnType<typeof getDictionary>>["greetings"];
}) {
  return (
    <Alert className="flex items-start gap-4 w-full max-w-sm my-4">
      <strong className="text-lg">👋🏾</strong>
      <div>
        <AlertTitle className="text-lg">{dictionary.hello}</AlertTitle>
        <AlertDescription className="text-gray-600 dark:text-gray-300">{dictionary.text}</AlertDescription>
      </div>
    </Alert>
  );
}
