import { StepState } from "../../types"

interface stepsProps {
    steps: StepState<0 | 1>
}

const Steps = ({ steps }: stepsProps) => {
    const step = steps.map(s => s === 0 ? "step" : "step step-primary")

    return (
        <ul className="steps steps-vertical mt-5">
            <li className={step[0]}>Platform</li>
            <li className={step[1]}>Categories</li>
        </ul>
    )
}

export default Steps