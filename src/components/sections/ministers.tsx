import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { assets, site } from "@/data/site";
const ministers = [
  {
    title: "Founder and host",
    description:
      "Founder of Tanzania Youth Prayer Assembly, hosting the Feast.",
    tag: "Host",
    icon: "mic",
    image: assets.host,
  },
  {
    title: "Guest minister",
    description: "To be announced.",
    tag: "Guest speaker",
    icon: "mic",
  },
  {
    title: "Guest minister",
    description: "To be announced.",
    tag: "Guest speaker",
    icon: "mic",
  },
  {
    title: "Praise and worship team",
    description: "Worship leaders and musicians, to be announced.",
    tag: "Worship",
    icon: "music",
  },
] as const;
export default function Ministers() {
  return (
    <>
      <div className="content-grid">
        {ministers.map((minister, index) => (
          <Card className="min" key={index}>
            {"image" in minister ? (
              <Image
                className="ph"
                src={minister.image}
                alt="Founder and host of TYPA"
                width={150}
                height={150}
              />
            ) : (
              <span className="ic">
                <Icon name={minister.icon} />
              </span>
            )}
            <h3>{minister.title}</h3>
            <p>{minister.description}</p>
            <span className="tag">{minister.tag}</span>
          </Card>
        ))}
      </div>
      <p className="note">
        Follow{" "}
        <a href={site.instagram} target="_blank" rel="noopener noreferrer">
          TYPA on Instagram
        </a>{" "}
        for the lineup reveal.
      </p>
    </>
  );
}
