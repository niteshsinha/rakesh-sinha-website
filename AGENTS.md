# AGENTS.md

Static photography portfolio (Rakesh Sinha) built on the BootstrapMade "PhotoFolio" template. Plain HTML + jQuery + Bootstrap + Swiper + GLightbox + AOS. No package.json, no build step, no tests, no CI. All content is JSON-driven via `$.ajax` at runtime.

## Active vs. dead files

Active pages: `index.html`, `gallery-home.html`, `gallery.html`, `exhibitions.html`, `news-room.html`, `about.html`. Ignore the clutter: `index (2).html`, `*_backup*.html`, `exb.html`, `gallery_1.html`, `gallery-single_backup.html`, `sample-inner-page.html`, `Readme.txt` are stale leftovers not linked from the nav.

## Site structure (how pages are wired)

- Header and footer are injected at runtime by `assets/js/main.js` via `getDynamicHeader(activeKey)`. Every page has an empty `<header id="header">`/`<footer id="footer">` and calls `getDynamicHeader(...)` in `$(document).ready`. **The nav lives only in main.js** — change nav links there, not per-page. Active keys: `"home"`, `"gallery"`, `"exhibitions"`, `"news"`, `"about"`.
- Libraries live in `assets/vendor/` (bootstrap, swiper, glightbox, aos, php-email-form). `src/` contains a legacy lightbox lib still referenced alongside GLightbox — leave it alone.
- `assets/css/main.css` is hand-maintained (committed output). `assets/css/main.scss` is a template source artifact with no compiler configured.

## Data flow (the real "content editing")

- Per-category gallery: `Data/<Name>Gallery.json` + images in `assets/img/gallery/<name-lowercase>/`. `gallery.html?cat=<name>` → `Scripts/galleryData.js` fetches `Data/<cat>Gallery.json`.
- **Case-sensitivity gotcha**: `galleryData.js` uses the `cat` URL param verbatim to build the JSON URL, but lowercases it for the image folder path. So `?cat=vocals` works, but `?cat=miscellaneous` 404s because the file is `MiscellaneousGallery.json`. Fly.io deploys run on Linux (case-sensitive FS), so this breaks in production.
- Home gallery (`gallery-home.html` → `Scripts/galleryHome.js`) renders `Data/HomeGallery.json`; each entry's `images` array must have **exactly ≥4 items** (indexes 0–3 hardcoded). Its `data` field must match a `Data/*Gallery.json` prefix for "View all" links.
- Homepage hero slider (`index.html` → `Scripts/homeSlider.js`) uses `Data/HomePagePhotos.json`; paths are relative to `assets/img/gallery/`.
- Exhibitions (`exhibitions.html` → `Scripts/expSlider.js`) uses `Data/expData.json` with `async: false` ajax; images in `assets/img/exh/`. Additional entries are hardcoded in the `moreExb` array in expSlider.js and appended to `#data_card_append`.
- `Scripts/menuItems.js` and `Scripts/homepage.js` are only used by the dead `gallery_1.html` — don't touch.

## Known broken / placeholder things

- `forms/contact.php` requires the paid "PHP Email Form" library at `assets/vendor/php-email-form/php-email-form.php`, which does not exist (only `validate.js` is present). The contact form is non-functional.
- No Contact page exists; the dynamic nav has no Contact link.

## Running / deploying

- Local preview: `python3 -m http.server` from repo root (must run over HTTP, not `file://`, or the JSON ajax loads fail).
- Deploy: `fly deploy` (Dockerfile uses `pierrezemb/gostatic`, serves repo root at port 8043 per `fly.toml`).
