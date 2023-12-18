import clsx from "clsx"
import { FC, PropsWithChildren } from "react"

export const Container: FC<PropsWithChildren> = ({ children }) => {
    return <section
        className={clsx(
            'mx-auto px-4 py-12 ',
            'md:py-16 md:px-8',
            'lg:max-w-5xl lg:py-24 lg:px-8'
        )}
    >{children}</section>
}