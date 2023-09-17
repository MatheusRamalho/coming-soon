import { CountdownItem } from './CountdownItem'
import { CountdownRoot } from './CountdownRoot'
import { CountdownSeparator } from './CountdownSeparator'

export const Countdown = () => {
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
