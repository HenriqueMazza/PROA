import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Exercicio de HTML com CSS</h1>
      
      <div className='paragrafos'>
      <p>Tags principais</p>
      <p>Tag de paragrafos</p>
      <p>Tag de imagens</p>
      <p>Folha de estilos</p>
      <p>Atributos e classes</p>
      <p>Trabalhando com imagens de background</p>
      <p>Formatacao de conteudo no HTML</p>
      </div>
      <h2>Curso de Projeto WEB SENAC - SP</h2>
    </>
  )
}

export default App
