import { InfoCards } from "@/components/ui/info-cards";
import { items } from "@/data/partner";
export default function Content() {
  return (
    <>
      <InfoCards items={items} />
      <p className="note">
        Partners receive clear financial reporting and regular updates on how
        every contribution is used.
      </p>
    </>
  );
}
