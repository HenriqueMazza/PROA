import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Cabecalho from './componentes/cabecalho'
import Miolo from './componentes/miolo'
import Rodape from './componentes/rodape'

function App() {
  return (

      <main>
        <Cabecalho/>
        <Miolo/>
        <Rodape/>
      </main>

  )
}

export default App
