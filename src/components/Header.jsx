import Link from "next/link";

/*Styles */
import styles from "@/styles/Home.module.css";

/*Componentes */
import {Button} from '@/components/common/Button'

export function Header({buttonLogin, children}){
    return(
        <div className={styles.header}>
            <div className={styles.cabecalho}>
                <div className={styles.logoBusca}>
                    
                    <Link href="/" className={styles.logo}>
                        <img src="/imagens/logo-controle.png" id={styles.elementoLogo}/>
                        <img src="/imagens/logo-alura.png" className={styles.elementosLogo} />
                        <img src="/imagens/logo-geek.png" className={styles.elementosLogo} />
                    </Link>
                    <form className={styles.formPesquisa}>
                        <input type="text" placeholder="O que deseja encontar?" className={styles.inputPesquisa} />
                        <button className={styles.bBusca}><img src="/imagens/Vector.png" alt="" /></button>
                    </form>
                </div>

                {buttonLogin && (
                    <div className={styles.botaoLogin}>
                        <Link href={'/login'}>
                            <Button 
                                label={'Login'}
                                color={'white'}
                                data-botao-login
                            />
                            {/* <button className={'botaoBranco'} data-botao-login>Login</button> */}
                        </Link>
                    </div>)
                }
            </div>
            {children}
            
        </div>
    )
} 