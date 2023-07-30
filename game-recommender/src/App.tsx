import { useRef } from 'react'
import './App.css'
import Footer from './components/Footer'
import Games from './components/Games'
import Hero from './components/Hero'
import Selection from './components/Selection'

function App() {
  const selectionRef = useRef<HTMLFormElement>(null!);

  const scrollToSelection = () => {
      selectionRef.current.scrollIntoView()
  }

  return (
    <>
      <Hero scrollToSelection={scrollToSelection}/>
      <Selection ref={selectionRef} />
      <Games />
      <Footer />
    </>
  )
}

export default App
