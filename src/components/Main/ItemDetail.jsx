import { useState } from "react";

import ItemCount from "./ItemCount";

const ItemDetail =({item})  => {
  const [unidades,setUnidades] =useState(0)

const Prueba=(numero)=>{
setUnidades(numero)}
        
        
        return (
            <div className="container-detail">
                <img src={item.img} alt=""/>
                <div>
                    <h2>{item.title}</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sed dignissimos, quasi deleniti voluptates asperiores voluptatum quod natus incidunt similique.</p>
            
         <ItemCount Prueba={Prueba} 
            stock={10}
            initial={1}
            />
            {unidades=== 0 ?( 
                <p>este es el item count</p>
            ):(
                <button>ir al carrito</button>
            )}
                
            </div>
            
            </div>
            )
        

        }

export default ItemDetail