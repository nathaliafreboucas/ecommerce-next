import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/config";

export const signIn = async (email, password) =>{
    try{
        const resposta = signInWithEmailAndPassword(auth, email, password);
        return resposta
    } catch (err) {
        console.error(err);
        throw err;
    }
}