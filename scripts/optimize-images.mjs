import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const MIN_SIZE_KB = 100;
const QUALITY = 80;

const images = [
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\cultura\\__culturaAttach.jpg",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\athena-ads\\Cayetano-Social-Extender.gif",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\athena-ads\\Ficohsa-Richmedia.gif",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\galileo\\el_universo.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\cultura\\vida-en-attach-group.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\casos-de-exito\\deposeguro\\deposeguro.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\casos-de-exito\\deposeguro.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\casos-de-exito\\universal\\5d8c3719-01ff-4feb-acb0-081d1d9644d0.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\galileo\\cayetano.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\casos-de-exito\\cajaarequipa.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\galileo\\martech.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\athena-ads\\SBD-Tap-to-Map.gif",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\galileo\\imagen-2-galileo.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\galileo\\apuesta_total.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\casos-de-exito\\apuestatotal.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\nosotros\\carlo-rodriguez-foto.jpg",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\casos-de-exito\\universal\\universal_estrategia.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\cultura\\culturaAttach.jpg",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\home\\portada.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\cultura\\cultura-inspira.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\casos-de-exito\\deposeguro\\deposeguro_elreto.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\cultura\\cultura-banner.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\casos-de-exito\\eluniversal.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\nosotros\\foto-grupal-attach.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\home\\apuesta_total.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\home\\deposeguro.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\nosotros\\fernando-salazar-foto.jpg",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\cultura\\cultura-proposito.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\cultura\\vida-en-attach-group-movil.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\casos-de-exito\\cayetano.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\home\\caja_arequipa.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\casos-de-exito\\cayetano\\cayetano_elreto.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\cultura\\cultura-inspira.jpg",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\cultura\\cultura-innovar.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\casos-de-exito\\apuesta-total-2025\\portada.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\nosotros\\AttachGroup.webp",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\athena-ads\\02.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\casos-de-exito\\universal\\universal_elreto.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\soluciones\\attach-media\\equipo-hibrido---.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\soluciones\\attach-media\\equipo-hibrido.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\cultura\\culturaAttach.webp",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\home\\deposeguro.jpg",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\soluciones\\attach-media\\estructura-metodologias.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\casos-de-exito\\deposeguro\\deposeguro_laestrategia.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\cultura\\cultura-inspira2.webp",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\home\\portada.jpg",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\athena-ads\\14.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\casos-de-exito\\universal-2\\eluniversal_estrategia.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\soluciones\\attach-media\\ui-ux.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\casos-de-exito\\cayetano\\cayetano_estrategia.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\cultura\\cultura-innovar.webp",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\athena-ads\\15.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\soluciones\\attach-media\\analytics-growth.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\prospectia\\image (11).png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\cultura\\nuestro-proposito.webp",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\athena-ads\\05-06.jpg",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\nosotros\\mapa-atatch.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\soluciones\\attach-media\\ia-creativity.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\galileo\\IA-rnterprise.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\soluciones\\attach-media\\influencer-marketing.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\casos-de-exito\\universal\\5d8c3719-01ff-4feb-acb0-081d1d9644d0.jpg",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\athena-ads\\16.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\casos-de-exito\\apuesta-total-ads\\at_elreto.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\soluciones\\attach-media\\seo-geo.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\nosotros\\clientes-desktop.jpg",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\galileo\\martech.jpg",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\nosotros\\clientes-desktop.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\cultura\\programa-2.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\nosotros\\clientes-desktop_.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\cultura\\programa-1.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\nosotros\\carlo-rodriguez-foto.webp",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\athena-ads\\04.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\galileo\\imagen-2-galileo____.webp",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\soluciones\\attach-media\\image 112.webp",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\cultura\\programa-3.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\home\\portada_movil.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\galileo\\IA-rnterprise.jpg",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\athena-ads\\01.jpg",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\nosotros\\contactanos.webp",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\athena-ads\\03.png",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\nosotros\\fernando-salazar-foto.webp",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\galileo\\imagen-2-galileo_.jpg",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\galileo\\imagen-2-galileo.jpg",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\galileo\\____martech.jpg",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\galileo\\imagen-1-galileo_.jpg",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\galileo\\imagen-1-galileo.jpg",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\opengraph\\Casos_de_exito.webp",
  "C:\\Marcos\\Proyectos\\Attach\\attach-group\\public\\images\\galileo\\__infraestructura-cloud.jpg"
];

async function optimize() {
  for (const imgPath of images) {
    if (!fs.existsSync(imgPath)) {
      console.log(`File not found: ${imgPath}`);
      continue;
    }

    const { size } = fs.statSync(imgPath);
    const sizeKB = size / 1024;

    console.log(`Processing ${path.basename(imgPath)} (${sizeKB.toFixed(2)} KB)`);

    try {
      const ext = path.extname(imgPath).toLowerCase();
      let pipeline = sharp(imgPath, { animated: true });

      const tempPath = imgPath + '.tmp';

      if (ext === '.jpg' || ext === '.jpeg') {
        await pipeline.jpeg({ quality: QUALITY, mozjpeg: true }).toFile(tempPath);
      } else if (ext === '.png') {
        await pipeline.png({ quality: QUALITY, compressionLevel: 9 }).toFile(tempPath);
      } else if (ext === '.webp') {
        await pipeline.webp({ quality: QUALITY }).toFile(tempPath);
      } else if (ext === '.gif') {
        // Limited optimization for GIF, mostly stripping metadata
        await pipeline.gif().toFile(tempPath);
      } else {
        console.log(`Skipping unsupported format: ${ext}`);
        continue;
      }

      const { size: newSize } = fs.statSync(tempPath);
      const newSizeKB = newSize / 1024;

      if (newSize < size) {
        fs.renameSync(tempPath, imgPath);
        console.log(`  Success! Reduced to ${newSizeKB.toFixed(2)} KB (${((1 - newSize / size) * 100).toFixed(2)}% saved)`);
      } else {
        fs.unlinkSync(tempPath);
        console.log(`  Optimization didn't reduce size. Keeping original.`);
      }
    } catch (error) {
      console.error(`  Error processing ${path.basename(imgPath)}:`, error.message);
    }
  }
}

optimize();
