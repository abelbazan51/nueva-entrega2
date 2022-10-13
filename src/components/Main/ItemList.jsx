import Item from './Item';
import React from 'react';

const ItemList = ({items}) => {
    //mapeo de los productos
    return (
        <div className="item-list">
{items.map((prod)=> {
return <Item prod={prod} key={prod.id}/>
})}
        </div>
    );
};

export default ItemList;
