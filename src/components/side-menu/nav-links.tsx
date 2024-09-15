"use client";

import Link from "next/link";
import {
  BookOpenText,
  ChartCandlestick,
  ChartPie,
  Home,
  Users,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function NavLinks() {
  const pathname = usePathname();
  const links = [
    { icon: Home, link: "/dashboard/home", label: "Dashboard" },
    { icon: ChartCandlestick, link: "/dashboard/trades", label: "Trades" },
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
            "flex items-center justify-start gap-4 w-full h-12 text-secondary-foreground hover:bg-primary hover:rounded-md hover:text-secondary dark:hover:text-secondary-foreground p-3",
            pathname.includes(item.link)
              ? "border-primary border-r-4 text-primary dark:text-violet-500"
              : "",
          )}
        >
          <item.icon />
          <p className="text-md font-medium">{item.label}</p>
        </Link>
      ))}
    </div>
  );
}
