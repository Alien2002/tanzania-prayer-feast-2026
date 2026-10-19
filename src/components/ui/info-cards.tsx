import { Card } from "./card";
import { Icon, type IconName } from "./icon";
import { site } from "@/data/site";
import { whatsappLink } from "@/lib/whatsapp";
export type InfoCardData = {
  icon: IconName;
  title: string;
  description: string;
  bullets?: string[];
  action?: {
    label: string;
    contact: keyof typeof site.contacts;
    message: string;
    alternative?: boolean;
  };
};
export function InfoCards({ items }: { items: InfoCardData[] }) {
  return (
    <div className="content-grid">
      {items.map((item) => (
        <Card key={item.title} className={item.action ? "plan" : ""}>
          <span className="ic">
            <Icon name={item.icon} />
          </span>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          {item.bullets && (
            <ul>
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          )}
          {item.action && (
            <div className="mt-auto pt-4">
              <a
                className="btn d"
                href={whatsappLink(
                  site.contacts[item.action.contact],
                  item.action.message,
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="wa" />
                {item.action.label}
              </a>
              {item.action.alternative && (
                <p className="alt">
                  or{" "}
                  <a
                    href={whatsappLink(
                      site.contacts.partnerAlternative,
                      item.action.message,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp +255 757 751 427
                  </a>
                </p>
              )}
            </div>
          )}
        </Card>
      ))}
    </div>
  );
}
