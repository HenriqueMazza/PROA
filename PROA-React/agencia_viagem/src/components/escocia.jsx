import Styles from './css/escocia.module.css'
import ComponentsProps from './componentsProps'
import BandeiraEscocia from '../assets/imagesAgencia/bandeira_escocia.png'
import FormasPagamento from './formasPagamento'
import Pix from '../assets/imagesAgencia/Pix.png'
import CartaoMaster from '../assets/imagesAgencia/Cartao.png'
import CartaoVisa from '../assets/imagesAgencia/CartaoVisa.png'

function Escocia(){
    return(
        <section className={Styles.escociaArea}>
            <h1>Pacote Premium Scotland - 7 dias e 6 noites</h1>
            <ComponentsProps 
                lugar="A Escócia"
                texto="A Escócia é uma terra de paisagens deslumbrantes, marcada por castelos históricos, montanhas imponentes e lagos misteriosos. Berço do uísque e rica em folclore, combina uma cultura vibrante com uma identidade única no Reino Unido."
                bandeira={BandeiraEscocia}/>
                <FormasPagamento 
                formas="Aceitamos Cartão de crédito e débito e pix!"
                iconePix={Pix}
                iconeCartaoMaster={CartaoMaster}
                iconeCartaoVisa={CartaoVisa}/>

        </section>
    )
}

export default Escocia