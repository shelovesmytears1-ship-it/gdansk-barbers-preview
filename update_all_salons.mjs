import fs from 'fs';
import path from 'path';

const baseDir = 'C:\\Users\\deppe\\Desktop\\working\\barber-template';
const dataDir = path.join(baseDir, 'data');
const indexHtml = fs.readFileSync(path.join(baseDir, 'index.html'), 'utf-8');

const commonTrust = [
  { "icon": "scissors", "title": "Doświadczeni barberzy", "text": "Setki cięć w tygodniu, precyzja i zero pośpiechu." },
  { "icon": "package", "title": "Produkty premium", "text": "Tylko sprawdzone pomady i kosmetyki do brody." },
  { "icon": "shield-check", "title": "Higiena i sterylność", "text": "Dezynfekcja narzędzi po każdym kliencie, świeże ostrza." },
  { "icon": "thumbs-up", "title": "Gwarancja zadowolenia", "text": "Dopasowanie cięcia do kształtu głowy i stylu życia." }
];

const commonFaq = [
  { "q": "Czy muszę rezerwować z wyprzedzeniem?", "a": "Zalecamy rezerwację online lub telefonicznie, aby uniknąć czekania. W miarę wolnych miejsc przyjmujemy też z marszu." },
  { "q": "Ile trwa wizyta?", "a": "Standardowe strzyżenie trwa ok. 45 minut, pełny pakiet Combo (włosy + broda) to ok. 60–75 minut." },
  { "q": "Czym mogę zapłacić?", "a": "Przyjmujemy płatność kartą, BLIK-iem oraz gotówką." }
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
      image: "./img/tiptop-hero.jpeg"
    },
    proofStrip: ["Google 4,9 ★★★★★", "Booksy 4,9 ★★★★★", "Gdańsk Zaspa", "@barbershop.tiptop.gdansk"],
    trust: commonTrust,
    styles: [
      { "name": "Skin Fade", "price": "100 zł", "img": "./img/tiptop-cut1.jpeg" },
      { "name": "Combo (Włosy + Broda)", "price": "160 zł", "img": "./img/tiptop-cut2.jpeg" },
      { "name": "Stylizacja Brody", "price": "80 zł", "img": "./img/tiptop-cut3.jpeg" },
      { "name": "Szybkie boki", "price": "80 zł", "img": "./img/tiptop-cut4.jpeg" }
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
      title: "Rzemiosło i uczciwe ceny",
      groups: [
        {
          name: "Włosy",
          items: [
            { "name": "Strzyżenie męskie", "desc": "Cięcie nożyczkami i maszynką, mycie i stylizacja.", "time": "45 min", "price": "100 zł", "bestseller": false },
            { "name": "Strzyżenie boków i tyłu", "desc": "Odświeżenie samego fade'a i konturu.", "time": "30 min", "price": "80 zł", "bestseller": false },
            { "name": "Ojciec + Syn", "desc": "Dwa fotele obok siebie, idealny męski czas.", "time": "60 min", "price": "160 zł", "bestseller": false }
          ]
        },
        {
          name: "Broda & Pakiety",
          items: [
            { "name": "Combo: Włosy + Broda", "desc": "Kompleksowe strzyżenie z trymowaniem i pielęgnacją brody.", "time": "60 min", "price": "160 zł", "bestseller": true },
            { "name": "Strzyżenie brody", "desc": "Kształt, trymowanie, kontur i gorący ręcznik.", "time": "30 min", "price": "80 zł", "bestseller": false }
          ]
        }
      ],
      note: "Płatność kartą, BLIK, gotówką. Rezerwacja online 24/7."
    },
    team: [
      { "name": "Serhii", "role": "Master Barber & Założyciel", "photo": "./img/tiptop-staff1.jpeg", "exp": "Mistrz Fade", "ig": "https://instagram.com/barbershop.tiptop.gdansk" },
      { "name": "Alina", "role": "Barber — Klasyka & Nożyczki", "photo": "./img/tiptop-staff2.jpeg", "exp": "Precyzja", "ig": "" },
      { "name": "Lera", "role": "Barber — Szybkie Cięcia & Styling", "photo": "./img/tiptop-staff3.jpeg", "exp": "Styling", "ig": "" }
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
      hours: [
        { "days": "Poniedziałek – Piątek", "hours": "9:00 – 21:00" },
        { "days": "Sobota", "hours": "9:00 – 18:00" },
        { "days": "Niedziela", "hours": "Zamknięte" }
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Tip+Top+Barbershop+Gdansk+Hynka"
    },
    faq: commonFaq,
    footer: {
      address: "ul. Franciszka Hynka 18/u3, Gdańsk",
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
      proof: "5,0/5 — 500+ zadowolonych klientów na Booksy",
      ratingValue: 5.0,
      reviewsCount: 500,
      image: "./img/barberzone-1.jpg"
    },
    proofStrip: ["Booksy 5,0 ★★★★★", "Google 4,9", "Przymorze — Obrońców Wybrzeża 3", "@barber.zone.gdansk"],
    trust: commonTrust,
    styles: [
      { "name": "Skin Fade", "price": "100 zł", "img": "./img/barberzone-1.jpg" },
      { "name": "Combo Barber Zone", "price": "140 zł", "img": "./img/barberzone-2.jpg" },
      { "name": "Broda + Modelowanie", "price": "70 zł", "img": "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&h=600&fit=crop" },
      { "name": "Królewskie golenie", "price": "80 zł", "img": "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?w=800&h=600&fit=crop" }
    ],
    stats: [
      { "value": "5,0", "label": "ocena na Booksy" },
      { "value": "500+", "label": "stałych klientów" },
      { "value": "Przymorze", "label": "Obrońców Wybrzeża" },
      { "value": "45 min", "label": "czas wizyty" }
    ],
    steps: [
      { "n": "01", "title": "Wybierz termin", "text": "Przez Booksy lub telefonicznie: +48 884 846 475." },
      { "n": "02", "title": "Wpadnij na Przymorze", "text": "ul. Obrońców Wybrzeża 3U/1, blisko Falowca i galerii." },
      { "n": "03", "title": "Cięcie z pasją", "text": "Piotr, Sylwia, Quinten i Hubert — mistrzowska dbałość o detal." },
      { "n": "04", "title": "Płać i wracaj", "text": "Karta, BLIK, gotówka. Świeży look gwarantowany." }
    ],
    cennik: {
      kicker: "Cennik Barber Zone",
      title: "Przejrzyste menu usług",
      groups: [
        {
          name: "Strzyżenie włosów",
          items: [
            { "name": "Strzyżenie męskie klasyczne", "desc": "Nożyczki i maszynka, modelowanie, mycie głowy.", "time": "45 min", "price": "90 zł", "bestseller": false },
            { "name": "Strzyżenie męskie — Skin Fade", "desc": "Precyzyjne golenie boków do zera, ostre linie.", "time": "45 min", "price": "100 zł", "bestseller": false },
            { "name": "Refresh boki & kontur", "desc": "Szybkie odświeżenie przejść maszynką.", "time": "30 min", "price": "60 zł", "bestseller": false }
          ]
        },
        {
          name: "Broda & Pakiety",
          items: [
            { "name": "Combo Barber Zone (Włosy + Broda)", "desc": "Pełne cięcie i kompleksowa stylizacja zarostu.", "time": "60 min", "price": "140 zł", "bestseller": true },
            { "name": "Trymowanie brody + modelowanie", "desc": "Kształt, podgolenie brzytwą i olejek pielęgnacyjny.", "time": "35 min", "price": "70 zł", "bestseller": false },
            { "name": "Królewskie golenie brzytwą", "desc": "Gorący ręcznik, piana, brzytwa i chłodzący balsam.", "time": "40 min", "price": "80 zł", "bestseller": false }
          ]
        }
      ],
      note: "Płatność kartą, BLIK, gotówką. Rezerwacja online 24/7."
    },
    team: [
      { "name": "Piotr", "role": "Barber — Skin Fade & Pompadour", "photo": "./img/barber-kuba.jpg", "exp": "6 lat", "ig": "https://instagram.com/barber.zone.gdansk" },
      { "name": "Sylwia", "role": "Barber — Klasyczne Cięcia & Detale", "photo": "./img/barber-michal.jpg", "exp": "Precyzja", "ig": "" },
      { "name": "Quinten", "role": "Barber — Broda & Brzytwa", "photo": "./img/barber-bartek.jpg", "exp": "Mistrz Brody", "ig": "" },
      { "name": "Hubert", "role": "Barber — Nowoczesny Styling", "photo": "./img/barber-kuba.jpg", "exp": "Fade", "ig": "" }
    ],
    gallery: [
      { "src": "./img/barberzone-1.jpg", "alt": "Realizacja Barber Zone Fade & Beard", "cap": "Fade & Beard" },
      { "src": "./img/barberzone-2.jpg", "alt": "Barber Zone Przymorze stylizacja", "cap": "Skin Fade" },
      { "src": "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&h=1500&fit=crop", "alt": "Combo Barber Zone", "cap": "Combo" },
      { "src": "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1200&h=1500&fit=crop", "alt": "Wnętrze Barber Zone", "cap": "Wnętrze" },
      { "src": "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?w=1200&h=1500&fit=crop", "alt": "Kontur brzytwą", "cap": "Brzytwa" },
      { "src": "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=1200&h=1500&fit=crop", "alt": "Detal wykończenia", "cap": "Detal" }
    ],
    reviews: [
      { "name": "Artur M.", "stars": 5, "date": "2026-09", "text": "Piotr i Sylwia to absolutna ekstraklasa. Najlepszy fade w całym Trójmieście.", "href": "https://maps.google.com/" },
      { "name": "Jakub L.", "stars": 5, "date": "2026-08", "text": "Świetna lokalizacja na Przymorzu, profesjonalizm w każdym calu. Polecam Combo!", "href": "https://maps.google.com/" },
      { "name": "Kamil B.", "stars": 5, "date": "2026-08", "text": "Czysto, punktualnie i z niesamowitą dbałością o brodę. Moje stałe miejsce.", "href": "https://maps.google.com/" }
    ],
    contact: {
      address: "ul. Obrońców Wybrzeża 3U/1, 80-398 Gdańsk (Przymorze)",
      phone: "+48 884 846 475",
      hours: [
        { "days": "Poniedziałek – Piątek", "hours": "9:00 – 20:00" },
        { "days": "Sobota", "hours": "9:00 – 16:00" },
        { "days": "Niedziela", "hours": "Zamknięte" }
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Barber+Zone+Gdansk+Obroncow+Wybrzeza"
    },
    faq: commonFaq,
    footer: {
      address: "ul. Obrońców Wybrzeża 3U/1, Gdańsk",
      phone: "+48 884 846 475",
      hours: "Pn–Pt 9:00–20:00, Sob 9:00–16:00",
      instagram: "https://www.instagram.com/barber.zone.gdansk/",
      booksy: "https://booksy.com/pl-pl/s/gdansk/barber-shop?q=Barber+Zone"
    }
  },

  {
    id: "walkin",
    htmlName: "walkin.html",
    site: {
      city: "Gdańsk",
      district: "Przymorze",
      title: "Walk In Barbershop Gdańsk Przymorze — Bez Sztywnego Czekania",
      description: "Walk In Barbershop Gdańsk — ul. Bora Komorowskiego 34A. Strzyżenie męskie, broda, combo. Wejdź prosto z ulicy lub zadzwoń: 570 050 265.",
      bookingUrl: "https://booksy.com",
      bookingProvider: "booksy",
      ga4: ""
    },
    brand: {
      name: "WALK IN BARBERSHOP",
      logoImg: "./img/walkin-logo.webp",
      accent: "#C5A46A"
    },
    header: {
      phone: "+48 570 050 265",
      phoneLabel: "570 050 265",
      cta: "Zadzwoń / Wpadnij"
    },
    hero: {
      kicker: "Barber Shop • Gdańsk Przymorze",
      h1: "Wejdź prosto z ulicy. Cięcie bez kompromisów.",
      sub: "Wygodny format walk-in oraz rezerwacje na życzenie. Ul. Gen. Bora-Komorowskiego 34A (1. piętro). Dobra kawa i czyste przejścia.",
      ctaPrimary: { "label": "Zadzwoń i wpadnij", "href": "tel:+48570050265" },
      ctaSecondary: { "label": "Zobacz cennik", "href": "#cennik" },
      proof: "4,9/5 w opiniach Google — Gdańsk Przymorze",
      ratingValue: 4.9,
      reviewsCount: 180,
      image: "./img/walkin-hero.webp"
    },
    proofStrip: ["Walk-in Welcome", "Google 4,9 ★★★★★", "Bora-Komorowskiego 34A", "@walkin_barbershop"],
    trust: commonTrust,
    styles: [
      { "name": "Fade Klasyczny", "price": "80 zł", "img": "./img/walkin-bartosz.webp" },
      { "name": "Combo Bartosz", "price": "130 zł", "img": "./img/walkin-hero.webp" },
      { "name": "Trymowanie brody", "price": "60 zł", "img": "./img/walkin-interior.webp" },
      { "name": "Maszynka boki", "price": "60 zł", "img": "https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=800&h=600&fit=crop" }
    ],
    stats: [
      { "value": "Format", "label": "Walk-In & Zapisy" },
      { "value": "4,9", "label": "ocena Google" },
      { "value": "1. piętro", "label": "Bora-Komorowskiego" },
      { "value": "45 min", "label": "średnia wizyta" }
    ],
    steps: [
      { "n": "01", "title": "Wpadnij lub zadzwoń", "text": "Tel: +48 570 050 265 lub wejdź bezpośrednio z ulicy." },
      { "n": "02", "title": "Usiądź na Przymorzu", "text": "ul. Bora-Komorowskiego 34A (1. piętro). Spokojna atmosfera." },
      { "n": "03", "title": "Precyzja Bartosza", "text": "Dopracowane przejścia fade, geometria brody i brzytwa." },
      { "n": "04", "title": "Płać wygodnie", "text": "Gotówka, BLIK, karta. Zero komplikacji." }
    ],
    cennik: {
      kicker: "Cennik Walk In",
      title: "Rzetelne i przejrzyste ceny",
      groups: [
        {
          name: "Włosy",
          items: [
            { "name": "Strzyżenie męskie klasyczne", "desc": "Cięcie nożyczkami i maszynką z modelowaniem.", "time": "45 min", "price": "80 zł", "bestseller": false },
            { "name": "Strzyżenie maszynką", "desc": "Czyste cięcie jedną lub dwoma nasadkami.", "time": "30 min", "price": "60 zł", "bestseller": false }
          ]
        },
        {
          name: "Broda & Combo",
          items: [
            { "name": "Combo (Włosy + Broda)", "desc": "Kompletna metamorfoza: cięcie głowy, trymowanie brody i kontur.", "time": "60 min", "price": "130 zł", "bestseller": true },
            { "name": "Trymowanie i modelowanie brody", "desc": "Zarys linii, skrócenie i zmiękczający olejek.", "time": "30 min", "price": "60 zł", "bestseller": false }
          ]
        }
      ],
      note: "Płatność kartą, BLIK, gotówką."
    },
    team: [
      { "name": "Bartosz", "role": "Master Barber & Właściciel", "photo": "./img/walkin-bartosz.webp", "exp": "Twórca Walk In", "ig": "https://instagram.com/walkin_barbershop" },
      { "name": "Kuba", "role": "Barber — Szybkie Cięcia & Fade", "photo": "./img/barber-kuba.jpg", "exp": "Fade Master", "ig": "" },
      { "name": "Michał", "role": "Barber — Klasyka & Broda", "photo": "./img/barber-michal.jpg", "exp": "Klasyka", "ig": "" }
    ],
    gallery: [
      { "src": "./img/walkin-hero.webp", "alt": "Stanowisko Walk In Barbershop", "cap": "Stanowisko" },
      { "src": "./img/walkin-bartosz.webp", "alt": "Bartosz barber w trakcie pracy", "cap": "Bartosz" },
      { "src": "./img/walkin-interior.webp", "alt": "Wnętrze Walk In Bora Komorowskiego", "cap": "Wnętrze" },
      { "src": "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=1200&h=1500&fit=crop", "alt": "Fade cięcie", "cap": "Fade" },
      { "src": "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1200&h=1500&fit=crop", "alt": "Broda kontur", "cap": "Broda" },
      { "src": "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?w=1200&h=1500&fit=crop", "alt": "Brzytwa detal", "cap": "Detal" }
    ],
    reviews: [
      { "name": "Damian R.", "stars": 5, "date": "2026-09", "text": "Super opcja z walk-in! Wpadłem bez rezerwacji, a wyszedłem z perfekcyjnym cięciem.", "href": "https://maps.google.com/" },
      { "name": "Michał K.", "stars": 5, "date": "2026-08", "text": "Bartosz zna się na rzeczy. Bardzo dokładny, dba o każdy detal. Wracam regularnie.", "href": "https://maps.google.com/" },
      { "name": "Szymon T.", "stars": 5, "date": "2026-07", "text": "Świetna atmosfera i normalne ceny. Najlepszy punkt na Przymorzu.", "href": "https://maps.google.com/" }
    ],
    contact: {
      address: "ul. Gen. Bora-Komorowskiego 34A (1. piętro), 80-377 Gdańsk",
      phone: "+48 570 050 265",
      hours: [
        { "days": "Poniedziałek – Piątek", "hours": "9:00 – 20:00" },
        { "days": "Sobota", "hours": "10:00 – 15:00" },
        { "days": "Niedziela", "hours": "Zamknięte" }
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Walk+In+Barbershop+Gdansk+Bora+Komorowskiego"
    },
    faq: commonFaq,
    footer: {
      address: "ul. Gen. Bora-Komorowskiego 34A, Gdańsk",
      phone: "+48 570 050 265",
      hours: "Pn–Pt 9:00–20:00, Sob 10:00–15:00",
      instagram: "https://www.instagram.com/walkin_barbershop/",
      booksy: "https://booksy.com"
    }
  },

  {
    id: "lovehair",
    htmlName: "lovehair.html",
    site: {
      city: "Gdańsk",
      district: "Morena",
      title: "Love Hair & Barber Shop Gdańsk Morena — Męskie Strzyżenie & Pielęgnacja",
      description: "Love Hair & Barber Shop Gdańsk Morena — ul. Franciszka Rakoczego 9/U6. Cięcia fade, stylizacja brody, kosmetyki Depot & Kevin Murphy. Tel: 730 000 457.",
      bookingUrl: "https://booksy.com/pl-pl/s/gdansk/barber-shop?q=Love+Hair",
      bookingProvider: "booksy",
      ga4: ""
    },
    brand: {
      name: "LOVE HAIR & BARBER",
      logoImg: "./img/lovehair-logo.png",
      accent: "#C5A46A"
    },
    header: {
      phone: "+48 730 000 457",
      phoneLabel: "730 000 457",
      cta: "Zarezerwuj"
    },
    hero: {
      kicker: "Studio Fryzur & Barber • Gdańsk Morena",
      h1: "Współczesna elegancja i męski styl na Morenie.",
      sub: "Precyzyjne cięcia fade, stylizacja brody kosmetykami marek Depot i Kevin Murphy. Ul. Franciszka Rakoczego 9/U6.",
      ctaPrimary: { "label": "Zarezerwuj wizytę", "href": "https://booksy.com/pl-pl/s/gdansk/barber-shop?q=Love+Hair" },
      ctaSecondary: { "label": "Zobacz cennik", "href": "#cennik" },
      proof: "4,9/5 w opiniach Google — Gdańsk Morena",
      ratingValue: 4.9,
      reviewsCount: 220,
      image: "./img/lovehair-interior.jpg"
    },
    proofStrip: ["Kevin Murphy & Depot", "Google 4,9 ★★★★★", "Morena — Rakoczego 9/U6", "@lovehairbarbershop"],
    trust: commonTrust,
    styles: [
      { "name": "Fade Nowoczesny", "price": "85 zł", "img": "./img/lovehair-work1.jpg" },
      { "name": "Combo Love Hair", "price": "130 zł", "img": "./img/lovehair-work2.jpg" },
      { "name": "Broda & Kontur", "price": "65 zł", "img": "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&h=600&fit=crop" },
      { "name": "Ojciec + Syn", "price": "140 zł", "img": "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=600&fit=crop" }
    ],
    stats: [
      { "value": "Depot", "label": "kosmetyki premium" },
      { "value": "4,9", "label": "ocena salonu" },
      { "value": "Morena", "label": "ul. Rakoczego" },
      { "value": "45 min", "label": "średnia wizyta" }
    ],
    steps: [
      { "n": "01", "title": "Zarezerwuj termin", "text": "Online przez Booksy lub telefonicznie: +48 730 000 457." },
      { "n": "02", "title": "Przyjdź na Morenę", "text": "ul. Franciszka Rakoczego 9/U6, wygodny dojazd i parking." },
      { "n": "03", "title": "Styl i relaks", "text": "Dopracowane cięcie, gorący ręcznik, zapach męskich kosmetyków." },
      { "n": "04", "title": "Płatność", "text": "BLIK, karta lub gotówka. Zapraszamy ponownie!" }
    ],
    cennik: {
      kicker: "Cennik Męski",
      title: "Klasyka i nowoczesność",
      groups: [
        {
          name: "Strzyżenie",
          items: [
            { "name": "Strzyżenie męskie fade", "desc": "Nożyczki + maszynka, mycie i stylizacja Depot.", "time": "45 min", "price": "85 zł", "bestseller": false },
            { "name": "Strzyżenie maszynką", "desc": "Jednolita długość, wyrównanie karku.", "time": "30 min", "price": "60 zł", "bestseller": false },
            { "name": "Pakiet Ojciec + Syn", "desc": "Kompleksowe strzyżenie dla taty i syna.", "time": "60 min", "price": "140 zł", "bestseller": false }
          ]
        },
        {
          name: "Broda & Combo",
          items: [
            { "name": "Combo: Włosy + Broda", "desc": "Pełen pakiet strzyżenia głowy i pielęgnacji brody.", "time": "60 min", "price": "130 zł", "bestseller": true },
            { "name": "Pielęgnacja & kontur brody", "desc": "Trymowanie, zmiękczający balsam i konturowanie.", "time": "30 min", "price": "65 zł", "bestseller": false }
          ]
        }
      ],
      note: "Płatność kartą, BLIK, gotówką."
    },
    team: [
      { "name": "Marek", "role": "Barber — Fade & Styling", "photo": "./img/barber-kuba.jpg", "exp": "Depot Specialist", "ig": "https://instagram.com/lovehairbarbershop" },
      { "name": "Kamil", "role": "Barber — Klasyka & Broda", "photo": "./img/barber-michal.jpg", "exp": "Brzytwa", "ig": "" },
      { "name": "Tomek", "role": "Barber — Nowoczesne Formy", "photo": "./img/barber-bartek.jpg", "exp": "Precyzja", "ig": "" }
    ],
    gallery: [
      { "src": "./img/lovehair-work1.jpg", "alt": "Cięcie fade w Love Hair Morena", "cap": "Fade" },
      { "src": "./img/lovehair-work2.jpg", "alt": "Stylizacja Love Hair", "cap": "Combo" },
      { "src": "./img/lovehair-interior.jpg", "alt": "Wnętrze salonu Love Hair Morena", "cap": "Studio" },
      { "src": "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=1200&h=1500&fit=crop", "alt": "Fade detal", "cap": "Precyzja" },
      { "src": "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1200&h=1500&fit=crop", "alt": "Broda", "cap": "Broda" },
      { "src": "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?w=1200&h=1500&fit=crop", "alt": "Styling kosmetykami Depot", "cap": "Depot" }
    ],
    reviews: [
      { "name": "Tomasz K.", "stars": 5, "date": "2026-09", "text": "Fantastyczne miejsce na Morenie. Kosmetyki pachną obłędnie, a cięcie trzyma się tygodniami.", "href": "https://maps.google.com/" },
      { "name": "Piotr C.", "stars": 5, "date": "2026-08", "text": "Chodzę z synem na pakiet Ojciec+Syn, zawsze świetna obsługa i cierpliwość.", "href": "https://maps.google.com/" },
      { "name": "Grzegorz N.", "stars": 5, "date": "2026-07", "text": "Profesjonalizm i wysoka kultura. Zdecydowanie polecam Love Hair.", "href": "https://maps.google.com/" }
    ],
    contact: {
      address: "ul. Franciszka Rakoczego 9/U6, 80-288 Gdańsk (Morena)",
      phone: "+48 730 000 457",
      hours: [
        { "days": "Poniedziałek – Piątek", "hours": "9:00 – 20:00" },
        { "days": "Sobota", "hours": "8:00 – 15:00" },
        { "days": "Niedziela", "hours": "Zamknięte" }
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Love+Hair+Barber+Shop+Gdansk+Rakoczego"
    },
    faq: commonFaq,
    footer: {
      address: "ul. Franciszka Rakoczego 9/U6, Gdańsk",
      phone: "+48 730 000 457",
      hours: "Pn–Pt 9:00–20:00, Sob 8:00–15:00",
      instagram: "https://www.instagram.com/lovehairbarbershop/",
      booksy: "https://booksy.com/pl-pl/s/gdansk/barber-shop?q=Love+Hair"
    }
  },

  {
    id: "buongiorno-oliwa",
    htmlName: "buongiorno-oliwa.html",
    site: {
      city: "Gdańsk",
      district: "Oliwa",
      title: "Buongiorno Barber Shop Gdańsk Oliwa — Włoski Sznyt & Klasa",
      description: "Buongiorno Barber Shop Gdańsk Oliwa — al. Grunwaldzka 515. Włoski styl, tradycyjne golenie, skin fade. Rezerwuj online na Booksy.",
      bookingUrl: "https://booksy.com/pl-pl/s/gdansk/barber-shop?q=Buongiorno",
      bookingProvider: "booksy",
      ga4: ""
    },
    brand: {
      name: "BUONGIORNO BARBER SHOP",
      accent: "#C5A46A"
    },
    header: {
      phone: "+48 501 776 520",
      phoneLabel: "501 776 520",
      cta: "Zarezerwuj"
    },
    hero: {
      kicker: "Barber Shop • Gdańsk Oliwa",
      h1: "Włoski sznyt i perfekcyjne rzemiosło w Oliwie.",
      sub: "Tradycyjne golenie brzytwą, skin fade i kompleksowa pielęgnacja brody. Al. Grunwaldzka 515.",
      ctaPrimary: { "label": "Zarezerwuj wizytę", "href": "https://booksy.com/pl-pl/s/gdansk/barber-shop?q=Buongiorno" },
      ctaSecondary: { "label": "Zobacz cennik", "href": "#cennik" },
      proof: "4,9/5 — Ponad 1200 zadowolonych klientów na Booksy",
      ratingValue: 4.9,
      reviewsCount: 1200,
      image: "./img/buongiorno-hero.jpg"
    },
    proofStrip: ["Italian Style", "Booksy 4,9 ★★★★★", "Oliwa — Grunwaldzka 515", "@buongiorno_barbershop"],
    trust: commonTrust,
    styles: [
      { "name": "Strzyżenie Męskie", "price": "90 zł", "img": "./img/buongiorno-hero.jpg" },
      { "name": "Komplet (Cięcie + Broda)", "price": "140 zł", "img": "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&h=600&fit=crop" },
      { "name": "Broda + Shaver", "price": "70 zł", "img": "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&h=600&fit=crop" },
      { "name": "Golenie tradycyjne", "price": "90 zł", "img": "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?w=800&h=600&fit=crop" }
    ],
    stats: [
      { "value": "1200+", "label": "opinii w sieci" },
      { "value": "4,9", "label": "ocena na Booksy" },
      { "value": "Oliwa", "label": "Grunwaldzka 515" },
      { "value": "45 min", "label": "czas wizyty" }
    ],
    steps: [
      { "n": "01", "title": "Rezerwacja online", "text": "Przez Booksy lub telefonicznie: +48 501 776 520." },
      { "n": "02", "title": "Wpadnij do Oliwy", "text": "al. Grunwaldzka 515, wygodny dojazd z każdego zakątka Trójmiasta." },
      { "n": "03", "title": "Włoska szkoła", "text": "Męskie strzyżenie, gorące kompresy i pielęgnacja zarostu." },
      { "n": "04", "title": "Płatność", "text": "Karta, BLIK, gotówka. Do zobaczenia na kolejnym cięciu!" }
    ],
    cennik: {
      kicker: "Cennik Oliwa",
      title: "Rzemiosło Buongiorno",
      groups: [
        {
          name: "Włosy",
          items: [
            { "name": "Strzyżenie męskie", "desc": "Cięcie nożyczkami i maszynką z modelowaniem.", "time": "45 min", "price": "90 zł", "bestseller": false },
            { "name": "Szybkie boki", "desc": "Odświeżenie fade maszynką i shaverem.", "time": "30 min", "price": "70 zł", "bestseller": false },
            { "name": "Strzyżenie dziecka (do 10 lat)", "desc": "Cierpliwe i stylowe cięcie dla najmłodszych.", "time": "30 min", "price": "60 zł", "bestseller": false }
          ]
        },
        {
          name: "Broda & Komplet",
          items: [
            { "name": "Komplet (Cięcie + Broda + Shaver)", "desc": "Pełny serwis głowy i brody z wykończeniem shaverem.", "time": "60 min", "price": "140 zł", "bestseller": true },
            { "name": "Trymowanie brody + shaver", "desc": "Modelowanie kształtu i gładkie podgolenie.", "time": "35 min", "price": "70 zł", "bestseller": false },
            { "name": "Broda + tradycyjne golenie", "desc": "Brzytwa, gorący ręcznik i włoski olejek.", "time": "40 min", "price": "90 zł", "bestseller": false }
          ]
        }
      ],
      note: "Płatność kartą, BLIK, gotówką."
    },
    team: [
      { "name": "Marco", "role": "Master Barber — Klasyka & Fade", "photo": "./img/barber-kuba.jpg", "exp": "Włoska Szkoła", "ig": "https://instagram.com/buongiorno_barbershop" },
      { "name": "Michał", "role": "Barber — Broda & Brzytwa", "photo": "./img/barber-michal.jpg", "exp": "Precyzja", "ig": "" },
      { "name": "Bartek", "role": "Barber — Nowoczesny Styling", "photo": "./img/barber-bartek.jpg", "exp": "Czysty Fade", "ig": "" }
    ],
    gallery: [
      { "src": "./img/buongiorno-hero.jpg", "alt": "Klimat Buongiorno Oliwa", "cap": "Buongiorno" },
      { "src": "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=1200&h=1500&fit=crop", "alt": "Cięcie fade Oliwa", "cap": "Fade" },
      { "src": "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1200&h=1500&fit=crop", "alt": "Trymowanie brody Oliwa", "cap": "Broda" },
      { "src": "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&h=1500&fit=crop", "alt": "Combo Oliwa", "cap": "Combo" },
      { "src": "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1200&h=1500&fit=crop", "alt": "Wnętrze Buongiorno", "cap": "Wnętrze" },
      { "src": "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?w=1200&h=1500&fit=crop", "alt": "Tradycyjne golenie", "cap": "Brzytwa" }
    ],
    reviews: [
      { "name": "Robert B.", "stars": 5, "date": "2026-09", "text": "Klasa sama w sobie. Najlepsza kawa i bezbłędne golenie w Oliwie.", "href": "https://maps.google.com/" },
      { "name": "Marcin S.", "stars": 5, "date": "2026-08", "text": "Pełen profesjonalizm. Ekipa dba o każdy detal, polecam pakiet Komplet.", "href": "https://maps.google.com/" },
      { "name": "Wojciech M.", "stars": 5, "date": "2026-07", "text": "Świetny klimat retro i genialny fade. Trzymam się ich od roku.", "href": "https://maps.google.com/" }
    ],
    contact: {
      address: "al. Grunwaldzka 515, 80-320 Gdańsk (Oliwa)",
      phone: "+48 501 776 520",
      hours: [
        { "days": "Poniedziałek – Piątek", "hours": "9:00 – 20:00" },
        { "days": "Sobota", "hours": "9:00 – 16:00" },
        { "days": "Niedziela", "hours": "Zamknięte" }
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Buongiorno+Barber+Shop+Gdansk+Grunwaldzka+515"
    },
    faq: commonFaq,
    footer: {
      address: "al. Grunwaldzka 515, Gdańsk (Oliwa)",
      phone: "+48 501 776 520",
      hours: "Pn–Pt 9:00–20:00, Sob 9:00–16:00",
      instagram: "https://www.instagram.com/buongiorno_barbershop/",
      booksy: "https://booksy.com/pl-pl/s/gdansk/barber-shop?q=Buongiorno"
    }
  },

  {
    id: "buongiorno-morena",
    htmlName: "buongiorno-morena.html",
    site: {
      city: "Gdańsk",
      district: "Morena",
      title: "Buongiorno Barber Shop Gdańsk Morena — Męskie Strzyżenie",
      description: "Buongiorno Barber Shop Gdańsk Morena — ul. Piekarnicza 21. Włoski styl, skin fade, trymowanie brody. Rezerwuj online na Booksy.",
      bookingUrl: "https://booksy.com/pl-pl/s/gdansk/barber-shop?q=Buongiorno",
      bookingProvider: "booksy",
      ga4: ""
    },
    brand: {
      name: "BUONGIORNO BARBER SHOP",
      accent: "#C5A46A"
    },
    header: {
      phone: "+48 571 571 652",
      phoneLabel: "571 571 652",
      cta: "Zarezerwuj"
    },
    hero: {
      kicker: "Barber Shop • Gdańsk Morena",
      h1: "Włoski styl i precyzja na Morenie.",
      sub: "Cięcia z charakterem, trymowanie brody i włoska kawa. Ul. Piekarnicza 21.",
      ctaPrimary: { "label": "Zarezerwuj wizytę", "href": "https://booksy.com/pl-pl/s/gdansk/barber-shop?q=Buongiorno" },
      ctaSecondary: { "label": "Zobacz cennik", "href": "#cennik" },
      proof: "4,9/5 — Setki zadowolonych gości na Morenie",
      ratingValue: 4.9,
      reviewsCount: 850,
      image: "./img/buongiorno-hero.jpg"
    },
    proofStrip: ["Italian Style", "Booksy 4,9 ★★★★★", "Morena — Piekarnicza 21", "@buongiorno_barbershop"],
    trust: commonTrust,
    styles: [
      { "name": "Strzyżenie Męskie", "price": "90 zł", "img": "./img/buongiorno-hero.jpg" },
      { "name": "Komplet (Cięcie + Broda)", "price": "140 zł", "img": "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&h=600&fit=crop" },
      { "name": "Broda + Shaver", "price": "70 zł", "img": "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&h=600&fit=crop" },
      { "name": "Szybkie boki", "price": "70 zł", "img": "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?w=800&h=600&fit=crop" }
    ],
    stats: [
      { "value": "850+", "label": "opinii na Morenie" },
      { "value": "4,9", "label": "ocena na Booksy" },
      { "value": "Morena", "label": "ul. Piekarnicza" },
      { "value": "45 min", "label": "czas wizyty" }
    ],
    steps: [
      { "n": "01", "title": "Rezerwacja online", "text": "Przez Booksy lub zadzwoń: +48 571 571 652." },
      { "n": "02", "title": "Przyjdź na Morenę", "text": "ul. Piekarnicza 21, Gdańsk. Łatwy dojazd i parking." },
      { "n": "03", "title": "Perfekcja w detalach", "text": "Cięcie fade, geometria brody i aromatyczne espresso." },
      { "n": "04", "title": "Płatność", "text": "BLIK, karta, gotówka." }
    ],
    cennik: {
      kicker: "Cennik Morena",
      title: "Menu usług Buongiorno",
      groups: [
        {
          name: "Włosy",
          items: [
            { "name": "Strzyżenie męskie", "desc": "Cięcie nożyczkami i maszynką, mycie i stylizacja.", "time": "45 min", "price": "90 zł", "bestseller": false },
            { "name": "Szybkie boki", "desc": "Odświeżenie fade maszynką i shaverem.", "time": "30 min", "price": "70 zł", "bestseller": false },
            { "name": "Strzyżenie dziecka (do 10 lat)", "desc": "Cierpliwe i profesjonalne cięcie.", "time": "30 min", "price": "60 zł", "bestseller": false }
          ]
        },
        {
          name: "Broda & Komplet",
          items: [
            { "name": "Komplet (Cięcie + Broda + Shaver)", "desc": "Pełen pakiet strzyżenia głowy i pielęgnacji brody.", "time": "60 min", "price": "140 zł", "bestseller": true },
            { "name": "Trymowanie brody + shaver", "desc": "Modelowanie i gładkie podgolenie shaverem.", "time": "35 min", "price": "70 zł", "bestseller": false }
          ]
        }
      ],
      note: "Płatność kartą, BLIK, gotówką."
    },
    team: [
      { "name": "Antonio", "role": "Master Barber — Klasyka & Fade", "photo": "./img/barber-kuba.jpg", "exp": "Włoska Szkoła", "ig": "https://instagram.com/buongiorno_barbershop" },
      { "name": "Kuba", "role": "Barber — Broda & Brzytwa", "photo": "./img/barber-michal.jpg", "exp": "Precyzja", "ig": "" },
      { "name": "Michał", "role": "Barber — Szybkie Cięcia", "photo": "./img/barber-bartek.jpg", "exp": "Fade", "ig": "" }
    ],
    gallery: [
      { "src": "./img/buongiorno-hero.jpg", "alt": "Buongiorno Morena", "cap": "Klimat" },
      { "src": "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=1200&h=1500&fit=crop", "alt": "Cięcie fade Morena", "cap": "Fade" },
      { "src": "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1200&h=1500&fit=crop", "alt": "Trymowanie brody Morena", "cap": "Broda" },
      { "src": "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200&h=1500&fit=crop", "alt": "Combo Morena", "cap": "Combo" },
      { "src": "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1200&h=1500&fit=crop", "alt": "Wnętrze Piekarnicza", "cap": "Wnętrze" },
      { "src": "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?w=1200&h=1500&fit=crop", "alt": "Precyzja", "cap": "Detal" }
    ],
    reviews: [
      { "name": "Kacper B.", "stars": 5, "date": "2026-09", "text": "Świetna lokalizacja na Morenie przy Piekarniczej. Zawsze profesjonalnie i punktualnie.", "href": "https://maps.google.com/" },
      { "name": "Rafał G.", "stars": 5, "date": "2026-08", "text": "Włoski klimat, dobra muzyka i cięcie na najwyższym poziomie.", "href": "https://maps.google.com/" },
      { "name": "Adam W.", "stars": 5, "date": "2026-07", "text": "Komplet z brodą to majstersztyw. Gorąco polecam wszystkim na Morenie.", "href": "https://maps.google.com/" }
    ],
    contact: {
      address: "ul. Piekarnicza 21, 80-126 Gdańsk (Morena)",
      phone: "+48 571 571 652",
      hours: [
        { "days": "Poniedziałek – Piątek", "hours": "9:00 – 20:00" },
        { "days": "Sobota", "hours": "9:00 – 16:00" },
        { "days": "Niedziela", "hours": "Zamknięte" }
      ],
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Buongiorno+Barber+Shop+Gdansk+Piekarnicza"
    },
    faq: commonFaq,
    footer: {
      address: "ul. Piekarnicza 21, Gdańsk (Morena)",
      phone: "+48 571 571 652",
      hours: "Pn–Pt 9:00–20:00, Sob 9:00–16:00",
      instagram: "https://www.instagram.com/buongiorno_barbershop/",
      booksy: "https://booksy.com/pl-pl/s/gdansk/barber-shop?q=Buongiorno"
    }
  }
];

// Generate JSON files and statically baked HTML files
salons.forEach(salon => {
  // Use original atmospheric hero image as requested
  salon.hero.image = "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1800&h=1200&fit=crop";

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
  const quoteLoc = salon.site.district ? `na ${salon.site.district}` : (salon.site.city === 'Gdańsk' ? 'w Gdańsku' : `w ${salon.site.city}`);
  html = html.replace(/<blockquote class="edit-accent">.*?<\/blockquote>/i, `<blockquote class="edit-accent">„Najlepszy barber ${quoteLoc}.”</blockquote>`);
  if (salon.gallery && salon.gallery.length > 0) {
    const quoteBg = salon.gallery[salon.gallery.length - 1].src || salon.hero.image;
    html = html.replace(/<section class="quote-banner reveal" aria-label="Opinia">\s*<img src="[^"]*"/i, `<section class="quote-banner reveal" aria-label="Opinia">\n  <img src="${quoteBg}"`);
  }

  // Cennik CTA
  html = html.replace(/id="cennik-cta" href="[^"]*"/i, `id="cennik-cta" href="${salon.site.bookingUrl}"`);

  // Contact section
  html = html.replace(/<h2 class="h2">Znajdziesz nas na Kazimierzu<\/h2>/i, `<h2 class="h2">Znajdziesz nas: ${salon.site.city} (${salon.site.district})</h2>`);
  html = html.replace(/<h3>Barber Kraków Kazimierz<\/h3>/i, `<h3>${salon.brand.name} • ${salon.site.district}</h3>`);
  html = html.replace(/id="contact-route" href="[^"]*"/i, `id="contact-route" href="https://maps.google.com/?q=${encodeURIComponent(salon.contact.address)}"`);
  html = html.replace(/id="contact-cta" href="[^"]*"/i, `id="contact-cta" href="${salon.site.bookingUrl}"`);
  html = html.replace(/id="contact-phone" href="[^"]*"/i, `id="contact-phone" href="tel:${salon.header.phone.replace(/[^\d+]/g, '')}"`);

  // Final CTA and Mobile bar
  html = html.replace(/id="final-cta" href="[^"]*"/i, `id="final-cta" href="${salon.site.bookingUrl}"`);
  html = html.replace(/id="final-phone" href="[^"]*">.*?<\/a>/i, `id="final-phone" href="tel:${salon.header.phone.replace(/[^\d+]/g, '')}">Zadzwoń: ${salon.header.phone}</a>`);
  html = html.replace(/id="mobile-cta" href="[^"]*"/i, `id="mobile-cta" href="${salon.site.bookingUrl}"`);
  html = html.replace(/id="mobile-phone" href="[^"]*"/i, `id="mobile-phone" href="tel:${salon.header.phone.replace(/[^\d+]/g, '')}"`);

  // Map iframe title
  html = html.replace(/title="Mapa — Barber Kraków Kazimierz, ul\. Dietla 57"/i, `title="Mapa — ${salon.brand.name}, ${salon.contact.address}"`);

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

  // Canonical and og:url
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

  // Footer: bake static brand name & location
  const loc = `${salon.site.city} ${salon.site.district}`;
  const staticFooter = `<span>© 2026 ${salon.brand.name} • ${loc}</span>`;
  html = html.replace(/<span>© 2026 Barber Kraków Kazimierz.*?<\/span>/i, staticFooter);

  // Script injection right before </body>
  const scriptInjection = `<script>window.__SALON_DATA__ = ${JSON.stringify(salon)};</script>\n<script src="./app.js?v=11"></script>`;
  html = html.replace(/<script src="\.\/app\.js\?v=\d+"[^>]*><\/script>/i, scriptInjection);

  const htmlPath = path.join(baseDir, salon.htmlName);
  fs.writeFileSync(htmlPath, html, 'utf-8');
  console.log(`Generated perfectly baked ${salon.htmlName}`);
});

console.log('Done!');
