import { StepState } from "../../types"

interface submitBtnProps {
    steps: StepState<0 | 1>
}


const SubmitButton = ({ steps }: submitBtnProps) => {
    return (
        <button className={`btn btn-primary ${!steps[0] ? 'hidden' : ''}`} type="submit">Recommend</button>
    )
}

export default SubmitButton