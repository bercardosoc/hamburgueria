import "./index.css";
import Product from "../Product";

const MenuContainer = ({ products, handleClick }) => {
  return (
      <ul className="items">
        {products.map((item, index) => 
          <li className="item">
            <Product item={item} handleClick={handleClick} key={index} />
          </li>
        )}
      </ul>
  );
};

export default MenuContainer;
