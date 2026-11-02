import FundoThome from '../../assets/imgs/FundoThome.jpg';
import Styles from '../css/thome.module.css';

function THome() {
  return (
    <>
    <section className={Styles.conteudo}>
      <div className={Styles.conteudoImagem}>
        <img src={FundoThome} alt="Imagem explicando sobre transfobia" />
      </div>
      <div className={Styles.conteudoTexto}>
        <h1 className={Styles.tituloTexto}>Transfobia: Garantia de Direitos, Identidade e Respeito à Dignidade</h1>
        <p className={Styles.tHomeTexto}>
          A transfobia é o preconceito, a discriminação e a violência direcionados a pessoas transgênero, travestis e não binárias. Ela ocorre pela não aceitação da identidade de gênero de um indivíduo que difere daquela que lhe foi designada no nascimento.
          <br /><br />
          O Brasil apresenta altos índices de violência contra essa população. A transfobia se manifesta desde a recusa em usar o nome social até a extrema marginalização, que empurra muitas pessoas trans para a evasão escolar, falta de acesso à saúde adequada e exclusão do mercado formal de trabalho.
          Como combater a transfobia?
          <br /><br />
          O combate passa obrigatoriamente pela garantia do acesso à cidadania plena. É preciso respeitar a identidade de gênero autodeclarada (incluindo o uso correto do nome e pronomes), criar políticas públicas de empregabilidade e garantir proteção legal severa contra crimes de ódio. A educação empática é a chave para desmontar os estigmas impostos a essas identidades.
          <br />
        </p>
      </div>
      </section>
    </>
  );
}

export default THome;