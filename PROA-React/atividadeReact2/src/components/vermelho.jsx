import styles from './css/vermelho.module.css'

function Vermelho(){
    return(
        <section className={styles.fundoVermelho}>
            <div className={styles.vermelho1}>
                <h1 className={styles.tituloVermelho1}>Noosa Loja - Instrumentos Musicais</h1>

                <p className={styles.textoVermelho1}>Se você é um amante da música, está em busca de um novo instrumento musical e não abre mão da qualidade, chegou ao lugar certo! Aqui em nossa loja você encontra os melhores itens, como: teclado, piano (digital e acústico), contrabaixo, bateria, guitarra, violão, sopro e muito mais! Nossos instrumentos possuem o selo de qualidade das melhores marcas do mercado! Escolha os seus favoritos e os receba em casa com toda a comodidade que você precisa. Confira nossas opções disponíveis e tenha em mãos instrumentos de ponta!</p>
            </div>

        </section>
    )
}

export default Vermelho