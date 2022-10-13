import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';

import { products } from '../../mock/productsMock';
import { useParams } from 'react-router-dom';

const ItemDetailContainer =() =>{
    const [item,setItems] = useState ([])

const {id}=useParams();

useEffect (() => {
    const traerProducto= ()=> {
        return new Promise (( res,rej)=> {
            const producto= products.find((prod) => prod.id === +id)
            setTimeout (() => {
                res(producto)
            },500)
        } )
    }
    traerProducto() 
    .then((res) => {
setItems(res)
    })
    .catch((error) =>{
        console.log(error)
    } )
},[])
return (
    <div className='item-list-container'>
        <ItemDetail item={item}/>

    </div>
)
}
export default ItemDetailContainer;
