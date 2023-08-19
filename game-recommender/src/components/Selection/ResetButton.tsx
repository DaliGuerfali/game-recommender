import ResetSVG from "../SVG/ResetSVG"

interface resetProps {
    resetSelection: () => void
}

const ResetButton = ({ resetSelection }: resetProps) => {
    return (
        <button onClick={resetSelection} type="button" className="btn btn-outline">
            <ResetSVG />
            Reset
        </button>
    )
}

export default ResetButton