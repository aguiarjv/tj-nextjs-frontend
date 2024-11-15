"use client";

import Link from "next/link";
import {
  BookOpenText,
  ChartCandlestick,
  ChartPie,
  FlaskConical,
  Home,
  Users,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function NavLinks({ collapse = false }: { collapse?: boolean }) {
  const pathname = usePathname();
  const links = [
    { icon: Home, link: "/dashboard/home", label: "Página Inicial" },
    { icon: ChartCandlestick, link: "/dashboard/trades", label: "Trades" },
    { icon: FlaskConical, link: "/dashboard/strategies", label: "Estratégias" },
    { icon: ChartPie, link: "/dashboard/analytics", label: "Análises" },
    { icon: BookOpenText, link: "/dashboard/journal", label: "Diário" },
    { icon: Users, link: "/dashboard/accounts", label: "Contas" },
  ];
  return (
    <div className="flex flex-col gap-2">
      {links.map((item, index) => (
        <Link
          href={item.link}
          key={index}
          className={cn(
            "flex items-center gap-4 w-full h-12 text-secondary-foreground hover:bg-primary hover:rounded-md hover:text-secondary dark:hover:text-secondary-foreground p-3",
            pathname.includes(item.link)
              ? "border-primary text-primary"
              : "border-none",
            collapse ? "justify-center" : "justify-start border-r-4",
          )}
        >
          <item.icon />
          {!collapse && <p className="text-md font-medium">{item.label}</p>}
        </Link>
      ))}
    </div>
  );
}
