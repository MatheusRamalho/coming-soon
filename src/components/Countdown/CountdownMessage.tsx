interface CountdownMessageProps {
    message: string
}

export function CountdownMessage({ message }: CountdownMessageProps) {
    return (
        <div className="flex items-center justify-center">
            <h6 className="text-gray-600 text-lg uppercase"> {message} </h6>
        </div>
    )
}
