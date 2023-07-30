//import { useQuery } from "react-query"
//import gameService from "../gameService"

import { forwardRef, useState } from "react";
import Tags from "./Selection/Tags";
import Steps from "./Selection/Steps";
import { PlatformType, StepState, TagType } from "../types";
import ResetButton from "./Selection/ResetButton";
import Platform from "./Selection/Platform";
import Progress from "./Selection/Progress";
import SubmitButton from "./Selection/SubmitButton";


const Selection = forwardRef((_props, ref: React.ForwardedRef<HTMLFormElement>)  => {
    //const query = useQuery('games', gameService.getAll, { enabled: false })

    const [tags, setTags] = useState<TagType[]>([]);
    const [steps, setSteps] = useState<StepState<0 | 1>>([0,0])
    const [platform, setPlatform] = useState<PlatformType>("PC")

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        setSteps([1,1])
        console.log(tags);
        console.log(platform);
    }

    const changeTags = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setTags(tags.concat(e.target.value as TagType))
            return
        }
        setTags(tags.filter(tag => tag !== e.target.value))   
    }

    const resetSelection = () => {
        setSteps([0,0])
    }


    const selectPlatform = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSteps([1,0])
        setPlatform(e.target.value as PlatformType)
    }

    return (
        <form  ref={ref} onSubmit={handleSubmit} className="flex flex-col items-center gap-10 w-full min-h-screen" >
            <Steps steps={steps} />
            <ResetButton resetSelection={resetSelection} />
            <Platform steps={steps} selectPlatform={selectPlatform} />
            <Tags tagHandler={changeTags} steps={steps} />
            <Progress steps={steps} />
            <SubmitButton steps={steps} />
        </form>
    )
})

export default Selection