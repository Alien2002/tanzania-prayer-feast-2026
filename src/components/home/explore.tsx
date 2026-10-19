import Link from "next/link";
import { pages } from "@/data/pages";
import { Icon } from "@/components/ui/icon";
export function Explore() {
  return (
    <section className="explore">
      <div className="wrap">
        <h2>Explore Prayer Feast 2026</h2>
        <p>Prevail and Occupy 2026. Everything about the day, in one place.</p>
        <div className="content-grid">
          {pages.map((p) => (
            <Link
              href={`/${p.k}`}
              className="card transition-transform motion-safe:hover:-translate-y-1"
              key={p.k}
            >
              <span className="ic">
                <Icon name={p.n} />
              </span>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
              <span className="go">
                Open <Icon name="arrow" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
