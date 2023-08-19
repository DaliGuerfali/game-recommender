import { forwardRef, useState } from "react";
import Tags from "./Selection/Tags";
import Steps from "./Selection/Steps";
import { GameInfo, PlatformType, StepState, TagType } from "../types";
import ResetButton from "./Selection/ResetButton";
import Platform from "./Selection/Platform";
import SubmitButton from "./Selection/SubmitButton";
import gameService from "../gameService";
import { AxiosError } from "axios";
import { notify, useDispatchNotif } from "../Context/NotificationContext";

interface selectionProps {
    setGames: (arg: GameInfo[]) => void
}


const Selection = forwardRef(({ setGames }: selectionProps, ref: React.ForwardedRef<HTMLFormElement>) => {
    const [steps, setSteps] = useState<StepState<0 | 1>>([0, 0])
    const [tags, setTags] = useState<TagType[]>([])
    const [platform, setPlatform] = useState<PlatformType>(null)
    const dispatch = useDispatchNotif();

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        setSteps([1, 1])
        try {
            const games = await gameService.getGenres(tags, platform)
            setGames(games)
        } catch(e) {
            if(e instanceof AxiosError) {
                if (e.response?.status === 500) {
                    dispatch(notify({ message: "Something went wrong... Please try again later.", class: "error" }))
                } else if (e.response?.status === 400) {
                    dispatch(notify({ message: "Please select at least one category.", class: "warning" }))
                }
                // eslint-disable-next-line no-console
                console.log(e.message);
            }
        }
    }

    const changeTags = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setTags(tags.concat(e.target.value as TagType))
            return
        }
        setTags(tags.filter(tag => tag !== e.target.value))
    }

    const resetSelection = () => {
        setSteps([0, 0])
        setPlatform(null)
        setTags([])
    }


    const selectPlatform = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSteps([1, 0])
        setPlatform(e.target.value as PlatformType)
    }

    return (
        <form ref={ref} onSubmit={handleSubmit} className="flex flex-col items-center gap-10 w-full min-h-screen mb-5 justify-evenly " >
            <Steps steps={steps} />
            <ResetButton resetSelection={resetSelection} />
            {
                !steps[0] ? 
                <Platform  platform={platform} selectPlatform={selectPlatform} />
                :
                <Tags tagHandler={changeTags} />
            }
            <SubmitButton steps={steps} />
        </form>
    )
})

export default Selection