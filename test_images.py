import urllib.request
import urllib.parse
import json

queries = [
    "AirPods",
    "Lanyard",
    "Hydro Flask",
    "Textbook",
    "Car keys",
    "Hoodie",
    "Calculator",
    "Glasses"
]

req_headers = {'User-Agent': 'Mozilla/5.0'}

results = []
for q in queries:
    url = f"https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&titles={urllib.parse.quote(q)}&pithumbsize=600"
    req = urllib.request.Request(url, headers=req_headers)
    try:
        data = json.loads(urllib.request.urlopen(req).read().decode('utf-8'))
        pages = data['query']['pages']
        for page_id in pages:
            if 'thumbnail' in pages[page_id]:
                print(f"{q}: {pages[page_id]['thumbnail']['source']}")
                results.append(pages[page_id]['thumbnail']['source'])
            else:
                print(f"{q}: No image found")
                results.append(None)
    except Exception as e:
        print(e)
