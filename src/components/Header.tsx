import Image from "next/image"
import Link from "next/link"
import { ReactNode } from "react"

interface Props {
    heading: string
    text?: string
    children?: ReactNode
}

export function Header({
    heading,
    text,
}: Props) {
    return (
        <nav
            className="flex-no-wrap relative flex w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4">
            <div className="flex w-full flex-wrap items-center justify-between px-3">
                <Image src="/manas.png" alt="Manas Parmar" className="h-6" width={40} height={20} />
                <ul
                    className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
                    data-te-navbar-nav-ref>
                    {/* <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                        <Link
                            className="font-semibold text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
                            href="/"
                        >Manas Parmar</Link>
                    </li> */}
                </ul>
            </div>
        </nav>
    )
}