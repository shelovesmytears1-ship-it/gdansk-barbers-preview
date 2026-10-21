import fs from 'fs';
import path from 'path';

const baseDir = 'C:\\Users\\deppe\\Desktop\\working\\barber-template';
const indexHtml = fs.readFileSync(path.join(baseDir, 'index.html'), 'utf-8');

const commonTrust = [
  { "icon": "scissors", "title": "Doświadczeni barberzy", "text": "Setki cięć w tygodniu, precyzja i zero pośpiechu." },
  { "icon": "package", "title": "Produkty premium", "text": "Tylko sprawdzone pomady, glinki i olejki do brody." },
  { "icon": "shield-check", "title": "Higiena i sterylność", "text": "Dezynfekcja narzędzi po każdym kliencie, jednorazowe ostrza." },
  { "icon": "thumbs-up", "title": "Gwarancja zadowolenia", "text": "Dopasowanie cięcia do kształtu głowy i Twojego stylu." }
];

const commonFaq = [
  { "q": "Czy muszę rezerwować z wyprzedzeniem?", "a": "Zalecamy rezerwację online przez Booksy lub telefonicznie, aby uniknąć czekania w fotelu. W miarę wolnych miejsc przyjmujemy też z ulicy." },
  { "q": "Ile trwa wizyta?", "a": "Standardowe strzyżenie trwa ok. 45 minut, pełny pakiet Combo (włosy + broda) to ok. 60–75 minut. Zero pośpiechu, 100% skupienia." },
  { "q": "Czym mogę zapłacić?", "a": "Przyjmujemy płatność kartą, BLIK-iem oraz gotówką. Paragon lub fakturę otrzymasz na miejscu." },
  { "q": "Czy mogę odwołać wizytę?", "a": "Tak, bezpłatnie do kilku godzin przed planowanym terminem bezpośrednio w aplikacji Booksy lub dzwoniąc do nas." },
  { "q": "Jak dojechać i gdzie zaparkować?", "a": "Przy salonie dostępny jest wygodny parking dla klientów oraz dogodny dojazd komunikacją miejską." }
];

const newSalons = [
  {
    id: "easybarber",
    htmlName: "easybarber.html",
    site: {
      city: "Gdańsk",
      district: "Wrzeszcz",
      title: "Easy Barber Gdańsk Wrzeszcz — Męskie Strzyżenie & Tradycyjne Golenie",
      description: "Easy Barber Gdańsk Wrzeszcz — ul. Sobótki 1/2. Klasyczne fryzury męskie, skin fade, trymowanie brody i gorące kompresy. Rezerwacja Booksy.",
      bookingUrl: "https://booksy.com/pl-pl/148689_easy-barber-gdansk-wrzeszcz_barber-shop_31484_gdansk",
      bookingProvider: "booksy"
    },
    brand: {
      name: "EASY BARBER",
      logoImg: "",
      accent: "#D4A373"
    },
    header: {
      phone: "+48 533 730 878",
      phoneLabel: "533 730 878",
      cta: "Zarezerwuj"
    },
    hero: {
      kicker: "Barber Shop • Gdańsk Wrzeszcz",
      h1: "Klasyczne męskie rzemiosło w sercu Wrzeszcza.",
      sub: "Skin fade, nożyczki, tradycyjne golenie brzytwą z kompresem. Ul. Sobótki 1/2 przy Galerii Manhattan.",
      ctaPrimary: { "label": "Zarezerwuj wizytę →", "href": "https://booksy.com/pl-pl/148689_easy-barber-gdansk-wrzeszcz_barber-shop_31484_gdansk" },
      ctaSecondary: { "label": "Zobacz cennik", "href": "#cennik" },
      proof: "4,9/5 — 400+ opinii na Booksy & Google",
      ratingValue: 4.9,
      reviewsCount: 420,
      image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1800&h=1200&fit=crop"
    },
    proofStrip: ["Google 4,9 ★★★★★", "Booksy 4,9 ★★★★★", "Gdańsk Wrzeszcz", "@easybarber.gdansk"],
    trust: commonTrust,
    styles: [
      { "name": "Strzyżenie męskie", "price": "100 zł", "img": "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&h=600&fit=crop" },
      { "name": "Combo Włosy + Broda", "price": "150 zł", "img": "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=600&fit=crop" },
      { "name": "Trymowanie brody", "price": "70 zł", "img": "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=600&fit=crop" },
      { "name": "Golenie brzytwą", "price": "80 zł", "img": "https://images.unsplash.com/photo-1512690459411-b9245aed614b?w=600&h=600&fit=crop" }
    ],
    stats: [
      { "value": "4,9", "label": "ocena klientów" },
      { "value": "400+", "label": "opinii Booksy" },
      { "value": "ul. Sobótki", "label": "Wrzeszcz centrum" },
      { "value": "45 min", "label": "średni czas wizyty" }
    ],
    steps: [
      { "n": "01", "title": "Wybierz termin", "text": "Kliknij i wybierz dogodną godzinę online przez Booksy 24/7." },
      { "n": "02", "title": "Wpadnij do Wrzeszcza", "text": "ul. Sobótki 1/2. Parking i doskonały dojazd tramwajem/SKM." },
      { "n": "03", "title": "Kawa i precyzyjne cięcie", "text": "Klasyka, nożyczki, gorący ręcznik. Zero kompromisów." },
      { "n": "04", "title": "Czysty styl i uśmiech", "text": "Płatność BLIK, kartą lub gotówką. Do zobaczenia!" }
    ],
    cennik: {
      kicker: "Cennik Easy Barber",
      title: "Klasyka i precyzja bez ukrytych opłat",
      groups: [
        {
          name: "Włosy & Strzyżenie",
          items: [
            { "name": "Strzyżenie męskie", "desc": "Konsultacja, cięcie maszynką i nożyczkami, mycie, stylizacja pomadą.", "time": "45 min", "price": "100 zł", "bestseller": false },
            { "name": "Skin Fade / Taper Fade", "desc": "Czyste przejście od zera, dopasowanie geometrii do kształtu czaszki.", "time": "50 min", "price": "110 zł", "bestseller": true },
            { "name": "Strzyżenie maszynką (Buzz Cut)", "desc": "Jednolita długość maszynką, czysty kontur szyi i baczków.", "time": "30 min", "price": "60 zł", "bestseller": false },
            { "name": "Strzyżenie Junior (do 12 lat)", "desc": "Spokojne, bezstresowe podejście do młodego dżentelmena.", "time": "40 min", "price": "80 zł", "bestseller": false }
          ]
        },
        {
          name: "Broda & Golenie",
          items: [
            { "name": "Modelowanie i strzyżenie brody", "desc": "Wyznaczenie linii zarostu, cieniowanie, brzytwa, balsam nawilżający.", "time": "35 min", "price": "70 zł", "bestseller": false },
            { "name": "Tradycyjne golenie brzytwą", "desc": "Rytuał z gorącymi kompresami (Hot Towel), pianą i zimnym ręcznikiem.", "time": "40 min", "price": "80 zł", "bestseller": false },
            { "name": "Golenie głowy brzytwą", "desc": "Gładkie golenie skóry głowy na mokro z kompresem i pielęgnacją.", "time": "40 min", "price": "80 zł", "bestseller": false },
            { "name": "Korekcja konturu brody", "desc": "Szybkie odświeżenie linii zarostu brzytwą bez skracania długości.", "time": "20 min", "price": "50 zł", "bestseller": false }
          ]
        },
        {
          name: "Pakiety Combo & Detale",
          items: [
            { "name": "Pakiet Combo (Włosy + Broda)", "desc": "Kompleksowe strzyżenie głowy oraz pełne modelowanie brody z brzytwą.", "time": "1g 15min", "price": "150 zł", "bestseller": true },
            { "name": "Combo Skin Fade + Broda", "desc": "Maksymalnie precyzyjne przejście od zera i pełna oprawa brody.", "time": "1g 20min", "price": "160 zł", "bestseller": false },
            { "name": "Depilacja woskiem (nos / uszy)", "desc": "Szybkie i bezbolesne usunięcie zbędnych włosków woskiem na gorąco.", "time": "15 min", "price": "25 zł", "bestseller": false },
            { "name": "Odsiwianie brody / tonowanie", "desc": "Dyskretne zatuszowanie siwych włosów z naturalnym efektem.", "time": "30 min", "price": "60 zł", "bestseller": false }
          ]
        }
      ],
      note: "Płatność kartą, BLIK oraz gotówką. Bezpośrednia rezerwacja w Booksy."
    },
    team: [
      { "name": "Alex", "role": "Master Barber", "photo": "./img/barber-alex.jpg", "exp": "Mistrz Fade & Geometria", "ig": "https://instagram.com/easybarber.gdansk" },
      { "name": "Max", "role": "Senior Barber", "photo": "./img/barber-max.jpg", "exp": "Klasyczne Nożyczki", "ig": "https://instagram.com/easybarber.gdansk" },
      { "name": "Witek", "role": "Barber & Beard Specialist", "photo": "./img/barber-witek.jpg", "exp": "Rytuał Brzytwy", "ig": "https://instagram.com/easybarber.gdansk" },
      { "name": "Daniel", "role": "Barber & Stylist", "photo": "./img/barber-daniel.jpg", "exp": "Nowoczesny Styling", "ig": "https://instagram.com/easybarber.gdansk" }
    ],
    gallery: [
      { "src": "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&h=800&fit=crop", "alt": "Easy Barber Gdańsk Salon", "cap": "Wnętrze Salonu" },
      { "src": "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&h=800&fit=crop", "alt": "Skin Fade Wrzeszcz", "cap": "Skin Fade" },
      { "src": "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=800&fit=crop", "alt": "Combo Włosy i Broda", "cap": "Combo Pakiet" },
      { "src": "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&h=800&fit=crop", "alt": "Trymowanie Brody", "cap": "Kontur Brody" },
      { "src": "https://images.unsplash.com/photo-1512690459411-b9245aed614b?w=800&h=800&fit=crop", "alt": "Golenie Brzytwą", "cap": "Golenie Brzytwą" },
      { "src": "./img/easybarber-cut6.jpg", "alt": "Stylizacja Włosów", "cap": "Styling & Finish" }
    ],
    reviews: [
      { "name": "Tomasz K.", "stars": 5, "date": "2026-09", "text": "Najlepsze przejście we Wrzeszczu. Szybko, punktualnie i z pełną klasą. Polecam!", "href": "https://maps.google.com/" },
      { "name": "Jakub M.", "stars": 5, "date": "2026-08", "text": "Świetna atmosfera na Sobótki, kawa przed cięciem i mega precyzyjna robota brzytwą.", "href": "https://maps.google.com/" },
      { "name": "Kamil W.", "stars": 5, "date": "2026-07", "text": "Chodzę do chłopaków od ponad roku. Broda zawsze dopracowana, nożyczki i brzytwa na najwyższym poziomie. Polecam każdego barbera z ekipy!", "href": "https://maps.google.com/" }
    ],
    contact: {
      address: "ul. Sobótki 1/2, 80-247 Gdańsk (Wrzeszcz)",
      phone: "+48 533 730 878",
      hours: "Pon 10:00–16:00 • Wt–Czw 08:00–21:00 • Pt 10:00–20:00 • Sob 10:00–18:00",
      mapEmbed: "https://maps.google.com/maps?q=ul.+Sob%C3%B3tki+1+Gda%C5%84sk&t=&z=16&ie=UTF8&iwloc=&output=embed"
    },
    faq: commonFaq,
    finalCta: {
      h2: "Gotowy na świeże cięcie?",
      sub: "Wybierz dogodny termin przez Booksy lub zadzwoń bezpośrednio do salonu na Sobótki.",
      cta: "Zarezerwuj wizytę →"
    }
  },

  {
    id: "burda",
    htmlName: "burda.html",
    site: {
      city: "Gdańsk",
      district: "Śródmieście",
      title: "BURDA BARBER&SHOP Gdańsk Śródmieście — Strzyżenie Męskie & Alternatywne",
      description: "BURDA BARBER&SHOP Gdańsk Śródmieście — ul. Ogarna 11/12. Nowoczesne fady, mullety, stylizacja brody i szkolenia. Rezerwacja Booksy.",
      bookingUrl: "https://booksy.com/pl-pl/98555_burda-barber-shop_barber-shop_14009_gdansk",
      bookingProvider: "booksy"
    },
    brand: {
      name: "BURDA BARBER & SHOP",
      logoImg: "",
      accent: "#E5A93B"
    },
    header: {
      phone: "+48 58 301 22 11",
      phoneLabel: "Zadzwoń do salonu",
      cta: "Zarezerwuj"
    },
    hero: {
      kicker: "Barber & Concept Space • Gdańsk Śródmieście",
      h1: "Alternatywne cięcia i bezkompromisowy styl.",
      sub: "Nowoczesne fady, mullety, stylizacja brody i autorskie podejście do każdego klienta. Ul. Ogarna 11/12.",
      ctaPrimary: { "label": "Zarezerwuj wizytę →", "href": "https://booksy.com/pl-pl/98555_burda-barber-shop_barber-shop_14009_gdansk" },
      ctaSecondary: { "label": "Zobacz cennik", "href": "#cennik" },
      proof: "4,9/5 — 300+ opinii na Booksy",
      ratingValue: 4.9,
      reviewsCount: 320,
      image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1800&h=1200&fit=crop"
    },
    proofStrip: ["Booksy 4,9 ★★★★★", "Gdańsk Śródmieście", "Alternatywne cięcia & fady", "@burda_barbershop"],
    trust: commonTrust,
    styles: [
      { "name": "Cięcie autorskie / Mullet", "price": "110 zł", "img": "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&h=600&fit=crop" },
      { "name": "Skin Fade & Styling", "price": "120 zł", "img": "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&h=600&fit=crop" },
      { "name": "Combo Włosy + Broda", "price": "160 zł", "img": "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=600&fit=crop" },
      { "name": "Strzyżenie brody", "price": "80 zł", "img": "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=600&fit=crop" }
    ],
    stats: [
      { "value": "4,9", "label": "ocena klientów" },
      { "value": "300+", "label": "opinii Booksy" },
      { "value": "ul. Ogarna", "label": "Śródmieście Gdańsk" },
      { "value": "50 min", "label": "precyzja i czas" }
    ],
    steps: [
      { "n": "01", "title": "Zarezerwuj w Booksy", "text": "Wybierz ulubionego barbera i dogodny termin w kilka kliknięć." },
      { "n": "02", "title": "Odwiedź ul. Ogarną", "text": "Centrum Gdańska, wejście od ulicy Zbytki. Świetna muzyka i klimat." },
      { "n": "03", "title": "Indywidualny projekt", "text": "Dobieramy styl do Ciebie — od klasyki po nowoczesne cięcia awangardowe." },
      { "n": "04", "title": "Top efekt", "text": "Wyjdź ze świeżą fryzurą i pewnością siebie." }
    ],
    cennik: {
      kicker: "Cennik BURDA",
      title: "Autorskie podejście i rzetelna wycena",
      groups: [
        {
          name: "Cięcia Męskie & Fade",
          items: [
            { "name": "Strzyżenie męskie autorskie", "desc": "Konsultacja, mycie, precyzyjne cięcie dopasowane do rysów twarzy i stylu.", "time": "50 min", "price": "110 zł", "bestseller": true },
            { "name": "Skin Fade / Taper Fade", "desc": "Ekstremalnie gładkie przejście od zera i perfekcyjne wykończenie karku.", "time": "50 min", "price": "120 zł", "bestseller": false },
            { "name": "Cięcie alternatywne (Mullet / Mod)", "desc": "Dłuższe tekstury, autorskie cięcie nożyczkami i stylizacja sprayem solnym.", "time": "60 min", "price": "130 zł", "bestseller": false },
            { "name": "Buzz Cut & Kontur brzytwą", "desc": "Krótkie, ostre cięcie maszynką z dopracowaniem linii karku i czoła.", "time": "30 min", "price": "70 zł", "bestseller": false }
          ]
        },
        {
          name: "Stylizacja Brody",
          items: [
            { "name": "Pełne strzyżenie i modelowanie brody", "desc": "Konturowanie, cieniowanie policzków, brzytwa, olejek i balsam.", "time": "40 min", "price": "80 zł", "bestseller": false },
            { "name": "Rytuał golenia brzytwą (Hot Towel)", "desc": "Tradycyjne golenie z gorącymi kompresami, olejkiem pre-shave i ałunem.", "time": "40 min", "price": "80 zł", "bestseller": false },
            { "name": "Korekta linii zarostu", "desc": "Szybkie odświeżenie samych konturów brzytwą bez skracania masy brody.", "time": "20 min", "price": "50 zł", "bestseller": false },
            { "name": "Pielęgnacja brody & sauna parowa", "desc": "Głębokie odżywienie zarostu i skóry twarzy specjalistycznym olejkiem.", "time": "30 min", "price": "60 zł", "bestseller": false }
          ]
        },
        {
          name: "Pakiety Combo & Kolor",
          items: [
            { "name": "Combo (Włosy + Broda)", "desc": "Pełna metamorfoza: autorskie strzyżenie oraz kompleksowa stylizacja zarostu.", "time": "1g 20min", "price": "160 zł", "bestseller": true },
            { "name": "Combo Skin Fade + Broda", "desc": "Maksymalny kontrast: skin fade od zera oraz dopracowana linia brody.", "time": "1g 30min", "price": "180 zł", "bestseller": false },
            { "name": "Odsiwianie brody / tonowanie", "desc": "Subtelne ukrycie siwizny bez sztucznego efektu farbowania.", "time": "30 min", "price": "70 zł", "bestseller": false },
            { "name": "Depilacja woskiem nos / uszy", "desc": "Precyzyjne oczyszczenie woskiem na gorąco.", "time": "15 min", "price": "30 zł", "bestseller": false }
          ]
        }
      ],
      note: "Płatność kartą, BLIK oraz gotówką. Rezerwacje 24/7 przez Booksy."
    },
    team: [
      { "name": "Kamil", "role": "Master Barber & Założyciel", "photo": "./img/burda-kamil.jpg", "exp": "Mullet & Alternatywa", "ig": "https://instagram.com/burda_barbershop" },
      { "name": "Oskar", "role": "Barber — Fade Specialist", "photo": "./img/burda-oskar.jpg", "exp": "Precyzja Geometrii", "ig": "https://instagram.com/burda_barbershop" },
      { "name": "Igor", "role": "Barber & Broda", "photo": "./img/burda-igor.jpg", "exp": "Rytuał Brzytwy", "ig": "https://instagram.com/burda_barbershop" }
    ],
    gallery: [
      { "src": "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&h=800&fit=crop", "alt": "BURDA Gdańsk Ogarna", "cap": "Salon & Concept Space" },
      { "src": "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&h=800&fit=crop", "alt": "Cięcie Męskie", "cap": "Skin Fade" },
      { "src": "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=800&fit=crop", "alt": "Combo Burda", "cap": "Combo Pakiet" },
      { "src": "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&h=800&fit=crop", "alt": "Stylizacja Brody", "cap": "Broda & Kontur" },
      { "src": "https://images.unsplash.com/photo-1512690459411-b9245aed614b?w=800&h=800&fit=crop", "alt": "Rytuał Brzytwy", "cap": "Hot Towel Shave" }
    ],
    reviews: [
      { "name": "Michał W.", "stars": 5, "date": "2026-09", "text": "Najbardziej stylowy barber w Gdańsku. Ogromna wiedza, widać że żyją tą pasją.", "href": "https://maps.google.com/" },
      { "name": "Piotr R.", "stars": 5, "date": "2026-08", "text": "Rewelacyjny mullet i fade. Nareszcie barber, który rozumie nowoczesne trendy.", "href": "https://maps.google.com/" },
      { "name": "Grzegorz M.", "stars": 5, "date": "2026-07", "text": "Świetna atmosfera na Ogarnej, chłopaki podchodzą do klienta w 100% indywidualnie. Polecam!", "href": "https://maps.google.com/" }
    ],
    contact: {
      address: "ul. Ogarna 11/12 (wejście od ul. Zbytki), 80-826 Gdańsk",
      phone: "+48 58 301 22 11",
      hours: "Poniedziałek – Piątek 09:00 – 20:00 • Sobota 09:00 – 16:00",
      mapEmbed: "https://maps.google.com/maps?q=ul.+Ogarna+11%2F12+Gda%C5%84sk&t=&z=16&ie=UTF8&iwloc=&output=embed"
    },
    faq: commonFaq,
    finalCta: {
      h2: "Zmień swój styl na lepszy",
      sub: "Rezerwuj wizytę online przez Booksy lub wpadnij na ul. Ogarną w Śródmieściu.",
      cta: "Zarezerwuj wizytę →"
    }
  },

  {
    id: "danziger",
    htmlName: "danziger.html",
    site: {
      city: "Gdańsk",
      district: "Stare Miasto",
      title: "DANZIGER BARBER Gdańsk — Męskie Strzyżenie & Pielęgnacja Brody",
      description: "DANZIGER BARBER Gdańsk — ul. Angielska Grobla 32. Taper fade, golenie brzytwą, combo. Indywidualne podejście, ocena 5.0★ na Booksy.",
      bookingUrl: "https://instagram.com/danzigerbarber",
      bookingProvider: "booksy"
    },
    brand: {
      name: "DANZIGER BARBER",
      logoImg: "",
      accent: "#C59B27"
    },
    header: {
      phone: "+48 791 224 810",
      phoneLabel: "791 224 810",
      cta: "Zarezerwuj"
    },
    hero: {
      kicker: "Premium Barber • Gdańsk Stare Miasto",
      h1: "Precyzja, klasa i styl w sercu Gdańska.",
      sub: "Taper fade, golenie brzytwą, pielęgnacja zarostu. Angielska Grobla 32, tuż przy Motławie.",
      ctaPrimary: { "label": "Zarezerwuj wizytę →", "href": "https://instagram.com/danzigerbarber" },
      ctaSecondary: { "label": "Zobacz cennik", "href": "#cennik" },
      proof: "5,0/5 — 250+ opinii na Booksy & Google",
      ratingValue: 5.0,
      reviewsCount: 250,
      image: "./img/danziger-hero.jpg"
    },
    proofStrip: ["Booksy 5,0 ★★★★★", "Google 5,0 ★★★★★", "Gdańsk Angielska Grobla", "@danzigerbarber"],
    trust: commonTrust,
    styles: [
      { "name": "Taper Fade", "price": "100 zł", "img": "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&h=600&fit=crop" },
      { "name": "Combo Włosy + Broda", "price": "150 zł", "img": "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=600&fit=crop" },
      { "name": "Stylizacja Brody", "price": "70 zł", "img": "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=600&fit=crop" },
      { "name": "Golenie Głowy Brzytwą", "price": "80 zł", "img": "https://images.unsplash.com/photo-1512690459411-b9245aed614b?w=600&h=600&fit=crop" }
    ],
    stats: [
      { "value": "5,0", "label": "maksymalna ocena" },
      { "value": "250+", "label": "opinii Booksy" },
      { "value": "Motława", "label": "Angielska Grobla" },
      { "value": "1 na 1", "label": "pełna uwaga barbera" }
    ],
    steps: [
      { "n": "01", "title": "Rezerwacja online", "text": "Wybierz dogodny termin w kalendarzu Booksy lub przez Instagram DM." },
      { "n": "02", "title": "Angielska Grobla 32", "text": "Spokojne, nowoczesne osiedle nad Motławą, komfortowe warunki." },
      { "n": "03", "title": "Kunszt barberski", "text": "Rytuał golenia, ostra brzytwa i perfekcyjne cieniowanie fade." },
      { "n": "04", "title": "Perfekcja detali", "text": "Odpowiednio dobrana pomada i nienaganny wygląd na tygodnie." }
    ],
    cennik: {
      kicker: "Cennik Danziger",
      title: "Rzetelne rzemiosło w zabytkowym sercu miasta",
      groups: [
        {
          name: "Włosy & Strzyżenie",
          items: [
            { "name": "Strzyżenie męskie klasyczne", "desc": "Precyzyjne nożyczki i maszynka, mycie głowy oraz ułożenie fryzury.", "time": "45 min", "price": "100 zł", "bestseller": false },
            { "name": "Taper Fade / Crop Cut", "desc": "Nowoczesne cięcie z cieniowaniem skroni i karku. Czysty, ostry kontur.", "time": "50 min", "price": "110 zł", "bestseller": true },
            { "name": "Golenie głowy brzytwą", "desc": "Gładkie golenie skóry głowy na mokro z kompresem i pielęgnacją.", "time": "40 min", "price": "80 zł", "bestseller": false },
            { "name": "Strzyżenie maszynką na jedną długość", "desc": "Równe cięcie z dopracowaniem konturu szyi.", "time": "30 min", "price": "60 zł", "bestseller": false }
          ]
        },
        {
          name: "Broda & Golenie Brzytwą",
          items: [
            { "name": "Stylizacja i trymowanie brody", "desc": "Kształt dopasowany do linii żuchwy, cieniowanie, odżywczy olejek.", "time": "35 min", "price": "70 zł", "bestseller": false },
            { "name": "Rytuał tradycyjnego golenia", "desc": "Golenie na gładko brzytwą z ciepłym kompresem i balsamem po goleniu.", "time": "40 min", "price": "80 zł", "bestseller": false },
            { "name": "Korekta krawędzi zarostu", "desc": "Precyzyjne wyznaczenie ostrych linii policzków i szyi.", "time": "20 min", "price": "45 zł", "bestseller": false },
            { "name": "Spa brody & regeneracja", "desc": "Maska odżywcza, gorący ręcznik i czesanie szczotką z dzika.", "time": "25 min", "price": "50 zł", "bestseller": false }
          ]
        },
        {
          name: "Pakiety Combo & Detale",
          items: [
            { "name": "Combo (Włosy + Broda)", "desc": "Pełen pakiet stylizacji włosów i precyzyjnego wyrównania brody brzytwą.", "time": "1g 15min", "price": "150 zł", "bestseller": true },
            { "name": "Combo Taper Fade + Broda", "desc": "Idealna harmonia: wycieniowane boki i perfekcyjnie zarysowana broda.", "time": "1g 20min", "price": "160 zł", "bestseller": false },
            { "name": "Woskowanie nos / uszy", "desc": "Szybka estetyczna korekta zbędnych włosków.", "time": "15 min", "price": "25 zł", "bestseller": false },
            { "name": "Tuszowanie siwizny", "desc": "Dyskretna koloryzacja kamuflująca pierwsze siwe włosy.", "time": "30 min", "price": "60 zł", "bestseller": false }
          ]
        }
      ],
      note: "Płatność kartą, BLIK oraz gotówką. Zapisy online przez Booksy."
    },
    // SOLO MASTER SPOTLIGHT!
    team: [
      {
        name: "Daniel Wojnowski",
        role: "Master Barber & Założyciel",
        photo: "./img/danziger-daniel.jpg",
        exp: "Mistrz Detalu & Brzytwy",
        bio: "Ponad 8 lat doświadczenia w precyzyjnym fryzjerstwie męskim. Angielska Grobla 32 to kameralne, niezależne studio nad Motławą — bez pośpiechu, bez hałasu i bez taśmy produkcyjnej. Każda wizyta to 100% mojej uwagi dedykowanej jednej osobie.",
        ig: "https://instagram.com/danzigerbarber"
      }
    ],
    gallery: [
      { "src": "./img/danziger-interior.jpg", "alt": "Danziger Barber Studio", "cap": "Studio Angielska Grobla" },
      { "src": "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&h=800&fit=crop", "alt": "Taper Fade", "cap": "Taper Fade" },
      { "src": "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=800&fit=crop", "alt": "Combo", "cap": "Combo Pakiet" },
      { "src": "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&h=800&fit=crop", "alt": "Stylizacja Brody", "cap": "Kontur Brody" },
      { "src": "https://images.unsplash.com/photo-1512690459411-b9245aed614b?w=800&h=800&fit=crop", "alt": "Golenie Brzytwą", "cap": "Golenie Brzytwą" }
    ],
    reviews: [
      { "name": "Kamil B.", "stars": 5, "date": "2026-09", "text": "Ocena 5.0 w pełni zasłużona. Daniel podchodzi do cięcia jak do sztuki. Zdecydowanie polecam!", "href": "https://maps.google.com/" },
      { "name": "Artur S.", "stars": 5, "date": "2026-08", "text": "Świetna lokalizacja na Angielskiej Grobli, pełen profesjonalizm i spokój podczas wizyty.", "href": "https://maps.google.com/" },
      { "name": "Marcin K.", "stars": 5, "date": "2026-07", "text": "Najwyższa kultura pracy i absolutny spokój w fotelu. Zero pośpiechu, brzytwa poprowadzona po mistrzowsku.", "href": "https://maps.google.com/" }
    ],
    contact: {
      address: "ul. Angielska Grobla 32 lok. 32, 80-756 Gdańsk",
      phone: "+48 791 224 810",
      hours: "Poniedziałek – Piątek 09:00 – 20:00 • Sobota 09:00 – 17:00",
      mapEmbed: "https://maps.google.com/maps?q=ul.+Angielska+Grobla+32+Gda%C5%84sk&t=&z=16&ie=UTF8&iwloc=&output=embed"
    },
    faq: commonFaq,
    finalCta: {
      h2: "Zadbaj o swój wizerunek",
      sub: "Zarezerwuj dogodny termin online lub skontaktuj się bezpośrednio z Danielem.",
      cta: "Zarezerwuj wizytę →"
    }
  },

  {
    id: "bones",
    htmlName: "bones.html",
    site: {
      city: "Gdańsk",
      district: "Oliwa",
      title: "Bones Barber Gdańsk Oliwa — Mistrzowski Fade & Stylizacja Brody",
      description: "Bones Barber Gdańsk Oliwa — ul. Polanki 83. Mocna kawa, luźny klimat, perfekcyjny fade. Ponad 1000 opinii 5.0★ na Booksy.",
      bookingUrl: "https://instagram.com/bones_barber_",
      bookingProvider: "booksy"
    },
    brand: {
      name: "BONES BARBER",
      logoImg: "",
      accent: "#E2C08D"
    },
    header: {
      phone: "+48 515 427 731",
      phoneLabel: "515 427 731",
      cta: "Zarezerwuj"
    },
    hero: {
      kicker: "Barber Shop • Gdańsk Oliwa",
      h1: "Mocna kawa, luźna atmosfera i perfekcyjny fade.",
      sub: "Precyzyjne przejścia, trymowanie brody, brzytwa. Ul. Polanki 83 — rzut beretem od Olivia Business Centre.",
      ctaPrimary: { "label": "Zarezerwuj wizytę →", "href": "https://instagram.com/bones_barber_" },
      ctaSecondary: { "label": "Zobacz cennik", "href": "#cennik" },
      proof: "5,0/5 — ponad 1000 opinii na Booksy",
      ratingValue: 5.0,
      reviewsCount: 1050,
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1800&h=1200&fit=crop"
    },
    proofStrip: ["Booksy 5,0 ★★★★★", "Ponad 1000 opinii", "Gdańsk Oliwa / Polanki", "@bones_barber_"],
    trust: commonTrust,
    styles: [
      { "name": "Skin Fade", "price": "100 zł", "img": "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&h=600&fit=crop" },
      { "name": "Combo Włosy + Broda", "price": "150 zł", "img": "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=600&fit=crop" },
      { "name": "Stylizacja Brody", "price": "80 zł", "img": "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=600&fit=crop" },
      { "name": "Buzz Cut & Kontur", "price": "70 zł", "img": "https://images.unsplash.com/photo-1512690459411-b9245aed614b?w=600&h=600&fit=crop" }
    ],
    stats: [
      { "value": "5,0", "label": "ocena na Booksy" },
      { "value": "1000+", "label": "zadowolonych opinii" },
      { "value": "ul. Polanki", "label": "Oliwa Gdańsk" },
      { "value": "45 min", "label": "czas na fotelu" }
    ],
    steps: [
      { "n": "01", "title": "Wybierz termin", "text": "Zapisy online w Booksy lub bezpośrednio przez Instagram DM." },
      { "n": "02", "title": "Wpadnij na Polanki 83", "text": "Spokojna część Oliwy, bezproblemowy parking na miejscu." },
      { "n": "03", "title": "Kawa i ostre cięcie", "text": "Męski klimat, autentyczna rozmowa i zero pośpiechu." },
      { "n": "04", "title": "Wyjdź jak król", "text": "Perfekcyjny kontur brody i przejście dopracowane do milimetra." }
    ],
    cennik: {
      kicker: "Cennik Bones Barber",
      title: "Uczciwe stawki za rzemiosło na najwyższym poziomie",
      groups: [
        {
          name: "Włosy & Fade",
          items: [
            { "name": "Strzyżenie męskie (Classic / Fade)", "desc": "Cięcie nożyczkami i maszynką, mycie głowy, stylizacja matową pomadą.", "time": "45 min", "price": "100 zł", "bestseller": true },
            { "name": "Skin Fade od zera", "desc": "Precyzyjne cieniowanie golarką foliową i brzytwą. Idealne przejście.", "time": "50 min", "price": "110 zł", "bestseller": false },
            { "name": "Strzyżenie maszynką (Buzz Cut)", "desc": "Szybkie, równe cięcie maszynką z dopracowaniem karku i baczków.", "time": "30 min", "price": "70 zł", "bestseller": false },
            { "name": "Stylizacja włosów & mycie", "desc": "Odświeżenie fryzury kosmetykami niszowych marek.", "time": "20 min", "price": "40 zł", "bestseller": false }
          ]
        },
        {
          name: "Broda & Brzytwa",
          items: [
            { "name": "Pielęgnacja i strzyżenie brody", "desc": "Nadanie kształtu nożyczkami i maszynką, podgolenie brzytwą, olejek.", "time": "35 min", "price": "80 zł", "bestseller": false },
            { "name": "Golenie głowy na gładko brzytwą", "desc": "Czyste cięcie brzytwą na mokro z kojącym balsamem.", "time": "40 min", "price": "80 zł", "bestseller": false },
            { "name": "Konturowanie zarostu", "desc": "Precyzyjna linia policzków i szyi wykończona brzytwą.", "time": "20 min", "price": "50 zł", "bestseller": false },
            { "name": "Regeneracja brody gorącym ręcznikiem", "desc": "Głębokie nawilżenie zarostu pod kompresem.", "time": "25 min", "price": "50 zł", "bestseller": false }
          ]
        },
        {
          name: "Pakiety Combo & Detale",
          items: [
            { "name": "Pakiet Combo (Włosy + Broda)", "desc": "Kompleksowa usługa: pełne strzyżenie oraz trymowanie i konturowanie brody.", "time": "1g 15min", "price": "150 zł", "bestseller": true },
            { "name": "Combo Fade + Broda + Wosk", "desc": "Pełen pakiet męskiej pielęgnacji w jednym fotelu.", "time": "1g 25min", "price": "170 zł", "bestseller": false },
            { "name": "Depilacja woskiem (nos / uszy)", "desc": "Szybkie i bezbolesne usunięcie zbędnych włosków.", "time": "15 min", "price": "30 zł", "bestseller": false },
            { "name": "Tuszowanie siwizny brody", "desc": "Naturalny odcień bez sztucznego efektu.", "time": "30 min", "price": "60 zł", "bestseller": false }
          ]
        }
      ],
      note: "Płatność kartą, BLIK i gotówką. Zapisy przez Booksy lub DM."
    },
    team: [
      { "name": "Norman", "role": "Master Barber & Założyciel", "photo": "./img/bones-norman.jpg", "exp": "1000+ Opinii 5.0★", "ig": "https://instagram.com/bones_barber_" },
      { "name": "Szymon", "role": "Senior Barber", "photo": "./img/bones-szymon.jpg", "exp": "Mistrz Skin Fade", "ig": "https://instagram.com/bones_barber_" },
      { "name": "Patryk", "role": "Barber — Beard Stylist", "photo": "./img/bones-patryk.jpg", "exp": "Rzemiosło Brzytwy", "ig": "https://instagram.com/bones_barber_" }
    ],
    gallery: [
      { "src": "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=800&fit=crop", "alt": "Bones Barber Gdańsk", "cap": "Salon Polanki" },
      { "src": "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&h=800&fit=crop", "alt": "Fade Oliwa", "cap": "Skin Fade" },
      { "src": "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&h=800&fit=crop", "alt": "Broda", "cap": "Stylizacja Brody" },
      { "src": "https://images.unsplash.com/photo-1512690459411-b9245aed614b?w=800&h=800&fit=crop", "alt": "Brzytwa", "cap": "Rytuał Brzytwy" },
      { "src": "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&h=800&fit=crop", "alt": "Wnętrze", "cap": "Klimat Oliwa" }
    ],
    reviews: [
      { "name": "Grzegorz N.", "stars": 5, "date": "2026-09", "text": "Ponad tysiąc opinii 5.0 mówi samo za siebie. Chłopaki w Oliwie nie mają sobie równych.", "href": "https://maps.google.com/" },
      { "name": "Damian L.", "stars": 5, "date": "2026-08", "text": "Świetny klimat, kawa i cięcie zawsze na 100%. Mój stały barber od 2 lat.", "href": "https://maps.google.com/" },
      { "name": "Mateusz P.", "stars": 5, "date": "2026-07", "text": "Mega miejscówka, luźna atmosfera i zero sztuczności. Fade zawsze ostry jak brzytwa.", "href": "https://maps.google.com/" }
    ],
    contact: {
      address: "ul. Polanki 83, Klatka B, 80-302 Gdańsk (Oliwa)",
      phone: "+48 515 427 731",
      hours: "Poniedziałek – Piątek 09:00 – 21:00 • Sobota 09:00 – 18:00",
      mapEmbed: "https://maps.google.com/maps?q=ul.+Polanki+83+Gda%C5%84sk&t=&z=16&ie=UTF8&iwloc=&output=embed"
    },
    faq: commonFaq,
    finalCta: {
      h2: "Czas na świeży look",
      sub: "Zarezerwuj wizytę przez Booksy lub napisz bezpośrednio w wiadomości prywatnej.",
      cta: "Zarezerwuj wizytę →"
    }
  },

  {
    id: "starybarber",
    htmlName: "starybarber.html",
    site: {
      city: "Gdańsk",
      district: "Przymorze",
      title: "Stary Barber Shop Gdańsk Przymorze — Tradycyjne Męskie Fryzjerstwo",
      description: "Stary Barber Shop Gdańsk Przymorze — ul. Jagiellońska 10H/1 (pod falowcem). Strzyżenie, broda, combo. Klimat i autentyczne rzemiosło.",
      bookingUrl: "https://starybarbershop.booksy.com",
      bookingProvider: "booksy"
    },
    brand: {
      name: "STARY BARBER SHOP",
      logoImg: "",
      accent: "#C27D38"
    },
    header: {
      phone: "+48 572 888 221",
      phoneLabel: "572 888 221",
      cta: "Zarezerwuj"
    },
    hero: {
      kicker: "Barber Shop • Gdańsk Przymorze",
      h1: "Tradycyjne rzemiosło w kultowym punkcie Przymorza.",
      sub: "Autentyczny klimat, precyzyjne nożyczki, ostre brzytwy. Ul. Jagiellońska 10H/1 pod legendarnym falowcem.",
      ctaPrimary: { "label": "Zarezerwuj wizytę →", "href": "https://starybarbershop.booksy.com" },
      ctaSecondary: { "label": "Zobacz cennik", "href": "#cennik" },
      proof: "4,9/5 — 350+ opinii Booksy & Google",
      ratingValue: 4.9,
      reviewsCount: 350,
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1800&h=1200&fit=crop"
    },
    proofStrip: ["Booksy 4,9 ★★★★★", "Google 4,9 ★★★★★", "Gdańsk Przymorze / Falowiec", "@starybarbershop"],
    trust: commonTrust,
    styles: [
      { "name": "Strzyżenie klasyczne", "price": "100 zł", "img": "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&h=600&fit=crop" },
      { "name": "Combo Włosy + Broda", "price": "140 zł", "img": "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=600&fit=crop" },
      { "name": "Trymowanie brody", "price": "80 zł", "img": "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=600&fit=crop" },
      { "name": "Combo Ojciec + Syn", "price": "170 zł", "img": "https://images.unsplash.com/photo-1512690459411-b9245aed614b?w=600&h=600&fit=crop" }
    ],
    stats: [
      { "value": "4,9", "label": "ocena klientów" },
      { "value": "350+", "label": "opinii Booksy" },
      { "value": "Jagiellońska", "label": "Przymorze falowiec" },
      { "value": "45 min", "label": "precyzyjnej pracy" }
    ],
    steps: [
      { "n": "01", "title": "Wybierz dogodną porę", "text": "Rezerwacja online w Booksy lub telefon bezpośrednio do salonu." },
      { "n": "02", "title": "Przyjdź na Przymorze", "text": "ul. Jagiellońska 10H/1 (przejście pod falowcem). Łatwy dojazd i parking." },
      { "n": "03", "title": "Klasyczne strzyżenie", "text": "Tradycyjne podejście do fryzjerstwa męskiego, zero taśmy produkcyjnej." },
      { "n": "04", "title": "Czysty, świeży zarost", "text": "Płatność kartą, BLIK, gotówką. Przyjazna atmosfera (spotkasz u nas Figę!)." }
    ],
    cennik: {
      kicker: "Cennik Stary Barber Shop",
      title: "Tradycyjna jakość i uczciwe ceny z Booksy",
      groups: [
        {
          name: "Klasyka & Fade",
          items: [
            { "name": "Strzyżenie męskie", "desc": "Klasyczne cięcie nożyczkami i maszynką, mycie głowy oraz stylizacja fryzury.", "time": "45 min", "price": "100 zł", "bestseller": false },
            { "name": "Skin Fade / Cieniowanie", "desc": "Płynne przejście od zera dopasowane do kształtu głowy.", "time": "45 min", "price": "110 zł", "bestseller": true },
            { "name": "Strzyżenie maszynką", "desc": "Jednolita długość maszynką, wykończenie linii karku brzytwą.", "time": "30 min", "price": "60 zł", "bestseller": false },
            { "name": "Strzyżenie nożyczkami (Long Hair)", "desc": "Cięcie dłuższych włosów z zachowaniem naturalnego układania.", "time": "50 min", "price": "120 zł", "bestseller": false }
          ]
        },
        {
          name: "Broda & Trymowanie",
          items: [
            { "name": "Trymowanie i modelowanie brody", "desc": "Skracanie, nadanie konturu brzytwą, gorący ręcznik i olejek.", "time": "35 min", "price": "80 zł", "bestseller": false },
            { "name": "Rytuał golenia brzytwą", "desc": "Gładkie golenie na mokro z ciepłym kompresem i odświeżającą wodą po goleniu.", "time": "40 min", "price": "80 zł", "bestseller": false },
            { "name": "Korekta samych linii zarostu", "desc": "Ostre wyznaczenie krawędzi brody brzytwą.", "time": "20 min", "price": "50 zł", "bestseller": false },
            { "name": "Pielęgnacja brody z balsamem", "desc": "Zmiękczenie twardego zarostu i odżywienie skóry twarzy.", "time": "20 min", "price": "40 zł", "bestseller": false }
          ]
        },
        {
          name: "Pakiety & Ojciec i Syn",
          items: [
            { "name": "Combo (Włosy + Broda)", "desc": "Strzyżenie męskie połączone z pełnym trymowaniem i konturowaniem brody.", "time": "1g 15min", "price": "140 zł", "bestseller": true },
            { "name": "Combo Ojciec i Syn", "desc": "Dwa stanowiska obok siebie i męski czas dla taty z synem.", "time": "1g 30min", "price": "170 zł", "bestseller": false },
            { "name": "Strzyżenie Dziecka (do 10 lat)", "desc": "Cierpliwe, bezstresowe podejście w przyjaznym klimacie.", "time": "35 min", "price": "75 zł", "bestseller": false },
            { "name": "Woskowanie uszy / nos", "desc": "Szybka eliminacja niechcianych włosków.", "time": "15 min", "price": "25 zł", "bestseller": false }
          ]
        }
      ],
      note: "Płatność kartą, BLIK oraz gotówką. Rezerwacja online 24/7."
    },
    team: [
      { "name": "Piotr", "role": "Master Barber & Założyciel", "photo": "./img/stary-piotr.jpg", "exp": "Tradycja Przymorza", "ig": "https://instagram.com/starybarbershop" },
      { "name": "Tomasz", "role": "Senior Barber", "photo": "./img/stary-tomasz.jpg", "exp": "Mistrz Nożyczek", "ig": "https://instagram.com/starybarbershop" },
      { "name": "Marek", "role": "Barber — Beard Specialist", "photo": "./img/stary-marek.jpg", "exp": "Tradycyjne Golenie", "ig": "https://instagram.com/starybarbershop" }
    ],
    gallery: [
      { "src": "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=800&fit=crop", "alt": "Stary Barber Shop Falowiec", "cap": "Salon Przymorze" },
      { "src": "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&h=800&fit=crop", "alt": "Fade Przymorze", "cap": "Skin Fade" },
      { "src": "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&h=800&fit=crop", "alt": "Stylizacja Brody", "cap": "Broda & Kontur" },
      { "src": "https://images.unsplash.com/photo-1512690459411-b9245aed614b?w=800&h=800&fit=crop", "alt": "Golenie Brzytwą", "cap": "Hot Towel Shave" },
      { "src": "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&h=800&fit=crop", "alt": "Klimat Salona", "cap": "Tradycja & Rzemiosło" }
    ],
    reviews: [
      { "name": "Rafał D.", "stars": 5, "date": "2026-09", "text": "Mój ulubiony barber na Przymorzu. Zawsze świetne cięcie, a Figa w salonie robi super klimat!", "href": "https://maps.google.com/" },
      { "name": "Bartek W.", "stars": 5, "date": "2026-08", "text": "Klasyczne podejście, żadnego pośpiechu. Bardzo solidna robota przy combo z brodą.", "href": "https://maps.google.com/" },
      { "name": "Krzysztof M.", "stars": 5, "date": "2026-07", "text": "Świetna miejscówka pod falowcem. Chłopaki znają się na fachu, a broda wygląda perfekcyjnie.", "href": "https://maps.google.com/" }
    ],
    contact: {
      address: "ul. Jagiellońska 10H/1 (przejście pod falowcem), 80-371 Gdańsk",
      phone: "+48 572 888 221",
      hours: "Poniedziałek – Piątek 09:00 – 20:00 • Sobota 09:00 – 16:00",
      mapEmbed: "https://maps.google.com/maps?q=ul.+Jagiello%C5%84ska+10H%2F1+Gda%C5%84sk&t=&z=16&ie=UTF8&iwloc=&output=embed"
    },
    faq: commonFaq,
    finalCta: {
      h2: "Gotowy na klasyczne cięcie?",
      sub: "Wybierz termin przez Booksy lub zadzwoń bezpośrednio do salonu na Jagiellońskiej.",
      cta: "Zarezerwuj wizytę →"
    }
  }
];

// Helper to escape HTML
function escapeHTML(str) {
  if (!str) return '';
  return str.replace(/[&<>'"]/g, tag => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[tag] || tag));
}

// Generate each salon page
newSalons.forEach(salon => {
  let html = indexHtml;

  // Insert custom accent CSS in head to prevent theme flashing
  const accentStyle = `\n<style>:root{--accent:${salon.brand.accent};--line-focus:${salon.brand.accent};}</style>\n`;
  html = html.replace('</head>', `${accentStyle}</head>`);

  // Title & description
  html = html.replace(/<title>.*?<\/title>/i, `<title>${salon.site.title}</title>`);
  html = html.replace(/<meta name="description" content=".*?"\s*\/?>/i, `<meta name="description" content="${salon.site.description}">`);

  // Header Logo
  const parts = salon.brand.name.split(' ');
  const first = parts[0] || '';
  const rest = parts.slice(1).join(' ');
  const staticLogoHtml = `<a class="logo" href="#"><span>${first}</span> ${rest}</a>`;
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

  // Proof in Hero: clean text replacement
  const proofText = `<span><strong>${salon.hero.ratingValue.toString().replace('.', ',')}/5</strong> — ${salon.hero.reviewsCount}+ opinii Booksy & Google</span>`;
  html = html.replace(/<span><strong>4,9\/5<\/strong> — 287 opinii Google<\/span>/i, proofText);

  // Hero circular badge
  const brandUp = salon.brand.name.toUpperCase();
  const locUp = (salon.site.district || salon.site.city).toUpperCase();
  html = html.replace(/<text><textPath href="#hero-badge-circle" startOffset="0">.*?<\/textPath><\/text>/i, `<text><textPath href="#hero-badge-circle" startOffset="0">${brandUp} • ${locUp} • REZERWACJA ONLINE • </textPath></text>`);

  // Static proof strip
  const staticProofStrip = salon.proofStrip.map(t => `<span class="proof-pill"><i data-lucide="check" aria-hidden="true"></i>${t}</span>`).join('');
  html = html.replace(/<div class="container" id="proof-strip"><\/div>/i, `<div class="container" id="proof-strip">${staticProofStrip}</div>`);

  // Static trust grid
  const staticTrustGrid = salon.trust.map(t => `
    <div class="trust-card">
      <div class="trust-icon"><i data-lucide="${t.icon}" aria-hidden="true"></i></div>
      <h3>${t.title}</h3>
      <p>${t.text}</p>
    </div>
  `).join('');
  html = html.replace(/<div class="trust-grid" id="trust-grid"><\/div>/i, `<div class="trust-grid" id="trust-grid">${staticTrustGrid}</div>`);

  // Quote section
  const quoteLoc = salon.site.district === 'Wrzeszcz' ? 'we Wrzeszczu' :
    salon.site.district === 'Śródmieście' ? 'w Śródmieściu' :
    salon.site.district === 'Stare Miasto' ? 'na Starym Mieście' :
    salon.site.district === 'Oliwa' ? 'w Oliwie' :
    salon.site.district === 'Przymorze' ? 'na Przymorzu' :
    `w ${salon.site.district}`;
  html = html.replace(/<blockquote class="edit-accent">.*?<\/blockquote>/i, `<blockquote class="edit-accent">„Najlepszy barber ${quoteLoc}.”</blockquote>`);
  if (salon.reviews && salon.reviews.length > 0) {
    html = html.replace(/<figcaption>.*?<\/figcaption>/i, `<figcaption>${salon.reviews[0].name} · Booksy / Google</figcaption>`);
  }

  // Cennik section
  html = html.replace(/<div class="kicker" id="cennik-kicker">.*?<\/div>/i, `<div class="kicker" id="cennik-kicker">${salon.cennik.kicker}</div>`);
  html = html.replace(/<h2 class="h2" id="cennik-title">.*?<\/h2>/i, `<h2 class="h2" id="cennik-title">${salon.cennik.title}</h2>`);
  html = html.replace(/id="cennik-cta" href="[^"]*"/i, `id="cennik-cta" href="${salon.site.bookingUrl}"`);

  // Pre-bake cennik groups (3 balanced columns filling container)
  const staticCennikHtml = salon.cennik.groups.map(g => `
    <div class="cennik-group">
      <div class="cennik-group-head">
        <h3>${g.name}</h3>
      </div>
      <div class="cennik-list">
        ${g.items.map(it => `
          <div class="cennik-item ${it.bestseller ? 'bestseller' : ''}">
            <div class="cennik-item-main">
              <div class="cennik-item-head">
                <span class="cennik-item-name">${it.name}</span>
                ${it.bestseller ? '<span class="badge-bestseller">Popularne</span>' : ''}
              </div>
              <p class="cennik-item-desc">${it.desc}</p>
              <span class="cennik-item-time"><i data-lucide="clock" aria-hidden="true"></i>${it.time}</span>
            </div>
            <div class="cennik-item-price">${it.price}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
  html = html.replace(/<div class="cennik-wrap" id="cennik-wrap"><\/div>/i, `<div class="cennik-wrap" id="cennik-wrap">${staticCennikHtml}</div>`);

  // Team section: Pre-bake statically!
  // If solo master (length === 1), bake master-spotlight!
  // If team (> 1), bake team-cards!
  if (salon.team.length === 1) {
    const m = salon.team[0];
    const staticMasterHtml = `
      <div class="master-spotlight" id="team-grid">
        <div class="master-spotlight-photo">
          <img src="${m.photo}" alt="${m.name}" loading="lazy">
          <span class="master-spotlight-badge">${m.exp || 'Master Barber'}</span>
        </div>
        <div class="master-spotlight-info">
          <div class="master-spotlight-tag">Indywidualne studio • 1 na 1</div>
          <h3 class="master-spotlight-name">${m.name}</h3>
          <div class="master-spotlight-role">${m.role}</div>
          <p class="master-spotlight-bio">${m.bio || 'Każda wizyta to 100% uwagi poświęconej jednemu klientowi. Zero pośpiechu, zero taśmy produkcyjnej — precyzja geometrii, autorskie cięcia i rzemiosło na najwyższym poziomie.'}</p>
          <div class="master-spotlight-points">
            <div class="master-point"><i data-lucide="scissors" aria-hidden="true"></i><span>Precyzja nożyczek i maszynki</span></div>
            <div class="master-point"><i data-lucide="shield-check" aria-hidden="true"></i><span>100% higieny i sterylne brzytwy</span></div>
            <div class="master-point"><i data-lucide="coffee" aria-hidden="true"></i><span>Świeża kawa przed cięciem</span></div>
            <div class="master-point"><i data-lucide="sparkles" aria-hidden="true"></i><span>Niszowe kosmetyki do brody</span></div>
          </div>
          <div class="master-spotlight-actions">
            <a class="btn btn-primary" href="${salon.site.bookingUrl}">Zarezerwuj u ${m.name.split(' ')[0]} →</a>
            ${m.ig ? `<a class="btn btn-secondary" href="${m.ig}" target="_blank" rel="noopener">Zobacz Instagram</a>` : ''}
          </div>
        </div>
      </div>
    `;
    html = html.replace(/<div class="team-grid" id="team-grid"><\/div>/i, staticMasterHtml);
    html = html.replace(/<h2 class="h2">Twoi barberzy<\/h2>/i, `<h2 class="h2">Mistrz & Założyciel</h2>`);
  } else {
    const staticTeamCards = salon.team.map(m => `
      <div class="team-card">
        <div class="team-photo-wrap">
          <img src="${m.photo}" alt="${m.name}" loading="lazy">
        </div>
        <div class="team-body">
          <h3>${m.name}</h3>
          <div class="role">${m.role}</div>
          <div class="exp">${m.exp} ${m.ig ? `• <a class="team-ig" href="${m.ig}" target="_blank" rel="noopener">Instagram</a>` : ''}</div>
          <a class="team-book-btn" href="${salon.site.bookingUrl}" target="_blank" rel="noopener">Rezerwuj u ${m.name} →</a>
        </div>
      </div>
    `).join('');
    html = html.replace(/<div class="team-grid" id="team-grid"><\/div>/i, `<div class="team-grid" id="team-grid">${staticTeamCards}</div>`);
  }

  // Pre-bake Gallery (5-6 items, fills horizontal container)
  if (salon.gallery && salon.gallery.length > 0) {
    const staticGalleryHtml = salon.gallery.map((g, idx) => `
      <figure class="gallery-frame ${idx === 0 ? 'is-active' : ''}" tabindex="0" role="group" aria-label="${escapeHTML(g.cap || g.alt)}">
        <img src="${g.src}" alt="${escapeHTML(g.alt)}" loading="lazy">
        <div class="gallery-overlay" aria-hidden="true"></div>
        ${g.cap ? `<figcaption class="gallery-cap"><span>${escapeHTML(g.cap)}</span><span class="gallery-zoom-hint"><i data-lucide="maximize-2" style="width:13px;height:13px" aria-hidden="true"></i> Powiększ</span></figcaption>` : ''}
      </figure>
    `).join('');
    html = html.replace(/<div class="gallery-accordion" id="gallery-grid"><\/div>/i, `<div class="gallery-accordion" id="gallery-grid">${staticGalleryHtml}</div>`);
  }

  // Pre-bake Reviews (exactly 3 items, perfectly filling 3-column desktop grid)
  if (salon.reviews && salon.reviews.length > 0) {
    const staticReviewsHtml = salon.reviews.map(r => `
      <div class="review">
        <div class="review-header">
          <div class="review-avatar">${r.name.slice(0, 2).toUpperCase()}</div>
          <div class="stars" aria-label="${r.stars} z 5">${'★'.repeat(r.stars)}</div>
        </div>
        <p>“${escapeHTML(r.text)}”</p>
        <div class="meta"><strong>${escapeHTML(r.name)}</strong> • ${r.date} • <a class="review-link" href="${r.href || 'https://maps.google.com/'}" target="_blank" rel="noopener">Google</a></div>
      </div>
    `).join('');
    html = html.replace(/<div class="reviews-grid" id="reviews-grid"><\/div>/i, `<div class="reviews-grid" id="reviews-grid">${staticReviewsHtml}</div>`);
  }

  // Contact section
  html = html.replace(/<h2 class="h2">Znajdziesz nas na Kazimierzu<\/h2>/i, `<h2 class="h2">Znajdziesz nas: ${salon.site.city} (${salon.site.district})</h2>`);
  html = html.replace(/<h3>Barber Kraków Kazimierz<\/h3>/i, `<h3>${salon.brand.name} • ${salon.site.district}</h3>`);
  html = html.replace(/id="contact-route" href="[^"]*"/i, `id="contact-route" href="https://maps.google.com/?q=${encodeURIComponent(salon.contact.address)}"`);
  html = html.replace(/id="contact-cta" href="[^"]*"/i, `id="contact-cta" href="${salon.site.bookingUrl}"`);
  html = html.replace(/id="contact-phone" href="[^"]*"/i, `id="contact-phone" href="tel:${salon.header.phone.replace(/[^\d+]/g, '')}"`);

  // Google Maps embed
  html = html.replace(/<iframe id="map-iframe".*?><\/iframe>/i, `<iframe id="map-iframe" src="${salon.contact.mapEmbed}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Mapa — ${salon.brand.name}, ${salon.contact.address}" sandbox="allow-scripts allow-same-origin allow-popups"></iframe>`);

  // Final CTA
  html = html.replace(/<h2 id="final-h2">.*?<\/h2>/i, `<h2 id="final-h2">${salon.finalCta.h2}</h2>`);
  html = html.replace(/<p id="final-sub">.*?<\/p>/i, `<p id="final-sub">${salon.finalCta.sub}</p>`);
  html = html.replace(/id="final-cta" href="[^"]*">.*?<\/a>/i, `id="final-cta" href="${salon.site.bookingUrl}">${salon.finalCta.cta}</a>`);
  html = html.replace(/id="final-phone" href="[^"]*">.*?<\/a>/i, `id="final-phone" href="tel:${salon.header.phone.replace(/[^\d+]/g, '')}">Zadzwoń: ${salon.header.phone}</a>`);

  // Footer
  html = html.replace(/<a class="footer-logo" id="footer-logo" href="#">.*?<\/a>/i, `<a class="footer-logo" id="footer-logo" href="#"><span>${salon.brand.name}</span></a>`);
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
      "reviewCount": salon.hero.reviewsCount || 300
    }
  };
  html = html.replace(/<script type="application\/ld\+json" id="ld-json">.*?<\/script>/i, `<script type="application/ld+json" id="ld-json">${JSON.stringify(jsonLd)}</script>`);

  // Meta tags
  html = html.replace(/<meta property="og:title" content=".*?"\s*\/?>/i, `<meta property="og:title" content="${salon.site.title}">`);
  html = html.replace(/<meta property="og:description" content=".*?"\s*\/?>/i, `<meta property="og:description" content="${salon.site.description}">`);
  html = html.replace(/<meta property="og:image" content=".*?"\s*\/?>/i, `<meta property="og:image" content="${salon.hero.image}">`);

  // Script injection right before </body>
  const scriptInjection = `<script>window.__SALON_DATA__ = ${JSON.stringify(salon)};</script>\n<script src="./app.js?v=13"></script>`;
  html = html.replace(/<script src="\.\/app\.js\?v=\d+"[^>]*><\/script>/i, scriptInjection);

  const htmlPath = path.join(baseDir, salon.htmlName);
  fs.writeFileSync(htmlPath, html, 'utf-8');
  console.log(`Generated upgraded: ${salon.htmlName}`);
});

console.log('All 5 upgraded salon prototypes successfully generated!');
