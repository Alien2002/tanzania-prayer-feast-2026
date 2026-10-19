import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/content-page";
import Content from "@/components/sections/serve";
export const metadata: Metadata = {
  title: "A call for laborers",
  description:
    "The harvest is plenty. Serve with us at Prayer Feast 2026: choose a team and message us on WhatsApp.",
};
export default function Page() {
  return (
    <ContentPage slug="serve">
      <Content />
    </ContentPage>
  );
}
