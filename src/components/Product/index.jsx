import "./index.css"

const Product = ({ item, handleClick }) => {
    return (
        <>
            <div className="item-image">
            <img src={item.img}/>
            </div>
            <p className="item-name">{item.name}</p>
            <p className="item-category">{item.category}</p>
            <p className="item-price">{item.price}</p>
            <button 
                className="item-buy"
                onClick={() => handleClick(item.id)}>
                Comprar
            </button>
            </>
    )
}

export default Product