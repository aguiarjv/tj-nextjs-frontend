import { SideMenu } from "@/components/side-menu/side-menu";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen bg-card">
      <SideMenu />
      {children}
    </div>
  );
}
