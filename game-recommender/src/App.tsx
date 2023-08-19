import { useRef, useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Games from './components/Games'
import Hero from './components/Hero'
import Selection from './components/Selection'
import { GameInfo } from './types'
import Notification from './components/Notification'
import ScrollButton from './components/ScrollButton'

function App() {
  const selectionRef = useRef<HTMLFormElement>(null!);
  const [games, setGames] = useState<GameInfo[] | null>(null)



  const scrollToSelection = () => {
    selectionRef.current.scrollIntoView()
  }

  return (
    <>
      <Hero scrollToSelection={scrollToSelection} />
      <Notification />
      <Selection setGames={setGames} ref={selectionRef} />
      <ScrollButton scroll={scrollToSelection} />
      <Games games={games} />
      <Footer />
    </>
  )
}

export default App
