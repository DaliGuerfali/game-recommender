interface tagsProps {
    tagHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}


const tags = "MMORPG, shooter, strategy, moba, racing, sports, social, sandbox, open-World, survival, pvP, pvE, pixel, voxel, zombie, turn-Based, first-Person, third-Person, top-Down, tank, space, sailing, side-Scroller, superhero, permadeath, card, battle-Royale, MMO, MMOFPS, MMOTPS, 3D, 2D, anime, fantasy, sci-Fi, fighting, action-RPG, action, military, martial-Arts, flight, low-Spec, tower-Defense, horror, MMORTS"

const capitalize = (str: string): string => str[0].toUpperCase() + str.slice(1) 

const Tags = ({ tagHandler }: tagsProps) => {
    return (
        
        <div className="collapse collapse-arrow bg-base-200 max-w-xl">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-gradient-to-b from-base-300 to-base-200 peer-checked:text-secondary-content">
                <h2 className="text-2xl font-bold" >Genres</h2>
            </div>
            <div id="step-2" style={{maxHeight: '50vh'}} className="collapse-content bg-primary text-primary-content peer-checked:bg-base-200 peer-checked:text-secondary-content overflow-y-auto max-h-screen">

                    {
                        tags.split(",").map(tag => {
                            return (
                                <label key={tag} className="cursor-pointer label hover:bg-base-100 rounded p-3">
                                    <span className="label-text">{capitalize(tag.trim())}</span>
                                    <input onChange={tagHandler} value={tag.trim().toLowerCase()} type="checkbox" className="checkbox checkbox-accent" />
                                </label>
                            )
                        }
                        )
                    }
            </div>
        </div>
    )

}

export default Tags