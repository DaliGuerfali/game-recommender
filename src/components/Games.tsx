import { forwardRef, useEffect, useState } from "react"
import { GameInfo } from "../types"
import Card from "./Games/Card"
import DateFilter from "./Games/DateFilter"
import { notify, useDispatchNotif } from "../Context/NotificationContext"


interface gameProps {
    games: GameInfo[] | null
    loading: boolean
    setLoading: (arg: boolean) => void
}

const Games = forwardRef(({ games, loading, setLoading }: gameProps, ref:React.ForwardedRef<HTMLDivElement>) => {
    const [filteredGames, setFilteredGames] = useState<GameInfo[] | null>(games)
    const dispatch = useDispatchNotif()
    
    useEffect(() => {
        if(games && games.length === 0) {
            dispatch(notify({ message: "No game matches your criteria! Please try other tags.", class: "warning" }))
        }

        setFilteredGames(games)
        setLoading(false)
    }, [games, dispatch, setLoading])


    const filterDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        const interval = Date.parse(games![0].release_date) - Date.parse(games![games!.length - 1].release_date)
        const filter = interval * (Number(e.target.value) / 100) + Date.parse(games![games!.length - 1].release_date)
        setFilteredGames(games!.filter(game => Date.parse(game.release_date) <= filter))
    }


    if (!filteredGames || filteredGames.length === 0) return null

    return ( 
        
            loading ? 
            <span className="loading loading-ring loading-lg"></span> :
            <div ref={ref}>
                <DateFilter filterDate={filterDate} />
                <div className="grid min-w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-stretch gap-4 p-10 place-items-center">
                    {
                        filteredGames.map((game: GameInfo) =>
                            <Card
                                key={game.title}
                                game={game}
                            />)
                    }
                </div>
            </div>
    )
})

export default Games