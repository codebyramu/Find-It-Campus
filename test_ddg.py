import urllib.request
import urllib.parse
import json
import re

def search_ddg(query):
    req_headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}
    url = f"https://html.duckduckgo.com/html/?q={urllib.parse.quote(query)}"
    req = urllib.request.Request(url, headers=req_headers)
    try:
        html = urllib.request.urlopen(req).read().decode('utf-8')
        match = re.search(r'vqd=([^&]+)', html)
        if not match: return None
        vqd = match.group(1)
        search_url = f"https://duckduckgo.com/i.js?l=us-en&o=json&q={urllib.parse.quote(query)}&vqd={vqd}&f=,,,"
        img_req = urllib.request.Request(search_url, headers=req_headers)
        img_data = json.loads(urllib.request.urlopen(img_req).read().decode('utf-8'))
        return img_data['results'][0]['image']
    except Exception as e:
        return None

for q in ["apple airpods pro open case on table", "university lanyard id badge", "hydro flask black water bottle", "textbook on desk", "motorcycle keys", "grey hoodie folded", "casio scientific calculator", "reading glasses on desk"]:
    print(f"{q}: {search_ddg(q)}")
