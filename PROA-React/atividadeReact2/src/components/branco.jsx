import styles from './css/branco.module.css';
import violaoImg from '../assets/guitarras/guitarrinha.jpg';

function Branco() {
  return (
    <section className={styles.brancoFundo}>
      
      <div className={styles.violao1}>
        <img className={styles.violao} src={violaoImg} alt="violao" />
        <p className={styles.textoViolao1}>VIOLAO YAMAHA C70 II CLASSICO NYLON ACUSTICO NATURAL BRILHANTE</p>
        <p className={styles.precoViolao1}>R$ 989,50</p>
      </div>

      <div className={styles.violao2}>
        <img className={styles.violao} src={violaoImg} alt="violao" />
        <p className={styles.textoViolao2}>VIOLAO YAMAHA C70 II CLASSICO NYLON ACUSTICO NATURAL BRILHANTE</p>
        <p className={styles.precoViolao2}>R$ 989,50</p>
      </div>

      <div className={styles.violao3}>
        <img className={styles.violao} src={violaoImg} alt="violao" />
        <p className={styles.textoViolao3}>VIOLAO YAMAHA C70 II CLASSICO NYLON ACUSTICO NATURAL BRILHANTE</p>
        <p className={styles.precoViolao3}>R$ 989,50</p>
      </div>

      <div className={styles.violao4}>
        <img className={styles.violao} src={violaoImg} alt="violao" />
        <p className={styles.textoViolao4}>VIOLAO YAMAHA C70 II CLASSICO NYLON ACUSTICO NATURAL BRILHANTE</p>
        <p className={styles.precoViolao4}>R$ 989,50</p>
      </div>

    </section>
  );
}

export default Branco;