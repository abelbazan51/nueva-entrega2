import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail =({item})  => {
    const[unidades, setUnidades]= useState(0)

    const prueba=(numero)=>{
        setUnidades(numero) 
        
        }
        return (
            <div className="container-detail">
                <img src={item.img} alt=""/>
                <div>
                    <h2>{item.title}</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sed dignissimos, quasi deleniti voluptates asperiores voluptatum quod natus incidunt similique.</p>
            
            {unidades === 0 ? (<ItemCount prueba={prueba} stock={10} initial={1}/>
            ):(
<Link to="/cart">ir al carrito</Link>                )
            }
            </div>
            
            
            </div>)}




export default ItemDetail