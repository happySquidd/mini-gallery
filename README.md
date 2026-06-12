# Minimalistic Photo

A minimal photography portfolio built with [Astro](https://astro.build). A clean,
dark, responsive landscape gallery with a fullscreen lightbox — designed for
nature, landscape, and sunset work.

## Features

- **Landscape gallery** — a responsive grid of wide 3:2 tiles that flows down the
  page and adapts from one to two columns across screen sizes.
- **Fullscreen lightbox** — click any photo to open it; every image fits the
  screen with no scrolling, regardless of orientation. Navigate with the arrow
  keys or the on-screen controls.
- **Optimized images** — Astro resizes every photo and serves modern formats
  (WebP/AVIF) at build time, so the site stays fast.
- **Three pages** — gallery (home), about, and contact.

## Adding photos

Two steps, no code:

1. Drop your image files into [`src/assets/photos/`](src/assets/photos/)
   (`.jpg`, `.jpeg`, `.png`, `.webp`, or `.avif`).
2. Add an entry for each one in [`src/data/photos.ts`](src/data/photos.ts):

   ```ts
   const photos: Photo[] = [
     { src: "sunset.jpg", alt: "Sun setting over the dunes" },
     // ...
   ];
   ```

The `alt` text is used for screen readers and SEO, so describe each shot. Photos
work best as landscape; portrait images get center-cropped to fit the grid.

## Project structure

```text
src/
├── assets/photos/      # your image files
├── components/
│   ├── Gallery.astro   # the responsive landscape grid
│   └── Lightbox.astro  # the fullscreen viewer
├── data/
│   └── photos.ts       # the photo list (edit this to manage the gallery)
├── layouts/
│   └── Base.astro      # shared page shell, nav, and global styles
└── pages/              # index (gallery), about, contact
```

## Commands

Run from the project root:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start the dev server at `localhost:4321`     |
| `npm run build`   | Build the production site to `./dist/`       |
| `npm run preview` | Preview the production build locally         |

Requires Node `>=22.12.0`.
