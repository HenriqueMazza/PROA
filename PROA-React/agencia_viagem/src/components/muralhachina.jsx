import Styles from './css/muralhachina.module.css'
import ComponentsProps from './componentsProps'
import BandeiraChina from '../assets/imagesAgencia/bandeiraChina.png'
import FormasPagamento from './formasPagamento'
import NaoMaster from '../assets/imagesAgencia/NaoMaster.jpg'
import NaoVisa from '../assets/imagesAgencia/NaoVisa.jpg'
import Pix from '../assets/imagesAgencia/Pix.png'

function Muralhachina(){
    return(
        <section className={Styles.muralhachinaArea}>
            <h1>Pacote Premium Muralha da China - 7 dias e 6 noites</h1>
            <ComponentsProps
            lugar="A China"
            texto="A China é uma potência milenar de contraste fascinante, onde tradições ancestrais e monumentos como a Grande Muralha convivem com metrópoles hipertecnológicas. Sendo o país mais populoso do mundo e uma força global em inovação, destaca-se por sua rica diversidade cultural, gastronomia e paisagens naturais impressionantes." 
            bandeira={BandeiraChina}/>
            <FormasPagamento 
            formas="Aceitamos Apenas Pix!"
            iconeCartaoMaster={NaoMaster}
            iconeCartaoVisa={NaoVisa}
            iconePix={Pix}/>
        </section>
    )
}

export default Muralhachina