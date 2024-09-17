import styles from '@/styles/FormContactInfos.module.css'
import stylesBotoes from '@/styles/Home.module.css'


export function FormContactInfos(){
    return (
        <div className={styles.menuFormulario}>
            <div className={styles.conteudoMenuFormulario}>
                <div className={styles.logoMenu}>
                    <div className={`${styles.logo} ${styles.logoRodape}`}>
                        <img src="/imagens/logo-controle.png" alt=""/>
                        <img src="/imagens/logo-alura.png" alt=""/> 
                        <img src="/imagens/logo-geek.png" alt=""/>
                    </div>
                    <ul className={styles.menu}>
                        <li><a href="#">Quem somos nós</a></li>
                        <li><a href="#">Política de privacidade</a></li>
                        <li><a href="#">Programa fidelidade</a></li>
                        <li><a href="#">Nossas lojas</a></li>
                        <li><a href="#">Quero ser franqueado</a></li>
                        <li><a href="#">Anuncie aqui</a></li>
                    </ul>
                </div>
                <form action="./mensagem-enviada.html" className={styles.formulario}>
                    <div className={styles.sessaoUnica}>
                        <p className={styles.formularioLegenda}>Fale Conosco</p>
                        <div className={`${styles.input} ${styles.inputNome}`}>
                            <input name="nome" type="text" id="nome" data-form-nome-rodape />
                            <label htmlFor="nome">Nome</label>
                        </div>
                        <div className={`${styles.input} ${styles.textarea}`}>
                            <textarea type="text" id="mensagem" placeholder="Escreva sua mensagem" className={styles.textarea} data-form-mensagem-rodape></textarea>
                        </div>
                        <button type="submit" className={stylesBotoes.botoes} id={styles.enviaMensagem} data-form-botao-rodape>Enviar mensagem</button>
                    </div>
                </form>
            </div>
        </div>
    )
}