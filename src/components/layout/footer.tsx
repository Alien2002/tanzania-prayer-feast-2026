import { Icon } from "@/components/ui/icon";
import { site } from "@/data/site";
import { whatsappLink } from "@/lib/whatsapp";
export function Footer() {
  const social = [
    { name: "Instagram", url: site.instagram, icon: "ig" },
    { name: "YouTube", url: site.youtube, icon: "yt" },
    { name: "WhatsApp", url: whatsappLink(site.contacts.info), icon: "wa" },
  ] as const;
  return (
    <footer>
      <p>
        <strong>{site.organization}</strong> · Changing Youth for Christ
      </p>
      <div className="soc">
        {social.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.name}
          >
            <Icon name={item.icon} />
          </a>
        ))}
      </div>
      <p>
        More information:{" "}
        <a
          href={whatsappLink(site.contacts.info)}
          target="_blank"
          rel="noopener noreferrer"
        >
          +{site.contacts.info}
        </a>
      </p>
      <p>
        {site.name} · {site.displayDate} ·{" "}
        {site.venue.name || "Venue and full details to be communicated"}
      </p>
    </footer>
  );
}
