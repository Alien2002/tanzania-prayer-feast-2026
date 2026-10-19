import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/content-page";
import Content from "@/components/sections/reach";
export const metadata: Metadata = {
  title: "Getting there",
  description:
    "Plan your trip to Prayer Feast 2026 by map, public transport or Bolt.",
};
export default function Page() {
  return (
    <ContentPage slug="reach">
      <Content />
    </ContentPage>
  );
}
