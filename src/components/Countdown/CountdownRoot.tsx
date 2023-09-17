import { ReactNode } from 'react'

interface CountdownRootProps {
    children: ReactNode
}

export const CountdownRoot = ({ children }: CountdownRootProps) => {
    return (
        <div className="font-bold text-8xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-[10rem] text-white flex gap-3 flex-col sm:flex-row">
            {children}
        </div>
    )
}
