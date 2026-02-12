import sharp from 'sharp';
import fs from 'fs';

const images = [
  "public/images/athena-ads/01.jpg",
  "public/images/athena-ads/02.png",
  "public/images/athena-ads/03.png",
  "public/images/athena-ads/04.png",
  "public/images/athena-ads/05.jpg",
  "public/images/athena-ads/06.png",
  "public/images/athena-ads/07.png",
  "public/images/athena-ads/05-06.jpg",
  "public/images/casos-de-exito/Apuestathenads1.webp",
  "public/images/cultura/cultura-inspira.jpg",
  "public/images/casos-de-exito/deposeguro.webp",
  "public/images/casos-de-exito/apuestatotal.webp",
  "public/images/casos-de-exito/cayetano.webp",
  "public/images/casos-de-exito/universal/5d8c3719-01ff-4feb-acb0-081d1d9644d0.jpg",
  "public/images/cultura/instagram.png",
  "public/images/cultura/linkedin.png",
  "public/images/cultura/check_circle.svg"
];

async function getDimensions() {
  const results = [];
  for (const img of images) {
    if (!fs.existsSync(img)) {
      results.push(`${img}: NOT FOUND`);
      continue;
    }
    try {
      const metadata = await sharp(img).metadata();
      results.push(`${img}: ${metadata.width}x${metadata.height}`);
    } catch (e) {
      results.push(`${img}: ERROR - ${e.message}`);
    }
  }
  fs.writeFileSync('image_dimensions.txt', results.join('\n'));
  console.log('Results written to image_dimensions.txt');
}

getDimensions();
