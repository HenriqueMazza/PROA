import Imagem from '../assets/react.svg'
import styles from './css/miolo.module.css'
function Miolo(){
    return(
        <section className={styles.campoQuadro}>
            <div className={styles.quadro}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum unde architecto quasi libero commodi modi nemo eos laborum distinctio magnam a iusto, officia nam maiores nobis minima ab mollitia facere?
                </p>
            </div>
            <div className={styles.quadro}>
                <img src={Imagem}alt="Teste de uma imagem aleatoria"/>
            </div>
        </section>
    )
}

export default Miolo