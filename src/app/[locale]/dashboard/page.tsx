import { redirect } from "@/i18n/routing";
import { useLocale } from "next-intl";

export default function Dashboard() {
  const locale = useLocale();
  redirect({ href: "/dashboard/home", locale: locale });
}
