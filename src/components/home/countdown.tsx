"use client";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { getCountdown } from "@/lib/countdown";
export function Countdown() {
  const [values, setValues] = useState<number[] | null>(null);
  useEffect(() => {
    const tick = () =>
      setValues(getCountdown(Date.now(), Date.parse(site.eventDate)));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div
      className="count"
      role="timer"
      aria-label="Time remaining until 9 December 2026"
      aria-live="off"
    >
      {["Months", "Days", "Hours", "Minutes", "Seconds"].map((label, i) => (
        <div key={label}>
          <b>{values ? String(values[i]).padStart(2, "0") : "–"}</b>
          <small>{label}</small>
        </div>
      ))}
    </div>
  );
}
