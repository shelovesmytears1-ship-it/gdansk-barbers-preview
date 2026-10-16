async function run() {
  const query = `[out:json][timeout:30];
area["name"="Gdańsk"]["admin_level"="8"]->.gda;
(
  node["shop"="hairdresser"](area.gda);
  way["shop"="hairdresser"](area.gda);
  node["amenity"="barber"](area.gda);
);
out tags 300;`;

  const url = 'https://overpass-api.de/api/interpreter';
  console.log('Fetching from Overpass with proper User-Agent...');
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    },
    body: 'data=' + encodeURIComponent(query)
  });

  const data = await res.json();
  console.log('Total elements received:', data.elements ? data.elements.length : 0);

  const leads = [];
  for (const el of (data.elements || [])) {
    const t = el.tags || {};
    const name = t.name;
    const phone = t.phone || t['contact:phone'] || t['contact:mobile'];
    const website = t.website || t['contact:website'];

    // We want businesses with a phone number, but NO website!
    if (name && phone && !website) {
      const street = t['addr:street'] ? `${t['addr:street']} ${t['addr:housenumber'] || ''}`.trim() : '';
      const city = t['addr:city'] || 'Gdańsk';
      leads.push({
        name,
        phone,
        address: street ? `${street}, ${city}` : city,
        opening_hours: t.opening_hours || 'Brak danych'
      });
    }
  }

  console.log('Leads with phone and NO website:', leads.length);
  require('fs').writeFileSync('leads_gdansk.json', JSON.stringify(leads, null, 2));
}

run().catch(console.error);
