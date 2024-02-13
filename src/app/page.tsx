import { Countdown } from '@/components/Countdown'
// import { Header } from '@/components/Header'

export default function Home() {
    const currentDate = new Date().getTime() + 24 * 3600 * 1000 + 5000
    console.log(currentDate)

    return (
        <section className="container mx-auto h-[calc(100vh-10rem)] rounded-lg p-10 flex flex-col">
            <h6 hidden> Home, em breve... </h6>

            <div className="flex-1 flex flex-col items-center justify-center gap-28">
                {/* <Header
                    title="Casamento"
                    description="Acompanhe nossa contagem regressiva para o grande dia..."
                    person="Vívian"
                    person2="Matheus"
                /> */}

                <Countdown.Root>
                    <Countdown.Item title="Dias" number={0} />
                    <Countdown.Separator />
                    <Countdown.Item title="Horas" number={0} />
                    <Countdown.Separator />
                    <Countdown.Item title="Minutos" number={0} />
                    <Countdown.Separator />
                    <Countdown.Item title="Segundos" number={0} />
                </Countdown.Root>
            </div>
        </section>
    )
}
