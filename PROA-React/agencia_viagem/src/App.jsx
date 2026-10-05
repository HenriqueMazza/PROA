import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './components/header'
import Home from './components/home'
import Rodape from './components/rodape'
import Escocia from './components/escocia'
import Grandcanyon from './components/grandcanyon'
import Muralhachina from './components/muralhachina'
import Aruba from './components/aruba'

function App() {
  return (

     <main>
      <Router>
        <Header/>
         <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Escocia' element={<Escocia/>} />
            <Route path='/Grandcanyon' element={<Grandcanyon/>} />
            <Route path='/Muralhachina' element={<Muralhachina/>} />
            <Route path='/Aruba' element={<Aruba/>} />
         </Routes>
        <Rodape/>
      </Router>
     </main>

  )
}

export default App
