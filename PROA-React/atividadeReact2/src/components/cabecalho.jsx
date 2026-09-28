import styles from './css/cabecalho.module.css';
import imagemFundoGuitarras from '../assets/guitarras/guitarras_header.jpg'; 

function Cabecalho() {
  return (
    <header className={styles.header}>

      <nav className={styles.barra}>
        <ul className={styles.lista}>
          <li className={styles.item}><a href="#">Home</a></li>
          <li className={styles.item}><a href="#">Quem Somos</a></li>
          <li className={styles.item}><a href="#">Instrumentos</a></li>
          <li className={styles.item}><a href="#">Endereço</a></li>
          <li className={styles.item}><a href="#">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Cabecalho;