import fs from 'fs';
import path from 'path';

const baseDir = 'C:/Users/deppe/Desktop/working/barber-template';
const mdPath = path.join(baseDir, 'LEADS_GDANSK_50.md');
const crmDir = path.join(baseDir, 'crm');
const outJson = path.join(crmDir, 'leads.json');

if (!fs.existsSync(crmDir)) {
  fs.mkdirSync(crmDir, { recursive: true });
}

const content = fs.readFileSync(mdPath, 'utf-8');
const lines = content.split('\n');

const leads = [];

for (const line of lines) {
  const trimmed = line.trim();
  if (!trimmed.startsWith('|') || trimmed.includes('Nazwa salonu') || trimmed.includes('---|')) continue;

  const cols = trimmed.split('|').map(c => c.trim());
  // Split creates empty first and last elements if line starts and ends with |
  const parts = cols.filter((_, idx) => idx > 0 && idx < cols.length - 1);
  if (parts.length >= 6) {
    const id = parseInt(parts[0], 10);
    if (isNaN(id)) continue;

    const rawName = parts[1].replace(/\*\*/g, '').trim();
    const address = parts[2];
    
    // WhatsApp markdown link [📲 Napisz WA](url)
    const waMatch = parts[3].match(/\((https:\/\/[^)]+)\)/);
    const waUrl = waMatch ? waMatch[1] : '';

    // Instagram link [@handle](url)
    const igHandleMatch = parts[4].match(/\[(.*?)\]/);
    const igUrlMatch = parts[4].match(/\((https:\/\/[^)]+)\)/);
    const instagramHandle = igHandleMatch ? igHandleMatch[1] : '';
    const instagramUrl = igUrlMatch ? igUrlMatch[1] : '';

    // Phone
    const phone = parts[5].replace(/`/g, '').trim();

    // Google Maps
    const mapsMatch = parts[6] ? parts[6].match(/\((https:\/\/[^)]+)\)/) : null;
    const mapsUrl = mapsMatch ? mapsMatch[1] : '';

    // Link customized landing pages for the top 6 salons
    let landingUrl = '';
    const norm = rawName.toLowerCase();
    if (norm.includes('tip top')) {
      landingUrl = 'https://barber-template-theta.vercel.app/tiptop.html';
    } else if (norm.includes('barber zone')) {
      landingUrl = 'https://barber-template-theta.vercel.app/barberzone.html';
    } else if (norm.includes('walk in')) {
      landingUrl = 'https://barber-template-theta.vercel.app/walkin.html';
    } else if (norm.includes('love hair')) {
      landingUrl = 'https://barber-template-theta.vercel.app/lovehair.html';
    } else if (norm.includes('buongiorno') && norm.includes('oliwa')) {
      landingUrl = 'https://barber-template-theta.vercel.app/buongiorno-oliwa.html';
    } else if (norm.includes('buongiorno') && norm.includes('morena')) {
      landingUrl = 'https://barber-template-theta.vercel.app/buongiorno-morena.html';
    } else {
      landingUrl = 'https://barber-template-theta.vercel.app/';
    }

    leads.push({
      id,
      name: rawName,
      address,
      phone,
      instagram: instagramHandle,
      instagramUrl,
      whatsappUrl: waUrl,
      mapsUrl,
      landingUrl,
      status: 'do_kontaktu', // 'do_kontaktu' | 'napisano' | 'odpowiedzieli' | 'odrzucili' | 'kupili'
      statusNote: '',
      lastContactDate: null,
      history: []
    });
  }
}

console.log(`Successfully parsed ${leads.length} leads.`);
fs.writeFileSync(outJson, JSON.stringify(leads, null, 2), 'utf-8');
console.log(`Saved to ${outJson}`);
