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
  const gamesRef = useRef<HTMLDivElement>(null!);
  const [games, setGames] = useState<GameInfo[] | null>(null)
  const [loading, setLoading] = useState(false)


  const scrollToSelection = () => {
    selectionRef.current.scrollIntoView()
  }

  const scrollToGames = () => {
    gamesRef.current.scrollIntoView()
  }

  return (
    <>
      <Hero scrollToSelection={scrollToSelection} />
      <Notification />
      <Selection setGames={setGames} setLoading={setLoading} scrollToGames={scrollToGames} ref={selectionRef} />
      <ScrollButton scroll={scrollToSelection} />
      <Games ref={gamesRef} games={games} loading={loading} setLoading={setLoading} />
      <Footer />
    </>
  )
}

export default App
