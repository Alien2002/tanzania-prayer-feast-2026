# Prayer Feast 2026 — Next.js

A component-based conversion of the supplied TYPA HTML, preserving its purple-and-gold design, content, 18 original image assets, local typography, countdown, slideshow, and WhatsApp registration flow.

## Run locally

Use Node.js 20.9 or newer (Node.js 22 LTS or newer recommended).

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

```bash
npm run build
npm start
```

No environment variables, API keys, or database are required. `package-lock.json` records the tested dependency versions. Do not copy `node_modules` or `.next` between computers.

## Stack

- Next.js App Router and TypeScript; server-rendered page content.
- React client components limited to navigation, countdown, slideshow, and registration.
- Tailwind CSS v4 through `@tailwindcss/postcss`; shared design tokens and original decorative styles in `globals.css`.
- Lucide icons for mobile navigation; reusable SVG icons preserve the supplied artwork.
- `next/image` for local images and `next/font/local` for Cormorant Garamond and Montserrat. Font licenses are included beside the fonts. No runtime Google Fonts requests.
- ESLint and Prettier.

## Project structure

```text
public/images/                  Original logo, title, host and gathering photographs
src/
  app/
    layout.tsx                  Metadata, fonts, shared site shell
    page.tsx                    Home page
    globals.css                 Tailwind import, theme tokens, decorative styles
    fonts/                      Self-hosted fonts and licenses
    ministry/page.tsx            The movement
    values/page.tsx              Core values
    ministers/page.tsx           Ministers
    timetable/page.tsx           Programme
    reach/page.tsx               Getting there
    expect/page.tsx              What to expect
    partner/page.tsx             Partnership
    serve/page.tsx               Volunteer teams
    register/page.tsx            Registration
    not-found.tsx                404 screen
  components/
    home/                       Hero, slideshow, countdown, explore grid
    layout/                     Header, footer, content-page shell, WhatsApp button
    registration/               Validated registration form and radio group
    sections/                   Page-specific content composition
    ui/                         Card, information-card grid, icon, timeline, page header
  data/                         Shared site settings, navigation and repeatable content
  lib/                          WhatsApp URL builder and timezone-aware countdown
```

## Editing content

| Change                                        | File                                       |
| --------------------------------------------- | ------------------------------------------ |
| Event date, contacts, social URLs, venue      | `src/data/site.ts`                         |
| Page titles, introductions, navigation labels | `src/data/pages.ts`                        |
| Values and expectations cards                 | `src/data/values.ts`, `src/data/expect.ts` |
| Volunteer and partnership cards/actions       | `src/data/serve.ts`, `src/data/partner.ts` |
| Region suggestions                            | `src/data/registration.ts`                 |
| Programme                                     | `src/components/sections/timetable.tsx`    |
| Host and guest lineup                         | `src/components/sections/ministers.tsx`    |
| Movement history                              | `src/components/sections/ministry.tsx`     |
| Theme colors and spacing                      | `src/app/globals.css`                      |

Set `site.venue.name`, `address`, and `mapQuery` once the venue is confirmed. The location page switches from a WhatsApp enquiry to Google Maps search/transit/driving links. The original did not include a confirmed venue; none is invented here.

The date used by the countdown is midnight on 9 December 2026 in Tanzania, matching the supplied HTML. It shows calendar months plus remaining days, hours, minutes, and seconds; it clamps to zero after the target. Change `site.eventDate` if the countdown should end at the 8 AM doors-open time instead. Update display text and page copy when changing the event year.

## Registration behavior

Registration is intentionally the same WhatsApp handoff as the original, not a database submission:

1. The user fills the required fields and consents to contact.
2. Student fields appear and become required only for students.
3. The form prepares a WhatsApp link locally.
4. The user clicks **Send on WhatsApp**, then sends the message in WhatsApp.
5. TYPA confirms their place by replying.

Editing any field invalidates the prepared link to prevent stale details. Hidden student fields are excluded. No form data is saved to local storage, a server, or a database. An actual registration dashboard, payment system, email confirmation, or attendee database would require an additional backend integration.

## Responsive and accessible behavior

- Collapsible navigation below 1280px; wide-screen navigation above it.
- One-column cards on phones, two on tablets, three on large screens.
- Flexible container, wrapping actions, compact five-part countdown, and single-column forms.
- Visible keyboard focus, skip link, current-page navigation, labels and native validation.
- Reduced-motion support and an explicit slideshow pause control.
- System light/dark color scheme, preserving the original design.
- All routes are directly addressable and refreshable; navigation uses Next.js links instead of hash routing.

## Quality checks

```bash
npm run typecheck
npm run lint
npm run format:check
npm run build
```

See `VALIDATION.md` for checks performed on this delivery.

## Deployment

Deploy as a standard Next.js project to a Next.js-compatible host, or run `npm run build` followed by `npm start` on your server. The default image optimizer uses the Next.js runtime; this configuration is not a plain static-file export.

The supplied images and organization content are retained from your original file; their original ownership applies.
