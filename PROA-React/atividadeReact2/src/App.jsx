import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Cabecalho from './components/cabecalho'
import Vermelho from './components/vermelho'
import Branco from './components/branco'
import Laranja from './components/laranja'
import Branco2 from './components/branco2'
import Preto from './components/preto'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <main>
        <Cabecalho/>
        <Vermelho/>
        <Branco/>
        <Laranja/>
        <Branco2/>
        <Preto/>
     </main>
    </>
  )
}

export default App
