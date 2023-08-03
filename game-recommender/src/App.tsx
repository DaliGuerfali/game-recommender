import { useRef, useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Games from './components/Games'
import Hero from './components/Hero'
import Selection from './components/Selection'
import { GameInfo } from './types'

function App() {
  const selectionRef = useRef<HTMLFormElement>(null!);
  const [games, setGames] = useState<GameInfo[]>([])     



  const scrollToSelection = () => {
      selectionRef.current.scrollIntoView()
  }

  return (
    <>
      <Hero scrollToSelection={scrollToSelection}/>
      <Selection setGames={setGames} ref={selectionRef} />
      <Games games={games} />
      <Footer />
    </>
  )
}

export default App
