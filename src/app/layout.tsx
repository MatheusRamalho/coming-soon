import '@/styles/globals.css'

import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { Roboto_Mono } from 'next/font/google'

const robotoMono = Roboto_Mono({
    subsets: ['latin'],
    weight: ['400', '700'],
})

export const metadata: Metadata = {
    title: 'Coming soon',
    description: 'Contador de lancamento',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={robotoMono.className}>
                <main className="w-full min-h-screen bg-gray-900 flex items-center justify-center"> {children} </main>
            </body>
        </html>
    )
}
