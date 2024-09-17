import { useEffect, useState } from "react";
import Link from "next/link";
/*Componentes */
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FormContactInfos } from "@/components/FormContactInfos";
import CardProductAdmin from '@/components/CardProductAdmin';
import ConfirmDelete from '@/components/Modals/ConfirmDelete'

/*Estilos */
import styles from '@/styles/SectionMain.module.css';
import stylesMain from "@/styles/Main.module.css";
import stylesCommon from "@/styles/Home.module.css";
import stylesAdmin from "@/styles/AdminProducts.module.css";

/*Service */
import { getProducts } from "@/service/productsService";
import { deleteProduct } from "@/service/productsService";
import { toast } from "react-toastify";



export default function Admin() {
    const [listProducts, setListProducts] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [idProduct, setIdProduct] = useState('')
    const [reload, setReload] = useState(false)

    const deleteProd = (id) => {
        deleteProduct(id)
        .then(()=>{
            toast.success('Deletado com sucesso!',{})
        })
    }

    const getInfoProduct = (id) =>{
        localStorage.setItem('idProduct', id)
    }
    
    useEffect(() => {
        getProducts()
            .then((res) => {
                console.log(res)
                setListProducts(res)
            })
    },[reload])


    return (
        <>
            <Header />
            <div className={stylesMain.main}>
                <section className={`${styles.sessaoPrincipal}  ${stylesAdmin.infoSessao}`}>
                    <div className={styles.infoSessao}>
                        <h1>Todos os produtos</h1>
                        <Link href={'/addProducts'}>
                            <button className={stylesCommon.botoes}>Adicionar produto</button>
                        </Link>
                    </div>
                    <div className={styles.sessoes} data-todos-produtos>
                        {
                            listProducts && listProducts.map((item) => {
                                return (
                                    <CardProductAdmin
                                        key={item.id}
                                        img={item.urlImg}
                                        name={item.nameProduct}
                                        price={`R$ ${item.price}`}
                                    >
                                        <a data-botao-deletar >
                                            <img className={`${styles.linkCrud} ${styles.botaoExcluir}`} src="/imagens/imgdelete.png" alt="" onClick={()=>{setOpenModal(true), setIdProduct(item.id)}}
                                            />
                                        </a>
                                        <Link href="/addProducts" data-botao-editar >
                                            <img className={styles.linkCrud} src="/imagens/imgedit.png" alt=""  onClick={()=>{getInfoProduct(item.id)}}/>
                                        </Link>
                                    </CardProductAdmin>
                                )
                            })
                        }
                    </div>
                </section>
                <FormContactInfos />
            </div>
            <Footer />
            <ConfirmDelete
                open={openModal}
                onClose = {()=>{setOpenModal(false)}}
                onClick = {()=>{deleteProd(idProduct), setOpenModal(false), setReload(true)}}
            />
        </>
    )
}