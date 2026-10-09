const fs = require('fs');
const file = 'src/components/LiveFeed.jsx';
let content = fs.readFileSync(file, 'utf8');

const newData = `const feedData = [
  {
    id: 1, type: 'FOUND', time: '4m ago', match: '94%', title: 'AirPods Pro 2nd Gen',
    location: 'Library 2F', category: 'Electronics',
    desc: 'White case with small scratch on lid, found near charging station. Left earbud at 80%.',
    status: 'ready',
    image: 'https://images.unsplash.com/photo-1606220838315-056192d5e927?q=80&w=600&auto=format&fit=crop', // AirPods
  },
  {
    id: 2, type: 'LOST', time: '12m ago', title: 'NITK ID Card + Lanyard',
    location: 'Canteen Block', category: 'ID Cards',
    desc: 'Blue lanyard, ID no. 21CS... Photo slightly faded. Urgent needed for exam entry tomorrow.',
    status: 'open',
    image: 'https://images.unsplash.com/photo-pbSh1vv69xE?q=80&w=600&auto=format&fit=crop', // Lanyard
  },
  {
    id: 3, type: 'FOUND', time: '27m ago', match: '76%', title: 'HydroFlask Black 1L',
    location: 'Sports Complex', category: 'Bottles',
    desc: 'Black metal bottle with NITK sticker, few dents. Full of water when found.',
    status: 'open',
    image: 'https://images.unsplash.com/photo--qAVQodEMpA?q=80&w=600&auto=format&fit=crop', // Hydroflask
  },
  {
    id: 4, type: 'LOST', time: '1h ago', title: 'Data Structures Textbook',
    location: 'Block A - Lab 204', category: 'Books',
    desc: "CLRS 3rd edition, name written on first page 'Vikram', highlighted chapter 12.",
    status: 'verifying',
    image: 'https://images.unsplash.com/photo-f80d5O78Bmo?q=80&w=600&auto=format&fit=crop', // Book
  },
  {
    id: 5, type: 'FOUND', time: '2h ago', match: '88%', title: 'Bike Keys - KTM',
    location: 'Parking Lot', category: 'Keys',
    desc: '2 keys with KTM keychain + small Ganesh idol. Found on ground near slot 42.',
    status: 'ready',
    image: 'https://images.unsplash.com/photo-xhTZG7Ji4gs?q=80&w=600&auto=format&fit=crop', // Keys
  },
  {
    id: 6, type: 'LOST', time: '3h ago', title: 'Grey Hoodie - Nike',
    location: 'Auditorium', category: 'Apparel',
    desc: 'Medium size, small coffee stain on cuff. Left after fest rehearsal.',
    status: 'open',
    image: 'https://images.unsplash.com/photo-FWhedlR-NB0?q=80&w=600&auto=format&fit=crop', // Hoodie
  },
  {
    id: 7, type: 'FOUND', time: '5h ago', title: 'Scientific Calculator FX-991EX',
    location: 'Block C - Room 301', category: 'Electronics',
    desc: 'Found under the last desk. No cover, scratches on back.',
    status: 'open',
    image: 'https://images.unsplash.com/photo-gJln0QRp3Bw?q=80&w=600&auto=format&fit=crop', // Calculator
  },
  {
    id: 8, type: 'LOST', time: '1d ago', title: 'Reading Glasses - Lenskart',
    location: 'Main Gate', category: 'Accessories',
    desc: 'Black frame, blue light filter lenses. Lost near the security check.',
    status: 'closed',
    image: 'https://images.unsplash.com/photo-CjMhwsnG8D4?q=80&w=600&auto=format&fit=crop', // Glasses
  }
];`;

content = content.replace(/const feedData = \[[\s\S]*?\];/, newData);
fs.writeFileSync(file, content);
