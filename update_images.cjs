const fs = require('fs');

async function fetchImageUrl(query) {
  const url = `https://unsplash.com/napi/search/photos?query=${query}&per_page=1`;
  const res = await fetch(url);
  const data = await res.json();
  if (data.results && data.results.length > 0) {
    let img = data.results[0].urls.raw;
    return img + '&q=80&w=600&auto=format&fit=crop';
  }
  return '';
}

async function run() {
  const urls = await Promise.all([
    fetchImageUrl('airpods'),
    fetchImageUrl('lanyard'),
    fetchImageUrl('hydroflask'),
    fetchImageUrl('textbook'),
    fetchImageUrl('keys'),
    fetchImageUrl('hoodie'),
    fetchImageUrl('calculator'),
    fetchImageUrl('glasses')
  ]);
  
  const file = 'src/components/LiveFeed.jsx';
  let content = fs.readFileSync(file, 'utf8');

  const newData = `const feedData = [
    {
      id: 1, type: 'FOUND', time: '4m ago', match: '94%', title: 'AirPods Pro 2nd Gen',
      location: 'Library 2F', category: 'Electronics',
      desc: 'White case with small scratch on lid, found near charging station. Left earbud at 80%.',
      status: 'ready',
      image: '${urls[0]}',
    },
    {
      id: 2, type: 'LOST', time: '12m ago', title: 'NITK ID Card + Lanyard',
      location: 'Canteen Block', category: 'ID Cards',
      desc: 'Blue lanyard, ID no. 21CS... Photo slightly faded. Urgent needed for exam entry tomorrow.',
      status: 'open',
      image: '${urls[1]}',
    },
    {
      id: 3, type: 'FOUND', time: '27m ago', match: '76%', title: 'HydroFlask Black 1L',
      location: 'Sports Complex', category: 'Bottles',
      desc: 'Black metal bottle with NITK sticker, few dents. Full of water when found.',
      status: 'open',
      image: '${urls[2]}',
    },
    {
      id: 4, type: 'LOST', time: '1h ago', title: 'Data Structures Textbook',
      location: 'Block A - Lab 204', category: 'Books',
      desc: "CLRS 3rd edition, name written on first page 'Vikram', highlighted chapter 12.",
      status: 'verifying',
      image: '${urls[3]}',
    },
    {
      id: 5, type: 'FOUND', time: '2h ago', match: '88%', title: 'Bike Keys - KTM',
      location: 'Parking Lot', category: 'Keys',
      desc: '2 keys with KTM keychain + small Ganesh idol. Found on ground near slot 42.',
      status: 'ready',
      image: '${urls[4]}',
    },
    {
      id: 6, type: 'LOST', time: '3h ago', title: 'Grey Hoodie - Nike',
      location: 'Auditorium', category: 'Apparel',
      desc: 'Medium size, small coffee stain on cuff. Left after fest rehearsal.',
      status: 'open',
      image: '${urls[5]}',
    },
    {
      id: 7, type: 'FOUND', time: '5h ago', title: 'Scientific Calculator FX-991EX',
      location: 'Block C - Room 301', category: 'Electronics',
      desc: 'Found under the last desk. No cover, scratches on back.',
      status: 'open',
      image: '${urls[6]}',
    },
    {
      id: 8, type: 'LOST', time: '1d ago', title: 'Reading Glasses - Lenskart',
      location: 'Main Gate', category: 'Accessories',
      desc: 'Black frame, blue light filter lenses. Lost near the security check.',
      status: 'closed',
      image: '${urls[7]}',
    }
  ];`;

  content = content.replace(/const feedData = \[[\s\S]*?\];/, newData);
  fs.writeFileSync(file, content);
}
run();
