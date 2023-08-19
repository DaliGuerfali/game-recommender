import { GameInfo } from "../../types"
import PlatformBadge from "./PlatformBadge"

interface cardProps {
    game: GameInfo
}

const Card = ({ game }: cardProps) => {
    return (
        <a href={game.game_url} className="card max-w-sm bg-neutral shadow-xl hover:scale-105 cursor-pointer transition-all">
            <figure><img className="min-w-full" src={game.thumbnail} alt={`${game.title} image`} loading="lazy" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {game.title}
                    <PlatformBadge platform={game.platform} />
                </h2>
                <p className="p-2">{game.short_description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline badge-success">{game.genre}</div>
                    <div className="badge badge-outline badge-accent">{game.developer}</div>
                    <div className="badge badge-outline badge-error ">{game.release_date}</div>
                </div>
            </div>
        </a>
    )
}

export default Card