import { useState } from 'react'
import './App.css'
import Cabecalho from './components/cabecalho'
import Vermelho from './components/vermelho'
import Branco from './components/branco'
import Laranja from './components/laranja'
import Branco2 from './components/branco2'
import Preto from './components/preto'


function App() {

  return (
    <>
    <div className="fundo">
     <main>
        <Cabecalho/>
        <Vermelho/>
        <Branco/>
        <Laranja/>
        <Branco2/>
        <Preto/>
     </main>
     </div>
     
    </>
  )
}

export default App
