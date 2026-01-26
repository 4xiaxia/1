## 2024-05-23 - Add tooltips to icon-only buttons

**Learning:** Icon-only buttons, while often having `aria-label`s for screen reader users, can still be ambiguous for sighted desktop users. Adding a `title` attribute provides a simple, effective tooltip on hover, improving discoverability and clarity without adding visual clutter.

**Action:** When encountering icon-only buttons in this application, check if they have a `title` attribute for tooltips. If not, add one, reusing the `aria-label` text if appropriate. This is a quick and valuable micro-UX enhancement.
