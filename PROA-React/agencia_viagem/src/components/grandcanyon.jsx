import Styles from './css/grandcanyon.module.css'
import ComponentsProps from './componentsProps'
import BandeiraEUA from '../assets/imagesAgencia/bandeiraEUA.png'
import FormasPagamento from './formasPagamento'
import CartaoMaster from '../assets/imagesAgencia/Cartao.png'
import CartaoVisa from '../assets/imagesAgencia/CartaoVisa.png'
import NaoPix from '../assets/imagesAgencia/NaoPix.jpg'

function Grandcanyon(){
    return(
        <section className={Styles.grandcanyonArea}>
            <h1>Super Oferta Estados Unidos - Parcelamento em até 6x sem juros</h1>
            <ComponentsProps 
            lugar="O Grand Canyon"
            texto="O Grand Canyon é uma monumental garganta esculpida pelo Rio Colorado, cujas imponentes camadas de rocha vermelha revelam milhões de anos de história geológica. Localizado no Arizona, impressiona os visitantes com a sua vasta dimensão, desfiladeiros profundos e paisagens de cortar a respiração."
            bandeira={BandeiraEUA}/>
             <FormasPagamento 
            formas="Aceitamos Cartão de crédito e débito!"
            iconeCartaoMaster={CartaoMaster}
            iconeCartaoVisa={CartaoVisa}
            iconePix={NaoPix}/>
        </section>
    )
}

export default Grandcanyon