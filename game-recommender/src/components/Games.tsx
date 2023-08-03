import { useEffect, useState } from "react"
import { GameInfo } from "../types"
import Card from "./Games/Card"


interface gameProps {
    games: GameInfo[] | null
}

const Games = ({ games }: gameProps) => {
    const [filteredGames, setFilteredGames] = useState<GameInfo[] | null>(games)

    useEffect(() => {
        setFilteredGames(games)
    }, [games])


    const filterDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        const interval = Date.parse(games![0].release_date) - Date.parse(games![games!.length - 1].release_date)
        const filter = interval * (Number(e.target.value) / 100) + Date.parse(games![games!.length - 1].release_date)
        setFilteredGames(games!.filter(game => Date.parse(game.release_date) <= filter))
    }


    if (filteredGames) {
        return (
            <>
                {
                    filteredGames.length === 0 ?
                        <div className="p-5 mb-5">
                            <p>Oops! No game matches your criteria.</p>
                            <p>Try other genres.</p>
                        </div> :
                        <>
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
                            <div className="grid min-w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-10">
                                {
                                    filteredGames.map((game: GameInfo) =>
                                        <Card
                                            key={game.title}
                                            game={game}
                                        />)
                                }
                            </div>
                        </>
                }
            </>
        )
    }
    return null
}

export default Games