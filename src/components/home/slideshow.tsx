"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { assets } from "@/data/site";
export function Slideshow() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    let timer: ReturnType<typeof setInterval> | undefined;
    const sync = () => {
      clearInterval(timer);
      if (!media.matches && !paused)
        timer = setInterval(
          () => setIndex((i) => (i + 1) % assets.photos.length),
          7000,
        );
    };
    sync();
    media.addEventListener("change", sync);
    return () => {
      clearInterval(timer);
      media.removeEventListener("change", sync);
    };
  }, [paused]);
  return (
    <>
      <div className="bgs" aria-hidden="true">
        {assets.photos.map((src, i) => (
          <div
            key={src}
            className={`slide ${i === index ? "on" : ""}`}
            style={{ animationPlayState: paused ? "paused" : "running" }}
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
              priority={i === 0}
            />
          </div>
        ))}
      </div>
      <button
        className="absolute right-4 bottom-3 z-10 rounded-full border border-gold/50 bg-navy/70 px-3 py-1 text-xs text-white"
        type="button"
        aria-pressed={paused}
        onClick={() => setPaused(!paused)}
      >
        {paused ? "Play slideshow" : "Pause slideshow"}
      </button>
    </>
  );
}
