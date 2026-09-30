import Styles from './css/preto.module.css';
import whats from '../assets/guitarras/whats.png';
import insta from '../assets/guitarras/insta.png';
import face from '../assets/guitarras/face.png';

function Preto() {
    return (
        <footer className={Styles.preto}>
            <h4>Nossa Loja - Instrumentos Musicais</h4>
            <p>Rua Tito, 54 - Lapa</p>
            <p>São Paulo - Brasil</p>

            <div className={Styles.iconePreto}>
                <a href="#"><img src={whats} alt="WhatsApp"></img></a>
                <a href="#"><img src={insta} alt="Instagram"></img></a>
                <a href="#"><img src={face} alt="Facebook"></img></a>
            </div>
        </footer>
    )
}

export default Preto