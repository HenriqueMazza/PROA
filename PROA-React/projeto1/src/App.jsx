import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Home from './components/home'
import HomeCards from './components/homeCards'
import Home2 from './components/home2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <Header/>
        <Home/>
        <HomeCards/>
        <Home2/>
      </main>
    </>
  )
}

export default App
