import { addDoc, collection, getDocs, updateDoc, deleteDoc, doc, getDoc } from "firebase/firestore"
import { database } from "@/firebase/config"

const dataProducts =  collection(database, 'Products')
/**Adiciona Produto */
export const uploadProduct = async (data) => {
    await addDoc(dataProducts, data)
    .then((res)=>{
        return res
    })
    .catch((error)=>{
        console.error(error);
        throw error;
    })
}

/**Pega o Produto */
export const getProducts = async () => {
    try{
        const response = await getDocs(collection( database, 'Products'))
        const listProducts = response.docs.map((data)=>{
            return {...data.data(), id: data.id}
        })
        return listProducts

    }catch(err){
        console.error(err)
        throw err
    }
}   

/*Pega produto pelo id */
export const getProductById = async (id) => {
    try{
        const response = await getDoc(doc(database, 'Products/' + id))
        return response

    }catch(err){
        console.error(err)
        throw err
    }
}

/*Deleta produto */

export const deleteProduct = async (id) => {
    try{
        const response = await deleteDoc(doc(database, 'Products', id))
        return response

    }catch(err){
        console.error(err);
        throw err
    }
}

export const editProduct= async (id,data)=>{
    console.log(id, data)
    try{
        const response = await updateDoc(doc(database, 'Products', id), data)
        return response
    }catch(err){
        console.error(err)
        throw err
    }
}
