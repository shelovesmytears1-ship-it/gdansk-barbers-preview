/* app.js — render content.json (XSS-safe) + interactions
   NOTE: FALLBACK_DATA mirrors content.json (single source of truth = content.json).
   After editing content.json, copy the same JSON into FALLBACK_DATA below. */
const FALLBACK_DATA = {
  "site": {"city":"Kraków","district":"Kazimierz","title":"Barber Kraków Kazimierz — Męskie strzyżenie | BARBER KRAKÓW","description":"Barber Kraków Kazimierz — strzyżenie męskie, broda, combo. ul. Dietla 57. Rezerwacja online 24/7, 4.9★ Google.","bookingUrl":"https://booksy.com/pl/","bookingProvider":"booksy","ga4":""},
  "brand": {"name":"BARBER KRAKÓW","accent":"#C5A46A"},
  "header": {"phone":"+48 512 345 678","phoneLabel":"Zadzwoń","cta":"Zarezerwuj"},
  "hero": {"kicker":"Barber Shop • Kraków Kazimierz","h1":"Męskie strzyżenie bez kompromisów.","sub":"45 minut precyzji. Kawa na miejscu. Rezerwacja online 24/7.","ctaPrimary":{"label":"Zarezerwuj wizytę","href":"https://booksy.com/pl/"},"ctaSecondary":{"label":"Zobacz cennik","href":"#cennik"},"proof":"4,9/5 — 287 opinii Google","ratingValue":4.9,"reviewsCount":287,"image":"https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1800&h=1200&fit=crop"},
  "proofStrip": ["Google 4,9 ★★★★★","Booksy 5,0","300+ zadowolonych klientów","@barber.krakow"],
  "trust": [
    {"icon":"scissors","title":"Doświadczeni barberzy","text":"7+ lat w fachu — setki cięć w tygodniu, zero pośpiechu."},
    {"icon":"package","title":"Produkty premium","text":"Tylko sprawdzone kosmetyki do stylizacji i pielęgnacji brody."},
    {"icon":"shield-check","title":"Higiena i sterylność","text":"Dezynfekcja narzędzi po każdym kliencie, świeże ostrza."},
    {"icon":"thumbs-up","title":"Gwarancja zadowolenia","text":"Niezadowolony z cięcia? Poprawiamy bez dopłaty."}
  ],
  "styles": [
    {"name":"Fade klasyczny","price":"90 zł","img":"https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&h=600&fit=crop"},
    {"name":"Strzyżenie + broda","price":"120 zł","img":"https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&h=600&fit=crop"},
    {"name":"Strzyżenie maszynką","price":"80 zł","img":"https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=800&h=600&fit=crop"},
    {"name":"Kontur brzytwą","price":"60 zł","img":"https://images.unsplash.com/photo-1517832606299-7ae9b720a186?w=800&h=600&fit=crop"}
  ],
  "stats": [
    {"value":"7+","label":"lat doświadczenia"},
    {"value":"300+","label":"zadowolonych klientów"},
    {"value":"4,9","label":"ocena Google"},
    {"value":"45 min","label":"średnia wizyta"}
  ],
  "steps": [
    {"n":"01","title":"Wybierz termin","text":"Online przez Booksy — barber, usługa i godzina. 24/7, bez dzwonienia."},
    {"n":"02","title":"Przyjdź na Kazimierz","text":"ul. Dietla 57, 2 minuty od przystanku. Kawa już czeka."},
    {"n":"03","title":"45 minut precyzji","text":"Cięcie, broda, styling. Bez pośpiechu, z dbałością o detal."},
    {"n":"04","title":"Płać jak wygodnie","text":"Karta, BLIK, gotówka. Wróć za 3–4 tygodnie — przypomnimy."}
  ],
  "cennik": {
    "kicker":"Cennik","title":"Prosto i uczciwie",
    "groups":[
      {"name":"Strzyżenie","items":[{"name":"Strzyżenie klasyczne","desc":"Maszynka + nożyczki, modelowanie.","time":"45 min","price":"80 zł","bestseller":false},{"name":"Strzyżenie maszynką — fade","desc":"Czyste przejścia, kontur brzytwą.","time":"45 min","price":"90 zł","bestseller":false},{"name":"Strzyżenie + broda — Combo","desc":"Pełny pakiet: cięcie, broda, styling.","time":"60 min","price":"120 zł","bestseller":true}]},
      {"name":"Broda","items":[{"name":"Trymowanie brody","desc":"Kształt, długość, pielęgnacja olejkiem.","time":"30 min","price":"50 zł","bestseller":false},{"name":"Broda + kontur","desc":"Kontur brzytwą + gorący ręcznik.","time":"30 min","price":"60 zł","bestseller":false}]},
      {"name":"Pakiety","items":[{"name":"Ojciec + syn","desc":"Dwa fotele obok siebie. Idealne na prezent.","time":"60 min","price":"130 zł","bestseller":false}]}
    ],
    "note":"Płatność kartą, BLIK, gotówką. Rezerwacja online 24/7."
  },
  "team": [
    {"name":"Kuba","role":"Barber — fade & broda","photo":"./img/barber-kuba.jpg","exp":"7 lat","ig":"https://instagram.com/"},
    {"name":"Michał","role":"Barber — klasyka & styling","photo":"./img/barber-michal.jpg","exp":"5 lat","ig":""},
    {"name":"Bartek","role":"Barber — szybkie cięcia & fade","photo":"./img/barber-bartek.jpg","exp":"3 lata","ig":""}
  ],
  "gallery": [
    {"src":"https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=1200&h=1500&fit=crop","alt":"Fade — strzyżenie męskie Kraków","cap":"Fade"},
    {"src":"https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1200&h=1500&fit=crop","alt":"Trymowanie brody — barber Kraków","cap":"Broda"},
    {"src":"https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&h=1500&fit=crop","alt":"Strzyżenie + broda combo — Kazimierz","cap":"Combo"},
    {"src":"https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1200&h=1500&fit=crop","alt":"Wnętrze barbershopu — Kraków Kazimierz","cap":"Wnętrze"},
    {"src":"https://images.unsplash.com/photo-1517832606299-7ae9b720a186?w=1200&h=1500&fit=crop","alt":"Kontur brody nożyczkami — detal","cap":"Kontur"},
    {"src":"https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=1200&h=1500&fit=crop","alt":"Maszynka — czyste przejście z tyłu","cap":"Maszynka"}
  ],
  "reviews": [
    {"name":"Marek K.","stars":5,"date":"2026-09","text":"Najlepszy barber w Krakowie. Zawsze wychodzę zadowolony, precyzja na najwyższym poziomie.","href":"https://maps.google.com/"},
    {"name":"Piotr W.","stars":5,"date":"2026-08","text":"Klimat, kawa i świetne cięcie. Rezerwacja online działa bez zarzutu. Polecam!","href":"https://maps.google.com/"},
    {"name":"Tomek S.","stars":5,"date":"2026-08","text":"Kuba to mistrz fade. Broda idealnie wyrównana. Wrócę na pewno.","href":"https://maps.google.com/"}
  ],
  "contact": {"address":"ul. Dietla 57, 31-054 Kraków — Kazimierz","hours":"Pn–Pt 09:00–20:00 • Sb 09:00–17:00 • Nd nieczynne","phone":"+48 512 345 678","email":"kontakt@barber-krakow.pl","mapEmbed":"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.1!2d19.94!3d50.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDAzJzAwLjAiTiAxOcKwNTYnMjQuMCJF!5e0!3m2!1spl!2spl!4v1","routeHref":"https://maps.google.com/?q=ul.+Dietla+57+Krakow"},
  "faq": [
    {"q":"Czy muszę rezerwować wizytę?","a":"Rekomendujemy rezerwację online przez Booksy — wybierasz barbera i termin 24/7. Przyjmujemy też z ulicy, jeśli mamy okienko."},
    {"q":"Ile trwa wizyta?","a":"Strzyżenie 30–45 min, combo strzyżenie + broda ok. 60 min. Bez pośpiechu."},
    {"q":"Jak mogę zapłacić?","a":"Karta, BLIK, gotówka. Paragon/faktura na miejscu."},
    {"q":"Strzyżecie dzieci?","a":"Tak — pakiet Ojciec + syn. Zapraszamy od 7 lat."},
    {"q":"Czy mogę odwołać lub przełożyć wizytę?","a":"Tak, bezpłatnie do 3 godzin przed wizytą — telefonicznie lub przez Booksy."},
    {"q":"Gdzie zaparkuję?","a":"Najbliższy parking: ul. Dietla i okolice Kazimierza. Polecamy tramwaj — przystanek 2 minuty pieszo."},
    {"q":"Co jeśli się spóźnię?","a":"Daj znać telefonicznie — postaramy się przesunąć wizytę. Po 15 min możemy skrócić usługę."}
  ],
  "finalCta": {"h2":"Gotowy na świeże cięcie?","sub":"Wybierz termin online lub zadzwoń — oddzwonimy w 15 min.","cta":"Zarezerwuj teraz"},
  "footer": {"nip":"676-123-45-67","privacyHref":"#","instagram":"https://instagram.com/"}
};

/* ---------- security helpers ---------- */
function escapeHTML(s){
  return String(s == null ? '' : s).replace(/[&<>"']/g, function(c){
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];
  });
}
/* allow only safe schemes + relative/anchor links */
function safeUrl(u, fallback){
  fallback = (fallback === undefined) ? '#' : fallback;
  var s = String(u == null ? '' : u).trim();
  if(!s) return fallback;
  if(s.charAt(0) === '#' || s.charAt(0) === '/') return s;
  if(/^(https?:|tel:|mailto:)/i.test(s)) return s;
  if(/^\.\.?[\/\\]/.test(s)) return s; /* ./img/... ../... */
  if(/^[\w\-\.\/]+\.(jpg|jpeg|png|webp|svg|avif)(\?.*)?$/i.test(s)) return s; /* bare relative image */
  if(/^[\w\-\.:\/\\?=&%#]+$/.test(s) && !/^[a-z][a-z0-9+.-]*:/i.test(s)) return s; /* scheme-less relative */
  return fallback;
}
function safeImg(src){
  var s = String(src == null ? '' : src).trim();
  if(!s) return '';
  if(/^https?:\/\//i.test(s)) return s;
  if(s.charAt(0) === '/' || /^\.\.?[\/\\]/.test(s)) return s;
  return '';
}
function sanitizePhone(p){
  var d = String(p == null ? '' : p).replace(/[^\d+]/g, '');
  return /^\+?\d{7,15}$/.test(d) ? d : '';
}
function clampStars(n){
  n = parseInt(n, 10);
  if(!isFinite(n)) return 5;
  return Math.min(5, Math.max(0, n));
}
function safeIcon(name){
  var s = String(name == null ? '' : name).trim();
  return /^[a-z0-9-]+$/i.test(s) ? s : 'star';
}
function setText(id, v){
  var el = document.getElementById(id);
  if(el) el.textContent = String(v == null ? '' : v);
}
function setHref(id, url, fallback){
  var el = document.getElementById(id);
  var s = safeUrl(url, fallback === undefined ? '#' : fallback);
  if(el && s) el.href = s;
}
function validData(j){
  return !!(j && j.site && j.hero && j.cennik && Array.isArray(j.cennik.groups) && j.contact && Array.isArray(j.faq));
}
function galleryItems(g){
  if(!Array.isArray(g)) return [];
  return g.map(function(it, i){
    if(typeof it === 'string') return {src: safeImg(it), alt: 'Realizacja barber ' + (i+1), cap: ''};
    it = it || {};
    return {src: safeImg(it.src), alt: String(it.alt || 'Realizacja barber ' + (i+1)), cap: String(it.cap || '')};
  }).filter(function(it){ return !!it.src; });
}
function initials(name){
  var parts = String(name || '').trim().split(/\s+/).filter(Boolean);
  if(!parts.length) return '?';
  var s = parts.length === 1 ? parts[0].charAt(0).toUpperCase() : parts[0].charAt(0).toUpperCase() + parts[1].charAt(0).toUpperCase();
  return s.replace(/[&<>"]/g, '');
}

/* ---------- render ---------- */
function render(data){
  document.title = String(data.site.title || document.title);
  var meta = document.querySelector('meta[name="description"]');
  if(meta && data.site.description) meta.content = String(data.site.description);

  /* brand accent & theme */
  if(data.brand && data.brand.accent){
    document.documentElement.style.setProperty('--accent', data.brand.accent);
    document.documentElement.style.setProperty('--line-focus', data.brand.accent);
  }

  /* brand logo & name */
  var logoEl = document.querySelector('.logo');
  if(logoEl && data.brand && data.brand.name){
    var logoImg = data.brand.logoImg ? safeImg(data.brand.logoImg) : '';
    if(logoImg){
      if(/\.svg$/i.test(logoImg)){
        logoEl.innerHTML = '<img class="logo-img" src="' + escapeHTML(logoImg) + '" alt="' + escapeHTML(data.brand.name) + '">';
      } else {
        var parts = String(data.brand.name).split(/\s+/);
        var title = (parts.length > 1 && parts[0].length <= 4) ? parts[0] + ' ' + parts[1] : (parts[0] || data.brand.name);
        var dist = (data.site && data.site.district) ? data.site.district.toUpperCase() : '';
        logoEl.innerHTML = '<img class="logo-img" src="' + escapeHTML(logoImg) + '" alt="' + escapeHTML(data.brand.name) + '" style="height:32px;width:32px;border-radius:50%;border:1px solid var(--accent);object-fit:cover;flex-shrink:0;">' +
          '<div class="logo-lockup"><span class="logo-title">' + escapeHTML(title) + '</span>' +
          '<span class="logo-sub">' + escapeHTML(dist ? 'BARBERSHOP • ' + dist : 'BARBERSHOP') + '</span></div>';
      }
    } else {
      var parts = String(data.brand.name).split(/\s+/);
      var title = '';
      var sub = '';
      var dist = (data.site && data.site.district) ? data.site.district.toUpperCase() : '';
      if(parts.length <= 2){
        title = data.brand.name;
        sub = dist ? 'BARBERSHOP • ' + dist : 'BARBERSHOP';
      } else {
        title = parts[0];
        sub = parts.slice(1).join(' ') + (dist ? ' • ' + dist : '');
      }
      logoEl.innerHTML = '<div class="logo-lockup">' +
        '<span class="logo-title">' + escapeHTML(title) + '</span>' +
        '<span class="logo-sub">' + escapeHTML(sub) + '</span>' +
        '</div>';
    }
  }

  /* hero image */
  var heroImg = document.getElementById('hero-img');
  if(heroImg && data.hero && data.hero.image){
    var hsrc = safeImg(data.hero.image);
    if(hsrc) {
      heroImg.src = hsrc;
      heroImg.alt = String(data.brand ? data.brand.name : 'Barber') + ' — ' + String(data.site ? data.site.city : '');
    }
  }

  setText('hero-kicker', data.hero.kicker);
  setText('hero-h1', data.hero.h1);
  setText('hero-sub', data.hero.sub);

  /* hero badge text */
  var badgePath = document.querySelector('.hero-badge text textPath');
  if(badgePath && data.brand && data.brand.name){
    var brandPart = data.brand.name.toUpperCase();
    var distPart = (data.site && data.site.district ? data.site.district.toUpperCase() : (data.site ? data.site.city.toUpperCase() : ''));
    badgePath.textContent = brandPart + (distPart ? ' • ' + distPart : '') + ' • REZERWACJA ONLINE • ';
  }

  /* proof badge: avatars + rating from reviews */
  var proofEl = document.getElementById('hero-proof');
  if(proofEl){
    var val = data.hero.ratingValue, cnt = data.hero.reviewsCount;
    var avatars = '';
    if(Array.isArray(data.reviews)){
      avatars = data.reviews.slice(0, 3).map(function(r){
        return '<span class="avatar-dot">' + escapeHTML(initials(r.name)) + '</span>';
      }).join('');
    }
    var ratingHtml = '<span aria-hidden="true">★</span> <strong>' + escapeHTML(String(val || '').replace('.', ',')) + '/5</strong> — ' + escapeHTML(String(cnt || '')) + ' opinii Google';
    proofEl.innerHTML = (avatars ? '<div class="hero-proof-avatars" aria-hidden="true">' + avatars + '</div>' : '') + '<span>' + ratingHtml + '</span>';
  }

  /* trust bar */
  var tg2 = document.getElementById('trust-grid');
  if(tg2 && Array.isArray(data.trust)){
    tg2.innerHTML = data.trust.map(function(t){
      return '<div class="trust-item"><i data-lucide="' + escapeHTML(safeIcon(t.icon)) + '" aria-hidden="true"></i>' +
        '<div><strong>' + escapeHTML(t.title) + '</strong><span>' + escapeHTML(t.text) + '</span></div></div>';
    }).join('');
  }

  /* styles — photo cards */
  var sg = document.getElementById('styles-grid');
  if(sg && Array.isArray(data.styles)){
    var bookingHref = safeUrl(data.site.bookingUrl, '');
    sg.innerHTML = data.styles.map(function(s){
      var img = safeImg(s.img);
      return '<div class="style-card">' +
        (img ? '<img src="' + escapeHTML(img) + '" alt="' + escapeHTML(s.name) + '" loading="lazy" onerror="this.parentElement.style.display=\'none\'">' : '') +
        '<div class="style-info"><h3>' + escapeHTML(s.name) + '</h3><div class="style-price">' + escapeHTML(s.price) + '</div>' +
        '<a class="style-link" href="' + escapeHTML(bookingHref) + '" target="_blank" rel="noopener">Rezerwuj →</a></div></div>';
    }).join('');
  }

  /* stats */
  var st = document.getElementById('stats-grid');
  if(st && Array.isArray(data.stats)){
    st.innerHTML = data.stats.map(function(s){
      return '<div class="stat-item"><div class="stat-value">' + escapeHTML(s.value) + '</div><div class="stat-label">' + escapeHTML(s.label) + '</div></div>';
    }).join('');
  }

  var digits = sanitizePhone(data.header.phone);
  var telHref = digits ? 'tel:' + digits : '#';
  ['header-phone','contact-phone','final-phone','mobile-phone'].forEach(function(id){
    var el = document.getElementById(id);
    if(el) el.href = telHref;
  });
  var book = safeUrl(data.site.bookingUrl, '') || telHref;
  ['header-cta','hero-primary','cennik-cta','contact-cta','final-cta','mobile-cta'].forEach(function(id){
    var el = document.getElementById(id);
    if(el) el.href = book;
  });
  setText('header-phone', data.header.phoneLabel || 'Zadzwoń');
  setText('final-phone', 'Zadzwoń: ' + (data.header.phone || ''));
  setText('mobile-phone', 'Zadzwoń');

  /* proof strip */
  var strip = document.getElementById('proof-strip');
  if(strip && Array.isArray(data.proofStrip)){
    strip.innerHTML = data.proofStrip.map(function(t){
      return '<div class="proof-item"><i data-lucide="star" aria-hidden="true"></i> ' + escapeHTML(t) + '</div>';
    }).join('');
  }

  /* steps — „Jak wygląda wizyta" (IA: nowy argument, nie dubel trust-bar) */
  var fg = document.getElementById('features-grid');
  if(fg && Array.isArray(data.steps)){
    fg.innerHTML = data.steps.map(function(s){
      return '<div class="feat"><div class="feat-num" aria-hidden="true">' + escapeHTML(s.n) + '</div><h3>' + escapeHTML(s.title) + '</h3><p>' + escapeHTML(s.text) + '</p></div>';
    }).join('');
  }

  /* cennik */
  var cw = document.getElementById('cennik-wrap');
  if(cw && data.cennik && Array.isArray(data.cennik.groups)){
    cw.innerHTML = data.cennik.groups.map(function(g){
      var items = Array.isArray(g.items) ? g.items.map(function(it){
        return '<li class="cennik-item' + (it.bestseller ? ' bestseller' : '') + '">' +
          '<div class="cennik-item-left"><div class="cennik-name">' + escapeHTML(it.name) +
          (it.bestseller ? '<span class="cennik-badge">Bestseller</span>' : '') + '</div>' +
          (it.desc ? '<div class="cennik-desc">' + escapeHTML(it.desc) + '</div>' : '') +
          '<div class="cennik-time">' + escapeHTML(it.time) + '</div></div>' +
          '<div class="cennik-price">' + escapeHTML(it.price) + '</div></li>';
      }).join('') : '';
      return '<div class="cennik-group"><div class="cennik-group-head"><h3>' + escapeHTML(g.name) + '</h3></div>' +
        '<ul class="cennik-list">' + items + '</ul></div>';
    }).join('');
  }
  setText('cennik-note', data.cennik ? data.cennik.note : '');

  /* team */
  var tg = document.getElementById('team-grid');
  if(tg && Array.isArray(data.team)){
    var bookUrl = safeUrl(data.site.bookingUrl, '');
    tg.innerHTML = data.team.map(function(m){
      var photo = safeImg(m.photo);
      var ig = safeUrl(m.ig, '');
      return '<div class="team-card">' +
        (photo ? '<div class="team-photo-wrap"><img src="' + escapeHTML(photo) + '" alt="' + escapeHTML(m.name || 'Barber') + '" loading="lazy" onerror="this.style.display=\'none\'"></div>' : '') +
        '<div class="team-body">' +
        '<h3>' + escapeHTML(m.name) + '</h3>' +
        '<div class="role">' + escapeHTML(m.role) + '</div>' +
        '<div class="exp">' + escapeHTML(m.exp || '') +
        (ig ? ' • <a class="team-ig" href="' + escapeHTML(ig) + '" target="_blank" rel="noopener">Instagram</a>' : '') + '</div>' +
        (bookUrl ? '<a class="team-book-btn" href="' + escapeHTML(bookUrl) + '" target="_blank" rel="noopener">Rezerwuj u ' + escapeHTML(m.name) + ' →</a>' : '') +
        '</div></div>';
    }).join('');
  }

  /* gallery — interactive sticky-active-accordion (site-motion-recipes) */
  var gg = document.getElementById('gallery-grid');
  if(gg){
    var items = galleryItems(data.gallery);
    gg.innerHTML = items.map(function(g, idx){
      var activeClass = idx === 0 ? ' is-active' : '';
      return '<figure class="gallery-frame' + activeClass + '" tabindex="0" role="group" aria-label="' + escapeHTML(g.cap || g.alt) + '">' +
        '<img src="' + escapeHTML(g.src) + '" alt="' + escapeHTML(g.alt) + '" loading="lazy" onerror="this.style.opacity=\'0.25\'">' +
        '<div class="gallery-overlay" aria-hidden="true"></div>' +
        (g.cap ? '<figcaption class="gallery-cap"><span>' + escapeHTML(g.cap) + '</span><span class="gallery-zoom-hint"><i data-lucide="maximize-2" style="width:13px;height:13px" aria-hidden="true"></i> Powiększ</span></figcaption>' : '') +
        '</figure>';
    }).join('');

    /* sticky-active-accordion interaction: hover activates, never collapses on gap */
    var frames = gg.querySelectorAll('.gallery-frame');
    function setActive(target){
      frames.forEach(function(f){ f.classList.remove('is-active'); });
      target.classList.add('is-active');
      refreshIcons();
    }
    frames.forEach(function(frame){
      frame.addEventListener('mouseenter', function(){ setActive(frame); });
      frame.addEventListener('focus', function(){ setActive(frame); });
    });
  }

  /* reviews */
  var rg = document.getElementById('reviews-grid');
  if(rg && Array.isArray(data.reviews)){
    rg.innerHTML = data.reviews.map(function(r){
      var href = safeUrl(r.href, 'https://maps.google.com/');
      var stars = '★'.repeat(clampStars(r.stars));
      return '<div class="review"><div class="review-header"><div class="review-avatar">' + escapeHTML(initials(r.name)) + '</div>' +
        '<div class="stars" aria-label="' + clampStars(r.stars) + ' z 5">' + escapeHTML(stars) + '</div></div>' +
        '<p>“' + escapeHTML(r.text) + '”</p>' +
        '<div class="meta"><strong>' + escapeHTML(r.name) + '</strong> • ' + escapeHTML(r.date) + ' • <a class="review-link" href="' + escapeHTML(href) + '" target="_blank" rel="noopener">Google</a></div></div>';
    }).join('');
  }

  /* quote banner */
  var quoteEl = document.querySelector('.quote-banner blockquote');
  if(quoteEl && data.site){
    var d = data.site.district;
    var dLoc = d === 'Zaspa' ? 'na Zaspie' : (d === 'Przymorze' ? 'na Przymorzu' : (d === 'Oliwa' ? 'w Oliwie' : (d === 'Morena' ? 'na Morenie' : (d === 'Wrzeszcz' ? 'we Wrzeszczu' : (d ? 'na ' + d : '')))));
    var cLoc = data.site.city === 'Gdańsk' ? 'w Gdańsku' : (data.site.city === 'Kraków' ? 'w Krakowie' : (data.site.city ? 'w ' + data.site.city : ''));
    var quoteLoc = dLoc || cLoc || 'w mieście';
    quoteEl.textContent = '„Najlepszy barber ' + quoteLoc + '.”';
  }
  var quoteCap = document.querySelector('.quote-banner figcaption');
  if(quoteCap && Array.isArray(data.reviews) && data.reviews.length > 0){
    quoteCap.textContent = data.reviews[0].name + ' · Google';
  }
  var quoteImg = document.querySelector('.quote-banner img');
  if(quoteImg && Array.isArray(data.gallery) && data.gallery.length > 0){
    var qSrc = safeImg(data.gallery[data.gallery.length - 1].src || data.hero.image);
    if(qSrc) quoteImg.src = qSrc;
  }

  /* contact */
  var contactH2 = document.querySelector('#kontakt .h2');
  if(contactH2 && data.site){
    contactH2.textContent = 'Znajdziesz nas: ' + (data.site.city || '') + (data.site.district ? ' (' + data.site.district + ')' : '');
  }
  var contactH3 = document.querySelector('.contact-card h3');
  if(contactH3 && data.brand && data.brand.name){
    contactH3.textContent = data.brand.name + (data.site && data.site.district ? ' • ' + data.site.district : '');
  }
  var cl = document.getElementById('contact-list');
  if(cl){
    var email = String(data.contact.email || '');
    var emailOk = /^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]+$/.test(email);
    cl.innerHTML =
      '<li><strong>Adres:</strong> ' + escapeHTML(data.contact.address) + '</li>' +
      '<li><strong>Godziny:</strong> ' + escapeHTML(data.contact.hours) + '</li>' +
      '<li><strong>Telefon:</strong> <a class="link-accent" href="' + escapeHTML(telHref) + '">' + escapeHTML(data.contact.phone) + '</a></li>' +
      '<li><strong>Email:</strong> ' + (emailOk ? '<a class="link-accent" href="mailto:' + escapeHTML(email) + '">' + escapeHTML(email) + '</a>' : escapeHTML(email)) + '</li>';
  }
  setHref('contact-route', data.contact.routeHref, 'https://maps.google.com/');
  var iframe = document.getElementById('map-iframe');
  if(iframe){
    var embed = String(data.contact.mapEmbed || '');
    if(!embed && data.contact.address){
      embed = 'https://maps.google.com/maps?q=' + encodeURIComponent(data.contact.address) + '&t=&z=16&ie=UTF8&iwloc=&output=embed';
    }
    if(embed){
      iframe.src = embed;
      iframe.style.display = 'block';
      var ph = document.getElementById('map-placeholder');
      if(ph) ph.style.display = 'none';
    }
  }

  /* faq */
  var fl = document.getElementById('faq-list');
  if(fl && Array.isArray(data.faq)){
    fl.innerHTML = data.faq.map(function(f, i){
      return '<div class="faq-item' + (i === 0 ? ' open' : '') + '"><button type="button" class="faq-q" aria-expanded="' + (i === 0 ? 'true' : 'false') + '">' + escapeHTML(f.q) + ' <i data-lucide="plus" style="width:18px;height:18px" aria-hidden="true"></i></button><div class="faq-a"><div class="faq-a-inner">' + escapeHTML(f.a) + '</div></div></div>';
    }).join('');
    fl.querySelectorAll('.faq-q').forEach(function(btn){
      btn.addEventListener('click', function(){
        var item = btn.parentElement;
        var was = item.classList.contains('open');
        fl.querySelectorAll('.faq-item').forEach(function(x){
          x.classList.remove('open');
          var b = x.querySelector('.faq-q');
          if(b) b.setAttribute('aria-expanded', 'false');
        });
        if(!was){ item.classList.add('open'); btn.setAttribute('aria-expanded', 'true'); }
        refreshIcons();
      });
    });
  }

  setText('final-h2', (data.finalCta && data.finalCta.h2) || 'Gotowy na świeże cięcie?');
  setText('final-sub', (data.finalCta && data.finalCta.sub) || 'Wybierz dogodny termin online przez Booksy lub zadzwoń bezpośrednio.');
  setText('final-cta', (data.finalCta && data.finalCta.cta) || 'Zarezerwuj teraz →');

  /* rich footer rendering */
  var footerLogo = document.getElementById('footer-logo');
  if(footerLogo && data.brand && data.brand.name){
    var logoImg = data.brand.logoImg ? safeImg(data.brand.logoImg) : '';
    footerLogo.innerHTML = (logoImg ? '<img src="' + escapeHTML(logoImg) + '" alt="' + escapeHTML(data.brand.name) + '">' : '') +
      '<span>' + escapeHTML(data.brand.name) + '</span>';
  }
  setText('footer-address', data.contact ? data.contact.address : '');
  setText('footer-hours', data.contact ? (typeof data.contact.hours === 'string' ? data.contact.hours : 'Pn–Pt 9:00–21:00, Sob 9:00–18:00') : '');
  var footPhone = document.getElementById('footer-phone-link');
  if(footPhone && data.contact && data.contact.phone){
    footPhone.textContent = data.contact.phone;
    footPhone.href = telHref;
  }
  var footCpy = document.getElementById('footer-copyright');
  if(footCpy && data.brand && data.brand.name){
    var loc = [data.site ? data.site.city : '', data.site ? data.site.district : ''].filter(Boolean).join(' ');
    footCpy.textContent = '© 2026 ' + data.brand.name + (loc ? ' • ' + loc : '');
  }

  /* JSON-LD (dynamic enriches static fallback in <head>) */
  var ld = document.getElementById('ld-json');
  if(ld){
    var digitsTel = sanitizePhone(data.contact.phone);
    var jsonLd = {
      '@context': 'https://schema.org', '@type': 'BarberShop',
      'name': String(data.brand ? data.brand.name : ''),
      'address': String(data.contact.address || ''),
      'telephone': digitsTel ? '+' + digitsTel.replace(/^\+/, '') : '',
      'url': safeUrl(data.site.bookingUrl, ''),
      'aggregateRating': {'@type': 'AggregateRating', 'ratingValue': data.hero.ratingValue || 4.9, 'reviewCount': data.hero.reviewsCount || 287}
    };
    ld.textContent = JSON.stringify(jsonLd).replace(/<\//g, '<\\/');
  }

  /* gallery lightbox */
  var lb = document.getElementById('lightbox');
  if(lb && gg){
    var lbImg = lb.querySelector('img');
    gg.querySelectorAll('img').forEach(function(img){
      img.addEventListener('click', function(){
        var big = String(img.src).replace(/w=\d+/, 'w=1400');
        lbImg.src = safeImg(big) || img.src;
        lbImg.alt = img.alt || 'Powiększone zdjęcie realizacji barber';
        lb.classList.add('open');
      });
    });
    lb.addEventListener('click', function(){ lb.classList.remove('open'); });
    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape') lb.classList.remove('open');
    });
  }

  /* smooth anchors */
  /* smooth anchors – disable when reduced motion */
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      var id = a.getAttribute('href');
      if(!id || id.length < 2) return;
      var el = document.querySelector(id);
      if(!el) return;
      e.preventDefault();
      var top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({top: top, behavior: 'smooth'});
    });
  });

  refreshIcons();
  var heroImg = document.getElementById('hero-img');
  if(heroImg){
    var hsrc = safeImg(data.hero.image);
    if(hsrc) heroImg.src = hsrc;
  }
}

function refreshIcons(attempt){
  attempt = attempt || 0;
  if(window.lucide){ try{ window.lucide.createIcons(); }catch(e){ console.warn('lucide failed', e); } return; }
  if(attempt < 24){ setTimeout(function(){ refreshIcons(attempt + 1); }, 250); }
  else { console.warn('lucide CDN unavailable, icons skipped'); }
}

/* header: transparent over hero, solid after 40px of scroll */
function initHeaderScroll(){
  var header = document.querySelector('.site-header');
  if(!header) return;
  function update(){ header.classList.toggle('scrolled', window.scrollY > 40); }
  update();
  window.addEventListener('scroll', update, {passive: true});
}

/* reveal on scroll — transform/opacity only; reduced motion shows everything */
function initReveal(){
  var nodes = document.querySelectorAll('.reveal');
  if(!nodes.length) return;
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)){
    nodes.forEach(function(n){ n.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){ entry.target.classList.add('in'); io.unobserve(entry.target); }
    });
  }, {threshold: 0.15});
  nodes.forEach(function(n){ io.observe(n); });
}

async function init(){
  var data = window.__SALON_DATA__ || FALLBACK_DATA;
  if (!window.__SALON_DATA__) {
    try {
      var params = new URLSearchParams(window.location.search);
      var salonParam = params.get('salon');
      var file = salonParam ? './data/' + salonParam + '.json' : './content.json';
      var r = await fetch(file, {cache: 'no-store'});
      if(r.ok){
        var j = await r.json();
        if(validData(j)) data = j;
        else console.warn('JSON invalid, using fallback');
      }
    }catch(e){ console.warn('fetch data failed, using fallback', e); }
  }
  try{ render(data); }
  catch(e){ console.error('render failed', e); }
  initHeaderScroll();
  initReveal();
}
init();

/* lenis smooth scroll — off when reduced motion is requested */
(function(){
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var s1 = document.createElement('script');
  s1.src = 'https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.42/dist/lenis.min.js';
  s1.onload = function(){
    try{
      var lenis = new Lenis({duration: 1.1});
      function raf(t){ lenis.raf(t); requestAnimationFrame(raf); }
      requestAnimationFrame(raf);
    }catch(e){ console.warn('lenis failed', e); }
  };
  s1.onerror = function(){ console.warn('lenis CDN failed'); };
  document.head.appendChild(s1);
})();
