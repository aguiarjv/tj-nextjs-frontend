"use client";

import { usePathname } from "next/navigation";
import { SideMenuContent } from "./side-menu-content";

export function SideMenu() {
  const pathname = usePathname();
  const collapse = !pathname.includes("home");

  return <SideMenuContent collapse={collapse} />;
}
