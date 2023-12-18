import { Albums } from "../../components/Albums";
import { getImages } from "../../lib/data";
import { Container } from "../../components/Container";
import ImageGrid from "../../components/ImageGrid";

export default async function Page({ params }: { params: { album: string } }) {
    const data = await getImages();
    const selectedAlbum = params.album;

    const images = params.album === "all" ? Object.values(data).flat() : data[params.album];
    return <>
        <Albums data={Object.keys(data)} selectedAlbum={selectedAlbum} />
        <ImageGrid data={images} />
    </>
}