const fs = require('fs');

async function fetchImageUrl(query) {
  const url = `https://unsplash.com/napi/search/photos?query=${query}&per_page=1`;
  const res = await fetch(url);
  if (!res.ok) {
    console.error('Failed for', query, res.status);
    return '';
  }
  const data = await res.json();
  if (data.results && data.results.length > 0) {
    let img = data.results[0].urls.raw;
    return img + '&q=80&w=600&auto=format&fit=crop';
  }
  return '';
}

async function run() {
  const q = ['airpods', 'lanyard id card', 'hydroflask bottle black', 'textbook', 'keys', 'hoodie', 'scientific calculator', 'glasses'];
  const urls = [];
  for (let i = 0; i < q.length; i++) {
    urls.push(await fetchImageUrl(q[i]));
    await new Promise(r => setTimeout(r, 1500)); // 1.5s delay to avoid rate limit
  }
  
  const file = 'src/components/LiveFeed.jsx';
  let content = fs.readFileSync(file, 'utf8');

  for (let i = 0; i < urls.length; i++) {
    if (urls[i]) {
       // We replace the image: '...' line in LiveFeed.jsx for the given id
       // The IDs are 1 to 8. We can use a regex to target the specific block.
       const regex = new RegExp(`id: ${i+1}[\\s\\S]*?image: '([^']+)'`);
       content = content.replace(regex, (match, oldUrl) => {
          return match.replace(oldUrl, urls[i]);
       });
    }
  }

  fs.writeFileSync(file, content);
  console.log("Images updated successfully!");
}
run();
