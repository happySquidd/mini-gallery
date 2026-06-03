// Edit this file to manage the gallery.
//
// 1. Drop image files into  src/assets/photos/
// 2. Add an entry below for each one.
//
// Using `import.meta.glob` means Astro optimizes every image at build time
// (resizing, modern formats, lazy loading) — you just reference the filename.

const images = import.meta.glob<{ default: ImageMetadata }>(
	"../assets/photos/*.{jpg,jpeg,png,webp,avif}",
	{ eager: true },
);

export interface Photo {
	/** Filename inside src/assets/photos/ */
	src: string;
	/** Describe the image for screen readers & SEO */
	alt: string;
}

// --- Your photos -----------------------------------------------------------
const photos: Photo[] = [
	{ src: "01.jpg", alt: "Placeholder photograph one" },
	{ src: "02.jpg", alt: "Placeholder photograph two" },
	{ src: "03.jpg", alt: "Placeholder photograph three" },
	{ src: "04.jpg", alt: "Placeholder photograph four" },
	{ src: "05.jpg", alt: "Placeholder photograph five" },
	{ src: "06.jpg", alt: "Placeholder photograph six" },
];
// ---------------------------------------------------------------------------

export interface ResolvedPhoto extends Photo {
	image: ImageMetadata;
}

/** Resolves filenames to optimizable image metadata, skipping any that are missing. */
export function getPhotos(): ResolvedPhoto[] {
	return photos.flatMap((photo) => {
		const match = images[`../assets/photos/${photo.src}`];
		if (!match) {
			console.warn(`[photos] No image file found for "${photo.src}" — skipping.`);
			return [];
		}
		return [{ ...photo, image: match.default }];
	});
}
