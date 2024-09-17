import { useEffect, useState } from "react";

/*Componentes */
import { SectionMain } from "@/components/SectionMain.jsx"
import { CardProduct } from '@/components/CardProduct.jsx';
import { getProducts } from "@/service/productsService";

export function Main({ children }) {
    const [listProducts, setListProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then((res) => {
                console.log(res)
                setListProducts(res)
            })
    },[])

    return (
        <div className={"main"}>
            <SectionMain titleSection={'Star Wars'}>
            {listProducts.length > 0 && listProducts.filter((data) => data.category === 'starwars').length > 0?
                    listProducts.filter((data) => data.category === 'starwars')
                    .map((item) => {
                        return (
                            <CardProduct 
                                key={item.id} 
                                url={item.urlImg} 
                                name={item.nameProduct} 
                                price={`R$ ${item.price}`} 
                            />
                        ) 
                    }) :
                    <span>Não há produtos nessa categoria.</span>
                }
            </SectionMain>
            <SectionMain titleSection={'Consoles'} id={'consoles'}>
                {listProducts.length > 0 && listProducts.filter((data) => data.category === 'consoles').length > 0?
                    listProducts.filter((data) => data.category === 'consoles')
                    .map((item) => {
                        return (
                            <CardProduct 
                                key={item.id} 
                                url={item.urlImg} 
                                name={item.nameProduct} 
                                price={`R$ ${item.price}`} 
                            />
                        ) 
                    }) :
                    <span>Não há produtos nessa categoria.</span>
                }
            </SectionMain>
            <SectionMain titleSection={'Diversos'}>
            {listProducts.length > 0 && listProducts.filter((data) => data.category === 'diversos').length > 0?
                    listProducts.filter((data) => data.category === 'diversos')
                    .map((item) => {
                        return (
                            <CardProduct 
                                key={item.id} 
                                url={item.urlImg} 
                                name={item.nameProduct} 
                                price={`R$ ${item.price}`} 
                            />
                        ) 
                    }) :
                    <span>Não há produtos nessa categoria.</span>
                }
            </SectionMain>

            {children}
        </div>
    )
}