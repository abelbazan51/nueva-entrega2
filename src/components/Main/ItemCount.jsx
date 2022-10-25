import React, { useState } from 'react';

const ItemCount = (props) => {
    const [count, setCount] = useState(props.initial);
    const { prueba } = props;

    const Sumar = () => {
     count < props.stock && setCount (count + 1)
        }
        
    
  const restar =() => {
    count > props.initial && setCount (count -1)
  }
    const add =() => {
    }
    prueba(count)

    return (
        <div className="container-count">
            <div className="count-btn">
                <button disabled={count === props.stock} onClick={Sumar}>+</button>
                <p>{count}</p>
                <button disabled={count === props.initial} onClick={restar}> -</button>
            </div>
            <button onClick={add} className="add-btn">Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;
