//import { useQuery } from "react-query"
//import gameService from "../gameService"

const Selection = () => {
    //const query = useQuery('games', gameService.getAll, { enabled: false })

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        console.log("submit");
    }

    return (
        <form onSubmit={handleSubmit} className="grid place-content-center gap-20 mb-10 w-full min-h-screen" >
            <ul className="steps steps-vertical lg:steps-horizontal mt-5">
                <li className="step step-primary">Platform</li>
                <li className="step">Category</li>
                <li className="step">Release Date</li>
            </ul>
            <select id="step-1" className="select select-bordered w-full max-w-xs" defaultValue="Platform">
                <option value="Platform"  disabled>Platform</option>
                <option value="PC" >PC</option>
                <option value="Console" >Console</option>
                <option value="Browser" >Browser</option>
            </select>
            <select id="step-2" className="select select-bordered w-full max-w-xs" defaultValue="Category">
                <option value="Category" disabled>Category</option>
                <option>PC</option>
                <option>Console</option>
                <option>Browser</option>
            </select>
            <select id="step-3" className="select select-bordered w-full max-w-xs" defaultValue="Date" >
                <option value="Date" disabled>Date</option>
                <option>PC</option>
                <option>Console</option>
                <option>Browser</option>
            </select>
            <button className="btn btn-primary" type="submit">Recommend</button>
            <progress className="progress w-56" value="70" max="100"></progress>
        </form>
    )
}

export default Selection