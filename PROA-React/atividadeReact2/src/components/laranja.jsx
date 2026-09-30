import Styles from './css/laranja.module.css';

function Laranja() {
    return (
        <section className={Styles.fundoLaranja}>
            <div className={Styles.mapa}>
                <iframe
                    src="https://www.google.com/maps?q=Rua+Tito,+54,+Pompéia,+São+Paulo&output=embed"
                >
                </iframe>
            </div>

            <div className={Styles.endereco}>
                <h3>Nossa Loja - Instrumentos Musicais</h3>
                <p>Está situada na Rua Tito, 54 - Pompéia, próximo ao teatro Cacilda Becker, em uma construção do século XIX, numa área de 500m2, 
                com uma variada gama de instrumentos, em um ambiente agradável para toda a família!
                </p>
            </div>
        </section>
    )
}

export default Laranja