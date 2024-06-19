'use client'

import { useEffect, useState } from 'react'

import { CountdownItem } from './CountdownItem'
import { CountdownRoot } from './CountdownRoot'
import { CountdownSeparator } from './CountdownSeparator'

export function Countdown() {
    const [days, setDays] = useState<number>(0)
    const [hours, setHours] = useState<number>(0)
    const [minutes, setMinutes] = useState<number>(0)
    const [seconds, setSeconds] = useState<number>(0)
    const [finish, setFinish] = useState<boolean>(false)

    const finalDate = new Date('Jun 30, 2024 19:00:00').getTime()

    function countdownUpdate() {
        const currentDate = new Date().getTime()
        const dateDifference = finalDate - currentDate

        const dd = Math.floor(dateDifference / (1000 * 60 * 60 * 24))
        const hh = Math.floor(
            (dateDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        )
        const mm = Math.floor((dateDifference % (1000 * 60 * 60)) / (1000 * 60))
        const ss = Math.floor((dateDifference % (1000 * 60)) / 1000)

        setDays(dd)
        setHours(hh)
        setMinutes(mm)
        setSeconds(ss)

        if (dateDifference < 0) {
            setFinish(true)
        }
    }

    useEffect(() => {
        const interval = setInterval(countdownUpdate, 1000)

        return () => {
            clearInterval(interval)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div data-testid="countdown">
            <CountdownRoot>
                <CountdownItem title="Dias" number={finish ? 0 : days} />
                <CountdownSeparator />

                <CountdownItem title="Horas" number={finish ? 0 : hours} />
                <CountdownSeparator />

                <CountdownItem title="Minutos" number={finish ? 0 : minutes} />
                <CountdownSeparator />

                <CountdownItem title="Segundos" number={finish ? 0 : seconds} />
            </CountdownRoot>
        </div>
    )
}
