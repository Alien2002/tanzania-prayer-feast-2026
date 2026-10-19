import { Icon } from "@/components/ui/icon";
import { site } from "@/data/site";
import { whatsappLink } from "@/lib/whatsapp";
export function WhatsAppButton() {
  return (
    <a
      className="chat"
      href={whatsappLink(
        site.contacts.info,
        "Hello TYPA, I have a question about Prayer Feast 2026.",
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with TYPA on WhatsApp (opens in a new tab)"
    >
      <Icon name="wa" />
      <span>Chat with us</span>
    </a>
  );
}
