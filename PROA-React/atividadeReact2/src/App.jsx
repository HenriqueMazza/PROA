import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Cabecalho from './components/cabecalho'
import Vermelho from './components/vermelho'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <main>
        <Cabecalho/>
        <Vermelho/>
     </main>
    </>
  )
}

export default App
