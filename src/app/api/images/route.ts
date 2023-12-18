import { getImages } from "../../../lib/data";

export async function GET() {
    const images = await getImages();
    return Response.json({ data: images })
}