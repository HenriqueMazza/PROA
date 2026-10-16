import Styles from './css/header.module.css'
import Logohome from '../assets/imgs/logohome.png'

function Header(){
    return(
            <header className={Styles.headerArea}>
                <div className={Styles.imgheader}><img src={Logohome}/></div>
                <nav className={Styles.nav}>
                
                <a>Racismo</a>
                <a>Homofobia</a>
                <a>Misoginia</a>
                <a>Transfobia</a>
                
                </nav>
                <button className={Styles.buttonheader}>DENUNCIE</button>
            </header>
            
    )
}

export default Header