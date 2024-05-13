import { Header } from '@/components/Header'
import { Countdown } from '@/components/Countdown'

export default function Home() {
    return (
        <section className="w-full h-full p-10">
            <h6 hidden> Home, em breve... </h6>

            <div className="w-full h-full flex flex-col items-center justify-center gap-12 overflow-hidden">
                <Header tag="Só nós" title="lua de mel" />
                <Countdown />
            </div>
        </section>
    )
}
