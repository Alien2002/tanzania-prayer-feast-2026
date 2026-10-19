# Delivery validation

- Production build: passed; home plus all nine section routes prerendered.
- TypeScript: passed (`tsc --noEmit`).
- ESLint: passed without warnings.
- Formatting: Prettier applied to source and configuration.
- Chromium browser: all ten routes checked at 320, 375, 768, 1280, and 1920 CSS pixels; no horizontal document overflow or uncaught page errors.
- Mobile navigation: opens, follows a route, and closes; menu has a height limit and scrolls on short screens.
- Registration: student-only fields appear; populated values are included in the WhatsApp URL; changing to non-student excludes those values; editing invalidates the previously prepared link.
- Phone validation: rejects invalid text and accepts an international-format phone number.
- Confirmation link: generated successfully; no external message was sent.
- Hero: heading and countdown visible after entry animations; desktop and mobile layouts visually inspected.
- Dark mode and reduced-motion registration flow exercised.
- Original 18 images retained; fonts bundled with their licenses.

These are local Chromium checks, not a claim of testing every physical device or browser. There is no registration backend; confirmation remains the original WhatsApp handoff.
