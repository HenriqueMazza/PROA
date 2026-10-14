import Styles from './css/aruba.module.css'
import ComponentsProps from './componentsProps'
import BandeiraAruba from '../assets/imagesAgencia/BandeiraAruba.png'
import FormasPagamento from './formasPagamento'
import Pix from '../assets/imagesAgencia/Pix.png'
import CartaoMaster from '../assets/imagesAgencia/Cartao.png'
import CartaoVisa from '../assets/imagesAgencia/CartaoVisa.png'

function Aruba(){
    return(
        <section className={Styles.arubaArea}>
            <h1>Oferta imperdivel! 20% de desconto a vista</h1>
            <ComponentsProps 
            lugar="Aruba"
            texto="Aruba é uma ilha caribenha de águas cristalinas e areias brancas, famosa pelo seu clima ensolarado e pela hospitalidade marcante do seu povo. Pertencente ao Reino dos Países Baixos, combina praias paradisíacas como Eagle Beach com uma arquitetura colorida de influência holandesa em Oranjestad."
            bandeira={BandeiraAruba}/>
            <FormasPagamento 
            formas="Aceitamos Cartão de crédito e débito e pix!"
            iconePix={Pix}
            iconeCartaoMaster={CartaoMaster}
            iconeCartaoVisa={CartaoVisa}/>
        </section>
    )
}

export default Aruba