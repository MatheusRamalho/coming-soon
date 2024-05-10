'use client'

import { useEffect, useState } from 'react'

import { CountdownItem } from './CountdownItem'
import { CountdownMessage } from './CountdownMessage'
import { CountdownRoot } from './CountdownRoot'
import { CountdownSeparator } from './CountdownSeparator'

export function Countdown() {
    const [days, setDays] = useState<number>(0)
    const [hours, setHours] = useState<number>(0)
    const [minutes, setMinutes] = useState<number>(0)
    const [seconds, setSeconds] = useState<number>(0)
    const [finish, setFinish] = useState<boolean>(false)

    const finalDate = new Date('May 12, 2024 00:00:00').getTime()

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
        <CountdownRoot>
            {finish ? (
                <CountdownMessage message="A contagem terminou!!!" />
            ) : (
                <>
                    <CountdownItem title="Dias" number={days} />
                    <CountdownSeparator />

                    <CountdownItem title="Horas" number={hours} />
                    <CountdownSeparator />

                    <CountdownItem title="Minutos" number={minutes} />
                    <CountdownSeparator />

                    <CountdownItem title="Segundos" number={seconds} />
                </>
            )}
        </CountdownRoot>
    )
}
