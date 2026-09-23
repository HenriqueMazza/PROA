import Styles from './css/amarelo.module.css'

function Amarelo(){
    return(
        <section className={Styles.secAmarelo}>
            <div className={Styles.azulEscuro}>
                <p>Azul escuro</p>
            </div>
            <div className={Styles.verde}>
                <p>Verde</p>
            </div>
        </section>
    )
}

export default Amarelo