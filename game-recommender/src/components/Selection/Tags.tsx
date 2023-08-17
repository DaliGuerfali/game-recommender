import { useState } from "react"
import { tags } from "../../utils"

interface tagsProps {
    tagHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}



const capitalize = (str: string): string => str[0].toUpperCase() + str.slice(1)

const Tags = ({ tagHandler }: tagsProps) => {
    const [filter, setFilter] = useState<string[]>(tags.split(","))

    const filterTags = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(tags.split(",").filter(tag => tag.includes(e.target.value)))
    }

    return (
        <div className={`flex items-start gap-5 min-w-full p-10 pt-0 flex-col sm:flex-row-reverse animate-animate-fade-in`}>
            <input onChange={filterTags} type="text" placeholder="Search" className="input input-bordered input-secondary w-full max-w-xs mt-2" />
            <div className="divider divider-vertical sm:divider-horizontal"></div>
            <div className="collapse collapse-arrow bg-base-200 border-2 border-accent">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-gradient-to-b from-base-300 to-base-200 peer-checked:text-secondary-content">
                    <h2 className="text-2xl font-bold" >Genres</h2>
                </div>
                <div id="step-2" style={{ maxHeight: '50vh' }} className="collapse-content bg-primary text-primary-content peer-checked:bg-base-200 peer-checked:text-secondary-content overflow-y-auto max-h-screen">

                    {
                        filter.map(tag => {
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
        </div>
    )

}

export default Tags