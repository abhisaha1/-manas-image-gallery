import SpinnerIcon from '@/icons/Spinner'
import { Container } from '../../components/Container'
import ImageGrid from '../../components/ImageGrid'
import { Albums } from '../../components/Albums'

export default function Loading() {
    return (
        <Container>
            <div className="flex gap-4 uppercase text-xs">
                <div className="animate-pulse rounded-md bg-primary/10 h-4 w-[50px]"></div>
                <div className="animate-pulse rounded-md bg-primary/10 h-4 w-[50px]"></div>
                <div className="animate-pulse rounded-md bg-primary/10 h-4 w-[50px]"></div>
            </div>
            <ImageGrid data={[]} />
        </Container>
    )
}