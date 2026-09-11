# सांवरिया — Sawariya Wholesale Cloth Bazaar

A premium storefront for **Sawariya Wholesale Cloth Bazaar**, the clothing bazaar in the heart
of Gorakhpur — cinematic landing page plus a complete shopping journey. Static HTML, CSS and
JavaScript with GSAP. No build step, no dependencies to install.

Built on the [Mahira](https://github.com/gireeshkumarreddy/Mahira) storefront engine, rebranded
and re-stocked with Sawariya's real data, range and store photos.

## The business

- **Name:** Sawariya Wholesale Cloth Bazaar (सांवरिया)
- **Address:** Arbit 11, 10 Park Street, opposite Park Regency Hotel, Bilandpur, Gorakhpur, Uttar Pradesh 273001
- **Phone / WhatsApp:** 070819 66666 (+91 70819 66666)
- **Hours:** Open all week, 10:30 am onwards
- **Rating:** 4.4★ · 408+ Google reviews
- **Instagram:** [@sawariyaclothbazaargorakhpur](https://www.instagram.com/sawariyaclothbazaargorakhpur/)
- **Facebook:** [sawariyaclothbazaargorakhpur](https://www.facebook.com/sawariyaclothbazaargorakhpur)

> SAWARIYA WHOLESALE CLOTH BAZAAR'S outlet is situated in the heart of city Gorakhpur. We provide
> you the guaranteed wholesale rates with ample of range of all kinds of sarees, ladies suits
> (fabric & readymade), kurti, gown, lehenga, croptop, suiting, shirting, bedsheet, leggings,
> ladies pant, shararas, woollen readymade kurtis, shawl, stole etc.

Store photos in `assets/store-*.jpg|webp` are the real shop — storefront, signboard, entrance,
interior and fabric counters.

## Running it

The site must be served over HTTP (it fetches JSON and templates, which `file://` blocks):

```bash
python3 -m http.server 4173 --bind 0.0.0.0
```

Then open <http://localhost:4173/index.html>.

## Pages

| Page | Purpose |
| --- | --- |
| `index.html` | Landing page — curtain intro, hero, editorial sections, store gallery & info |
| `category.html` | Category landing (`?c=women`, `?c=suiting`) |
| `shop.html` | Product listing with filters and sorting |
| `product.html` | Product detail — colour, size, quantity, add to cart / wishlist |
| `cart.html` | Cart with line editing and running totals |
| `checkout.html` | Address selection and payment method |
| `order.html` | Order placed confirmation |
| `track.html` | Order tracking |
| `login.html`, `signup.html` | Account entry |
| `explore.html` | Index of every screen in the flow, with a demo data seeder |
| `email-preview.html` | Renders the order confirmation email at desktop and mobile widths |

## Structure

```
assets/                     imagery (incl. real store photos store-*.jpg/webp)
css/     styles.css         landing page
         shop.css           shopping flow
         auth.css           login / sign up
js/      main.js            landing page engine, curtain intro, navigation
         shop.js            catalogue, cart, wishlist, orders
         shop-data.js       product and category data (Sawariya range & rates)
         auth.js            account screens
         emblem-data.js     सांवरिया identity config (SVG text logo)
email/   order-confirmation.html   table-based email template
```

## How state works

Cart, wishlist, orders and saved addresses live in `localStorage` under the `sawariya.*` keys.
Cart lines are keyed by `id|colour|size`, so the same product in two sizes stays two lines.
Product details, variants, quantities and totals carry through unchanged from listing to
confirmation.

## Notes

- The logo is the store's Devanagari wordmark (सांवरिया) drawn as live SVG text with the
  roundel "स" badge, in `js/emblem-data.js` + the builders in `main.js` / `shop.js` / `auth.js`.
- The email template uses tables and inline styles, with a text lockup instead of a raster,
  so it still reads when a client blocks images.
