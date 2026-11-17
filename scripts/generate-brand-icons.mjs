import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const publicDir = path.join(root, 'public');
const sourceCandidates = [
  path.join(root, 'bo7-logo-orange-512.webp'),
  path.join(root, 'bo7-logo-orange-512.png'),
  path.join(publicDir, 'bo7-logo-orange-512.webp'),
];

const sourcePath = sourceCandidates.find((p) => fs.existsSync(p));

if (!sourcePath) {
  console.error('Missing bo7-logo-orange-512.webp (or .png) in project root or public/.');
  process.exit(1);
}

const squarePng = await sharp(sourcePath).resize(512, 512, { fit: 'cover' }).png().toBuffer();

await sharp(sourcePath)
  .webp({ quality: 86, lossless: false, alphaQuality: 100 })
  .toFile(path.join(publicDir, 'bo7-logo-orange-512.webp'));

for (const { name, size } of [
  { name: 'favicon-32.png', size: 32 },
  { name: 'favicon-64.png', size: 64 },
]) {
  const png = await sharp(squarePng).resize(size, size, { fit: 'cover' }).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, name), png);
}

console.log('Updated bo7-logo-orange-512.webp, favicon-32.png, and favicon-64.png.');