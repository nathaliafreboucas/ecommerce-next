import Link from "next/link";

/*Styles */
import styles from '@/styles/CardProduct.module.css';

export function CardProduct({url, name, price, id,  categorie}){
    return(
        <div className={styles.caixa}>
            <img className={styles.caixaImg}src={`${url}`} alt=""/>
            <div className={styles.infoProduto}>
                <p className={styles.nomeProduto}>{name}</p>
                <p className={styles.preco}>{price}</p>
                <Link href={`./detalhes-produto.html?id=${id}&categoria=${categorie}`} className={styles.infoProduto}>
                    Ver produto
                </Link>
            </div>
        </div>
    
    )
}