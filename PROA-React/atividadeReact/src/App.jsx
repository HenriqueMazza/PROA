import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Verde from './componentes/verde'
import Rosa from './componentes/rosa.jsx'
import Branca from './componentes/branca.jsx'
import Laranja from './componentes/laranja.jsx'
import Amarelo from './componentes/amarelo.jsx'
import Preto from './componentes/preto.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Verde/>
      <Rosa/>
      <Branca/>
      <Laranja/>
      <Amarelo/>
      <Preto/>
    </main>
  )
}

export default App
