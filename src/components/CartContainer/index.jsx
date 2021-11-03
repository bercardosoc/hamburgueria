import CartProduct from "../CartProduct";
import "./index.css"

const MenuContainer = ({ products, removeItem}) => {
    return (
        <div>
        <ul className="buy-items">
            {products.map((item, index) => {
                return <CartProduct item={item} removeItem={removeItem} key={index}/>
            })}
        </ul>
        </div>
    )
}
export default MenuContainer