interface HeaderProps {
    subtitle: string
    description: string
    title: string
}

export function Header({ subtitle, title, description }: HeaderProps) {
    return (
        <div className="flex flex-col items-center justify-center gap-8 text-center">
            <h2 className="text-gray-600 text-4xl text-center font-bold uppercase">
                {subtitle}
            </h2>

            <h1 className="text-white text-5xl lg:text-7xl text-center font-bold">
                {title}
            </h1>

            <p className="text-gray-600 text-base"> {description} </p>
        </div>
    )
}
