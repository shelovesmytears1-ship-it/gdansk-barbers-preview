import fs from 'fs';
import path from 'path';

const crmDir = 'C:/Users/deppe/Desktop/working/barber-template/crm';
const leadsPath = path.join(crmDir, 'leads.json');

function loadLeads() {
  if (!fs.existsSync(leadsPath)) return [];
  return JSON.parse(fs.readFileSync(leadsPath, 'utf-8'));
}

function saveLeads(leads) {
  fs.writeFileSync(leadsPath, JSON.stringify(leads, null, 2), 'utf-8');
}

const args = process.argv.slice(2);
const command = args[0] || 'stats';

switch (command) {
  case 'stats': {
    const leads = loadLeads();
    const stats = {};
    for (const lead of leads) {
      stats[lead.status] = (stats[lead.status] || 0) + 1;
    }
    console.log('\n📊 === CRM STATS ===');
    console.log(`Ogółem leadów w bazie: ${leads.length}`);
    console.log(`- Do kontaktu: ${stats['do_kontaktu'] || 0}`);
    console.log(`- Napisano (oczekiwanie): ${stats['napisano'] || 0}`);
    console.log(`- Odpowiedzieli (rozmowa): ${stats['odpowiedzieli'] || 0}`);
    console.log(`- Odrzucili: ${stats['odrzucili'] || 0}`);
    console.log(`- Kupili (sukces / płatność): ${stats['kupili'] || 0}\n`);
    break;
  }

  case 'next': {
    const count = parseInt(args[1] || '5', 10);
    const leads = loadLeads();
    const pending = leads.filter(l => l.status === 'do_kontaktu').slice(0, count);
    
    if (pending.length === 0) {
      console.log('\n✅ Wszystkie leady z bazy zostały już skontaktowane!');
      break;
    }

    console.log(`\n🎯 Kolejne ${pending.length} leadów do kontaktu:`);
    for (const l of pending) {
      console.log(`----------------------------------------`);
      console.log(`[#${l.id}] ${l.name} (${l.address})`);
      console.log(`📞 Tel: ${l.phone}`);
      if (l.instagram) console.log(`📸 IG: ${l.instagram} (${l.instagramUrl || 'brak linku'})`);
      if (l.landingUrl) console.log(`🌐 Dedykowane demo: ${l.landingUrl}`);
      if (l.whatsappUrl) console.log(`📲 WhatsApp 1-Click: ${l.whatsappUrl}`);
    }
    console.log(`----------------------------------------\n`);
    break;
  }

  case 'update': {
    const id = parseInt(args[1], 10);
    const newStatus = args[2];
    const note = args.slice(3).join(' ') || '';

    const validStatuses = ['do_kontaktu', 'napisano', 'odpowiedzieli', 'odrzucili', 'kupili'];
    if (!validStatuses.includes(newStatus)) {
      console.error(`❌ Błędny status. Dostępne: ${validStatuses.join(', ')}`);
      process.exit(1);
    }

    const leads = loadLeads();
    const lead = leads.find(l => l.id === id);
    if (!lead) {
      console.error(`❌ Nie znaleziono leada o ID ${id}`);
      process.exit(1);
    }

    lead.status = newStatus;
    lead.statusNote = note;
    lead.lastContactDate = new Date().toISOString().slice(0, 10);
    lead.history.push({
      date: new Date().toISOString(),
      status: newStatus,
      note: note
    });

    saveLeads(leads);
    console.log(`✅ Zaktualizowano #${lead.id} [${lead.name}] -> ${newStatus} (${note})`);
    break;
  }

  case 'list': {
    const filterStatus = args[1];
    const leads = loadLeads();
    const filtered = filterStatus ? leads.filter(l => l.status === filterStatus) : leads;
    console.log(`\n📋 Lista (${filtered.length}):`);
    for (const l of filtered) {
      console.log(`[#${l.id}] [${l.status.toUpperCase()}] ${l.name} | ${l.phone} | ${l.address}`);
    }
    console.log('');
    break;
  }

  case 'add': {
    const name = args[1];
    const phone = args[2];
    const address = args[3] || '';
    const instagram = args[4] || '';

    if (!name || !phone) {
      console.error('❌ Użycie: node crm.mjs add <Nazwa> <Telefon> [Adres] [Instagram]');
      process.exit(1);
    }

    const leads = loadLeads();
    const cleanPhone = phone.replace(/[^\d+]/g, '');
    const normName = name.toLowerCase().replace(/[^a-z0-9]/g, '');

    const duplicate = leads.find(l => {
      const lClean = l.phone.replace(/[^\d+]/g, '');
      const lNorm = l.name.toLowerCase().replace(/[^a-z0-9]/g, '');
      return lClean === cleanPhone || lNorm === normName;
    });

    if (duplicate) {
      console.log(`⚠️ DUPLIKAT WYKRYTY! Ten salon już istnieje w bazie:`);
      console.log(`[#${duplicate.id}] ${duplicate.name} | Status: ${duplicate.status} | Tel: ${duplicate.phone}`);
      console.log(`Nie dodano.`);
      break;
    }

    const nextId = leads.length > 0 ? Math.max(...leads.map(l => l.id)) + 1 : 1;
    const newLead = {
      id: nextId,
      name,
      address,
      phone,
      instagram,
      instagramUrl: instagram ? `https://ig.me/m/${instagram.replace('@', '')}` : '',
      whatsappUrl: `https://wa.me/${cleanPhone.replace('+', '')}`,
      landingUrl: 'https://barber-template-theta.vercel.app/',
      status: 'do_kontaktu',
      statusNote: 'Dodano ręcznie',
      lastContactDate: null,
      history: [{ date: new Date().toISOString(), status: 'do_kontaktu', note: 'Dodano do bazy' }]
    };

    leads.push(newLead);
    saveLeads(leads);
    console.log(`✅ Dodano nowego leada: #${newLead.id} [${newLead.name}] | ${newLead.phone}`);
    break;
  }

  default:
    console.log('Komendy: stats | next [N] | update <id> <status> [notatka] | list [status] | add <nazwa> <tel> [adres]');
}
