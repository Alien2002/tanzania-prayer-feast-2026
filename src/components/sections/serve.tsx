import { InfoCards } from "@/components/ui/info-cards";
import { items } from "@/data/serve";
export default function Content() {
  return (
    <>
      <InfoCards items={items} />
    </>
  );
}
