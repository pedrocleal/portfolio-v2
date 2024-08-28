"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shad-components/ui/select";
import { LanguagesIcon, Moon, Settings, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Locale } from "../../../../../i18n-config";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/shad-components/button";
import { useHasMounted } from "@/app/hooks/useHasMounted";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shad-components/ui/dropdown-menu";

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

  const handleLanguageChange = (lang: "pt" | "en") => {
    router.push(redirectedPathName(lang));
  };

  return (
    <div className="">
      <div className="mb-4 flex flex-col items-center w-full gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"outline"} size={"icon"}>
              <LanguagesIcon size={18} />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={() => handleLanguageChange("pt")}>Português</DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguageChange("en")}>English</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

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
