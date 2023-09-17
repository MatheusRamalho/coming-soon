interface CountdownItemProps {
    title: string
    number: number
}

export const CountdownItem = ({ title, number }: CountdownItemProps) => {
    const value = String(number).padStart(2, '0')

    return (
        <div className="flex flex-col items-center gap-5">
            <h6 className="text-gray-600 text-lg uppercase"> {title} </h6>

            <div className="flex gap-2 lg:gap-3">
                <div className="p-4 lg:py-8 lg:px-6 rounded-lg bg-gray-700"> {value[0]} </div>
                <div className="p-4 lg:py-8 lg:px-6 rounded-lg bg-gray-700"> {value[1]} </div>
            </div>
        </div>
    )
}
