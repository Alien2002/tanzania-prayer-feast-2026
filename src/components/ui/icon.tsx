import type { SVGProps } from "react";
const artwork = {
  home: (
    <>
      <path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M16 14.2c2.9.3 5 2.6 5 5.8" />
    </>
  ),
  book: (
    <>
      <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z" />
      <path d="M4 19V5M8 7h7" />
    </>
  ),
  heart: (
    <>
      <path d="M12 20S4 15.4 4 9.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 2.5C20 15.4 12 20 12 20z" />
    </>
  ),
  music: (
    <>
      <path d="M9 18V6l10-2v12" />
      <circle cx="6.5" cy="18" r="2.5" />
      <circle cx="16.5" cy="16" r="2.5" />
    </>
  ),
  mic: (
    <>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="5" width="16" height="16" rx="2" />
      <path d="M4 10h16M8 3v4M16 3v4" />
    </>
  ),
  star: (
    <>
      <path d="M12 3.5l2.7 5.5 6 .9-4.4 4.2 1 6-5.3-2.8-5.3 2.8 1-6L3.3 9.9l6-.9z" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="6" />
      <path d="M8.5 14l-1.5 7 5-3 5 3-1.5-7" />
    </>
  ),
  gift: (
    <>
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M5 12v8h14v-8M12 8v12M12 8S9.5 8 8.5 6.5 9.5 3.5 11 5s1 3 1 3zm0 0s2.5 0 3.5-1.5S14.5 3.5 13 5s-1 3-1 3z" />
    </>
  ),
  megaphone: (
    <>
      <path d="M4 10v4h3l8 5V5L7 10z" />
      <path d="M18 9a4 4 0 0 1 0 6" />
    </>
  ),
  door: (
    <>
      <rect x="6" y="3" width="12" height="18" rx="1.5" />
      <circle cx="15" cy="12" r=".6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l8 3v6c0 5-3.500 8-8 9-4.500-1-8-4-8-9V6z" />
    </>
  ),
  camera: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <circle cx="12" cy="13.500" r="3.500" />
      <path d="M8 7l1.500-3h5L16 7" />
    </>
  ),
  clipboard: (
    <>
      <rect x="6" y="4" width="12" height="17" rx="2" />
      <path d="M9 4h6v3H9zM9 12h6M9 16h4" />
    </>
  ),
  flame: (
    <>
      <path d="M12 3c1 3 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-4-1-6 1-9z" />
    </>
  ),
  coffee: (
    <>
      <path d="M5 9h12v5a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5zM17 11h2a2 2 0 0 1 0 4h-2M8 3v2M12 3v2" />
    </>
  ),
  sunset: (
    <>
      <path d="M4 18h16M7 18a5 5 0 0 1 10 0M12 6v3M5.500 10.500l2 2M18.500 10.500l-2 2" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19c0-8 5-14 15-14 0 10-6 15-14 15M5 19c3-5 6-8 10-10" />
    </>
  ),
  receipt: (
    <>
      <path d="M6 3h12v18l-3-2-3 2-3-2-3 2zM9 8h6M9 12h6" />
    </>
  ),
  up: (
    <>
      <path d="M7 17L17 7M8 7h9v9" />
    </>
  ),
  arrow: (
    <>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </>
  ),
  back: (
    <>
      <path d="M19 12H5M11 6l-6 6 6 6" />
    </>
  ),
  wa: (
    <>
      <path d="M3 21l1.600-4.800A9 9 0 1 1 8 19.500z" />
      <path d="M9 9.500c0 3 2.500 5.500 5.500 5.500l1-1.500-2-1-1 .8c-1-.5-1.800-1.300-2.300-2.300l.8-1-1-2z" />
    </>
  ),
  ig: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.500" cy="6.500" r=".6" />
    </>
  ),
  yt: (
    <>
      <rect x="2.500" y="6" width="19" height="12" rx="4" />
      <path d="M10 9.500l5 2.500-5 2.500z" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.200 7-11.500a7 7 0 0 0-14 0C5 14.800 12 21 12 21z" />
      <circle cx="12" cy="9.500" r="2.500" />
    </>
  ),
  bus: (
    <>
      <rect x="4" y="3" width="16" height="14" rx="2" />
      <path d="M4 11h16M7 20v-3M17 20v-3" />
      <circle cx="8" cy="14" r=".6" />
      <circle cx="16" cy="14" r=".6" />
    </>
  ),
  car: (
    <>
      <path d="M4 16v-4l2-5h12l2 5v4M3 16h18v2H3z" />
      <circle cx="8" cy="13.500" r=".6" />
      <circle cx="16" cy="13.500" r=".6" />
    </>
  ),
  map: (
    <>
      <path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2zM9 4v14M15 6v14" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.500l3 3 5-6" />
    </>
  ),
};
export type IconName = keyof typeof artwork;
export function Icon({
  name,
  className = "",
  ...props
}: SVGProps<SVGSVGElement> & { name: IconName }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`i ${className}`}
      aria-hidden="true"
      {...props}
    >
      {artwork[name]}
    </svg>
  );
}
