import { ReactNode } from 'react'

interface CountdownRootProps {
    children: ReactNode
}

export function CountdownRoot({ children }: CountdownRootProps) {
    return (
        <div className="flex items-center flex-col gap-2 lg:gap-3 md:flex-row">
            {children}
        </div>
    )
}
