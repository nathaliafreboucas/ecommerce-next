/*React-Next */
import React from 'react';
import { useRouter } from "next/router";
import { useState } from "react";
/**Componentes */
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FormContactInfos } from "@/components/FormContactInfos";
/**Estilos */
import styles from '@/styles/Login.module.css';
import stylesCommonButton from "@/styles/Home.module.css";
import stylesCommonInput from "@/styles/FormContactInfos.module.css";

/**Bibliotecas e serviços */
import { toast } from 'react-toastify';
import { signIn } from "@/service/userAcces";


export default function login() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const authLogin = (e) => {
        e.preventDefault()

        signIn(email, password)
            .then((resposta) => {
                console.log("Resposta", resposta)
                toast.success("Login feito com sucesso!", {})
                router.push('/admin')
            }).catch((err) => {
                const errorCode = err.code;

                toast.error(errorCode ===
                    "auth/invalid-credential" ?
                    "Email inválido. Verifique o email e senha que estão no README do repositório." :
                    "Não foi possível logar!")
            })
    }

    return (
        <>
            <Header />
            <div className={styles.main}>

                <form onSubmit={(e) => authLogin(e)} className={styles.formularioLogin}>
                    <div className={styles.formLogin}>
                        <legend className={styles.loginLegenda}>Iniciar Sessão</legend>
                        <div className={`"${styles.input} ${stylesCommonInput.inputNome}`}>
                            <input name="email" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            <label htmlFor="email">Digite seu email</label>
                        </div>
                        <div className={`${styles.input} ${stylesCommonInput.inputNome}`}>
                            <input name="senha" type="password" id="senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            <label htmlFor="senha">Digite sua senha</label>
                        </div>
                        <button className={stylesCommonButton.botoes} id="entrar" type="submit">Entrar</button>
                    </div>
                </form>
                <FormContactInfos />
            </div>
            <Footer />
        </>
    )
}