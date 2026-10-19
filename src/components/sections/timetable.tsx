import { Timeline } from "@/components/ui/timeline";
import type { TimelineItem } from "@/components/ui/timeline";
const items: TimelineItem[] = [
  {
    icon: "door",
    time: "8:00 AM",
    title: "Doors open and welcome",
    description: "Arrival, ushering and seating.",
  },
  {
    icon: "music",
    time: "9:00 AM",
    title: "Praise and worship",
    description: "Opening the day in God\u2019s presence.",
  },
  {
    icon: "book",
    time: "10:30 AM",
    title: "Word session: Territorial Transformation",
    description: "Teaching from the guest ministers.",
  },
  {
    icon: "book",
    time: "12:30 PM",
    title: "Word session two",
    description: "More teaching from the guest ministers.",
  },
  {
    icon: "flame",
    time: "2:00 PM",
    title: "Prayer feast",
    description: "Guided intercession for youth, church and nation.",
  },
  {
    icon: "heart",
    time: "4:00 PM",
    title: "Altar call and ministration",
    description: "Prayer for those who want to respond.",
  },
  {
    icon: "sunset",
    time: "5:30 PM",
    title: "Commissioning and closing",
    description: "Sent out to prevail and occupy.",
  },
];
export default function Timetable() {
  return <Timeline items={items} />;
}
