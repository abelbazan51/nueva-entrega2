import ItemCount from "./ItemCount";

const ItemDetail= ({item}) => {

    return (
        <div className="container-detail">
            <img src={item.img} alt="" />
                <div>
                    <h2>{item.title}</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla recusandae, tempore voluptatibus quidem beatae praesentium commodi autem incidunt necessitatibus fuga?</p>
                <ItemCount stock={10} initial={1}/>
                </div>
        </div>
    )
}
export default ItemDetail