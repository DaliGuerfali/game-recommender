import { StepState } from "../../types"

interface progressProps {
    steps: StepState<0 | 1>
}


const Progress = ({ steps }: progressProps) => {

    const toPercent = (steps: StepState<0 | 1>) => {
        const stepsComplete = steps.reduce((a:number ,b) => a + b, 0)
        return String((stepsComplete/steps.length)*100)
    }

    return (
        <progress className="progress w-56" value={toPercent(steps)} max="100"></progress>
    )
}

export default Progress