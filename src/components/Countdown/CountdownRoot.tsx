import { ReactNode } from 'react'

interface CountdownRootProps {
    children: ReactNode
}

export const CountdownRoot = ({ children }: CountdownRootProps) => {
    return <div className="font-bold text-[10rem] text-white flex gap-3">{children}</div>
}
