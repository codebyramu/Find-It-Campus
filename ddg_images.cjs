async function searchImage(query) {
  const url = `https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`;
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } });
  const text = await res.text();
  const match = text.match(/vqd=([^&]+)/);
  if (!match) return '';
  const vqd = match[1];
  
  const searchUrl = `https://duckduckgo.com/i.js?l=us-en&o=json&q=${encodeURIComponent(query)}&vqd=${vqd}&f=,,,`;
  const imgRes = await fetch(searchUrl, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } });
  const imgData = await imgRes.json();
  if (imgData.results && imgData.results.length > 0) {
    return imgData.results[0].image;
  }
  return '';
}

async function run() {
  const q = ['airpods pro open case dark', 'university student id card lanyard', 'black hydro flask on table', 'data structures algorithms textbook', 'motorcycle keys on table', 'grey nike hoodie folded', 'casio scientific calculator', 'reading glasses black frame'];
  const urls = [];
  for (let i = 0; i < q.length; i++) {
    const url = await searchImage(q[i]);
    console.log(url);
    urls.push(url);
  }
  
  const fs = require('fs');
  const file = 'src/components/LiveFeed.jsx';
  let content = fs.readFileSync(file, 'utf8');

  for (let i = 0; i < urls.length; i++) {
    if (urls[i]) {
       const regex = new RegExp(`id: ${i+1}[\\s\\S]*?image: '([^']+)'`);
       content = content.replace(regex, (match, oldUrl) => {
          return match.replace(oldUrl, urls[i]);
       });
    }
  }

  fs.writeFileSync(file, content);
  console.log("Updated!");
}
run();
