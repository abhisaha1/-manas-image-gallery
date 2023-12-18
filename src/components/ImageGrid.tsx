'use client'

import Lightbox from "yet-another-react-lightbox";
import clsx from 'clsx'
import { CldImage } from 'next-cloudinary';
// import Loading from '@/app/loading_'
import { Suspense, useState } from 'react'
import { ImageProps } from '../types';
import Link from 'next/link';
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";


export default function ImageGrid({ data }: { data: Array<ImageProps> }) {
    const [index, setIndex] = useState(-1);
    return (
        <Suspense>
            <main
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            // className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'
            // className={clsx(
            //     'mt-4 columns-1 gap-x-4 gap-y-4',
            //     'md:columns-3 lg:gap-x-4',
            //     'lg:columns-3 lg:gap-x-4 lg:gap-y-4',
            // )}
            >
                {data.map(({ height, width, public_id, blurDataUrl }, index) => (
                    <Link className="flex items-center bg-slate-800 p-4 rounded-sm" key={public_id} href="#" onClick={(e) => {
                        e.preventDefault();
                        setIndex(index)
                    }}>
                        <CldImage
                            width={Number(width)}
                            height={Number(height)}
                            src={public_id}
                            sizes="(min-width: 640px) 50vw, (min-width: 768px) 33.3vw, 100vw"
                            alt="Description of my image"
                            // className='mt-4 md:mt-4 lg:mt-4'
                            placeholder="blur"
                            blurDataURL={blurDataUrl}
                            loading='lazy'
                            format='avif'
                            quality={80}
                        />
                    </Link>
                ))}
            </main>
            <Lightbox
                index={index}
                slides={data.map(image => {
                    return {
                        src: `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${image.public_id}.webp`,
                        width: Number(image.width),
                        height: Number(image.height),
                        title: image.album,
                        description: image.caption
                    }
                })}
                plugins={[Thumbnails, Captions]}
                open={index >= 0}
                close={() => setIndex(-1)}
            />
        </Suspense>
    )
}
