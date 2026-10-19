import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/content-page";
import Content from "@/components/sections/timetable";
export const metadata: Metadata = {
  title: "Timetable",
  description:
    "The planned flow of the day. The poster says more information will be communicated, so times may still change.",
};
export default function Page() {
  return (
    <ContentPage slug="timetable">
      <Content />
    </ContentPage>
  );
}
