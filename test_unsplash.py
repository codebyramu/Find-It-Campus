import urllib.request
urls = [
    'https://images.unsplash.com/photo-1606220838315-056192d5e927?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1588666305619-3574a44101e4?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1582139329536-e7284fece509?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?q=80&w=600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=600&auto=format&fit=crop'
]
for i, url in enumerate(urls):
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        res = urllib.request.urlopen(req)
        print(f"Image {i+1}: Success, Type: {res.headers.get('Content-Type')}")
    except Exception as e:
        print(f"Image {i+1}: Failed - {e}")
