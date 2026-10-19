import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { Timeline } from "@/components/ui/timeline";
import { site } from "@/data/site";
import { whatsappLink } from "@/lib/whatsapp";
const transport = [
  {
    icon: "users",
    title: "Daladala (minibus)",
    text: "Tell the conductor the area you are going to and confirm the nearest stage before you board.",
  },
  {
    icon: "bus",
    title: "BRT (DART)",
    text: "If a BRT station is close to the venue, it is a good way to avoid traffic. Check the nearest station and route in Google Maps.",
  },
  {
    icon: "car",
    title: "Bajaji and boda boda",
    text: "For the last stretch from the main road. Agree the fare before you start and show the driver the map pin.",
  },
] as const;
export default function Reach() {
  const venue = site.venue;
  const confirmed = !!(venue.name || venue.mapQuery);
  const query = encodeURIComponent(venue.mapQuery || venue.name);
  return (
    <>
      <div className="mapbox">
        <span className="ic">
          <Icon name="pin" />
        </span>
        <h3>{confirmed ? venue.name : "Venue to be announced"}</h3>
        <p>
          {confirmed
            ? venue.address
            : "The venue and full details will be shared soon. Message us on WhatsApp and we will send the exact location as soon as it is confirmed."}
        </p>
        <div className="row">
          {confirmed ? (
            <>
              <a
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.google.com/maps/search/?api=1&query=${query}`}
              >
                Open in Google Maps
              </a>
              <a
                className="btn o"
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.google.com/maps/dir/?api=1&destination=${query}&travelmode=transit`}
              >
                By public transport
              </a>
              <a
                className="btn o"
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.google.com/maps/dir/?api=1&destination=${query}&travelmode=driving`}
              >
                By car or Bolt
              </a>
            </>
          ) : (
            <a
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
              href={whatsappLink(
                site.contacts.info,
                "Hello TYPA, please send me the Prayer Feast 2026 venue location.",
              )}
            >
              <Icon name="wa" />
              Ask for the location
            </a>
          )}
        </div>
      </div>
      <h2>By public transport</h2>
      <p className="prose mb-6">
        Dar es Salaam traffic can be heavy, so leave early. In Google Maps,
        switch to the transit tab to see the routes that work from where you
        are.
      </p>
      <div className="content-grid">
        {transport.map((t) => (
          <Card key={t.title}>
            <span className="ic">
              <Icon name={t.icon} />
            </span>
            <h3>{t.title}</h3>
            <p>{t.text}</p>
          </Card>
        ))}
      </div>
      <h2 className="mt-11">By Bolt</h2>
      <p className="prose">Four steps to get a ride straight to the venue.</p>
      <Timeline
        items={[
          {
            icon: "map",
            title: "Open Bolt and set the destination",
            description:
              "Tap Where to? and type the venue name, or paste the Google Maps link we share.",
          },
          {
            icon: "pin",
            title: "Check the pickup pin",
            description:
              "Move it to a spot where the driver can reach you easily, then confirm.",
          },
          {
            icon: "car",
            title: "Choose a ride and check the price",
            description:
              "Compare the ride types and look at the fare before you request.",
          },
          {
            icon: "users",
            title: "Share your trip",
            description:
              "Send your trip details to a friend or family member, then pay by cash or in the app.",
          },
        ]}
      />
      <p className="note">
        Many people leave at the same time when the event ends. Request your
        ride a few minutes early, or share one with friends.
      </p>
    </>
  );
}
