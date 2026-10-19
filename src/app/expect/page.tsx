import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/content-page";
import Content from "@/components/sections/expect";
export const metadata: Metadata = {
  title: "What to expect",
  description:
    "One theme, Territorial Transformation, under the call to prevail and occupy.",
};
export default function Page() {
  return (
    <ContentPage slug="expect">
      <Content />
    </ContentPage>
  );
}
