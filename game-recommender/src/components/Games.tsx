import { GameInfo } from "../types"
import Card from "./Games/Card"


interface gameProps {
    games: GameInfo[]
}

const Games = ({ games }: gameProps) => {
    if(games) {
        return (
            <div className="grid min-w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-10">
            {
                games.map((game: GameInfo) => 
                    <Card
                        key={game.title}
                        game={game}
                    />)
            }
        </div>
    )
    }
    return null
}

export default Games