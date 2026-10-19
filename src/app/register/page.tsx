import type { Metadata } from "next";
import { ContentPage } from "@/components/layout/content-page";
import Content from "@/components/registration/registration-form";
export const metadata: Metadata = {
  title: "Register",
  description:
    "Entry is free. Fill in your details, then send them to the TYPA team on WhatsApp to confirm your place.",
};
export default function Page() {
  return (
    <ContentPage slug="register">
      <Content />
    </ContentPage>
  );
}
