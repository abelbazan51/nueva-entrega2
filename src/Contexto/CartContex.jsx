import { createContext, useState} from "react";

export const CartContext = createContext() ;

const Provider = ({children}) => {
const [cart,setcart] = useState ([])
const addToCart =(item,cantidad) => {
    const producto = {
        ...item,cantidad}
        if (isInCart(producto.id)){
            alert('ya esta en el carrito flaco, sumale la cantidad')
        
        }else{
            setcart([...cart, producto])
        }
}
const sumarCantidad = (prodAgregado) =>{
    const carritoActualizado = cart.map ((prodDelCart) => {
if (prodDelCart.id === prodAgregado.id) {
    const prodActualizado={
        ...prodDelCart,
        cantidad: prodDelCart.cantidad + prodAgregado.cantidad
    }
    return prodActualizado
}else{
    return prodDelCart
}
    

    })
    setcart(carritoActualizado)
}
const isInCart =(id)  => cart.some((prod) => prod.id ===id)
const deleteAll =() => setcart([])

console.log(cart);
    return (
        <CartContext.Provider value={{cart , addToCart , deleteAll}}>{children}
             </CartContext.Provider>
    )
}
export default Provider