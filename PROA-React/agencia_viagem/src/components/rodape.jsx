import Styles from './css/rodape.module.css'
import Face from '../assets/imagesAgencia/face.jfif'
import Insta from '../assets/imagesAgencia/insta.jfif'
import Tiktok from '../assets/imagesAgencia/tiktok.png'
import Whats from '../assets/imagesAgencia/whtas.png'

function Rodape(){
    return (
        <footer>

            <div className={Styles.rodapeTexto}>
                <p>Agencia de Viagens Travel e Associados</p>
                <p>Endereco Rua tito, 54 - Vila Romana</p>
                <p>Telefone: (11) 3265-4546</p>
                <p>Email: agencia_viagem@travel.com.br</p>
            </div>

            <div className={Styles.rodapeRedes}>
                <img src={Face} alt="Imagem da logo do Facebook" />
                <img src={Insta} alt="Imagem da logo do Instagram" />
                <img src={Tiktok} alt="Imagem da logo do Tiktok" />
                 <img src={Whats} alt="Imagem da logo do WhatsApp" />
            </div>

        </footer>

    )
}

export default Rodape