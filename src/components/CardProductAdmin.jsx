import { useState } from 'react'
/*Styles */
import styles from '@/styles/AdminProducts.module.css'
import stylesCommonCard from '@/styles/CardProduct.module.css'


export default function CardProductAdmin({id,img,name,price, children}){
    return (
        <div className={stylesCommonCard.caixa}>
            <div className={styles.divImgBotoes}>
                <div className={styles.divImgProduto}>
                    <img className={stylesCommonCard.caixaImg} src={img} alt="" /> 
                </div>
                <div className={styles.divCrud}>
                    {children}
                </div>
            </div>
            
            <div className={styles.infoProduto}>
                <p className={styles.nomeProduto}>{name}</p>
                <p className={styles.preco}>{price}</p>
                <p className={styles.nomeProduto}>{id}</p>
            </div>
        </div>


    )
}