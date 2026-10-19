import { InfoCards } from "@/components/ui/info-cards";
import { items } from "@/data/values";
export default function Content() {
  return (
    <>
      <InfoCards items={items} />
    </>
  );
}
