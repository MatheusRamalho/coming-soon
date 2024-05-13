interface HeaderProps {
    title: string
    tag: string
}

export function Header({ tag, title }: HeaderProps) {
    return (
        <div
            data-testid="header"
            className="flex flex-col items-center justify-center gap-2 text-center"
        >
            <h2 className="text-gray-600 text-lg text-center font-bold uppercase">
                {tag}
            </h2>

            <h1 className="text-gray-300 text-4xl text-center font-bold uppercase">
                {title}
            </h1>
        </div>
    )
}
