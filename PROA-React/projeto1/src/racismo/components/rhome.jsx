import FundoRhome from '../../assets/imgs/FundoRhome.png';
import Styles from '../css/rhome.module.css';

function RHome() {
  return (
    <>
    <section className={Styles.conteudo}>
      <div className={Styles.conteudoImagem}>
        <img src={FundoRhome} alt="Imagem explicando tipo de racismo" />
      </div>
      <div className={Styles.conteudoTexto}>
        <h1 className={Styles.tituloTexto}>Compreender o Racismo e Construir uma Sociedade Antirracista</h1>
        <p className={Styles.rHomeTexto}>
          O racismo é uma forma de discriminação baseada na raça, a partir do falso entendimento de que haveria raças humanas superiores a outras. O racismo pode se manifestar de diferentes formas, mas é, sobretudo, uma forma de violência contra as populações negras.
          <br /><br />
          No Brasil, apesar de o racismo ser criminalizado, um conjunto de relações que o reproduzem pode ser observado no cotidiano, como as dificuldades de acesso a serviços e direitos básicos, a marginalização dessas populações e o tratamento diferenciado a partir da raça.
          Como combater o racismo?
          <br /><br />
        O combate ao racismo deve partir de um esforço da sociedade, das instituições e do Estado. No âmbito social, pode-se observar a necessidade de uma conscientização em relação aos efeitos nocivos do racismo, a sua violência e exclusão. Essa conscientização pode ser construída por meio da educação antirracista, por meio da diversificação dos espaços sociais e da valorização das manifestações culturais negras presentes na sociedade.
        <br />

        </p>
      </div>
      </section>
    </>
  );
}

export default RHome;