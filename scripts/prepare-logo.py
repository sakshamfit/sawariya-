"""Create transparent gold web artwork from the supplied logo (requires Pillow)."""
from pathlib import Path
from PIL import Image

root = Path(__file__).resolve().parents[1]
source = Image.open(root / 'assets/sawariya-logo.png').convert('RGB')
# White paper becomes transparent; retain antialiased edges of the dark artwork.
alpha = source.convert('L').point(lambda v: round(max(0, min(1, (248-v)/210))*255))
bounds = alpha.point(lambda v: 255 if v > 100 else 0).getbbox()
alpha = alpha.crop(bounds)
logo = Image.new('RGBA', alpha.size)
pixels = logo.load()
for y in range(logo.height):
    t = 1 - abs(2*y/max(1, logo.height-1)-1)
    color = tuple(round(a+(b-a)*t) for a,b in zip((170,125,54),(242,216,150)))
    for x in range(logo.width):
        pixels[x,y] = (*color, alpha.getpixel((x,y)))
logo.save(root / 'assets/sawariya-logo-gold.png', optimize=True)
print(logo.size)
