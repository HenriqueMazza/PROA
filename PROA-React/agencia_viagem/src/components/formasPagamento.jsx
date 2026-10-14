import Styles from './css/formasPagamento.module.css'

function FormasPagamento({formas, iconePix, iconeCartaoMaster, iconeCartaoVisa}){
    return(
        <div className={Styles.pagamentoArea}>
            <h2>Formas de pagamento disponiveis: {formas}</h2>
        <img src={iconePix} alt="Imagem dos icones das formas de pagamento" className={Styles.imgIcones}/>
        <img src={iconeCartaoMaster} alt="Imagem dos icones das formas de pagamento" className={Styles.imgIcones}/>
        <img src={iconeCartaoVisa} alt="Imagem dos icones das formas de pagamento" className={Styles.imgIcones}/>
        </div>
    )
}

export default FormasPagamento