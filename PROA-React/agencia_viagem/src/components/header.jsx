import{Link} from 'react-router-dom'
import Styles from './css/header.module.css'
import logo from '../assets/imagesAgencia/viagens.jpg'
import lupa from '../assets/imagesAgencia/lupa.png'

function Header(){
    return(
        <header>
            <div className={Styles.logo}>
                <img src={logo} alt='logo de viagens'/>
            </div>
            <nav className={Styles.nav}>
                <Link to='/'>Home</Link>
                <Link to='/Escocia'>Escócia</Link>
                <Link to='/GrandCanyon'>Grand Canyon</Link>
                <Link to='/Muralhachina'>Muralha da China</Link>
                <Link to='/Aruba'>Aruba</Link>
            </nav>
            <div className={Styles.busca}>
                <input type="text"/>
                <img src={lupa} alt="Imagem de uma lupa para barra de pesquisa"/>
            </div>
        </header>
        
    )
}

export default Header