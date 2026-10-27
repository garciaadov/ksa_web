# KSAGA — web personal 

Web estática hecha con [Astro](https://astro.build), TypeScript y CSS propio. Sin backend, sin cookies y sin analítica.
Publicada en **https://ksaga.es** con GitHub Pages.

## Ejecutar en local

Requisitos: Node.js 22.23 o superior.

```bash
npm install
npm run dev       # http://localhost:4321 (se recarga al guardar)
npm run build     # comprueba los tipos y genera la web final en dist/
```

## Dónde está cada cosa

```
src/
├── data/site.ts        ← TODO EL CONTENIDO: datos comunes + textos en español + textos en inglés
├── assets/             ← imágenes (Astro las optimiza al compilar)
│   ├── foto.jpg          foto de la portada
│   ├── logo.png          logo del menú
│   ├── experiencia/      logos de la sección Experiencia
│   └── proyectos/        iconos de los proyectos (Swayfi)
├── components/         ← una pieza por sección de la página, en orden:
│   ├── Header.astro      menú superior + interruptor claro/oscuro
│   ├── Hero.astro        Inicio: foto y presentación
│   ├── Experience.astro  Experiencia: logos en movimiento + botón del CV
│   ├── Projects.astro    Proyectos: tarjetas pequeñas + ficha emergente con descargas
│   ├── Contact.astro     Contactos
│   ├── Footer.astro      pie de página
│   └── Icon.astro        iconos SVG que usan las demás piezas
├── layouts/Layout.astro ← estructura común de las páginas (<head>, SEO, tema)
├── pages/[...lang]/    ← cada archivo es una página, generada una vez por idioma
│   ├── index.astro       ksaga.es/            y ksaga.es/en/
│   └── privacidad.astro  ksaga.es/privacidad/ y ksaga.es/en/privacidad/
└── styles/global.css   ← colores, tamaños y estilos comunes

public/                 ← archivos que se publican tal cual, sin procesar
├── documentos/         ← el CV en PDF
├── favicon.png, apple-touch-icon.png, og.png   iconos e imagen al compartir en redes
├── CNAME               ← dominio ksaga.es (copia que viaja con la web publicada)
└── robots.txt

CNAME                          dominio ksaga.es para GitHub Pages: NO BORRAR (sin él la web da 404)

.github/workflows/deploy.yml   publica la web automáticamente en cada push a main
astro.config.mjs               configuración de Astro (URL de la web)
```

## Cambios habituales

| Quiero… | Dónde |
| --- | --- |
| Cambiar textos, nombre o enlaces | `src/data/site.ts` (los textos están dos veces: bloque `es` y bloque `en`) |
| Cambiar un texto solo en inglés | Bloque `en` de `src/data/site.ts` |
| Cambiar la foto | Sustituir `src/assets/foto.jpg` (mismo nombre) |
| Añadir una experiencia | Logo en `src/assets/experiencia/`, importarlo y añadirlo a `experience` en `site.ts` |
| Actualizar el CV | Sustituir `public/documentos/CV_Aleksey_Garcia_Adov.pdf` (mismo nombre) |
| Añadir un proyecto | Icono en `src/assets/proyectos/`, importarlo y añadir un objeto a `projects` en `site.ts` (nombre, versión, descripción, descargas, repositorio) |
| Nueva versión de Swayfi | Cambiar `version` en `site.ts`; los botones de descarga ya apuntan siempre a la última release |
| Cambiar colores | `accent` en `site.ts`; el resto de colores en `src/styles/global.css` |
| Cambiar el diseño de una sección | Su archivo en `src/components/` (HTML, CSS y JS juntos) |
| Cambiar el favicon o la imagen para redes | Sustituir los PNG de `public/` |

## Idiomas

La web existe en español (`ksaga.es/`) y en inglés (`ksaga.es/en/`). El botón de idioma del menú (ES ⌄) abre la
lista de idiomas y lleva a la versión elegida manteniendo la sección. Para añadir un idioma, añádelo a
`languages` y `languageNames` y crea su bloque de textos. Los textos de cada idioma están en `src/data/site.ts`; el texto legal
de privacidad está en `src/pages/[...lang]/privacidad.astro`. El CV en PDF es el mismo en los dos idiomas.

## Publicar

Cada `git push` a `main` compila y publica la web automáticamente en ksaga.es (unos 2 minutos).
Antes de subir, comprueba que `npm run build` termina sin errores.

En GitHub, **Settings → Pages → Source** debe estar en **GitHub Actions** y el dominio personalizado en `ksaga.es`.

## Dependencias

- `astro`: el framework.
- `sharp`: optimiza las imágenes de `src/assets/`.
- `@astrojs/check` y `typescript` (solo desarrollo): comprueban los tipos en `npm run build`.

## Privacidad

La web no usa cookies ni analítica; solo guarda en el navegador la preferencia de tema claro/oscuro.
El texto legal está en `src/pages/privacidad.astro` (tiene campos `[TU NOMBRE]` y `[TU EMAIL]` por rellenar).
