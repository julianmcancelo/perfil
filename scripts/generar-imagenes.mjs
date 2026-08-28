/* Genera versiones PNG de los recursos SVG para clientes que no
   renderizan SVG (imagen Open Graph en redes, iconos antiguos).
   Se ejecuta antes de `astro build`. */

import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const raiz = new URL("../public/", import.meta.url);

const tareas = [
  { entrada: "og.svg", salida: "og.png", ancho: 1200, alto: 630 },
  { entrada: "favicon.svg", salida: "favicon.png", ancho: 180, alto: 180 },
];

for (const { entrada, salida, ancho, alto } of tareas) {
  const svg = await readFile(new URL(entrada, raiz));
  const png = await sharp(svg, { density: 384 })
    .resize(ancho, alto, { fit: "contain", background: "#ffffff" })
    .png()
    .toBuffer();
  await writeFile(new URL(salida, raiz), png);
  console.log(`[imagenes] ${entrada} -> ${salida} (${ancho}x${alto})`);
}
