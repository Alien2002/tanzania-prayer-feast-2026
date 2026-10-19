import { InfoCards } from "@/components/ui/info-cards";
import { items } from "@/data/expect";
export default function Content() {
  return (
    <>
      <InfoCards items={items} />
    </>
  );
}
