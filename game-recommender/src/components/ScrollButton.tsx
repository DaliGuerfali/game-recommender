import { useEffect, useState } from "react";
import DownArrowSVG from "./SVG/DownArrowSVG"

interface scrollButtonProps {
    scroll: () => void
}


const ScrollButton = ({ scroll }: scrollButtonProps) => {
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
          const scrollThreshold = 2000
    
          if (!isVisible && window.scrollY > scrollThreshold) {
            setIsVisible(true);
          } else if (isVisible && window.scrollY <= scrollThreshold) {
            setIsVisible(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [isVisible]);

    return (
        <button onClick={scroll} style={{top: '80%', left: '80%'}} className={`btn btn-circle btn-error btn-lg sticky z-30 scroll-btn ${isVisible ? 'visible' : ''}`} >
            <div className="rotate-180">
                <DownArrowSVG />
            </div>
        </button>
    )
}

export default ScrollButton