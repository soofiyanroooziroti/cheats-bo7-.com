import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const publicDir = path.join(root, 'public');
const originalPath = path.join(publicDir, 'images', 'logo-original.png');

if (!fs.existsSync(originalPath)) {
  console.error('Missing public/images/logo-original.png — add the full uncropped logo there first.');
  process.exit(1);
}

const SQUARE = 512;
const pad = { r: 0, g: 0, b: 0, alpha: 0 };

const squarePng = await sharp(originalPath)
  .resize(SQUARE, SQUARE, { fit: 'contain', background: pad })
  .png()
  .toBuffer();

await sharp(squarePng).webp({ quality: 86, lossless: false, alphaQuality: 100 }).toFile(path.join(publicDir, 'logo.webp'));

const sizes = [
  { name: 'favicon-32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'favicon-16.png', size: 16 },
  { name: 'favicon-48.png', size: 48 },
];

let faviconPng;
for (const { name, size } of sizes) {
  const png = await sharp(squarePng)
    .resize(size, size, { fit: 'cover', position: 'centre' })
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(publicDir, name), png);
  if (size === 48) faviconPng = png;
}

// An ICO directory with one embedded 48×48 PNG, matching BaseLayout.
const icoHeader = Buffer.alloc(22);
icoHeader.writeUInt16LE(1, 2); // Icon file
icoHeader.writeUInt16LE(1, 4); // One image
icoHeader[6] = icoHeader[7] = 48;
icoHeader.writeUInt16LE(1, 10); // Color planes
icoHeader.writeUInt16LE(32, 12); // Bits per pixel
icoHeader.writeUInt32LE(faviconPng.length, 14);
icoHeader.writeUInt32LE(icoHeader.length, 18);
fs.writeFileSync(path.join(publicDir, 'favicon.ico'), Buffer.concat([icoHeader, faviconPng]));

console.log('Generated logo.webp and favicons from logo-original.png.');
