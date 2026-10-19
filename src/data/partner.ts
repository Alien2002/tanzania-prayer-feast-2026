import type { InfoCardData } from "@/components/ui/info-cards";
export const items: InfoCardData[] = [
  {
    icon: "gift",
    title: "One-time partner",
    description:
      "Give once, any amount, as the Lord leads you. Cash or materials both count.",
    action: {
      label: "WhatsApp +255 764 661 070",
      contact: "partner",
      message:
        "Hello TYPA, I would like to become a one-time partner for Prayer Feast 2026.",
      alternative: true,
    },
  },
  {
    icon: "calendar",
    title: "Event partner",
    description:
      "Back a specific event, such as the end-year Prayer Feast or the mid-year conference.",
    bullets: [
      "Venue, sound and media costs",
      "Guest ministers and transport",
      "Recognition at TYPA events",
    ],
    action: {
      label: "WhatsApp +255 764 661 070",
      contact: "partner",
      message:
        "Hello TYPA, I would like to become a event partner for Prayer Feast 2026.",
      alternative: true,
    },
  },
  {
    icon: "heart",
    title: "Full-time partner",
    description:
      "Give monthly, quarterly or yearly so the movement has steady support all year.",
    bullets: [
      "Regular reports and testimonies",
      "Personal prayer support",
      "Annual partner appreciation event",
      "Quarterly online partner meetings",
    ],
    action: {
      label: "WhatsApp +255 764 661 070",
      contact: "partner",
      message: "Hello TYPA, I would like to become a full-time partner.",
      alternative: true,
    },
  },
];
