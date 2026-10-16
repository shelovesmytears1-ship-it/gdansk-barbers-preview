# Project brief — barber-template (retro, 2026-10-16)

Ретро-бриф по `site-brief`: фиксирует решение, чтобы дальше не плыть.

## Контекст
- Тип сайта: лендинг-шаблон для перепродажи (один скелет → клоны под салоны).
- Аудитория: владельцы барбершопов в Польше (30–50 лет, ищут клиентов через Google Maps/Instagram, сайта нет или слабый).
- Контекст визита (конечный клиент салона): мужчина 20–40, ищет «barber + dzielnica», сравнивает цены и отзывы, решает за 1–2 минуты.
- Подтверждённые факты: язык PL; бронь через Booksy/Moment/tel; цена шаблона 1290 zł jednorazowo; рассылка email B2B.
- Неизвестные: реальный Booksy-URL клиента (в демо общий); настоящие фото/отзывы (в демо сток); точный город клона.

## Цель
- Главное сообщение: «Męskie strzyżenie bez kompromisów — rezerwacja online 24/7».
- Основная конверсия: клик «Zarezerwuj» (bookingUrl) или «Zadzwoń».
- Ключевое возражение: «а вдруг плохо подстригут / долго / неудобно добраться».
- Доказательства: cennik z czasem, barberzy, opinie Google, galeria prac, stats.

## Направление
- Центральная идея: «premium workshop» — тёмная мастерская, золото, кремовые карточки; condensed-капс Oswald + спокойный sans.
- Визуальный принцип: типографика → воздух → движение → компоненты; глубина hairline-линиями, не тенями.
- Почему подходит: жанр тёмно-золотых барбер-референсов (Pinterest: LEGEND, GOGRIN) = ожидание аудитории.
- Намеренно не используем: glassmorphism, blobs, pill-чипы, параллакс-карусели, стоковые улыбки в команде (заменить своими фото при клоне).
- Референсы: Pinterest-доска пользователя (LEGEND BARBER SHOP — trust-bar, услуги-карточки, stats; GOGRIN — эмблема, icon-ряд услуг); awwwards-кейсы Hale & Crow (один акцент-CTA на экран), The Chair (hairlines вместо теней).

## Production
- Секции (каждая = новый аргумент, IA-проверка 2026-10-16): hero (что/где/CTA) → proof-strip (доверие) → trust-bar (почему мы) → styles (визуальный выбор услуги) → steps / «Jak to działa» (процесс визита) → cennik (цена) → barberzy (люди) → quote (голос клиента) → galeria (доказательство руками) → stats (цифры) → opinie (отзывы) → kontakt (адрес/карта) → faq (возражения) → final CTA.
- Copy-тон: короткий, мужской, конкретный (czas, cena, adres). Без воды.
- Контент и assets: всё из content.json; фото hero/styles/team/gallery — заменить на реальные при клоне (сток только для демо).
- Responsive: 360 / 768 / 1024 / 1280; mobile bottom bar Zadzwoń/Zarezerwuj; filmstrip → 2-col grid <700px; stats 2×2.
- Accessibility: focus-visible, контраст ≥4.5:1, keyboard до CTA, aria-expanded в FAQ, reduced-motion (reveal off, Lenis off, якоря jump).
- Критерии QA: node --check; grep антислоп 0 (кроме комментария); все JS-id в HTML; CTA ведут на bookingUrl либо tel-fallback; PL-диакритика; Lighthouse ≥95/100.

## Анти-паттерны (из провалов)
- Не дублировать аргумент в соседних секциях (trust-bar × «Dlaczego my» → исправлено в steps).
- Не ставить фото вслепую: каждый unsplash-id смотреть глазами перед назначением (кейсы: кресло вместо контура, розовый салон в галерее).
- Не грузить Lucide с defer без retry: иконки молча пропадают (кейс 2026-10-16).
