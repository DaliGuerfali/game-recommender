import GithubSVG from "./SVG/GithubSVG"
import LinkedInSVG from "./SVG/LinkedInSVG"

const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <div className="flex items-center gap-10 " >
                <svg className="h-24 w-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 585.85 380.38"><defs><style>{".cls-1{fill:#1f1f1f;}.cls-1,.cls-2,.cls-3,.cls-4,.cls-5,.cls-6{stroke:#d1d5db;stroke-miterlimit:10;}.cls-2{fill:none;}.cls-3{fill:#2563eb;}.cls-4{fill:#fbbd23;}.cls-5{fill:#6ee7b7;}.cls-6{fill:#f87272;}"}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path className="cls-1" d="M546.06,376.66c-57,25-139-104-139-104H178.78s-82,129-139,104c-72-30-23-197-23-197s41-142,106-173c32-8.61,32-6,84-5,16.09.31,29.14,20.38,43,25h86.28C349.92,22,363,2,379.06,1.66c52-1,52-3.61,84,5,65,31,106,173,106,173S618.06,346.66,546.06,376.66Z" /><circle className="cls-2" cx="228.56" cy="223.16" r="30.5" /><circle className="cls-2" cx="355.56" cy="223.16" r="30.5" /><circle className="cls-3" cx="397.56" cy="111.16" r="15.5" /><circle className="cls-4" cx="435.56" cy="75.16" r="15.5" /><circle className="cls-5" cx="435.56" cy="148.16" r="15.5" /><circle className="cls-6" cx="472.56" cy="111.16" r="15.5" /><path className="cls-2" d="M187.06,106v9.38a7.31,7.31,0,0,1-7.31,7.31H155.06v24.69a7.31,7.31,0,0,1-7.31,7.31h-9.38a7.31,7.31,0,0,1-7.31-7.31V122.66H106.37a7.31,7.31,0,0,1-7.31-7.31V106a7.31,7.31,0,0,1,7.31-7.31h24.69V74a7.31,7.31,0,0,1,7.31-7.31h9.38A7.31,7.31,0,0,1,155.06,74V98.66h24.69A7.31,7.31,0,0,1,187.06,106Z" /></g></g></svg>
                <p>By Dali Guerfali <br /> Software Engineering Student</p>
            </div>
            <div>
                <span className="footer-title">Follow me on:</span>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://github.com/DaliGuerfali">
                        <GithubSVG />
                    </a>
                    <a href="https://linkedin.com/in/mohamed-ali-guerfali-489234272" >
                        <LinkedInSVG />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer