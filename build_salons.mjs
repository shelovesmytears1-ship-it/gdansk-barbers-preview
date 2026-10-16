import fs from 'fs';
import path from 'path';

const baseDir = 'C:\\Users\\deppe\\Desktop\\working\\barber-template';
const dataDir = path.join(baseDir, 'data');
const indexHtml = fs.readFileSync(path.join(baseDir, 'index.html'), 'utf-8');

const defaultHeroImage = "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1800&h=1200&fit=crop";

const commonTrust = [
  { "icon": "scissors", "title": "Doświadczeni barberzy", "text": "Setki cięć w tygodniu, precyzja i zero pośpiechu." },
  { "icon": "package", "title": "Produkty premium", "text": "Tylko sprawdzone pomady i kosmetyki do brody." },
  { "icon": "shield-check", "title": "Higiena i sterylność", "text": "Dezynfekcja narzędzi po każdym kliencie, świeże ostrza." },
  { "icon": "thumbs-up", "title": "Gwarancja zadowolenia", "text": "Dopasowanie cięcia do kształtu głowy i stylu życia." }
];

const commonFaq = [
  { "q": "Czy muszę rezerwować z wyprzedzeniem?", "a": "Zalecamy rezerwację online przez Booksy lub telefonicznie, aby uniknąć czekania. W miarę wolnych miejsc przyjmujemy też z marszu." },
  { "q": "Ile trwa wizyta?", "a": "Standardowe strzyżenie trwa ok. 45 minut, pełny pakiet Combo (włosy + broda) to ok. 60–75 minut. Zapewniamy pełen komfort i zero pośpiechu." },
  { "q": "Czym mogę zapłacić?", "a": "Przyjmujemy płatność kartą, BLIK-iem oraz gotówką. Paragon lub fakturę otrzymasz na miejscu." },
  { "q": "Czy mogę odwołać wizytę?", "a": "Tak, bezpłatnie do 3 godzin przed planowanym terminem bezpośrednio w aplikacji Booksy lub dzwoniąc do nas." },
  { "q": "Jak dojechać i gdzie zaparkować?", "a": "Przy salonie dostępny jest wygodny parking dla klientów oraz dogodny dojazd komunikacją miejską." }
];

const salons = [
  {
    id: "tiptop",
    htmlName: "tiptop.html",
    site: {
      city: "Gdańsk",
      district: "Zaspa",
      title: "Tip Top Barbershop Gdańsk Zaspa — Męskie Strzyżenie & Broda",
      description: "Tip Top Barbershop Gdańsk Zaspa — ul. Franciszka Hynka 18/u3. Fade, broda, combo. Rezerwacja online i tel: 530 197 203.",
      bookingUrl: "https://booksy.com/pl-pl/219827_tip-top-barbershop-gdansk_barber-shop_20383_gdansk",
      bookingProvider: "booksy",
      ga4: ""
    },
    brand: {
      name: "TIP TOP BARBERSHOP",
      logoImg: "./img/tiptop-logo.jpeg",
      accent: "#C5A46A"
    },
    header: {
      phone: "+48 530 197 203",
      phoneLabel: "530 197 203",
      cta: "Zarezerwuj"
    },
    hero: {
      kicker: "Barber Shop • Gdańsk Zaspa",
      h1: "Precyzyjne cięcie i autentyczny styl na Zaspie.",
      sub: "Fade, strzyżenie męskie i perfekcyjny kontur brody. Ul. Franciszka Hynka 18/u3. Kawa i luźny klimat.",
      ctaPrimary: { "label": "Zarezerwuj wizytę", "href": "https://booksy.com/pl-pl/219827_tip-top-barbershop-gdansk_barber-shop_20383_gdansk" },
      ctaSecondary: { "label": "Zobacz cennik", "href": "#cennik" },
      proof: "4,9/5 — 350+ opinii na Booksy & Google",
      ratingValue: 4.9,
      reviewsCount: 350,
      image: defaultHeroImage
    },
    proofStrip: ["Google 4,9 ★★★★★", "Booksy 4,9 ★★★★★", "Gdańsk Zaspa", "@barbershop.tiptop.gdansk"],
    trust: commonTrust,
    styles: [
      { "name": "Strzyżenie męskie", "price": "100 zł", "img": "./img/tiptop-cut1.jpeg" },
      { "name": "Combo", "price": "150 zł", "img": "./img/tiptop-cut2.jpeg" },
      { "name": "Strzyżenie brody", "price": "80 zł", "img": "./img/tiptop-cut3.jpeg" },
      { "name": "Bok i tył", "price": "80 zł", "img": "./img/tiptop-cut4.jpeg" }
    ],
    stats: [
      { "value": "4,9", "label": "ocena klientów" },
      { "value": "350+", "label": "opinii na Booksy" },
      { "value": "ul. Hynka", "label": "Zaspa Gdańsk" },
      { "value": "45 min", "label": "średnia wizyta" }
    ],
    steps: [
      { "n": "01", "title": "Wybierz termin", "text": "Rezerwuj online przez Booksy lub zadzwoń: +48 530 197 203." },
      { "n": "02", "title": "Przyjdź na Zaspę", "text": "ul. Franciszka Hynka 18/u3, Gdańsk. Kawa i parking na miejscu." },
      { "n": "03", "title": "Cięcie bez pośpiechu", "text": "Włosy, broda, brzytwa. Precyzja dopasowana do Ciebie." },
      { "n": "04", "title": "Wygodna płatność", "text": "Karta, BLIK, gotówka. Zapraszamy ponownie!" }
    ],
    cennik: {
      kicker: "Cennik Tip Top",
      title: "Rzemiosło i uczciwe ceny z Booksy",
      groups: [
        {
          name: "Strzyżenie męskie",
          items: [
            { "name": "Strzyżenie męskie", "desc": "Cięcie maszynką i nożyczkami, mycie oraz stylizacja.", "time": "45 min", "price": "100 zł", "bestseller": false },
            { "name": "Strzyżenie nożyczkami", "desc": "Precyzyjne cięcie nożyczkami dopasowane do struktury włosa.", "time": "1g 10min", "price": "110 zł", "bestseller": false },
            { "name": "Bok i tył", "desc": "Odświeżenie boków i linii karku bez skracania góry.", "time": "30 min", "price": "80 zł", "bestseller": false },
            { "name": "Strzyżenie maszynką", "desc": "Strzyżenie maszynką na jedną wybraną długość.", "time": "30 min", "price": "70 zł", "bestseller": false }
          ]
        },
        {
          name: "Broda & Combo",
          items: [
            { "name": "Combo (Włosy + Broda)", "desc": "Strzyżenie męskie w pakiecie z pełnym strzyżeniem brody.", "time": "1g 15min", "price": "150 zł", "bestseller": true },
            { "name": "Strzyżenie brody", "desc": "Nadanie kształtu, trymowanie, kontur brzytwą i olejek.", "time": "40 min", "price": "80 zł", "bestseller": false },
            { "name": "Korekcja woskiem", "desc": "Precyzyjne usuwanie niechcianych włosków z uszu, nosa lub brwi.", "time": "20 min", "price": "20 zł", "bestseller": false },
            { "name": "Układanie włosów", "desc": "Mycie i profesjonalna stylizacja fryzury pomadą.", "time": "15 min", "price": "20 zł", "bestseller": false }
          ]
        },
        {
          name: "Pakiety & Dzieci",
          items: [
            { "name": "Strzyżenie Ojciec i Syn", "desc": "Dwa fotele obok siebie, męski czas i dwa dopasowane cięcia.", "time": "1g 30min", "price": "160 zł", "bestseller": false },
            { "name": "Strzyżenie Dziecka (do 10 lat)", "desc": "Cierpliwe i bezstresowe strzyżenie dla najmłodszych.", "time": "40 min", "price": "80 zł", "bestseller": false },
            { "name": "Koloryzacja", "desc": "Tuszowanie siwizny lub odświeżenie naturalnego odcienia.", "time": "50 min", "price": "60 zł", "bestseller": false }
          ]
        }
      ],
      note: "Płatność kartą, BLIK, gotówką. Rezerwacja online 24/7 przez Booksy."
    },
    team: [
      { "name": "Serhii", "role": "Master Barber & Założyciel", "photo": "./img/barber-kuba.jpg", "exp": "Mistrz Fade", "ig": "https://instagram.com/barbershop.tiptop.gdansk" },
      { "name": "Alina", "role": "Barber — Klasyka & Nożyczki", "photo": "./img/barber-alina.jpg", "exp": "Precyzja", "ig": "" },
      { "name": "Lera", "role": "Barber — Szybkie Cięcia & Styling", "photo": "./img/barber-lera.jpg", "exp": "Styling", "ig": "" }
    ],
    gallery: [
      { "src": "./img/tiptop-hero.jpeg", "alt": "Salon Tip Top Zaspa", "cap": "Salon Zaspa" },
      { "src": "./img/tiptop-cut1.jpeg", "alt": "Skin Fade Tip Top", "cap": "Skin Fade" },
      { "src": "./img/tiptop-cut2.jpeg", "alt": "Combo Włosy + Broda Tip Top", "cap": "Combo" },
      { "src": "./img/tiptop-cut3.jpeg", "alt": "Stylizacja Brody Tip Top", "cap": "Broda" },
      { "src": "./img/tiptop-cut4.jpeg", "alt": "Precyzyjne cięcie Tip Top", "cap": "Precyzja" },
      { "src": "./img/tiptop-interior.jpeg", "alt": "Stanowiska Tip Top Hynka 18", "cap": "Wnętrze" }
    ],
    reviews: [
      { "name": "Mateusz P.", "stars": 5, "date": "2026-09", "text": "Najlepszy barber na Zaspie. Serhii i ekipa robią niesamowitą robotę z fade'em.", "href": "https://maps.google.com/" },
      { "name": "Krzysztof Z.", "stars": 5, "date": "2026-08", "text": "Świetna atmosfera, luźny klimat i zero pośpiechu. Zawsze wychodzę zadowolony.", "href": "https://maps.google.com/" },
      { "name": "Paweł W.", "stars": 5, "date": "2026-07", "text": "Broda zrobiona perfekcyjnie brzytwą. Polecam każdemu na Zaspie i Przymorzu.", "href": "https://maps.google.com/" }
    ],
    contact: {
      address: "ul. Franciszka Hynka 18/u3, 80-465 Gdańsk (Zaspa)",
      phone: "+48 530 197 203",
      hours: "Poniedziałek – Piątek 9:00 – 21:00 • Sobota 9:00 – 18:00 • Niedziela nieczynne",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Tip+Top+Barbershop+Gdansk+Hynka",
      mapEmbed: "https://maps.google.com/maps?q=ul.+Franciszka+Hynka+18%2Fu3+80-465+Gda%C5%84sk&t=&z=16&ie=UTF8&iwloc=&output=embed"
    },
    faq: commonFaq,
    finalCta: {
      h2: "Gotowy na świeże cięcie?",
      sub: "Wybierz dogodny termin online przez Booksy lub zadzwoń bezpośrednio do salonu na Zaspie.",
      cta: "Zarezerwuj wizytę →"
    },
    footer: {
      address: "ul. Franciszka Hynka 18/u3, 80-465 Gdańsk",
      phone: "+48 530 197 203",
      hours: "Pn–Pt 9:00–21:00, Sob 9:00–18:00",
      instagram: "https://www.instagram.com/barbershop.tiptop.gdansk/",
      booksy: "https://booksy.com/pl-pl/219827_tip-top-barbershop-gdansk_barber-shop_20383_gdansk"
    }
  },

  {
    id: "barberzone",
    htmlName: "barberzone.html",
    site: {
      city: "Gdańsk",
      district: "Przymorze",
      title: "Barber Zone Gdańsk Przymorze — Męskie Strzyżenie & Skin Fade",
      description: "Barber Zone Gdańsk Przymorze — ul. Obrońców Wybrzeża 3U/1. Skin fade, pompadour, broda, królewskie golenie. Rezerwuj online.",
      bookingUrl: "https://booksy.com/pl-pl/s/gdansk/barber-shop?q=Barber+Zone",
      bookingProvider: "booksy",
      ga4: ""
    },
    brand: {
      name: "BARBER ZONE GDAŃSK",
      accent: "#C5A46A"
    },
    header: {
      phone: "+48 884 846 475",
      phoneLabel: "884 846 475",
      cta: "Zarezerwuj"
    },
    hero: {
      kicker: "Strefa Barberingu • Gdańsk Przymorze",
      h1: "Twoja strefa precyzyjnego cięcia na Przymorzu.",
      sub: "Skin fade, pompadour, trymowanie brody i królewskie golenie brzytwą. Ul. Obrońców Wybrzeża 3U/1.",
      ctaPrimary: { "label": "Zarezerwuj wizytę", "href": "https://booksy.com/pl-pl/s/gdansk/barber-shop?q=Barber+Zone" },
      ctaSecondary: { "label": "Zobacz cennik", "href": "#cennik" },
      proof: "4,9/5 — 280+ opinii klientów",
      ratingValue: 4.9,
      reviewsCount: 280,
      image: defaultHeroImage
    },
    proofStrip: ["Google 4,9 ★★★★★", "Booksy 4,9 ★★★★★", "Gdańsk Przymorze", "@barberzonegdansk"],
    trust: commonTrust,
    styles: [
      { "name": "Skin Fade Precision", "price": "100 zł", "img": "./img/barberzone-2.jpg" },
      { "name": "Combo: Włosy + Broda", "price": "140 zł", "img": "./img/barberzone-1.jpg" },
      { "name": "Królewskie golenie", "price": "80 zł", "img": "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=600&fit=crop" },
      { "name": "Trymowanie brody", "price": "60 zł", "img": "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&h=600&fit=crop" }
    ],
    stats: [
      { "value": "4,9", "label": "ocena klientów" },
      { "value": "280+", "label": "zadowolonych gości" },
      { "value": "Przymorze", "label": "Obrońców Wybrzeża" },
      { "value": "45 min", "label": "czas na detal" }
    ],
    steps: [
      { "n": "01", "title": "Zarezerwuj termin", "text": "Wybierz usługę i godzinę online w Booksy lub zadzwoń: +48 884 846 475." },
      { "n": "02", "title": "Wpadnij na Przymorze", "text": "ul. Obrońców Wybrzeża 3U/1, blisko Galerii Przymorze. Wygodny dojazd." },
      { "n": "03", "title": "Czyste rzemiosło", "text": "Fade z brzytwą, broda z gorącym ręcznikiem, zapach dobrej wody kolońskiej." },
      { "n": "04", "title": "Czysty styl", "text": "Płać kartą, BLIK lub gotówką. Do zobaczenia za miesiąc!" }
    ],
    cennik: {
      kicker: "Cennik Barber Zone",
      title: "Przejrzyście i bez kompromisów",
      groups: [
        {
          name: "Włosy & Fade",
          items: [
            { "name": "Strzyżenie męskie klasyczne", "desc": "Nożyczki i maszynka, modelowanie, mycie głowy.", "time": "45 min", "price": "90 zł", "bestseller": false },
            { "name": "Skin Fade Precision", "desc": "Precyzyjne golenie boków do zera, ostre linie.", "time": "45 min", "price": "100 zł", "bestseller": false },
            { "name": "Refresh boki & szyja", "desc": "Szybkie odświeżenie przejść maszynką i shaverem.", "time": "30 min", "price": "60 zł", "bestseller": false }
          ]
        },
        {
          name: "Stylizacja brody",
          items: [
            { "name": "Trymowanie brody nożyczkami", "desc": "Kształt, wyczesanie, podcięcie i olejek nawilżający.", "time": "30 min", "price": "60 zł", "bestseller": false },
            { "name": "Królewskie golenie brzytwą", "desc": "Pianka na gorąco, brzytwa i kompres z balsamem.", "time": "40 min", "price": "80 zł", "bestseller": false },
            { "name": "Kontur & pielęgnacja olejkiem", "desc": "Precyzyjne wyznaczenie linii zarostu i policzków.", "time": "20 min", "price": "50 zł", "bestseller": false }
          ]
        },
        {
          name: "Pakiety Combo",
          items: [
            { "name": "Combo: Cięcie + Broda", "desc": "Pełna metamorfoza: strzyżenie włosów + pielęgnacja brody.", "time": "60 min", "price": "140 zł", "bestseller": true },
            { "name": "Full Service VIP", "desc": "Cięcie, broda, woskowanie nosa/uszu i maska regeneracyjna.", "time": "75 min", "price": "180 zł", "bestseller": false },
            { "name": "Ojciec + Syn", "desc": "Dwa stanowiska i wspólny czas w męskim klimacie.", "time": "60 min", "price": "160 zł", "bestseller": false }
          ]
        }
      ],
      note: "Płatność kartą, BLIK, gotówką. Rezerwacja online 24/7."
    },
    team: [
      { "name": "Kuba", "role": "Master Barber & Skin Fade", "photo": "./img/barber-kuba.jpg", "exp": "7 lat", "ig": "https://instagram.com/barberzonegdansk" },
      { "name": "Michał", "role": "Barber — Broda & Klasyka", "photo": "./img/barber-michal.jpg", "exp": "5 lat", "ig": "" },
      { "name": "Bartek", "role": "Barber — Nowoczesne Cięcia", "photo": "./img/barber-bartek.jpg", "exp": "3 lata", "ig": "" }
    ],
    gallery: [
      { "src": "./img/barberzone-1.jpg", "alt": "Stanowiska Barber Zone Gdańsk", "cap": "Wnętrze" },
      { "src": "./img/barberzone-2.jpg", "alt": "Skin Fade Barber Zone", "cap": "Skin Fade" },
      { "src": "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1200&h=1500&fit=crop", "alt": "Modelowanie Brody", "cap": "Broda" },
      { "src": "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&h=1500&fit=crop", "alt": "Combo Włosy + Broda", "cap": "Combo" },
      { "src": "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?w=1200&h=1500&fit=crop", "alt": "Detal brzytwy", "cap": "Detal" },
      { "src": "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=1200&h=1500&fit=crop", "alt": "Czyste przejście z tyłu", "cap": "Przejście" }
    ],
    reviews: [
      { "name": "Tomasz M.", "stars": 5, "date": "2026-09", "text": "Najlepsze przejście skin fade w Gdańsku. Bardzo dokładna robota i świetna kawa.", "href": "https://maps.google.com/" },
      { "name": "Kamil R.", "stars": 5, "date": "2026-08", "text": "Broda ogarnięta wzorowo, pełen relaks przy gorącym ręczniku. Zdecydowanie polecam.", "href": "https://maps.google.com/" },
      { "name": "Grzegorz B.", "stars": 5, "date": "2026-08", "text": "Super klimat na Przymorzu, punktualnie, czysto i profesjonalnie. Wracam regularnie.", "href": "https://maps.google.com/" }
    ],
    contact: {
      address: "ul. Obrońców Wybrzeża 3U/1, 80-398 Gdańsk (Przymorze)",
      phone: "+48 884 846 475",
      hours: "Poniedziałek – Piątek 9:00 – 20:00 • Sobota 9:00 – 16:00 • Niedziela nieczynne",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Barber+Zone+Gdansk+Obroncow+Wybrzeza",
      mapEmbed: "https://maps.google.com/maps?q=ul.+Obro%C5%84c%C3%B3w+Wybrze%C5%BCa+3U%2F1+80-398+Gda%C5%84sk&t=&z=16&ie=UTF8&iwloc=&output=embed"
    },
    faq: commonFaq,
    finalCta: {
      h2: "Gotowy na świeże cięcie?",
      sub: "Wybierz dogodny termin online przez Booksy lub zadzwoń bezpośrednio do salonu na Przymorzu.",
      cta: "Zarezerwuj teraz →"
    },
    footer: {
      address: "ul. Obrońców Wybrzeża 3U/1, Gdańsk",
      phone: "+48 884 846 475",
      hours: "Pn–Pt 9:00–20:00, Sob 9:00–16:00",
      instagram: "https://www.instagram.com/barberzonegdansk/",
      booksy: "https://booksy.com/pl-pl/s/gdansk/barber-shop?q=Barber+Zone"
    }
  },

  {
    id: "walkin",
    htmlName: "walkin.html",
    site: {
      city: "Gdańsk",
      district: "Przymorze",
      title: "Walk In Barbershop Gdańsk Przymorze — Tradycyjne Męskie Cięcie",
      description: "Walk In Barbershop Gdańsk Przymorze — ul. Bora-Komorowskiego 34A. Strzyżenie męskie, broda, autentyczny klimat rzemiosła. Rezerwuj online.",
      bookingUrl: "https://booksy.com/pl-pl/s/gdansk/barber-shop?q=Walk+In+Barbershop",
      bookingProvider: "booksy",
      ga4: ""
    },
    brand: {
      name: "WALK IN BARBERSHOP",
      logoImg: "./img/walkin-logo.webp",
      accent: "#C5A46A"
    },
    header: {
      phone: "+48 789 203 783",
      phoneLabel: "789 203 783",
      cta: "Zarezerwuj"
    },
    hero: {
      kicker: "Tradycyjny Barbershop • Gdańsk Przymorze",
      h1: "Autentyczny styl i rzemiosło na Przymorzu.",
      sub: "Cięcie nożyczkami, brzytwa i pielęgnacja brody. Ul. Bora-Komorowskiego 34A. Kawa, muzyka i swobodna rozmowa.",
      ctaPrimary: { "label": "Zarezerwuj wizytę", "href": "https://booksy.com/pl-pl/s/gdansk/barber-shop?q=Walk+In+Barbershop" },
      ctaSecondary: { "label": "Zobacz cennik", "href": "#cennik" },
      proof: "4,9/5 — 200+ zadowolonych klientów",
      ratingValue: 4.9,
      reviewsCount: 200,
      image: defaultHeroImage
    },
    proofStrip: ["Google 4,9 ★★★★★", "Booksy 4,9 ★★★★★", "Gdańsk Przymorze", "@walk_in_barbershop"],
    trust: commonTrust,
    styles: [
      { "name": "Cięcie klasyczne", "price": "80 zł", "img": "./img/walkin-bartosz.webp" },
      { "name": "Combo Włosy + Broda", "price": "130 zł", "img": "./img/walkin-hero.webp" },
      { "name": "Fade maszynką", "price": "90 zł", "img": "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&h=600&fit=crop" },
      { "name": "Golenie tradycyjne", "price": "70 zł", "img": "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?w=800&h=600&fit=crop" }
    ],
    stats: [
      { "value": "4,9", "label": "ocena w Google" },
      { "value": "200+", "label": "stałych klientów" },
      { "value": "Bora-Kom.", "label": "Przymorze" },
      { "value": "45 min", "label": "spokojnej pracy" }
    ],
    steps: [
      { "n": "01", "title": "Zapisz się", "text": "Rezerwacja online przez Booksy lub telefon: +48 789 203 783." },
      { "n": "02", "title": "Bora-Komorowskiego 34A", "text": "Łatwy dojazd na Przymorzu, parking przy salonie." },
      { "n": "03", "title": "Dobre cięcie", "text": "Zero pośpiechu. Precyzyjne nożyczki i naturalny styling." },
      { "n": "04", "title": "Płatność", "text": "Karta, BLIK lub gotówka. Zapraszamy ponownie!" }
    ],
    cennik: {
      kicker: "Cennik Walk In",
      title: "Uczciwe ceny za solidne rzemiosło",
      groups: [
        {
          name: "Strzyżenie włosów",
          items: [
            { "name": "Strzyżenie męskie klasyczne", "desc": "Cięcie nożyczkami i maszynką z modelowaniem.", "time": "45 min", "price": "80 zł", "bestseller": false },
            { "name": "Fade & Texturizing", "desc": "Czyste przejście maszynką i teksturowanie góry.", "time": "45 min", "price": "90 zł", "bestseller": false },
            { "name": "Strzyżenie maszynką", "desc": "Czyste cięcie jedną lub dwoma nasadkami.", "time": "30 min", "price": "60 zł", "bestseller": false }
          ]
        },
        {
          name: "Broda & Golenie",
          items: [
            { "name": "Trymowanie i modelowanie brody", "desc": "Nadanie linii, wyczesanie, olejek nawilżający.", "time": "30 min", "price": "60 zł", "bestseller": false },
            { "name": "Golenie tradycyjne brzytwą", "desc": "Gorący kompres, mydło barberskie i brzytwa.", "time": "35 min", "price": "70 zł", "bestseller": false },
            { "name": "Konturowanie brody i wąsa", "desc": "Wyznaczenie ostrych krawędzi i szyi.", "time": "20 min", "price": "45 zł", "bestseller": false }
          ]
        },
        {
          name: "Pakiety & Combo",
          items: [
            { "name": "Combo: Włosy + Broda", "desc": "Kompletna metamorfoza męskiego wizerunku.", "time": "60 min", "price": "130 zł", "bestseller": true },
            { "name": "Total Makeover", "desc": "Strzyżenie, broda, woskowanie i relaksujący kompres.", "time": "75 min", "price": "160 zł", "bestseller": false },
            { "name": "Combo + Oczyszczanie twarzy", "desc": "Włosy, zarost i peeling rewitalizujący skórę.", "time": "75 min", "price": "170 zł", "bestseller": false }
          ]
        }
      ],
      note: "Płatność kartą, BLIK, gotówką. Rezerwacja online 24/7."
    },
    team: [
      { "name": "Bartosz", "role": "Właściciel & Master Barber", "photo": "./img/walkin-bartosz.webp", "exp": "Rzemiosło", "ig": "https://instagram.com/walk_in_barbershop" },
      { "name": "Kuba", "role": "Barber — Fade & Styling", "photo": "./img/barber-kuba.jpg", "exp": "Precyzja", "ig": "" },
      { "name": "Michał", "role": "Barber — Klasyka & Broda", "photo": "./img/barber-michal.jpg", "exp": "Klasyka", "ig": "" }
    ],
    gallery: [
      { "src": "./img/walkin-hero.webp", "alt": "Stanowiska Walk In Barbershop", "cap": "Salon" },
      { "src": "./img/walkin-bartosz.webp", "alt": "Barber Bartosz przy pracy", "cap": "Bartosz" },
      { "src": "./img/walkin-interior.webp", "alt": "Wnętrze i fotele barberskie", "cap": "Wnętrze" },
      { "src": "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1200&h=1500&fit=crop", "alt": "Stylizacja Brody", "cap": "Broda" },
      { "src": "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&h=1500&fit=crop", "alt": "Combo strzyżenie", "cap": "Combo" },
      { "src": "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=1200&h=1500&fit=crop", "alt": "Fade klasyczny", "cap": "Fade" }
    ],
    reviews: [
      { "name": "Michał K.", "stars": 5, "date": "2026-09", "text": "Bartosz to fachowiec w każdym calu. Świetne cięcie, zero pośpiechu i konkretny klimat.", "href": "https://maps.google.com/" },
      { "name": "Artur W.", "stars": 5, "date": "2026-08", "text": "Mój stały barber na Przymorzu. Zawsze równy, czysty fade i zadbana broda.", "href": "https://maps.google.com/" },
      { "name": "Damian S.", "stars": 5, "date": "2026-07", "text": "Mega miejscówka, dobra muzyka, super podejście do klienta. Polecam każdemu.", "href": "https://maps.google.com/" }
    ],
    contact: {
      address: "ul. Bora-Komorowskiego 34A, 80-377 Gdańsk (Przymorze)",
      phone: "+48 789 203 783",
      hours: "Poniedziałek – Piątek 9:00 – 19:00 • Sobota 9:00 – 15:00 • Niedziela nieczynne",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Walk+In+Barbershop+Gdansk+Bora+Komorowskiego",
      mapEmbed: "https://maps.google.com/maps?q=ul.+Bora-Komorowskiego+34A+80-377+Gda%C5%84sk&t=&z=16&ie=UTF8&iwloc=&output=embed"
    },
    faq: commonFaq,
    finalCta: {
      h2: "Gotowy na świeże cięcie?",
      sub: "Wybierz dogodny termin online przez Booksy lub zadzwoń bezpośrednio do salonu na Przymorzu.",
      cta: "Zarezerwuj teraz →"
    },
    footer: {
      address: "ul. Bora-Komorowskiego 34A, Gdańsk",
      phone: "+48 789 203 783",
      hours: "Pn–Pt 9:00–19:00, Sob 9:00–15:00",
      instagram: "https://www.instagram.com/walk_in_barbershop/",
      booksy: "https://booksy.com/pl-pl/s/gdansk/barber-shop?q=Walk+In+Barbershop"
    }
  },

  {
    id: "lovehair",
    htmlName: "lovehair.html",
    site: {
      city: "Gdańsk",
      district: "Morena",
      title: "Love Hair & Barber Gdańsk Morena — Męskie Strzyżenie & Pielęgnacja",
      description: "Love Hair & Barber Gdańsk Morena — ul. Rakoczego 9/U6. Precyzyjne strzyżenie męskie, combo z brodą, nowoczesny salon. Rezerwuj wizytę.",
      bookingUrl: "https://booksy.com/pl-pl/s/gdansk/barber-shop?q=Love+Hair+Barber",
      bookingProvider: "booksy",
      ga4: ""
    },
    brand: {
      name: "LOVE HAIR & BARBER",
      logoImg: "./img/lovehair-logo.png",
      accent: "#C5A46A"
    },
    header: {
      phone: "+48 578 376 077",
      phoneLabel: "578 376 077",
      cta: "Zarezerwuj"
    },
    hero: {
      kicker: "Nowoczesny Barbershop • Gdańsk Morena",
      h1: "Nowoczesna precyzja i styl na Morenie.",
      sub: "Strzyżenie męskie, pielęgnacja brody i profesjonalne kosmetyki. Ul. Rakoczego 9/U6. Wygodne fotele i kawa.",
      ctaPrimary: { "label": "Zarezerwuj wizytę", "href": "https://booksy.com/pl-pl/s/gdansk/barber-shop?q=Love+Hair+Barber" },
      ctaSecondary: { "label": "Zobacz cennik", "href": "#cennik" },
      proof: "4,8/5 — 180+ opinii klientów",
      ratingValue: 4.8,
      reviewsCount: 180,
      image: defaultHeroImage
    },
    proofStrip: ["Google 4,8 ★★★★★", "Booksy 4,9 ★★★★★", "Gdańsk Morena", "@lovehairbarbershop"],
    trust: commonTrust,
    styles: [
      { "name": "Strzyżenie fade", "price": "85 zł", "img": "./img/lovehair-work1.jpg" },
      { "name": "Combo Włosy + Broda", "price": "130 zł", "img": "./img/lovehair-work2.jpg" },
      { "name": "Wnętrze salonu", "price": "Od 60 zł", "img": "./img/lovehair-interior.jpg" },
      { "name": "Stylizacja brody", "price": "55 zł", "img": "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&h=600&fit=crop" }
    ],
    stats: [
      { "value": "4,8", "label": "ocena salonu" },
      { "value": "180+", "label": "opinii w sieci" },
      { "value": "ul. Rakoczego", "label": "Morena Gdańsk" },
      { "value": "45 min", "label": "dokładnego cięcia" }
    ],
    steps: [
      { "n": "01", "title": "Zarezerwuj termin", "text": "Online w Booksy lub zadzwoń: +48 578 376 077." },
      { "n": "02", "title": "Odwiedź Morenę", "text": "ul. Rakoczego 9/U6, szybki dojazd tramwajem i autem." },
      { "n": "03", "title": "Stylowe cięcie", "text": "Dobór fryzury do twarzy, mycie głowy i styling." },
      { "n": "04", "title": "Zadowolenie", "text": "Karta, BLIK, gotówka. Zawsze z uśmiechem." }
    ],
    cennik: {
      kicker: "Cennik Love Hair",
      title: "Przejrzysta oferta dla każdego",
      groups: [
        {
          name: "Cięcie & Stylizacja",
          items: [
            { "name": "Strzyżenie męskie fade", "desc": "Nożyczki + maszynka, mycie i stylizacja Depot.", "time": "45 min", "price": "85 zł", "bestseller": false },
            { "name": "Strzyżenie maszynką", "desc": "Jednolita długość, wyrównanie karku i baczków.", "time": "30 min", "price": "60 zł", "bestseller": false },
            { "name": "Mycie głowy i modelowanie", "desc": "Odświeżenie fryzury i ułożenie pomadą.", "time": "20 min", "price": "40 zł", "bestseller": false }
          ]
        },
        {
          name: "Pielęgnacja brody",
          items: [
            { "name": "Trymowanie brody z modelowaniem", "desc": "Kształt, wyczesanie, podcięcie i balsam.", "time": "30 min", "price": "55 zł", "bestseller": false },
            { "name": "Kontur brzytwą z talkiem", "desc": "Precyzyjne wyznaczenie linii policzków i szyi.", "time": "20 min", "price": "45 zł", "bestseller": false },
            { "name": "Odżywczy kompres i olejek", "desc": "Zmiękczenie twardego zarostu z masażem twarzy.", "time": "25 min", "price": "50 zł", "bestseller": false }
          ]
        },
        {
          name: "Pakiety & Combo",
          items: [
            { "name": "Combo Strzyżenie + Broda", "desc": "Kompleksowa usługa: cięcie głowy i modelowanie brody.", "time": "60 min", "price": "130 zł", "bestseller": true },
            { "name": "Pakiet Ojciec + Syn", "desc": "Dwa stanowiska dla taty i młodego dżentelmena.", "time": "60 min", "price": "140 zł", "bestseller": false },
            { "name": "Pakiet Ślubny / Ważne wyjście", "desc": "Cięcie, broda, stylizacja i maseczka oczyszczająca.", "time": "75 min", "price": "170 zł", "bestseller": false }
          ]
        }
      ],
      note: "Płatność kartą, BLIK, gotówką. Rezerwacja online 24/7."
    },
    team: [
      { "name": "Kuba", "role": "Master Barber", "photo": "./img/barber-kuba.jpg", "exp": "6 lat", "ig": "https://instagram.com/lovehairbarbershop" },
      { "name": "Michał", "role": "Barber & Stylista", "photo": "./img/barber-michal.jpg", "exp": "4 lata", "ig": "" },
      { "name": "Bartek", "role": "Barber — Szybkie Cięcia", "photo": "./img/barber-bartek.jpg", "exp": "3 lata", "ig": "" }
    ],
    gallery: [
      { "src": "./img/lovehair-work1.jpg", "alt": "Strzyżenie męskie Love Hair", "cap": "Cięcie Fade" },
      { "src": "./img/lovehair-work2.jpg", "alt": "Strzyżenie brody i włosów", "cap": "Broda" },
      { "src": "./img/lovehair-interior.jpg", "alt": "Wnętrze salonu Morena", "cap": "Wnętrze" },
      { "src": "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&h=1500&fit=crop", "alt": "Combo strzyżenie", "cap": "Combo" },
      { "src": "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?w=1200&h=1500&fit=crop", "alt": "Kontur brzytwą", "cap": "Brzytwa" },
      { "src": "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=1200&h=1500&fit=crop", "alt": "Czyste przejście", "cap": "Przejście" }
    ],
    reviews: [
      { "name": "Rafał C.", "stars": 5, "date": "2026-09", "text": "Świetny salon na Morenie. Fachowe cięcie, czysto i bardzo miła obsługa.", "href": "https://maps.google.com/" },
      { "name": "Sebastian M.", "stars": 5, "date": "2026-08", "text": "Bardzo polecam pakiet combo. Broda wyprowadzona idealnie pod linijkę.", "href": "https://maps.google.com/" },
      { "name": "Łukasz K.", "stars": 5, "date": "2026-07", "text": "Dobra lokalizacja przy Rakoczego, bezproblemowe parkowanie i super fryzura.", "href": "https://maps.google.com/" }
    ],
    contact: {
      address: "ul. Franciszka Rakoczego 9/U6, 80-288 Gdańsk (Morena)",
      phone: "+48 578 376 077",
      hours: "Poniedziałek – Piątek 9:00 – 20:00 • Sobota 9:00 – 16:00 • Niedziela nieczynne",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Love+Hair+Barber+Gdansk+Rakoczego",
      mapEmbed: "https://maps.google.com/maps?q=ul.+Franciszka+Rakoczego+9%2FU6+80-288+Gda%C5%84sk&t=&z=16&ie=UTF8&iwloc=&output=embed"
    },
    faq: commonFaq,
    finalCta: {
      h2: "Gotowy na świeże cięcie?",
      sub: "Wybierz dogodny termin online przez Booksy lub zadzwoń bezpośrednio do salonu na Morenie.",
      cta: "Zarezerwuj teraz →"
    },
    footer: {
      address: "ul. Franciszka Rakoczego 9/U6, Gdańsk",
      phone: "+48 578 376 077",
      hours: "Pn–Pt 9:00–20:00, Sob 9:00–16:00",
      instagram: "https://www.instagram.com/lovehairbarbershop/",
      booksy: "https://booksy.com/pl-pl/s/gdansk/barber-shop?q=Love+Hair+Barber"
    }
  },

  {
    id: "buongiorno-oliwa",
    htmlName: "buongiorno-oliwa.html",
    site: {
      city: "Gdańsk",
      district: "Oliwa",
      title: "Buongiorno Barber Shop Gdańsk Oliwa — Włoski Styl & Tradycja",
      description: "Buongiorno Barber Shop Gdańsk Oliwa — al. Grunwaldzka 505. Tradycyjne włoskie cięcie, golenie brzytwą, wyjątkowy klimat. Rezerwuj online.",
      bookingUrl: "https://booksy.com/pl-pl/s/gdansk/barber-shop?q=Buongiorno+Barber+Shop",
      bookingProvider: "booksy",
      ga4: ""
    },
    brand: {
      name: "BUONGIORNO BARBER — OLIWA",
      accent: "#C5A46A"
    },
    header: {
      phone: "+48 500 803 808",
      phoneLabel: "500 803 808",
      cta: "Zarezerwuj"
    },
    hero: {
      kicker: "Włoski Barbershop • Gdańsk Oliwa",
      h1: "Włoski styl i klasyczne rzemiosło w sercu Oliwy.",
      sub: "Tradycyjne golenie brzytwą, strzyżenie męskie i włoskie espresso. Al. Grunwaldzka 505.",
      ctaPrimary: { "label": "Zarezerwuj wizytę", "href": "https://booksy.com/pl-pl/s/gdansk/barber-shop?q=Buongiorno+Barber+Shop" },
      ctaSecondary: { "label": "Zobacz cennik", "href": "#cennik" },
      proof: "4,9/5 — 320+ opinii klientów",
      ratingValue: 4.9,
      reviewsCount: 320,
      image: defaultHeroImage
    },
    proofStrip: ["Google 4,9 ★★★★★", "Booksy 4,9 ★★★★★", "Gdańsk Oliwa", "@buongiornooliwabarbershop"],
    trust: commonTrust,
    styles: [
      { "name": "Klasyczne strzyżenie", "price": "90 zł", "img": "./img/buongiorno-hero.jpg" },
      { "name": "Combo Buongiorno", "price": "140 zł", "img": "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=600&fit=crop" },
      { "name": "Włoskie golenie", "price": "80 zł", "img": "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?w=800&h=600&fit=crop" },
      { "name": "Pielęgnacja brody", "price": "65 zł", "img": "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&h=600&fit=crop" }
    ],
    stats: [
      { "value": "4,9", "label": "ocena w Google" },
      { "value": "320+", "label": "opinii Booksy" },
      { "value": "al. Grunwaldzka", "label": "Serce Oliwy" },
      { "value": "45 min", "label": "włoskiego kunsztu" }
    ],
    steps: [
      { "n": "01", "title": "Prenota online", "text": "Rezerwuj wygodnie przez Booksy lub zadzwoń: +48 500 803 808." },
      { "n": "02", "title": "Przyjdź do Oliwy", "text": "al. Grunwaldzka 505. Włoska kawa czeka na Ciebie na wejściu." },
      { "n": "03", "title": "Prawdziwe rzemiosło", "text": "Nożyczki, brzytwa, gorący ręcznik i włoskie wody kolońskie." },
      { "n": "04", "title": "Arrivederci", "text": "Płać wygodnie kartą, BLIK lub gotówką. Zapraszamy ponownie!" }
    ],
    cennik: {
      kicker: "Cennik Buongiorno",
      title: "Włoskie rzemiosło w uczciwej cenie",
      groups: [
        {
          name: "Taglio Capelli (Włosy)",
          items: [
            { "name": "Strzyżenie męskie klasyczne", "desc": "Cięcie nożyczkami i maszynką z modelowaniem na pomadę.", "time": "45 min", "price": "90 zł", "bestseller": false },
            { "name": "Szybkie boki & shaver", "desc": "Odświeżenie fade maszynką i shaverem z konturem.", "time": "30 min", "price": "70 zł", "bestseller": false },
            { "name": "Strzyżenie nożyczkami na mokro", "desc": "Tradycyjne cięcie w całości nożyczkami pod kąt głowy.", "time": "45 min", "price": "95 zł", "bestseller": false }
          ]
        },
        {
          name: "Cura della Barba (Broda)",
          items: [
            { "name": "Rytuał golenia włoską brzytwą", "desc": "Piana z pędzla borsuczego, brzytwa i kompres laurowy.", "time": "35 min", "price": "80 zł", "bestseller": false },
            { "name": "Trymowanie brody i wąsów", "desc": "Geometria zarostu, podcięcie i balsam Proraso.", "time": "30 min", "price": "65 zł", "bestseller": false },
            { "name": "Balsamowanie & gorący ręcznik", "desc": "Zmiękczenie twardego zarostu z odżywką zapachową.", "time": "25 min", "price": "50 zł", "bestseller": false }
          ]
        },
        {
          name: "Pacchetti (Pakiety)",
          items: [
            { "name": "Combo Buongiorno (Włosy + Broda)", "desc": "Klasyczne włoskie strzyżenie połączone z rytuałem brody.", "time": "60 min", "price": "140 zł", "bestseller": true },
            { "name": "Pakiet Ojciec + Syn", "desc": "Wspólna wizyta w klasycznym barberskim klimacie.", "time": "60 min", "price": "160 zł", "bestseller": false },
            { "name": "Il Padrino VIP Treatment", "desc": "Pełny serwis: cięcie, broda, golenie, maseczka i masaż karku.", "time": "75 min", "price": "190 zł", "bestseller": false }
          ]
        }
      ],
      note: "Płatność kartą, BLIK, gotówką. Rezerwacja online 24/7."
    },
    team: [
      { "name": "Kuba", "role": "Master Barber", "photo": "./img/barber-kuba.jpg", "exp": "7 lat", "ig": "https://instagram.com/buongiornooliwabarbershop" },
      { "name": "Michał", "role": "Barber — Włoska Klasyka", "photo": "./img/barber-michal.jpg", "exp": "5 lat", "ig": "" },
      { "name": "Bartek", "role": "Barber — Fade & Styling", "photo": "./img/barber-bartek.jpg", "exp": "4 lata", "ig": "" }
    ],
    gallery: [
      { "src": "./img/buongiorno-hero.jpg", "alt": "Klimat Buongiorno Oliwa", "cap": "Wnętrze" },
      { "src": "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&h=1500&fit=crop", "alt": "Klasyczne cięcie", "cap": "Klasyka" },
      { "src": "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1200&h=1500&fit=crop", "alt": "Golenie brody", "cap": "Broda" },
      { "src": "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?w=1200&h=1500&fit=crop", "alt": "Brzytwa i piana", "cap": "Brzytwa" },
      { "src": "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=1200&h=1500&fit=crop", "alt": "Skin Fade", "cap": "Fade" },
      { "src": "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=1200&h=1500&fit=crop", "alt": "Precyzja maszynki", "cap": "Detal" }
    ],
    reviews: [
      { "name": "Piotr Z.", "stars": 5, "date": "2026-09", "text": "Wyjątkowy klimat w Oliwie. Pyszna kawa, świetna muzyka i perfekcyjne strzyżenie.", "href": "https://maps.google.com/" },
      { "name": "Jakub N.", "stars": 5, "date": "2026-08", "text": "Golenie brzytwą to czysta poezja. Niesamowity relaks i profesjonalizm.", "href": "https://maps.google.com/" },
      { "name": "Marcin O.", "stars": 5, "date": "2026-07", "text": "Najlepszy barber w pasie Oliwa-Wrzeszcz. Zawsze wychodzę zadowolony.", "href": "https://maps.google.com/" }
    ],
    contact: {
      address: "al. Grunwaldzka 505, 80-320 Gdańsk (Oliwa)",
      phone: "+48 500 803 808",
      hours: "Poniedziałek – Piątek 9:00 – 20:00 • Sobota 9:00 – 16:00 • Niedziela nieczynne",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Buongiorno+Barber+Shop+Gdansk+Oliwa+Grunwaldzka+505",
      mapEmbed: "https://maps.google.com/maps?q=al.+Grunwaldzka+505+80-320+Gda%C5%84sk&t=&z=16&ie=UTF8&iwloc=&output=embed"
    },
    faq: commonFaq,
    finalCta: {
      h2: "Gotowy na świeże cięcie?",
      sub: "Wybierz dogodny termin online przez Booksy lub zadzwoń bezpośrednio do salonu w Oliwie.",
      cta: "Zarezerwuj teraz →"
    },
    footer: {
      address: "al. Grunwaldzka 505, Gdańsk",
      phone: "+48 500 803 808",
      hours: "Pn–Pt 9:00–20:00, Sob 9:00–16:00",
      instagram: "https://www.instagram.com/buongiornooliwabarbershop/",
      booksy: "https://booksy.com/pl-pl/s/gdansk/barber-shop?q=Buongiorno+Barber+Shop"
    }
  },

  {
    id: "buongiorno-morena",
    htmlName: "buongiorno-morena.html",
    site: {
      city: "Gdańsk",
      district: "Morena",
      title: "Buongiorno Barber Shop Gdańsk Morena — Precyzyjne Cięcie & Broda",
      description: "Buongiorno Barber Shop Gdańsk Morena — ul. Piekarnicza 26. Druga lokalizacja kultowego włoskiego barbera. Fade, broda, golenie. Rezerwuj.",
      bookingUrl: "https://booksy.com/pl-pl/s/gdansk/barber-shop?q=Buongiorno+Barber+Shop",
      bookingProvider: "booksy",
      ga4: ""
    },
    brand: {
      name: "BUONGIORNO BARBER — MORENA",
      accent: "#C5A46A"
    },
    header: {
      phone: "+48 576 431 300",
      phoneLabel: "576 431 300",
      cta: "Zarezerwuj"
    },
    hero: {
      kicker: "Nowoczesny Barbershop • Gdańsk Morena",
      h1: "Włoska precyzja i wygoda na Morenie.",
      sub: "Druga lokalizacja Buongiorno przy ul. Piekarniczej 26. Męskie cięcia, stylizacja brody i kawa na miejscu.",
      ctaPrimary: { "label": "Zarezerwuj wizytę", "href": "https://booksy.com/pl-pl/s/gdansk/barber-shop?q=Buongiorno+Barber+Shop" },
      ctaSecondary: { "label": "Zobacz cennik", "href": "#cennik" },
      proof: "4,9/5 — 190+ opinii klientów",
      ratingValue: 4.9,
      reviewsCount: 190,
      image: defaultHeroImage
    },
    proofStrip: ["Google 4,9 ★★★★★", "Booksy 4,9 ★★★★★", "Gdańsk Morena", "@buongiornomorenabarbershop"],
    trust: commonTrust,
    styles: [
      { "name": "Strzyżenie Morena", "price": "90 zł", "img": "./img/buongiorno-hero.jpg" },
      { "name": "Combo Włosy + Broda", "price": "140 zł", "img": "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=600&fit=crop" },
      { "name": "Skin Fade", "price": "95 zł", "img": "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&h=600&fit=crop" },
      { "name": "Golenie tradycyjne", "price": "75 zł", "img": "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?w=800&h=600&fit=crop" }
    ],
    stats: [
      { "value": "4,9", "label": "ocena salonu" },
      { "value": "190+", "label": "stałych bywalców" },
      { "value": "ul. Piekarnicza", "label": "Morena Gdańsk" },
      { "value": "45 min", "label": "precyzji i relaksu" }
    ],
    steps: [
      { "n": "01", "title": "Wybierz barbera", "text": "Zapisz się online na Booksy lub zadzwoń: +48 576 431 300." },
      { "n": "02", "title": "Odwiedź Piekarniczą", "text": "ul. Piekarnicza 26, Morena. Wygodny dojazd i parking." },
      { "n": "03", "title": "Czas na fotel", "text": "Cięcie, broda, gorący ręcznik i włoski sznyt." },
      { "n": "04", "title": "Płatność", "text": "Karta, BLIK lub gotówka. Zapraszamy ponownie!" }
    ],
    cennik: {
      kicker: "Cennik Buongiorno Morena",
      title: "Klasa i włoski styl na Morenie",
      groups: [
        {
          name: "Taglio Capelli (Włosy)",
          items: [
            { "name": "Strzyżenie męskie Morena", "desc": "Nożyczki i maszynka z myciem i włoską pomadą.", "time": "45 min", "price": "90 zł", "bestseller": false },
            { "name": "Skin Fade maszynką i brzytwą", "desc": "Płynne cieniowanie od zera i czysta linia karku.", "time": "45 min", "price": "95 zł", "bestseller": false },
            { "name": "Strzyżenie junior (do 12 lat)", "desc": "Cierpliwe, modne i stylowe cięcie dla młodych.", "time": "30 min", "price": "65 zł", "bestseller": false }
          ]
        },
        {
          name: "Cura della Barba (Broda)",
          items: [
            { "name": "Formowanie i konturowanie brody", "desc": "Trymowanie zarostu, olejek i stylizacja balsamem.", "time": "30 min", "price": "65 zł", "bestseller": false },
            { "name": "Golenie tradycyjne z talkiem", "desc": "Kompres parowy, brzytwa i kojący balsam po goleniu.", "time": "35 min", "price": "75 zł", "bestseller": false },
            { "name": "Odświeżenie karku i linii zarostu", "desc": "Szybki kontur shaverem między pełnymi wizytami.", "time": "20 min", "price": "45 zł", "bestseller": false }
          ]
        },
        {
          name: "Pacchetti (Pakiety)",
          items: [
            { "name": "Combo Buongiorno: Włosy + Broda", "desc": "Pełen zestaw: strzyżenie głowy + trymowanie zarostu.", "time": "60 min", "price": "140 zł", "bestseller": true },
            { "name": "Pakiet Ojciec + Syn", "desc": "Dwa fotele obok siebie w luźnym klimacie.", "time": "60 min", "price": "160 zł", "bestseller": false },
            { "name": "Kompleksowy pakiet Gentleman", "desc": "Włosy, broda, pielęgnacja twarzy i gorący ręcznik.", "time": "70 min", "price": "180 zł", "bestseller": false }
          ]
        }
      ],
      note: "Płatność kartą, BLIK, gotówką. Rezerwacja online 24/7."
    },
    team: [
      { "name": "Kuba", "role": "Master Barber", "photo": "./img/barber-kuba.jpg", "exp": "6 lat", "ig": "https://instagram.com/buongiornomorenabarbershop" },
      { "name": "Michał", "role": "Barber — Fade & Broda", "photo": "./img/barber-michal.jpg", "exp": "4 lata", "ig": "" },
      { "name": "Bartek", "role": "Barber — Styling & Nożyczki", "photo": "./img/barber-bartek.jpg", "exp": "3 lata", "ig": "" }
    ],
    gallery: [
      { "src": "./img/buongiorno-hero.jpg", "alt": "Salon Buongiorno Morena", "cap": "Wnętrze" },
      { "src": "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&h=1500&fit=crop", "alt": "Strzyżenie Combo", "cap": "Combo" },
      { "src": "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=1200&h=1500&fit=crop", "alt": "Skin Fade", "cap": "Fade" },
      { "src": "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1200&h=1500&fit=crop", "alt": "Pielęgnacja brody", "cap": "Broda" },
      { "src": "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?w=1200&h=1500&fit=crop", "alt": "Brzytwa", "cap": "Brzytwa" },
      { "src": "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=1200&h=1500&fit=crop", "alt": "Maszynka i detal", "cap": "Detal" }
    ],
    reviews: [
      { "name": "Tomasz K.", "stars": 5, "date": "2026-09", "text": "Druga lokalizacja Buongiorno na Morenie trzyma niesamowity poziom. Szybko i równo.", "href": "https://maps.google.com/" },
      { "name": "Michał L.", "stars": 5, "date": "2026-08", "text": "Fajnie, że jesteście na Piekarniczej! Super cięcie, świetna ekipa i kawa.", "href": "https://maps.google.com/" },
      { "name": "Kamil W.", "stars": 5, "date": "2026-07", "text": "Combo zrobione mistrzowsko. Broda leży idealnie. Bardzo polecam.", "href": "https://maps.google.com/" }
    ],
    contact: {
      address: "ul. Piekarnicza 26, 80-126 Gdańsk (Morena)",
      phone: "+48 576 431 300",
      hours: "Poniedziałek – Piątek 9:00 – 20:00 • Sobota 9:00 – 16:00 • Niedziela nieczynne",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Buongiorno+Barber+Shop+Gdansk+Morena+Piekarnicza+26",
      mapEmbed: "https://maps.google.com/maps?q=ul.+Piekarnicza+26+80-126+Gda%C5%84sk&t=&z=16&ie=UTF8&iwloc=&output=embed"
    },
    faq: commonFaq,
    finalCta: {
      h2: "Gotowy na świeże cięcie?",
      sub: "Wybierz dogodny termin online przez Booksy lub zadzwoń bezpośrednio do salonu na Morenie.",
      cta: "Zarezerwuj teraz →"
    },
    footer: {
      address: "ul. Piekarnicza 26, Gdańsk",
      phone: "+48 576 431 300",
      hours: "Pn–Pt 9:00–20:00, Sob 9:00–16:00",
      instagram: "https://www.instagram.com/buongiornomorenabarbershop/",
      booksy: "https://booksy.com/pl-pl/s/gdansk/barber-shop?q=Buongiorno+Barber+Shop"
    }
  }
];

// Helper to escape HTML
function escapeHTML(s) {
  return String(s || '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

// Generate JSON files and statically baked HTML files
salons.forEach(salon => {
  // 1. Write JSON
  const jsonPath = path.join(dataDir, `${salon.id}.json`);
  fs.writeFileSync(jsonPath, JSON.stringify(salon, null, 2), 'utf-8');

  // 2. Prepare HTML with statically baked content
  let html = indexHtml;

  // Title & description
  html = html.replace(/<title>.*?<\/title>/i, `<title>${salon.site.title}</title>`);
  html = html.replace(/<meta name="description" content=".*?"\s*\/?>/i, `<meta name="description" content="${salon.site.description}">`);

  // Header Logo: bake static HTML
  let staticLogoHtml = '';
  if (salon.brand.logoImg) {
    staticLogoHtml = `<a class="logo" href="#"><img class="logo-img" src="${salon.brand.logoImg}" alt="${salon.brand.name}" style="height:34px;width:auto;border-radius:4px;object-fit:cover;margin-right:10px;vertical-align:middle;display:inline-block"><span style="vertical-align:middle">${salon.brand.name}</span></a>`;
  } else {
    const parts = salon.brand.name.split(' ');
    const first = parts[0] || '';
    const rest = parts.slice(1).join(' ');
    staticLogoHtml = `<a class="logo" href="#"><span>${first}</span> ${rest}</a>`;
  }
  html = html.replace(/<a class="logo" href="#">.*?<\/a>/i, staticLogoHtml);

  // Header CTA and Phone
  html = html.replace(/id="header-phone" href="[^"]*"/i, `id="header-phone" href="tel:${salon.header.phone.replace(/[^\d+]/g, '')}"`);
  html = html.replace(/>Zadzwoń<\/a>/i, `>${salon.header.phoneLabel}</a>`);
  html = html.replace(/id="header-cta" href="[^"]*"/i, `id="header-cta" href="${salon.site.bookingUrl}"`);

  // Hero BG image, kicker, h1, sub
  html = html.replace(/id="hero-img"\s+src="[^"]*"/i, `id="hero-img" src="${salon.hero.image}"`);
  html = html.replace(/alt="Barber strzyże klienta — Kraków Kazimierz"/i, `alt="${salon.brand.name} — ${salon.site.city} ${salon.site.district}"`);
  html = html.replace(/<div class="kicker" id="hero-kicker">.*?<\/div>/i, `<div class="kicker" id="hero-kicker">${salon.hero.kicker}</div>`);
  html = html.replace(/<h1 id="hero-h1">.*?<\/h1>/i, `<h1 id="hero-h1">${salon.hero.h1}</h1>`);
  html = html.replace(/<p class="hero-sub" id="hero-sub">.*?<\/p>/i, `<p class="hero-sub" id="hero-sub">${salon.hero.sub}</p>`);
  html = html.replace(/id="hero-primary" href="[^"]*"/i, `id="hero-primary" href="${salon.site.bookingUrl}"`);

  // Hero circular badge
  const brandUp = salon.brand.name.toUpperCase();
  const locUp = (salon.site.district || salon.site.city).toUpperCase();
  html = html.replace(/<text><textPath href="#hero-badge-circle" startOffset="0">.*?<\/textPath><\/text>/i, `<text><textPath href="#hero-badge-circle" startOffset="0">${brandUp} • ${locUp} • REZERWACJA ONLINE • </textPath></text>`);

  // Quote section
  const quoteLoc = salon.site.district ? (
    salon.site.district === 'Zaspa' ? 'na Zaspie' :
    salon.site.district === 'Przymorze' ? 'na Przymorzu' :
    salon.site.district === 'Morena' ? 'na Morenie' :
    salon.site.district === 'Oliwa' ? 'w Oliwie' :
    `na ${salon.site.district}`
  ) : 'w Trójmieście';
  html = html.replace(/<blockquote class="edit-accent">.*?<\/blockquote>/i, `<blockquote class="edit-accent">„Najlepszy barber ${quoteLoc}.”</blockquote>`);
  if (salon.reviews && salon.reviews.length > 0) {
    html = html.replace(/<figcaption>.*?<\/figcaption>/i, `<figcaption>${salon.reviews[0].name} · Google</figcaption>`);
  }
  const quoteBg = salon.gallery && salon.gallery.find(g => g.cap === 'Wnętrze' || g.cap === 'Salon') 
    ? salon.gallery.find(g => g.cap === 'Wnętrze' || g.cap === 'Salon').src 
    : './img/tiptop-interior.jpeg';
  html = html.replace(/<section class="quote-banner reveal" aria-label="Opinia">\s*<img src="[^"]*"/i, `<section class="quote-banner reveal" aria-label="Opinia">\n  <img src="${quoteBg}"`);

  // Cennik CTA
  html = html.replace(/id="cennik-cta" href="[^"]*"/i, `id="cennik-cta" href="${salon.site.bookingUrl}"`);

  // Contact section
  html = html.replace(/<h2 class="h2">Znajdziesz nas na Kazimierzu<\/h2>/i, `<h2 class="h2">Znajdziesz nas: ${salon.site.city} (${salon.site.district})</h2>`);
  html = html.replace(/<h3>Barber Kraków Kazimierz<\/h3>/i, `<h3>${salon.brand.name} • ${salon.site.district}</h3>`);
  html = html.replace(/id="contact-route" href="[^"]*"/i, `id="contact-route" href="https://maps.google.com/?q=${encodeURIComponent(salon.contact.address)}"`);
  html = html.replace(/id="contact-cta" href="[^"]*"/i, `id="contact-cta" href="${salon.site.bookingUrl}"`);
  html = html.replace(/id="contact-phone" href="[^"]*"/i, `id="contact-phone" href="tel:${salon.header.phone.replace(/[^\d+]/g, '')}"`);

  // Real Google Maps embed
  html = html.replace(/<iframe id="map-iframe".*?><\/iframe>/i, `<iframe id="map-iframe" src="${salon.contact.mapEmbed}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Mapa — ${salon.brand.name}, ${salon.contact.address}" sandbox="allow-scripts allow-same-origin allow-popups"></iframe>`);

  // Final CTA
  html = html.replace(/<h2 id="final-h2">.*?<\/h2>/i, `<h2 id="final-h2">${salon.finalCta.h2}</h2>`);
  html = html.replace(/<p id="final-sub">.*?<\/p>/i, `<p id="final-sub">${salon.finalCta.sub}</p>`);
  html = html.replace(/id="final-cta" href="[^"]*">.*?<\/a>/i, `id="final-cta" href="${salon.site.bookingUrl}">${salon.finalCta.cta}</a>`);
  html = html.replace(/id="final-phone" href="[^"]*">.*?<\/a>/i, `id="final-phone" href="tel:${salon.header.phone.replace(/[^\d+]/g, '')}">Zadzwoń: ${salon.header.phone}</a>`);

  // Rich Footer: bake static HTML
  const staticFooterLogo = salon.brand.logoImg 
    ? `<img src="${salon.brand.logoImg}" alt="${salon.brand.name}"><span>${salon.brand.name}</span>`
    : `<span>${salon.brand.name}</span>`;
  html = html.replace(/<a class="footer-logo" id="footer-logo" href="#">.*?<\/a>/i, `<a class="footer-logo" id="footer-logo" href="#">${staticFooterLogo}</a>`);
  html = html.replace(/<li id="footer-address">.*?<\/li>/i, `<li id="footer-address">${salon.contact.address}</li>`);
  html = html.replace(/<li id="footer-hours">.*?<\/li>/i, `<li id="footer-hours">${salon.contact.hours}</li>`);
  html = html.replace(/id="footer-phone-link" href="[^"]*">.*?<\/a>/i, `id="footer-phone-link" href="tel:${salon.header.phone.replace(/[^\d+]/g, '')}">${salon.header.phone}</a>`);
  html = html.replace(/id="footer-cta" href="[^"]*"/i, `id="footer-cta" href="${salon.site.bookingUrl}"`);
  
  const loc = `${salon.site.city} ${salon.site.district}`;
  html = html.replace(/<span id="footer-copyright">.*?<\/span>/i, `<span id="footer-copyright">© 2026 ${salon.brand.name} • ${loc}</span>`);

  // Mobile bar
  html = html.replace(/id="mobile-cta" href="[^"]*"/i, `id="mobile-cta" href="${salon.site.bookingUrl}"`);
  html = html.replace(/id="mobile-phone" href="[^"]*"/i, `id="mobile-phone" href="tel:${salon.header.phone.replace(/[^\d+]/g, '')}"`);

  // Schema JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BarberShop",
    "name": salon.brand.name,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": salon.contact.address,
      "addressLocality": salon.site.city,
      "addressCountry": "PL"
    },
    "telephone": salon.header.phone,
    "url": salon.site.bookingUrl,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": salon.hero.ratingValue || 4.9,
      "reviewCount": salon.hero.reviewsCount || 280
    }
  };
  html = html.replace(/<script type="application\/ld\+json" id="ld-json">.*?<\/script>/i, `<script type="application/ld+json" id="ld-json">${JSON.stringify(jsonLd)}</script>`);

  // Clean old tags
  html = html.replace(/<link rel="canonical" href="[^"]*">/i, '');
  html = html.replace(/<meta property="og:url" content="[^"]*">/i, '');

  // FAQ JSON-LD
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": salon.faq.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };
  html = html.replace(/<script type="application\/ld\+json">\{"@context":"https:\/\/schema\.org","@type":"FAQPage".*?<\/script>/i, `<script type="application/ld+json">${JSON.stringify(faqJsonLd)}</script>`);

  // Meta tags
  html = html.replace(/<meta property="og:title" content=".*?"\s*\/?>/i, `<meta property="og:title" content="${salon.site.title}">`);
  html = html.replace(/<meta property="og:description" content=".*?"\s*\/?>/i, `<meta property="og:description" content="${salon.site.description}">`);
  html = html.replace(/<meta property="og:image" content=".*?"\s*\/?>/i, `<meta property="og:image" content="${salon.hero.image}">`);

  // Script injection right before </body>
  const scriptInjection = `<script>window.__SALON_DATA__ = ${JSON.stringify(salon)};</script>\n<script src="./app.js?v=12"></script>`;
  html = html.replace(/<script src="\.\/app\.js\?v=\d+"[^>]*><\/script>/i, scriptInjection);

  const htmlPath = path.join(baseDir, salon.htmlName);
  fs.writeFileSync(htmlPath, html, 'utf-8');
  console.log(`Generated perfectly baked ${salon.htmlName}`);
});

console.log('All salons successfully generated and baked!');
