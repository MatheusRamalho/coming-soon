import { Countdown } from '@/components/Countdown'
import { Header } from '@/components/Header'

export default function Home() {
    return (
        <section className="container mx-auto h-[calc(100vh-10rem)] rounded-lg p-10 flex flex-col">
            <h6 hidden> Home, em breve... </h6>

            <div className="flex-1 flex flex-col items-center justify-center gap-28">
                <Header
                    subtitle="Contagem regressiva"
                    title="O projeto"
                    description="Alguma descrição bem aqui"
                />

                <Countdown />
            </div>
        </section>
    )
}
