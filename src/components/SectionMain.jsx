import styles from '@/styles/SectionMain.module.css';

export function SectionMain({titleSection, children}){
    return(
        <div className={styles.sessaoPrincipal} >
            <div className={styles.infoSessao}>
                <h1>{titleSection}</h1>
                <a href="#">Ver tudo <img src="/imagens/seta.svg" alt="" className={styles.seta} /></a>
            </div>
            <div className={styles.sessoes} data-sessao-sw>
                {/**rederiza todos os elmentos */}
                {children}            
            </div>
            
        </div>
    )
}