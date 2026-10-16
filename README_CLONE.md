# Barber template — klon w 10 minut

## 1. Kopiuj
```
cp -r barber-template demo-barber-WARSZAWA
```

## 2. Edytuj tylko content.json
Miasta, telefony, bookingUrl (Booksy/Moment/tel), ceny, barberzy, adres, opinie, IG.
Nie ruszaj html/css.

### Pola content.json
- `site` — city, district, title, description, bookingUrl, bookingProvider, ga4
- `brand` — name, accent
- `header` — phone, phoneLabel, cta
- `hero` — kicker, h1, sub, ctaPrimary, ctaSecondary, proof, ratingValue, reviewsCount, image
- `proofStrip` — string[] (4 short trust tokens)
- `trust` — object[]: `{ icon: "lucide-icon-name", title, text }` — 4 trust-bar items below hero
- `styles` — object[]: `{ name, price, img }` — 4 popular-service photo cards in light section
- `stats` — object[]: `{ value, label }` — 4 stat numbers in dark band before opinions
- `steps` — object[]: `{ n, title, text }` — 4 kroki wizyty, sekcja "Jak to działa" (IA: proces, nie dubel trust-bar)
- `cennik` — groups[].items[]: `{ name, desc, time, price, bestseller }`
- `team` — object[]: `{ name, role, photo, exp, ig }`
- `gallery` — object[]: `{ src, alt, cap }`
- `reviews` — object[]: `{ name, stars, date, text, href }` (initials computed in JS for avatar)
- `contact` — address, hours, phone, email, mapEmbed, routeHref
- `faq` — object[]: `{ q, a }`
- `finalCta` — h2, sub, cta
- `footer` — nip, privacyHref, instagram

## 3. Podmień 7 zdjęć
`img/hero.jpg` + 6 w gallery (lub zostaw unsplash na demo).
Zalecane: 900x700 hero, 600x600 gallery, 400x400 barberzy, 800x600 styles cards.

## 4. Deploy na Vercel
- Push do GitHub -> Import w Vercel (framework: Other, output dir: .)
- Lub `vercel --prod` z folderu demo.
- Każdy demo = osobny projekt `barber-krakow`, `barber-warszawa` itd. — 1 klik.

## 5. Sprawdź
- `grep -r "48 512"` poza content.json == 0 (brak hardkodu)
- ąęśćńółżź renderuje się (Oswald/Fraunces/Instrument Sans latin-ext)
- bookingUrl pusty → fallback na tel:

  if(!bookingUrl) bookingUrl = 'tel:'+phone

## 6. Wyślij
Temat: `Widziałem [Nazwa] na Maps — mała propozycja`
Link demo + cena 1290 zł jednorazowo.

## Anti-slop checklist przed wysyłką
- [ ] brak `backdrop-filter`, `box-shadow` blur >16px, `transition: all`
- [ ] tokens.css bez zmian (paleta 5 kolorów + fonts: Oswald 600/700 latin-ext, Fraunces, Instrument Sans)
- [ ] mobile bottom bar działa
- [ ] FAQ, cennik, opinie z content.json
- [ ] trust-bar, styles cards, stats band renderują się z content.json
- [ ] rotating hero badge — reduced-motion = static
