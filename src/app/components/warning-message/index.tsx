"use client"

import { Alert, AlertDescription, AlertTitle } from "@/shad-components/alert"
import { useTranslation } from "react-i18next"

export default function WarningMessage() {
  const { t } = useTranslation("common");

  return (
    <Alert className="flex items-start gap-4 w-full max-w-sm my-4">
      <strong className="text-lg">👋🏾</strong>
      <div>
        <AlertTitle className="text-lg">
          Yoo!
        </AlertTitle>
        <AlertDescription className="text-gray-600 dark:text-gray-300">
          {t("warning-message")}
        </AlertDescription>
      </div>
    </Alert>
  );
}