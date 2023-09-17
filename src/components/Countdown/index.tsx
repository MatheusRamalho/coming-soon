import { CountdownItem } from './CountdownItem'
import { CountdownRoot } from './CountdownRoot'
import { CountdownSeparator } from './CountdownSeparator'

export const Countdown = () => {
    return (
        <CountdownRoot>
            <CountdownItem title="Dias" number={20} />
            <CountdownSeparator />
            <CountdownItem title="Horas" number={28} />
            <CountdownSeparator />
            <CountdownItem title="Minutos" number={45} />
            <CountdownSeparator />
            <CountdownItem title="Segundos" number={39} />
        </CountdownRoot>
    )
}
