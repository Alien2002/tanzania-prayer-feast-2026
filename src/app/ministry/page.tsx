import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/content-page";
import Content from "@/components/sections/ministry";
export const metadata: Metadata = {
  title: "The movement",
  description: "An inter-denominational youth revival assembly in Tanzania.",
};
export default function Page() {
  return (
    <ContentPage slug="ministry">
      <Content />
    </ContentPage>
  );
}
