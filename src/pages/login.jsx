/*React-Next */
import React from 'react';
import { useRouter } from "next/router";
import { useState } from "react";
/**Componentes */
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FormContactInfos } from "@/components/FormContactInfos";
import {Button} from '@/components/common/Button'

/**Estilos */
import style from '@/styles/Login.module.css';

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
            <div className={"main"}>

                <form onSubmit={(e) => authLogin(e)} className={style.formularioLogin}>
                    <div className={style.formLogin}>
                        <legend className={style.loginLegenda}>Iniciar Sessão</legend>
                        <div className={`"${style.input} inputNome`}>
                            <input name="email" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            <label htmlFor="email">Digite seu email</label>
                        </div>
                        <div className={`${style.input} inputNome`}>
                            <input name="senha" type="password" id="senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            <label htmlFor="senha">Digite sua senha</label>
                        </div>
                        <Button
                            color={'blue'}
                            id={'entrar'}
                            type ={'submit'}
                            label={'Entrar'}
                        />
                        {/* <button className={'botoes'} id="entrar" type="submit">Entrar</button> */}
                    </div>
                </form>
                <FormContactInfos />
            </div>
            <Footer />
        </>
    )
}