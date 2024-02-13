interface HeaderProps {
    title: string
    description: string
    person: string
    person2: string
}

export const Header = ({
    title,
    description,
    person,
    person2,
}: HeaderProps) => {
    return (
        <div className="flex flex-col items-center justify-center gap-8 text-center">
            <h2 className="text-gray-600 text-4xl text-center font-bold uppercase">
                {title}
            </h2>

            <h1 className="text-white text-5xl lg:text-7xl text-center font-bold">
                {person}
                <span className="text-gray-600"> & </span>
                {person2}
            </h1>

            <p className="text-gray-600 text-base"> {description} </p>
        </div>
    )
}
