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
                        <svg  viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                            <path transform="translate(1.5, 1.5)" d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                        </svg>
                    </a>
                    <a href="www.linkedin.com/in/mohamed-ali-guerfali-489234272" >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-10 w-10 fill-current">
                            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer