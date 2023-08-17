import { GameInfo } from "../../types"

interface cardProps {
    game: GameInfo
}

const Card = ({ game }: cardProps) => {
    return (
        <a href={game.game_url} className="card max-w-sm bg-neutral shadow-xl hover:scale-105 cursor-pointer transition-all">
            <figure><img className="min-w-full" src={game.thumbnail} alt={`${game.title} image`} /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {game.title}
                    <div className="badge badge-warning">
                        {game.platform === "PC (Windows)" ? <svg className="h-4 w-4" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <title>Platform: PC </title>
                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <g transform="translate(-60.000000, -7439.000000)" fill="currentColor">
                                    <g transform="translate(56.000000, 160.000000)">
                                        <path d="M13.1458647,7289.43426 C13.1508772,7291.43316 13.1568922,7294.82929 13.1619048,7297.46884 C16.7759398,7297.95757 20.3899749,7298.4613 23.997995,7299 C23.997995,7295.84873 24.002005,7292.71146 23.997995,7289.71311 C20.3809524,7289.71311 16.7649123,7289.43426 13.1458647,7289.43426 M4,7289.43526 L4,7296.22153 C6.72581454,7296.58933 9.45162907,7296.94113 12.1724311,7297.34291 C12.1774436,7294.71736 12.1704261,7292.0908 12.1704261,7289.46524 C9.44661654,7289.47024 6.72380952,7289.42627 4,7289.43526 M4,7281.84344 L4,7288.61071 C6.72581454,7288.61771 9.45162907,7288.57673 12.1774436,7288.57973 C12.1754386,7285.96017 12.1754386,7283.34361 12.1724311,7280.72405 C9.44461153,7281.06486 6.71679198,7281.42567 4,7281.84344 M24,7288.47179 C20.3879699,7288.48578 16.7759398,7288.54075 13.1619048,7288.55175 C13.1598997,7285.88921 13.1598997,7283.22967 13.1619048,7280.56914 C16.7689223,7280.01844 20.3839599,7279.50072 23.997995,7279 C24,7282.15826 23.997995,7285.31353 24,7288.47179"></path>
                                    </g>
                                </g>
                            </g>
                        </svg> : "Browser"}
                    </div>
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