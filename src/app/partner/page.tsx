import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/content-page";
import Content from "@/components/sections/partner";
export const metadata: Metadata = {
  title: "Partner with us",
  description:
    "\u201cGod loves a cheerful giver\u201d (2 Corinthians 9:7). Partners help cover the venue, sound, guest ministers, media, transport, marketing and refreshments.",
};
export default function Page() {
  return (
    <ContentPage slug="partner">
      <Content />
    </ContentPage>
  );
}
