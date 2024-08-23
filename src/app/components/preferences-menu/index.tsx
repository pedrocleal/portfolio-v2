"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shad-components/ui/select";
import { Moon, Settings, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function PreferencesMenu() {
  const { setTheme } = useTheme();

  return (
    <div className="w-full">
      <div className="mt-4 flex items-center w-full gap-2">
        <Select>
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
            <SelectItem value="pt-br">🇧🇷 Portuguese</SelectItem>
            <SelectItem value="en-us">🇺🇸 English</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => setTheme(value)}>
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
                      d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
                    />
                  </svg>
                  Theme
                </div>
              }
            />
          </SelectTrigger>
          <SelectContent>
            {/* <SelectItem value="system">
              <div className="flex items-center gap-2">
                <Settings size={18} /> System
              </div>
            </SelectItem> */}
            <SelectItem value="light">
              <div className="flex items-center gap-2">
                <Sun size={18} />
                Light
              </div>
            </SelectItem>
            <SelectItem value="dark">
              <div className="flex items-center gap-2">
                <Moon size={18} /> Dark
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
