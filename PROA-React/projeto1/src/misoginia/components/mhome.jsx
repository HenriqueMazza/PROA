import FundoMhome from '../../assets/imgs/FundoMhome.png';
import Styles from '../css/mhome.module.css';

function MHome() {
  return (
    <>
    <section className={Styles.conteudo}>
      <div className={Styles.conteudoImagem}>
        <img src={FundoMhome} alt="Imagem explicando sobre misoginia" />
      </div>
      <div className={Styles.conteudoTexto}>
        <h1 className={Styles.tituloTexto}>Entender a Misoginia e Promover a Igualdade de Gênero</h1>
        <p className={Styles.mHomeTexto}>
          A misoginia é o ódio, desprezo ou preconceito contra mulheres ou meninas. Ela se manifesta de diversas formas, desde a discriminação social, salarial e profissional até a violência física e psicológica, baseando-se na crença estrutural e infundada da superioridade masculina.
          <br /><br />
          No Brasil, o machismo estrutural perpetua um ciclo de desigualdade no cotidiano, dificultando a ascensão das mulheres, limitando sua autonomia e as colocando em situações de vulnerabilidade, como o assédio e a violência doméstica.
          Como combater a misoginia?
          <br /><br />
          O combate à misoginia deve ser um compromisso coletivo. No âmbito social, é necessária a desconstrução de estereótipos de gênero e a promoção da igualdade de oportunidades. Isso se constrói através de uma educação inclusiva, do fortalecimento de leis de proteção (como a Lei Maria da Penha) e da criação de espaços seguros e de escuta para as mulheres em todos os setores da sociedade.
          <br />
        </p>
      </div>
      </section>
    </>
  );
}

export default MHome;