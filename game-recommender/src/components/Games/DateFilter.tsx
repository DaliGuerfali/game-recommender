interface dateFilterProps {
    filterDate: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const DateFilter = ({ filterDate }: dateFilterProps) => {
    return (
        <div className="container flex justify-evenly p-5">
            <div className="flex flex-col max-w-xs gap-2 flex-1" >
                <label htmlFor="date-filter">Filter by Date:</label>
                <input onChange={filterDate} id="date-filter" type="range" max="100" defaultValue="100" className="range" />
                <div className="flex justify-between text-xs px-2">
                    <span>Older</span>
                    <span>More Recent</span>
                </div>
            </div>
        </div>
    )
}

export default DateFilter