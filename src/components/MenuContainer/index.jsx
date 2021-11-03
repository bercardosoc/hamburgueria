import "./index.css"
import Product from "../Product"

const MenuContainer = ({products, handleClick}) => {
    return (
        <div className="cardapio">
            <ul className="items">
            {products.map((item, index) => {
                return <Product item={item} handleClick={handleClick} key={index}/>
            })}
            </ul>
        </div>
    )
}

export default MenuContainer