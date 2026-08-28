# Perfil — Julián Manuel Cancelo

Sitio personal de perfil profesional. Página única, estática, con estética
monocroma y tipográfica.

## Stack

- [Astro](https://astro.build/) 4 — salida estática, sin framework de UI
- CSS propio con variables de diseño
- Tipografías Geist y Geist Mono (Google Fonts)

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:4321
```

## Compilar

```bash
npm run build    # genera dist/
npm run preview  # sirve dist/ localmente
```

## Contenido

Todo el contenido editable está en un único archivo:
[`src/data/perfil.ts`](src/data/perfil.ts). No hace falta tocar los
componentes para actualizar textos, proyectos, experiencia o stack.

## Despliegue

Preparado para [Vercel](https://vercel.com/). El framework se detecta
automáticamente (`astro build`, directorio de salida `dist/`). Cada push a
`main` publica una nueva versión.
