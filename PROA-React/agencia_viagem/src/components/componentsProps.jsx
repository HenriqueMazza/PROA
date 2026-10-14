import Styles from './css/componentsProps.module.css'

function ComponentsProps({lugar, texto, bandeira}){
    return(
        <div className={Styles.corpoTexto}>
            <h2>Venha conhecer esse lugar incrivel! {lugar}</h2>
            <p>{texto}</p>
            <img src={bandeira} alt="Imagem da bandeira" className={Styles.imgProps}/>
        </div>
    )
}

export default ComponentsProps