import { ImagesWithAlbums } from "../types";
import cloudinary from "./cloudinary";
import { getDataUrl } from "./utils";

let cachedImagesWithAlbums: ImagesWithAlbums | null = null;

export async function getImages() {
    if (cachedImagesWithAlbums) return cachedImagesWithAlbums;
    const results = await cloudinary.v2.search
        .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
        .sort_by('public_id', 'desc')
        .max_results(400)
        .execute();

    const dataUrls = await Promise.all(results.resources.map(async (file: any) => {
        return await getDataUrl(file.public_id)
    }));

    const imagesWithAlbums: ImagesWithAlbums = {}

    results.resources.forEach((image: any, index: number) => {
        const [folder, caption = "no-caption"] = image.filename.split("_");
        const album = caption !== 'no-caption' ? folder : "unknown"

        if (!imagesWithAlbums[album]) {
            imagesWithAlbums[album] = []
        }
        imagesWithAlbums[album].push({ ...image, blurDataUrl: dataUrls[index] })
    })

    Object.keys(imagesWithAlbums).forEach((album) => {
        imagesWithAlbums[album] = imagesWithAlbums[album].map((image, index) => {
            image.id = index;
            return image;
        });
    });
    cachedImagesWithAlbums = imagesWithAlbums;
    return imagesWithAlbums;
}

