import type { Metadata } from 'next'
import { Roboto_Mono as RobotoMono } from 'next/font/google'

import '../styles/globals.css'

const robotoMono = RobotoMono({
    subsets: ['latin'],
    weight: ['400', '700'],
})

export const metadata: Metadata = {
    title: 'Coming soon',
    description: 'Contador de lançamento',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={robotoMono.className}>
                <main className="w-full min-h-screen bg-gray-900 flex items-center justify-center">
                    {children}
                </main>
            </body>
        </html>
    )
}
