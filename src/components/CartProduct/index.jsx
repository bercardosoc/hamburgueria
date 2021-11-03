import "./index.css"
const CartProduct = ({item, removeItem}) => {
    return (
        <li className="buy-item">
            <div className="buy-item-image">
                <img 
                className="buy-image"
                src={item.img}/>
            </div>
            <div className="buy-texts">
                <p className="buy-name">{item.name}</p>
                <p className="buy-category">{item.category}</p>
                <p className="buy-price">{item.price}</p>
            </div>
            <button 
                className="item-remove"
                onClick={() => removeItem(item.id)}>
                Remove
            </button>
        </li>
    )
}

export default CartProduct