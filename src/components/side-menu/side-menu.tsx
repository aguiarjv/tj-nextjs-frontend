import { LogOut, NotebookPen, User } from "lucide-react";

import { Separator } from "@/components/ui/separator";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme-toggle";

import { Pacifico } from "next/font/google";
import { NavLinks } from "./nav-links";
import { cn } from "@/lib/utils";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

export function SideMenu() {
  return (
    <aside className="w-64 flex flex-col gap-4 p-3 bg-muted overflow-hidden">
      <div className="flex items-center justify-center gap-2">
        <NotebookPen className="text-primary" />
        <p
          className={`text-xl font-bold ${pacifico.className} text-secondary-foreground`}
        >
          Diário do Trader
        </p>
      </div>
      <Separator className="bg-primary" />
      <NavLinks />
      <Separator className="mt-auto bg-primary" />
      <UserComponent />
    </aside>
  );
}

function UserComponent() {
  const userName = "Teste";
  const userEmail = "teste@gmail.com";

  return (
    <div className="flex items-center gap-2 justify-start">
      <Popover>
        <PopoverTrigger asChild>
          <Button className="rounded-full h-11 min-w-11 w-11 p-0">
            <User className="w-6/12" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="flex flex-col gap-3 w-36"
          collisionPadding={5}
        >
          <div className="flex items-center gap-3">
            <p>Tema: </p>
            <ModeToggle />
          </div>
          <Button variant="destructive" className="w-full space-x-2">
            <LogOut />
            <span>Sair</span>
          </Button>
        </PopoverContent>
      </Popover>

      <div className="flex flex-col items-start">
        <p className="text-md font-medium text-secondary-foreground">
          {userName}
        </p>
        <p
          className={cn(
            "text-sm text-muted-foreground",
            userEmail.length > 26 ? "text-xs" : "",
          )}
        >
          {userEmail}
        </p>
      </div>
    </div>
  );
}
