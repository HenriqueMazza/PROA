import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import gato from './assets/images/gato.jpg'
import tela from './assets/images/tela.png'

function App() {
  return (
    <>
    <main>
    <h1>Testando uma aplicacao no React</h1>
    <img id="tela" src={tela} alt="Imagem da tela" />
    <img id ="gato" src={gato} alt="Imagem do gato"/>
    <div className='caixa'></div>
    </main>

    </>
  )
}

export default App
