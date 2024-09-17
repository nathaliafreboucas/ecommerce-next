import styles from "@/styles/Home.module.css";

export function Banner(){
    return(
        <div className={styles.banner}>
            <div className={styles.bannerLetras}>
                <h1>Dezembro Promocional</h1>
                <p>Produtos selecionados com 33% de desconto</p>
                <button className={`${styles.botoes} ${styles.bConsole}`} data-botao-ver-consoles> Ver Consoles </button>
            </div>
        </div>
    )
}