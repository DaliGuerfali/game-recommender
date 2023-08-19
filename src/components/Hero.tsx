import ControllerSVG from "./SVG/ControllerSVG"
import DownArrowSVG from "./SVG/DownArrowSVG";

interface heroProps {
    scrollToSelection: () => void
}

const Hero = ({ scrollToSelection }: heroProps) => {

    return (
      <div className="hero min-h-screen bg-gradient-to-b from-base-300 via-base-200 to-base-100">
        <ControllerSVG />
        <div className="hero-content z-10 text-center">
          <div className="max-w-md lg:mb-56">
            <h1 className="text-4xl sm:text-7xl font-bold">Game Recommender</h1>
            <p className="py-6 text-sm">
              Bored and don't know what to play ? <br /> We'll recommend you
              free games according to your likings!
            </p>
            <button onClick={scrollToSelection} className="btn btn-circle btn-outline btn-lg">
              <DownArrowSVG />
            </button>
          </div>
        </div>
      </div>
    );
}

export default Hero