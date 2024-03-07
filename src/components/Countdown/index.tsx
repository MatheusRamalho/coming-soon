import { CountdownItem } from './CountdownItem'
import { CountdownRoot } from './CountdownRoot'
import { CountdownSeparator } from './CountdownSeparator'

export function Countdown() {
    const currentDate = new Date().getTime() + 24 * 3600 * 1000 + 5000
    const now = new Date().getTime()
    console.log(currentDate)
    console.log(now)

    // const t = this.deadline - now
    // const dd = Math.floor(t / (1000 * 60 * 60 * 24))
    // const hh = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    // const mm = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60))
    // const ss = Math.floor((t % (1000 * 60)) / 1000)

    // const days = dd < 10 ? '0' + dd : dd
    // const hours = hh < 10 ? '0' + hh : hh
    // const minutes = mm < 10 ? '0' + mm : mm
    // const seconds = ss < 10 ? '0' + ss : ss

    return (
        <CountdownRoot>
            <CountdownItem title="Dias" number={0} />
            <CountdownSeparator />
            <CountdownItem title="Horas" number={0} />
            <CountdownSeparator />
            <CountdownItem title="Minutos" number={0} />
            <CountdownSeparator />
            <CountdownItem title="Segundos" number={0} />
        </CountdownRoot>
    )
}
