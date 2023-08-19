import WindowsSVG from "../SVG/WindowsSVG"

const PlatformBadge = ({ platform }: { platform: string }) => {

    switch (platform) {
        case "PC (Windows)":
            return (
                <div className="badge badge-warning">
                    <WindowsSVG />
                </div>
            )
        case "Web Browser":
            return <div className="badge badge-warning">Browser</div>
        default:
            return (
                <>
                    <div className="badge badge-warning">
                        <WindowsSVG />
                    </div>
                    <div className="badge badge-warning">Browser</div>
                </>
            )
    }

}

export default PlatformBadge