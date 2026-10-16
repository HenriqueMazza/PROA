import RacismoCard from '../assets/imgs/racismocard.png'
import HomofobiaCard from '../assets/imgs/homofobiacard.png'
import TransfobiaCard from '../assets/imgs/transfobiacard.png'
import MisoginiaCard from '../assets/imgs/misoginia.png'
import Styles from './css/homeCards.module.css'

function HomeCards(){
    return(
        <div className={Styles.Cards}>

            <div className={Styles.CardsRacismo}>
            <img src={RacismoCard} alt="Ícone de combate ao racismo" />
            <h2>Racismo</h2>
            <p>Quase 3 em cada 4 mortes de jovens por causas externas são de pessoas negras, evidenciando uma grave desigualdade na exposição à violência.</p>
            </div>

            <div className={Styles.CardsHomofobia}>
            <img src={HomofobiaCard} alt="Ícone de combate ao racismo" />
            <h2>Homofobia</h2>
            <p>O Brasil continua sendo um dos países que mais mata pessoas da comunidade LGBTQIA+ no mundo, com centenas de vítimas fatais de crimes de ódio a cada ano.
            </p>
            </div>

            <div className={Styles.CardsTransfobia}>
            <img src={TransfobiaCard} alt="Ícone de combate ao racismo" />
            <h2>Transfobia</h2>
            <p>A expectativa de vida de uma pessoa trans no Brasil é de apenas 35 anos, menos da metade da média nacional. E a maioria das vítimas de violência dissidentes de gênero é negra.
            </p>
            </div>

            <div className={Styles.CardsMisoginia}>
            <img src={MisoginiaCard} alt="Ícone de combate ao racismo" />
            <h2>Misoginia</h2>
            <p>O Brasil bate recordes tristes de feminicídio. Cerca de 4 mulheres são mortas por dia no país simplesmente pela sua condição de mulher.
            </p>
            </div>

        </div>
    )
}

export default HomeCards