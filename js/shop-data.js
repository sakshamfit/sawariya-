/* ============================================================
   SAWARIYA WHOLESALE CLOTH BAZAAR — CATALOGUE
   One data source drives every category, listing and product
   page. The range mirrors the real Park Street bazaar — sarees,
   ladies suits, kurtis, gowns, lehengas, croptops, suiting,
   shirting, bedsheets, shawls & stoles — at wholesale rates.
   ============================================================ */
(function () {
  'use strict';

  var A = 'assets/';

  /* colour vocabulary shared across the catalogue */
  var C = {
    olive:     { name: 'Olive Green',  hex: '#4A5A3A' },
    forest:    { name: 'Deep Forest',  hex: '#1F3323' },
    ivory:     { name: 'Warm Ivory',   hex: '#EFE3CC' },
    champagne: { name: 'Champagne',    hex: '#D9C39B' },
    maroon:    { name: 'Maroon',       hex: '#6E2532' },
    rust:      { name: 'Rust',         hex: '#A8552F' },
    indigo:    { name: 'Indigo',       hex: '#2E3A5C' },
    gold:      { name: 'Antique Gold', hex: '#B89A62' },
    walnut:    { name: 'Rich Walnut',  hex: '#3B3025' },
    rose:      { name: 'Dusty Rose',   hex: '#C08B84' }
  };

  var SAREE_SIZES = ['Free Size'];
  var SUIT_SIZES  = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  var CARE = 'Dry clean only. Store folded in a muslin wrap, away from direct sunlight. Press on the reverse with a warm iron.';
  var SHIP = 'Dispatched from the Park Street store within 2–3 working days. Free delivery across India on prepaid orders. Exchange accepted within 7 days at the store, unworn and with tags intact.';

  /* ---------- categories → groups → subcategories ---------- */
  var CATEGORIES = {
    women: {
      slug: 'women',
      label: 'Women',
      eyebrow: 'The Women’s Edit',
      title: 'Women',
      line: 'Sarees, ladies suits, kurtis, gowns & lehengas at wholesale rates.',
      hero: A + 'women-clean.jpg?v=3',
      heroMobile: A + 'women-mobile.jpg?v=3',
      heroPos: '62% 45%',
      groups: [
        { title: 'Ethnic', subs: [
          { slug: 'sarees',      label: 'Sarees',                img: A + 's3-sarees.jpg?v=5',  band: A + 's2-card-women.jpg?v=2', focal: '50% 32%' },
          { slug: 'kurta-sets',  label: 'Ladies Suits & Kurtis', img: A + 's3-kurta.jpg?v=5',   band: A + 's5-kurta.jpg?v=1',      focal: '50% 38%' },
          { slug: 'anarkali',    label: 'Gowns & Anarkali',      img: A + 's5-p1.jpg?v=1',      band: A + 's3-bg.jpg?v=1',         focal: '52% 34%' },
          { slug: 'lehengas',    label: 'Lehengas',              img: A + 's4-p2.jpg?v=1',      band: A + 's5-room.jpg?v=1',       focal: '48% 40%' },
          { slug: 'co-ord-sets', label: 'Shararas & Co-ords',    img: A + 's4-p3.jpg?v=1',      band: A + 's5-p3.jpg?v=1',         focal: '50% 40%' },
          { slug: 'dresses',     label: 'Dresses',               img: A + 's3-dresses.jpg?v=5', band: A + 's2-room.jpg?v=4',       focal: '54% 42%' }
        ]},
        { title: 'Western & Winter', subs: [
          { slug: 'tops',     label: 'Croptops & Tops',           img: A + 's5-p4.jpg?v=1', band: A + 's5-printed.jpg?v=1', focal: '50% 40%' },
          { slug: 'trousers', label: 'Ladies Pants & Leggings',   img: A + 's4-p1.jpg?v=1', band: A + 's5-p2.jpg?v=1',      focal: '50% 42%' }
        ]}
      ]
    },
    suiting: {
      slug: 'suiting',
      label: 'Suiting & More',
      eyebrow: 'The Wholesale Bazaar',
      title: 'Suiting & More',
      line: 'Suiting, shirting, bedsheets & winter wear — guaranteed wholesale rates.',
      hero: A + 'store-entry.jpg',
      heroMobile: A + 'store-entry.jpg',
      heroPos: '50% 45%',
      groups: [
        { title: 'Tailoring Fabrics', subs: [
          { slug: 'suiting-fabrics', label: 'Suiting',         img: A + 'store-fabrics.jpg',  band: A + 'store-inside.jpg', focal: '50% 40%' },
          { slug: 'shirting',        label: 'Shirting',        img: A + 's4-p3.jpg?v=1',      band: A + 'store-front.jpg',  focal: '50% 40%' }
        ]},
        { title: 'Home & Winter', subs: [
          { slug: 'bedsheets',     label: 'Bedsheets',         img: A + 's5-printed.jpg?v=1', band: A + 's5-p3.jpg?v=1',    focal: '50% 44%' },
          { slug: 'shawls-stoles', label: 'Shawls & Stoles',   img: A + 's5-p4.jpg?v=1',      band: A + 's5-p3.jpg?v=1',    focal: '50% 40%' }
        ]}
      ]
    }
  };

  /* ---------- products ---------- */
  function p(o) {
    o.sizes = o.sizes || SAREE_SIZES;
    o.care = o.care || CARE;
    o.shipping = o.shipping || SHIP;
    o.rating = o.rating || 4.4;
    o.reviews = o.reviews || 84;
    return o;
  }

  var PRODUCTS = [
    /* ---- Women · Sarees ---- */
    p({ id: 'sw-101', cat: 'women', sub: 'sarees', title: 'Banarasi Silk Saree',
        price: 1250, mrp: 1560, fabric: 'Silk', rating: 4.8, reviews: 132,
        desc: 'A Banarasi-style silk saree with a contrast temple border — the counter the bazaar is known for.',
        details: 'Silk · 6.3m with blouse piece · Contrast temple border',
        colors: [C.maroon, C.forest, C.gold], images: [A + 's4-p1.jpg?v=1', A + 's3-sarees.jpg?v=5', A + 's4-editorial.jpg?v=2'] }),
    p({ id: 'sw-102', cat: 'women', sub: 'sarees', title: 'Chanderi Silk Saree',
        price: 850, mrp: 1050, fabric: 'Chanderi',
        desc: 'A graceful Chanderi silk saree with a fine zari border, woven on a feather-light body that drapes without weight.',
        details: 'Chanderi silk · 5.5m with unstitched 0.8m blouse piece · Zari border',
        colors: [C.olive, C.champagne, C.maroon], images: [A + 's3-sarees.jpg?v=5', A + 's4-p1.jpg?v=1', A + 's5-p1.jpg?v=1'] }),
    p({ id: 'sw-103', cat: 'women', sub: 'sarees', title: 'Handloom Cotton Saree',
        price: 499, mrp: 650, fabric: 'Cotton', rating: 4.5, reviews: 61,
        desc: 'An everyday handloom cotton saree with a soft, breathable fall and a quiet striped border — made for long days worn easily.',
        details: 'Handloom cotton · 5.5m with blouse piece · Natural dyes',
        colors: [C.ivory, C.rust, C.indigo], images: [A + 's5-p1.jpg?v=1', A + 's3-sarees.jpg?v=5'] }),
    p({ id: 'sw-104', cat: 'women', sub: 'sarees', title: 'Silk Blend Saree',
        price: 999, mrp: 1299, fabric: 'Silk blend', rating: 4.7, reviews: 98,
        desc: 'A silk-blend saree with a subtle sheen and a deep woven border, cut for occasion wear that still moves easily.',
        details: 'Silk blend · 5.5m with blouse piece · Woven border',
        colors: [C.forest, C.walnut, C.rose], images: [A + 's4-editorial.jpg?v=2', A + 's4-p2.jpg?v=1'] }),

    /* ---- Women · Ladies Suits & Kurtis ---- */
    p({ id: 'sw-201', cat: 'women', sub: 'kurta-sets', title: 'Chikankari Kurta Set',
        price: 750, mrp: 950, fabric: 'Cotton', sizes: SUIT_SIZES, rating: 4.7, reviews: 145,
        desc: 'Hand-embroidered chikankari on soft cotton — a straight kurta with matching palazzo and a fine mul dupatta.',
        details: 'Cotton mul · Kurta, palazzo and dupatta · Lucknowi chikankari',
        colors: [C.ivory, C.rose, C.olive], images: [A + 's3-kurta.jpg?v=5', A + 's5-p4.jpg?v=1'] }),
    p({ id: 'sw-202', cat: 'women', sub: 'kurta-sets', title: 'Printed Cotton Kurti Set',
        price: 550, mrp: 700, fabric: 'Cotton', sizes: SUIT_SIZES, rating: 4.3, reviews: 52,
        desc: 'A block-printed cotton set for the working week — an easy A-line kurti with straight trousers and a light dupatta.',
        details: 'Block-printed cotton · Kurti, trousers and dupatta',
        colors: [C.indigo, C.rust, C.ivory], images: [A + 's5-p4.jpg?v=1', A + 's3-kurta.jpg?v=5'] }),

    /* ---- Women · Gowns & Anarkali ---- */
    p({ id: 'sw-301', cat: 'women', sub: 'anarkali', title: 'Silk Anarkali Gown',
        price: 1450, mrp: 1850, fabric: 'Silk', sizes: SUIT_SIZES, rating: 4.8, reviews: 76,
        desc: 'A floor-length silk anarkali with a fitted bodice and a full, unbroken flare, paired with churidar and an embroidered dupatta.',
        details: 'Silk · Anarkali, churidar and dupatta · Hand-finished embroidery',
        colors: [C.forest, C.maroon, C.gold], images: [A + 's5-p1.jpg?v=1', A + 's4-editorial.jpg?v=2'] }),

    /* ---- Women · Lehengas ---- */
    p({ id: 'sw-401', cat: 'women', sub: 'lehengas', title: 'Occasion Lehenga Set',
        price: 2450, mrp: 3100, fabric: 'Silk', sizes: SUIT_SIZES, rating: 4.9, reviews: 41,
        desc: 'A celebration lehenga with a hand-worked border, a structured blouse and a sheer dupatta finished with a scalloped edge.',
        details: 'Raw silk · Lehenga, blouse and dupatta · Hand embroidery',
        colors: [C.maroon, C.forest, C.champagne], images: [A + 's4-p2.jpg?v=1', A + 's5-p1.jpg?v=1'] }),

    /* ---- Women · Shararas & Co-ords ---- */
    p({ id: 'sw-501', cat: 'women', sub: 'co-ord-sets', title: 'Sharara Set',
        price: 1150, mrp: 1450, fabric: 'Georgette', sizes: SUIT_SIZES, rating: 4.5, reviews: 63,
        desc: 'A flowy sharara set with a flared bottom and an embroidered kurti — a wedding-season staple at bazaar prices.',
        details: 'Georgette · Kurti and flared sharara · Dupatta included',
        colors: [C.ivory, C.olive, C.rose], images: [A + 's4-p3.jpg?v=1', A + 's5-p3.jpg?v=1'] }),

    /* ---- Women · Dresses ---- */
    p({ id: 'sw-601', cat: 'women', sub: 'dresses', title: 'Handwoven Cotton Dress',
        price: 650, mrp: 850, fabric: 'Cotton', sizes: SUIT_SIZES, rating: 4.4, reviews: 38,
        desc: 'A handwoven cotton dress with a gathered waist and deep pockets, cut long enough to wear alone or layered.',
        details: 'Handwoven cotton · Side pockets · Concealed zip',
        colors: [C.indigo, C.ivory, C.rust], images: [A + 's3-dresses.jpg?v=5', A + 's4-p3.jpg?v=1'] }),

    /* ---- Women · Croptops & Tops ---- */
    p({ id: 'sw-701', cat: 'women', sub: 'tops', title: 'Embroidered Croptop',
        price: 350, mrp: 450, fabric: 'Cotton', sizes: SUIT_SIZES, rating: 4.3, reviews: 29,
        desc: 'A quiet cotton croptop with a hand-embroidered yoke and a straight, easy body.',
        details: 'Cotton · Hand-embroidered yoke',
        colors: [C.ivory, C.olive], images: [A + 's5-p4.jpg?v=1'] }),

    /* ---- Women · Ladies Pants & Leggings ---- */
    p({ id: 'sw-702', cat: 'women', sub: 'trousers', title: 'Ladies Pant / Legging',
        price: 320, mrp: 420, fabric: 'Stretch cotton', sizes: SUIT_SIZES, rating: 4.5, reviews: 34,
        desc: 'High-waisted stretch-cotton pants and leggings with a clean finish — stocked in every size at the bazaar.',
        details: 'Stretch cotton · High waist · Full size run',
        colors: [C.walnut, C.ivory, C.forest], images: [A + 's4-p1.jpg?v=1'] }),

    /* ---- Suiting ---- */
    p({ id: 'sm-101', cat: 'suiting', sub: 'suiting-fabrics', title: 'Poly-Viscose Suiting · Piece Lot',
        price: 1250, mrp: 1500, fabric: 'Poly-viscose', sizes: ['2.5m', '5m'],
        desc: 'Premium poly-viscose suiting sold by the piece length — the counter that made the Park Street store famous.',
        details: 'Poly-viscose · 110cm width · Sold by the length',
        colors: [C.walnut, C.indigo], images: [A + 'store-fabrics.jpg', A + 's4-p3.jpg?v=1'] }),
    p({ id: 'sm-102', cat: 'suiting', sub: 'suiting-fabrics', title: 'Terry-Rayon Suiting · Wholesale Lot',
        price: 999, mrp: 1250, fabric: 'Terry rayon', rating: 4.6, reviews: 87,
        desc: 'Terry-rayon suiting lots at guaranteed wholesale rates, cut straight off the roll at the counter.',
        details: 'Terry rayon · 110cm width · Ready stock',
        colors: [C.indigo, C.walnut, C.ivory], images: [A + 'store-fabrics.jpg', A + 's4-p1.jpg?v=1'] }),

    /* ---- Shirting ---- */
    p({ id: 'sm-201', cat: 'suiting', sub: 'shirting', title: 'Printed Shirting · Wholesale Lot',
        price: 850, mrp: 999, fabric: 'Cotton', sizes: ['2.5m', '5m'], rating: 4.7, reviews: 66,
        desc: 'Printed cotton shirting lots, cut to length off the roll at the counter.',
        details: 'Cotton · 110cm width · Cut lengths available',
        colors: [C.rust, C.olive, C.ivory], images: [A + 's4-p2.jpg?v=1', A + 's4-p3.jpg?v=1'] }),

    /* ---- Bedsheets ---- */
    p({ id: 'sm-301', cat: 'suiting', sub: 'bedsheets', title: 'Printed Double Bedsheet',
        price: 450, mrp: 600, fabric: 'Cotton', sizes: ['Single', 'Double'], rating: 4.5, reviews: 24,
        desc: 'Soft printed cotton bedsheets in single and double sizes — wholesale rates even on a single piece.',
        details: 'Cotton · Double size · Printed',
        colors: [C.rust, C.indigo], images: [A + 's5-printed.jpg?v=1'] }),
    p({ id: 'sm-302', cat: 'suiting', sub: 'bedsheets', title: 'Woollen Readymade Kurti',
        price: 550, mrp: 750, fabric: 'Wool blend', sizes: SUIT_SIZES, rating: 4.4, reviews: 19,
        desc: 'Woollen readymade kurtis for the Gorakhpur winter — ready off the rack in every size.',
        details: 'Wool blend · Readymade · Sizes XS–XXL',
        colors: [C.maroon, C.forest, C.rose], images: [A + 's5-kurta.jpg?v=1'] }),

    /* ---- Shawls & Stoles ---- */
    p({ id: 'sm-401', cat: 'suiting', sub: 'shawls-stoles', title: 'Shawl & Stole Combo',
        price: 350, mrp: 500, fabric: 'Wool blend', rating: 4.6, reviews: 45,
        desc: 'Woollen shawls and stole combos for the winter season — stocked deep at the bazaar.',
        details: 'Wool blend · Shawl and stole combo',
        colors: [C.ivory, C.rust, C.olive], images: [A + 's5-p4.jpg?v=1'] })
  ];

  /* ---------- lookups ---------- */
  function subLabel(catSlug, subSlug) {
    var c = CATEGORIES[catSlug];
    if (!c) return subSlug;
    for (var i = 0; i < c.groups.length; i++) {
      var found = c.groups[i].subs.filter(function (s) { return s.slug === subSlug; })[0];
      if (found) return found.label;
    }
    return subSlug;
  }
  function subMeta(catSlug, subSlug) {
    var c = CATEGORIES[catSlug];
    if (!c) return null;
    for (var i = 0; i < c.groups.length; i++) {
      var f = c.groups[i].subs.filter(function (s) { return s.slug === subSlug; })[0];
      if (f) return f;
    }
    return null;
  }

  window.SAWARIYA_SHOP = {
    colors: C,
    categories: CATEGORIES,
    products: PRODUCTS,
    byId: function (id) { return PRODUCTS.filter(function (x) { return x.id === id; })[0] || null; },
    inSub: function (cat, sub) { return PRODUCTS.filter(function (x) { return x.cat === cat && x.sub === sub; }); },
    inCat: function (cat) { return PRODUCTS.filter(function (x) { return x.cat === cat; }); },
    subLabel: subLabel,
    subMeta: subMeta
  };
})();
