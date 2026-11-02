import { Link } from 'react-router-dom';
import Styles from './css/header.module.css';
import Logohome from '../assets/imgs/logohome.png';

function Header(){
    return(
        <header className={Styles.headerArea}>
            
            <div className={Styles.imgheader}>
                <Link to="/">
                    <img src={Logohome} alt="Logo" />
                </Link>
            </div>

            <nav className={Styles.nav}>
                <Link to="/">Home</Link>
                <Link to="/racismo">Racismo</Link>
                <Link to="/homofobia">Homofobia</Link>
                <Link to="/misoginia">Misoginia</Link>
                <Link to="/transfobia">Transfobia</Link>
            </nav>

            <button className={Styles.buttonheader}>DENUNCIE</button>
        </header>
    );
}

export default Header;