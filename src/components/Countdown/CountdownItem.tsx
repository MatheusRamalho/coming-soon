interface CountdownItemProps {
    title: string
    number: number
}

export function CountdownItem({ title, number }: CountdownItemProps) {
    const value = String(number).padStart(2, '0')

    return (
        <div className="flex flex-col items-center gap-2">
            <h6 className="text-gray-500 text-lg uppercase"> {title} </h6>

            <div className="flex gap-2">
                <div className="size-24 xl:w-28 lg:h-32 xl:h-40 rounded-lg bg-gray-700 flex items-center justify-center">
                    <span className="font-bold text-white text-6xl lg:text-8xl xl:text-9xl">
                        {value[0]}
                    </span>
                </div>

                <div className="size-24 xl:w-28 lg:h-32 xl:h-40 rounded-lg bg-gray-700 flex items-center justify-center">
                    <span className="font-bold text-white text-6xl lg:text-8xl xl:text-9xl">
                        {value[1]}
                    </span>
                </div>
            </div>
        </div>
    )
}
