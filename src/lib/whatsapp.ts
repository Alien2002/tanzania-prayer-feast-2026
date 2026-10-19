export function whatsappLink(phone: string, message = "") {
  return `https://wa.me/${phone}${message ? "?text=" + encodeURIComponent(message) : ""}`;
}
