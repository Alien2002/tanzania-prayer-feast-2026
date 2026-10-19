import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/content-page";
import Content from "@/components/sections/ministers";
export const metadata: Metadata = {
  title: "Ministers",
  description:
    "Those who will serve on 9 December. Names and photos will be added as each one is confirmed.",
};
export default function Page() {
  return (
    <ContentPage slug="ministers">
      <Content />
    </ContentPage>
  );
}
