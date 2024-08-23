"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shad-components/ui/select";
import { Moon, Settings, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Locale } from "../../../../../i18n-config";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/shad-components/button";
import { useHasMounted } from "@/app/hooks/use-has-mounted";

export default function PreferencesMenu() {
  const { theme, setTheme } = useTheme();

  const pathName = usePathname();
  const router = useRouter();
  const { hasMounted } = useHasMounted();

  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const defaultLangValue = pathName.split("/")[1] as Locale;

  return (
    <div className="w-full flex flex-col mt-4 border border-x-0 border-b-0 pt-4">
      <div className="mb-4 flex items-center w-full gap-2">
        <Select
          defaultValue={defaultLangValue}
          onValueChange={(value) => {
            router.push(redirectedPathName(value as Locale));
          }}
        >
          <SelectTrigger className="w-full">
            <SelectValue
              placeholder={
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
                    />
                  </svg>
                  Language
                </div>
              }
            />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pt">Português</SelectItem>
            <SelectItem value="en">English</SelectItem>
          </SelectContent>
        </Select>

        <Button
          variant={"outline"}
          size={"icon"}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {hasMounted && <>{theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}</>}
        </Button>
      </div>
    </div>
  );
}
