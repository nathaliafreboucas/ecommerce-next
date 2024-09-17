import { useEffect, useState } from "react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

/*Componentes */
import { FormContactInfos } from "@/components/FormContactInfos"
import {Button} from '@/components/common/Button'

/*Styles */
import styles from '@/styles/NewProducts.module.css'

/*Service Dados*/
import { categories } from '@/data/dataUtils'
import { uploadProduct, getProductById, editProduct } from '@/service/productsService'
import { toast } from "react-toastify"

export default function AddProduct() {
    const [urlImg, setUrlImg] = useState('');
    const [category, setCategory] = useState('');
    const [nameProduct, setNameProduct] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [id, setId] = useState('');

    const [editOpen, setEditOpen] = useState(false);

    const getProduct = (id) => {
        getProductById(id)
            .then((res) => {
                if (res.exists()) {
                    const obj = res.data()
                    setId(id)
                    setUrlImg(obj.urlImg)
                    setCategory(obj.category)
                    setNameProduct(obj.nameProduct)
                    setPrice(obj.price)
                    setDescription(obj.description)
                }
                localStorage.setItem("idProduct", "")
            })
    }
    
    useEffect(() => {
        const id = localStorage.getItem('idProduct');
        if (id) {
            setEditOpen(true)
            getProduct(id)
        } else {
            setEditOpen(false)
        }
        
    }, [])
    
    const clearInputs = () => {
        setUrlImg('')
        setCategory('')
        setNameProduct('')
        setPrice('')
        setDescription('')

    }

    const addProduct = async (e) => {
        e.preventDefault();
        const data = {
            urlImg: urlImg,
            category: category,
            nameProduct: nameProduct,
            price: price,
            description: description,
        }

        if (!editOpen) {

            await uploadProduct(data)
                .then(() => {
                    toast.success('Cadastrado com sucesso!', {})
                    window.history.back();
                    clearInputs();
                })
        }else{
            await editProduct(id, data)
                .then(()=>{
                    toast.success('Atualizado com sucesso!', {})
                    window.history.back();
                    clearInputs();
                })
        }
    }

    return (
        <>
            <Header />
            <div className={'main'}>
                <div className={styles.formularioNovoProduto}>
                    <form onSubmit={addProduct} className={styles.novoProduto} data-form-adiciona-produto>
                        <legend className={styles.novoProdutoLegenda}>Adicionar novo produto</legend>
                        <div className={'input inputNome'}>
                            <input
                                name="url"
                                type="text"
                                id={styles.url}
                                value={urlImg}
                                data-url
                                onChange={(e) => { setUrlImg(e.target.value) }}
                            />
                            <label htmlFor="url">Url da imagem</label>
                        </div>
                        <div className={'input inputNome'}>
                            <select
                                value={category}
                                name="categoria"
                                type="text"
                                className={`${styles.selectCategorie} inputNome`}
                                id={styles.categoria}
                                data-categoria
                                onChange={(e) => { setCategory(e.target.value) }}
                            >
                                <option value="">Selecione um categoria</option>
                                {
                                    categories.map((item) => {
                                        return <option key={item.value} value={item.value}> {item.label} </option>
                                    })
                                }
                            </select>
                        </div>
                        <div className={'input inputNome'}>
                            <input
                                value={nameProduct}
                                name="produto"
                                type="text"
                                id={styles.produto}
                                data-nome
                                onChange={(e) => { setNameProduct(e.target.value) }}
                            />
                            <label htmlFor="produto">Nome do produto</label>
                        </div>
                        <div className={'input inputNome'}>
                            <input
                                value={price}
                                placeholder="0.00"
                                name="preco"
                                type="text"
                                id={styles.preco}
                                data-preco
                                onChange={(e) => {
                                    // Remove caracteres não numéricos e zeros à frente
                                    const cleanedValue = (e.target.value).replace(/[^0-9]/g, '');
                                    // Converte para número e formata para duas casas decimais
                                    const numericValue = parseInt(cleanedValue, 10) || 0;
                                    const formattedValue = (numericValue / 100).toFixed(2);
                                    setPrice(formattedValue);
                                }}
                            />
                            <label htmlFor="preco">Preço do produto</label>
                        </div>
                        <div className={'input'}>
                            <textarea
                                value={description}
                                className={'textarea'}
                                type="text" id='descricao'
                                placeholder="Descrição do produto"
                                data-descricao
                                onChange={(e) => { setDescription(e.target.value) }}
                            />
                        </div>
                        <Button 
                            type={'submit'}
                            label= {editOpen?'Atualizar': 'Enviar'}
                        />
                        {/* <button 
                            className={'botoes'} 
                            type="submit"
                        >
                            {editOpen?'Atualizar': 'Enviar'}
                        </button> */}
                    </form>
                </div>
                <FormContactInfos />
            </div>
            <Footer />
        </>
    )
}