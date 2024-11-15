"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Paintbrush } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { themes } from "@/data/themes";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function ChangeColorTheme() {
  const { theme: lightDark } = useTheme();
  const [currentTheme, setCurrentTheme] = useState("");

  useEffect(() => {
    if (currentTheme != "") {
      document.body.classList.forEach((className) => {
        if (className.match(/^theme.*/)) {
          document.body.classList.remove(className);
        }

        if (currentTheme) {
          return document.body.classList.add(`theme-${currentTheme}`);
        }
      });
    }
  }, [currentTheme]);

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button className="rounded">
            Alterar o tema
            <Paintbrush className="ml-2 h-5 w-5" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="flex flex-col justify-center p-1 w-40"
          side="bottom"
          align="start"
        >
          {themes.map((theme) => {
            return (
              <div
                key={theme.name}
                className={cn(
                  "flex flex-row gap-3 pl-1 items-center justify-start hover:border-black border rounded",

                  lightDark == "light"
                    ? "hover:border-black "
                    : "hover:border-white",
                )}
                onClick={() => setCurrentTheme(theme.name)}
              >
                <div
                  className="rounded-full size-6 border"
                  style={{
                    backgroundColor:
                      lightDark == "light"
                        ? `hsl(${theme.light_color})`
                        : `hsl(${theme.dark_color})`,
                  }}
                ></div>
                <p className="cursor-default">{theme.label}</p>
              </div>
            );
          })}
        </PopoverContent>
      </Popover>
    </>
  );
}

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="border border-opacity-10 border-black dark:border-white dark:border-opacity-10"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-secondary-foreground" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 dark:text-secondary-foreground" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Claro
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Escuro
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          Sistema
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
