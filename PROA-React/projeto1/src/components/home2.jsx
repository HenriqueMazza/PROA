import Styles from './css/home2.module.css'
import Home2img from '../assets/imgs/home2img.png'

function Home2(){
    return(
        <div className={Styles.home2Area}>
            <img src={Home2img} alt="Imagem"/>

            <div className={Styles.home2area2}>
                <h1 className={Styles.home2text}>Do mundo que temos hoje, para o mundo de respeito que queremos construir. </h1>
                <h1 className={Styles.home2text}>Sofreu ou testemunhou preconceito? Denuncie. Não aceite a violência, pois a mudança só acontece quando a gente não se cala.</h1>
            </div>
        </div>
    )
}

export default Home2
