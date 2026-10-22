# Portfolio personal

Landing page personal hecha con [Astro](https://astro.build) 7, TypeScript estricto y CSS propio.
Salida 100 % estática: sin backend, sin cookies, sin analítica y sin recursos de terceros.

## Ejecutar en local

Requisitos: Node.js 22.23 o superior (recomendado 24, ver `.nvmrc`).

```bash
npm install
npm run dev       # servidor de desarrollo en http://localhost:4321
npm run build     # astro check + compilación en dist/
npm run preview   # sirve dist/ para revisar la versión final
```

## Estructura

```
src/
├── components/     Header, ThemeToggle, Hero, Skills, Projects, ProjectCard, Contact, Footer, Icon
├── data/
│   ├── site.ts     ← nombre, textos, iconos, enlaces y color de acento
│   └── projects.ts ← lista de proyectos (interfaz Project)
├── layouts/        Layout.astro: <head>, SEO, Open Graph, script anti-parpadeo del tema
├── lib/
│   ├── icons.ts    iconos SVG inline (añade aquí los que necesites)
│   ├── brand.ts    genera favicon, icono iOS e imagen Open Graph desde site.ts
│   ├── url.ts      helper para la ruta base (GitHub Pages)
│   └── api.ts      punto de integración reservado para un backend futuro (sin uso)
├── pages/
│   ├── index.astro, privacidad.astro
│   └── favicon.svg.ts, apple-touch-icon.png.ts, og.png.ts  (se generan al compilar)
└── styles/global.css  tokens de diseño (colores, radios, sombras) y estilos base
```

## Qué personalizar

Busca `[PLACEHOLDER]` en el proyecto. Lo esencial:

| Dónde | Qué |
| --- | --- |
| `src/data/site.ts` | Nombre, iniciales del monograma, rol, título y descripción SEO, titular y texto del hero, los 5 iconos, URLs de LinkedIn/GitHub y email. Color de acento (`accent`). |
| `src/data/site.ts` → `hero.photo` | Tu foto: guárdala en `src/assets/foto.jpg`, impórtala (`import foto from "../assets/foto.jpg"`) y pon `photo: foto`. Astro la optimiza al compilar (WebP, varios tamaños). |
| `src/data/projects.ts` | Tus proyectos. Añadir un proyecto = añadir un objeto. Estados: `publicado`, `en-desarrollo`, `proximamente`. La captura es opcional (`image: { src, alt }`). |
| `src/pages/privacidad.astro` | `[TU NOMBRE]` y `[TU EMAIL]`. **Revisa el texto legal** antes de publicar (o pide a alguien que lo revise); es una base orientativa, no asesoramiento jurídico. |
| `astro.config.mjs` | `site`: la URL pública final (o la variable de entorno `SITE_URL`). |

El favicon, el icono para iOS y la imagen para redes sociales (`og.png`) se generan solos a partir de `site.ts`.

### Iconos de la fila bajo el hero

Cada elemento de `quickItems` tiene `label` (tooltip), `icon` (nombre de `src/lib/icons.ts`) y, opcionalmente, `href` para convertirlo en enlace.

## Publicar gratis

Las tres opciones sirven la carpeta `dist/` generada por `npm run build`. Antes de publicar, define la URL real en `site`.

### Cloudflare Pages (recomendado)

1. Sube el proyecto a un repositorio de GitHub.
2. En Cloudflare → *Workers & Pages* → *Create* → *Pages* → conecta el repositorio.
3. Preset: **Astro**. Comando de build: `npm run build`. Directorio de salida: `dist`.
4. Variables de entorno: `SITE_URL=https://tu-proyecto.pages.dev` (o tu dominio).

No hace falta cambiar nada en `astro.config.mjs` (`base` queda en `/`).

### Netlify

1. *Add new site* → *Import an existing project* → elige el repositorio.
2. Build command: `npm run build`. Publish directory: `dist`.
3. Variables de entorno: `SITE_URL=https://tu-sitio.netlify.app` (o tu dominio).

Netlify lee la versión de Node de `.nvmrc`. `base` queda en `/`.

### GitHub Pages

1. En el repositorio: *Settings* → *Pages* → *Source*: **GitHub Actions**.
2. Crea `.github/workflows/deploy.yml`:

   ```yaml
   name: Deploy
   on:
     push:
       branches: [main]
     workflow_dispatch:
   permissions:
     contents: read
     pages: write
     id-token: write
   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v7
         - uses: withastro/action@v6
           env:
             # Sin dominio propio: https://<usuario>.github.io/<repo>
             SITE_URL: https://tu-usuario.github.io
             BASE_PATH: /nombre-del-repo
     deploy:
       needs: build
       runs-on: ubuntu-latest
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       steps:
         - id: deployment
           uses: actions/deploy-pages@v5
   ```

3. Configuración de Astro según el caso:
   - Repositorio normal (`usuario.github.io/repo`): `SITE_URL=https://usuario.github.io` y `BASE_PATH=/repo`.
   - Repositorio `usuario.github.io` o dominio propio: `BASE_PATH=/` (o quita la línea) y `SITE_URL` con tu URL.

Todos los enlaces internos usan `withBase()` (`src/lib/url.ts`), así que funcionan con cualquier `base`.

## Conectar un dominio propio

1. Compra el dominio en cualquier registrador (Cloudflare, Namecheap, etc.).
2. Configúralo en tu plataforma:
   - **Cloudflare Pages**: proyecto → *Custom domains* → *Set up a domain*. Si el dominio ya está en Cloudflare, el DNS se configura solo; si no, añade un `CNAME` a `tu-proyecto.pages.dev`.
   - **Netlify**: *Domain management* → *Add a domain*. Usa el DNS de Netlify o añade un `CNAME` (`www`) a `tu-sitio.netlify.app` y un registro `A` (raíz) a la IP que indique Netlify.
   - **GitHub Pages**: *Settings* → *Pages* → *Custom domain*. En el DNS añade un `CNAME` (`www`) a `usuario.github.io` y cuatro registros `A` para la raíz (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`). Crea también `public/CNAME` con tu dominio y pon `BASE_PATH=/`.
3. Activa HTTPS (las tres plataformas lo hacen gratis y de forma automática).
4. Actualiza `SITE_URL` (o `site` en `astro.config.mjs`) con `https://tu-dominio.com` y vuelve a publicar.

## Modo claro / oscuro

- Por defecto sigue `prefers-color-scheme` del sistema, también en vivo.
- Si el usuario pulsa el interruptor, se guarda solo esa elección en `localStorage` (clave `theme`).
- Un `<script is:inline>` en el `<head>` aplica el tema antes del primer pintado (sin parpadeo).
- Sin JavaScript, la web sigue al sistema y el interruptor se oculta.

## Backend (futuro)

Ahora no hay backend. Si hiciera falta (por ejemplo, un formulario de contacto), se hará con **[BACKEND A CONFIRMAR]**.
La estructura está preparada sin acoplarse a nada: `src/lib/api.ts` y la variable `PUBLIC_API_URL` (`.env.example`).
Nota: un backend o un formulario implicarían tratar datos personales, así que habría que actualizar la página de privacidad.

## Dependencias

- `astro`: el framework.
- `sharp`: optimización de imágenes de Astro (tu foto y las capturas) y generación de `og.png` / `apple-touch-icon.png`. Astro ya lo instala como dependencia opcional; se declara explícitamente para que el build sea fiable en cualquier plataforma.
- `@astrojs/check`, `typescript`, `@types/node` (desarrollo): necesarios para `astro check` y el tipado estricto.

## Calidad

- Lighthouse (móvil): 100 en rendimiento, accesibilidad, buenas prácticas y SEO.
- Accesibilidad: HTML semántico, enlace "Saltar al contenido", foco visible, `aria-label` en el interruptor y el menú, contraste AA en ambos temas, respeta `prefers-reduced-motion`.
- En modo oscuro, el texto pequeño en color de acento usa una versión algo más clara de `#C0506E` (`--accent-ink`) para cumplir el contraste AA; los rellenos y botones usan el color exacto.
