"use client";

import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";

interface Props {
    data: Array<string>
    selectedAlbum: string
}
export const Albums: FC<Props> = ({ data, selectedAlbum }) => {
    return <div className="flex gap-4 uppercase text-xs pb-10">
        <Album key="all" album={"all"} selectedAlbum={selectedAlbum} />
        {data.map((album) => <Album key={album} album={album} selectedAlbum={selectedAlbum} />)}
    </div>
}

const Album: FC<{ album: string, selectedAlbum: string }> = ({ album, selectedAlbum }) => {
    return <span className={clsx("pb-1", { 'border-b-2 border-black': selectedAlbum === album })}>
        <Link href={`/${album}`}>{album}</Link>
    </span>
}