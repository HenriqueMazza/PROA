import FundoHhome from '../../assets/imgs/FundoHhome.jpg';
import Styles from '../css/hhome.module.css';

function HHome() {
  return (
    <>
    <section className={Styles.conteudo}>
      <div className={Styles.conteudoImagem}>
        <img src={FundoHhome} alt="Imagem explicando sobre homofobia" />
      </div>
      <div className={Styles.conteudoTexto}>
        <h1 className={Styles.tituloTexto}>Homofobia: Respeito à Diversidade e Enfrentamento ao Preconceito</h1>
        <p className={Styles.hHomeTexto}>
          A homofobia é a aversão, o preconceito ou a discriminação contra pessoas homossexuais. Ela se baseia na intolerância à diversidade de orientação sexual e afeta diretamente a dignidade, a liberdade e a segurança emocional e física da comunidade LGBTQIAPN+.
          <br /><br />
          No Brasil, embora a LGBTfobia tenha sido equiparada ao crime de racismo pelo STF, manifestações de preconceito continuam sendo observadas no cotidiano, seja através de piadas depreciativas, exclusão familiar, ou dificuldades de inserção no mercado de trabalho e violência motivada pelo ódio.
          Como combater a homofobia?
          <br /><br />
          O combate à homofobia exige a normalização do respeito à diversidade afetiva. É fundamental promover campanhas de conscientização, garantir o cumprimento das leis antidiscriminação e fomentar ambientes corporativos e escolares inclusivos, onde qualquer pessoa se sinta segura para ser quem é, sem medo de represálias.
          <br />
        </p>
      </div>
      </section>
    </>
  );
}

export default HHome;