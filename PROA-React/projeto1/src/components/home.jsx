import Styles from './css/home.module.css'
import FundoHome from '../assets/imgs/fuindoHeader.png'

function Home(){
    return(
        <div className={Styles.conteudoPrincipal}>
            <img src={FundoHome} alt="Imagem contra preconceito"/>
        </div>
    )
}

export default Home