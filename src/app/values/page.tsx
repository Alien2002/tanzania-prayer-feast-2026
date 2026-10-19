import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/content-page";
import Content from "@/components/sections/values";
export const metadata: Metadata = {
  title: "Core values",
  description:
    "The convictions behind every prayer night, outreach and conference.",
};
export default function Page() {
  return (
    <ContentPage slug="values">
      <Content />
    </ContentPage>
  );
}
