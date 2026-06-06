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
	{ src: "lightning.jpg", alt: "Lightning strike over the ocean" },
	{ src: "sunset_beach.jpg", alt: "Sunset at the beach" },
	{ src: "golden_gate_coast.jpg", alt: "West coast view" },
	{ src: "dolphins.jpg", alt: "Dolphins playing in the waves" },
	{ src: "tahoe.jpg", alt: "Lake Tahoe surrounded by mountains" },
	{ src: "sunset_plane.jpg", alt: "Airplane flying through a sunset" },
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
