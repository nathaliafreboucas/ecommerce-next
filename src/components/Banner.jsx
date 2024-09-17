import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { Button } from "./common/Button";

export function Banner(){
    return(
        <div className={styles.banner}>
            <div className={styles.bannerLetras}>
                <h1>Dezembro Promocional</h1>
                <p>Produtos selecionados com 33% de desconto</p>
                <Link href={'#consoles'}>
                    <Button
                        color={'blue'}
                        label={'Ver Consoles'}
                        data-botao-ver-consoles
                    />
                </Link>
                {/* <button className={'botoes'} data-botao-ver-consoles> Ver Consoles </button> */}
            </div>
        </div>
    )
}