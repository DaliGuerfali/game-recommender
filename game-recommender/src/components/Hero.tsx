interface heroProps {
    scrollToSelection: () => void
}

const Hero = ({ scrollToSelection }: heroProps) => {

    return (
        <div className="hero min-h-screen bg-gradient-to-b from-base-300 via-base-200 to-base-100 ">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Recommend A Game</h1>
                    <p className="py-6 text-sm">Bored and don't know what to play ? <br /> We'll recommend you some games according to your input</p>
                    <button onClick={scrollToSelection} className="btn btn-circle btn-outline btn-lg">
                        <svg width="36px" height="36px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="h-6 w-6" d="M17 9.5L12 14.5L7 9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero