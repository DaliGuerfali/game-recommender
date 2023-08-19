import { PlatformType } from "../../types"

interface platformProps {
    selectPlatform: (e: React.ChangeEvent<HTMLSelectElement>) => void
    platform: PlatformType
}

const Platform = ({  platform, selectPlatform }: platformProps) => {
    return (
        <div className="w-full max-w-xs p-5 animate-animate-fade-in">
            <select value={platform || "Platform"} onChange={selectPlatform} id="step-1" className={`select select-bordered w-full max-w-xs min-w-max transition-all`}>
                <option value="Platform" disabled>Platform</option>
                <option value="PC">PC</option>
                <option value="Browser" >Browser</option>
                <option value="All" >All</option>
            </select>
        </div>
    )
}

export default Platform 