import Product from "../Product"

const MenuContainer = ({products}) => {
    return (
            <div>
                {products.map((products, index) => (
                    <div key = {index}>{products.name}</div>
                ))}
            </div>
    )
}

export default MenuContainer