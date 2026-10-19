import Image from "next/image";
import Link from "next/link";
import { assets, site } from "@/data/site";
import { Icon } from "@/components/ui/icon";
import { Countdown } from "./countdown";
import { Slideshow } from "./slideshow";
export function Hero() {
  return (
    <header className="hero">
      <Slideshow />
      <div className="wrap">
        <Image
          src={assets.title}
          alt="Prayer Feast 2026 Conference"
          width={428}
          height={229}
          priority
          className="title mx-auto"
        />
        <p className="theme">Theme</p>
        <h1>Territorial Transformation</h1>
        <p className="date">{site.displayDate} · Dar es Salaam, Tanzania</p>
        <Countdown />
        <div className="row">
          <Link className="btn" href="/register">
            <Icon name="check" />
            Register now
          </Link>
          <Link className="btn o" href="/serve">
            <Icon name="megaphone" />
            Serve with us
          </Link>
          <Link className="btn o" href="/partner">
            <Icon name="gift" />
            Partner with us
          </Link>
        </div>
      </div>
    </header>
  );
}
