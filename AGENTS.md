# AGENTS.md — portfolio-asha

## Stack
- **Framework:** Astro v5 (SSG, static output)
- **Estilos:** Tailwind CSS v4 (`@tailwindcss/vite` + `@tailwindcss/typography`)
- **Iconos:** `@lucide/astro` (componentes Astro, importar como `import { IconName } from '@lucide/astro'`)
- **Tipografía:** Geist Mono Variable, Space Grotesk (Google Fonts + Fontsource)
- **Content:** Colecciones Astro (`src/content/`) con schemas Zod
- **Linter:** ESLint + typescript-eslint
- **Formateo:** Prettier (`prettier-plugin-astro`, `prettier-plugin-tailwindcss`)
- **Gestor de paquetes:** Bun
- **Lenguaje:** TypeScript, Astro, Markdown (`.md`/`.mdx`)

## Comandos
```bash
bun run dev       # astro dev — servidor de desarrollo
bun run build     # astro build — build de producción (static)
bun run preview   # astro preview — previsualizar build
bun run lint      # eslint . — análisis de código
```

## Convenciones del proyecto

### Componentes Astro (`src/components/`)
- Archivos `.astro` con frontmatter en `---` al inicio.
- Props vía `interface Props { ... }` y `const { prop } = Astro.props`.
- No usar React/JSX. Todo es Astro puro.
- Clases CSS: usar `class` (no `className`).

### Estilos (Tailwind v4)
- Tema definido en `src/index.css` vía `@theme { ... }`.
- Tokens disponibles: `--color-background`, `--color-font`, `--color-accent`, `--color-border`.
- Usar `bg-background`, `text-font`, `border-border`, etc.
- No crear archivos CSS adicionales sin necesidad.

### Contenido (`src/content/`)
- Colecciones: `projects`, `blogs`.
- Schemas en `src/content/config.ts`.
- Frontmatter de cada `.md` debe coincidir con el schema Zod.

### Páginas dinámicas (`src/pages/[collection]/[slug].astro`)
- Usan `getStaticPaths()` + `getCollection()` para generar rutas.
- Importan `Header` y `Footer` con extensión `.astro` explícita.

### Git
- Commits concisos, en español.
- No commitear `dist/`, `node_modules/`, `.astro/`.
- Ramas: features desde `main`.

## Flujo de trabajo
1. **Plan**: identificar archivos a modificar, hacer una lectura dirigida.
2. **Implementar**: cambios pequeños, idiomáticos, siguiendo convenciones Astro/Tailwind.
3. **Verificar**: `bun run build` obligatorio tras cada cambio. Si el build falla, corregir antes de continuar.

## Guardrails
- **No JSX/React**. Este proyecto migró de React a Astro puro. No reintroducir dependencias React.
- **No CSS extra**. Usar Tailwind. Si se necesita un estilo global, va en `src/index.css`.
- **No dependencias innecesarias**. Mantener ligero el proyecto.
- **Build es la validación canónica**. Si `bun run build` pasa, el cambio es correcto.
