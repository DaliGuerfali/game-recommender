interface platformProps {
    selectPlatform: (e: React.ChangeEvent<HTMLSelectElement>) => void
}
//TODO: reset value on reset button
const Platform = ({  selectPlatform }: platformProps) => {
    return (
        <div className="w-full max-w-xs p-5 animate-animate-fade-in">
            <select onChange={selectPlatform} id="step-1" className={`select select-bordered w-full max-w-xs min-w-max transition-all`} defaultValue="Platform">
                <option value="Platform" disabled>Platform</option>
                <option value="PC">PC</option>
                <option value="Browser" >Browser</option>
            </select>
        </div>
    )
}

export default Platform 