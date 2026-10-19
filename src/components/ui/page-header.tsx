import Image from "next/image";
import { Icon, type IconName } from "./icon";
export function PageHeader({
  title,
  description,
  icon,
  image,
}: {
  title: string;
  description: string;
  icon: IconName;
  image: string;
}) {
  return (
    <header className="head">
      <Image
        src={image}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-25"
        priority
      />
      <div className="wrap">
        <span className="ic">
          <Icon name={icon} />
        </span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </header>
  );
}
