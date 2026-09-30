import Styles from './css/branco2.module.css';
import whats from '../assets/guitarras/whats.png';
import insta from '../assets/guitarras/insta.png';
import face from '../assets/guitarras/face.png';

function Branco2() {
  return (
    <section className={Styles.fundoBranco2}>
      <form className={Styles.contato}>
        <label htmlFor="nome">Entre com o seu nome:</label>
        <input type="text" className={Styles.nome} name="nome" placeholder="Digite seu nome aqui" />

        <label htmlFor="email">Entre com o seu e-mail:</label>
        <input type="email" className={Styles.email} name="email" placeholder="Digite seu email aqui" />

        <label htmlFor="mensagem">Inserir texto:</label>
        <textarea className={Styles.mensagem} name="mensagem" placeholder="Faça seu pedido por aqui"></textarea>

        <button type="submit">Enviar</button>
      </form>

      <div className={Styles.redesSociais}>
        <p>Acesse também nossas redes sociais:</p>
        <div className={Styles.redes}>
          <a href="#"><img src={whats} alt="WhatsApp" /></a>
          <a href="#"><img src={insta} alt="Instagram" /></a>
          <a href="#"><img src={face} alt="Facebook" /></a>
        </div>
      </div>
    </section>
  );
}

export default Branco2;