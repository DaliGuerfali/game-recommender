import { StepState } from "../../types"

interface platformProps {
    steps: StepState<0 | 1>
    selectPlatform: (e: React.ChangeEvent<HTMLSelectElement>) => void
}
//TODO: reset value on reset button
const Platform = ({ steps, selectPlatform }: platformProps) => {
    return (
        <div className="w-full max-w-xs p-5">
            <select onChange={selectPlatform} id="step-1" className={`select select-bordered w-full max-w-xs ${steps[0] ? 'invisible opacity-0' : ''} transition-all`} defaultValue="Platform">
                <option value="Platform" disabled>Platform</option>
                <option value="PC">PC</option>
                <option value="Console" >Console</option>
                <option value="Browser" >Browser</option>
            </select>
        </div>
    )
}

export default Platform 