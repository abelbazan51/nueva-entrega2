import { createContext} from "react";

export const CartContext = createContext() ;

const Provider = ({children}) => {

    return (
        <CartContext.Provider value={{}}>{children}
             </CartContext.Provider>
    )
}
export default Provider