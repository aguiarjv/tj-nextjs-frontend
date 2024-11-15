import { SideMenu } from "@/components/side-menu/side-menu";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen bg-card dark:bg-slate-800/20">
      <SideMenu />
      <ScrollArea className="max-h-screen w-full py-8 px-32 3xl:px-72">
        {children}
      </ScrollArea>
    </div>
  );
}
