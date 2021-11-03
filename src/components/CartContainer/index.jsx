import CartProduct from "../CartProduct";
import "./index.css"

const MenuContainer = ({ products, removeItem}) => {
    return (
        <ul className="buy-items">
            {products.map((item, index) => {
                return <CartProduct item={item} removeItem={removeItem} key={index}/>
            })}
        </ul>
    )
}
export default MenuContainer