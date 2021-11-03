import { useState } from 'react';
import './App.css';
import MenuContainer from "./components/MenuContainer"
import CartContainer from './components/CartContainer';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 14.00, img: 'https://i.ibb.co/fpVHnZL/hamburguer.png' },
    { id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 16.00, img: 'https://i.ibb.co/djbw6LV/x-burgue.png' },
    { id: 3, name: 'Big Burguer', category: 'Sanduíches', price: 18.00, img: 'https://i.ibb.co/FYBKCwn/big-kenzie.png' },
    { id: 4, name: 'Fanta Guaraná', category: 'Bebidas', price: 5.00, img: 'https://i.ibb.co/cCjqmPM/fanta-guarana.png' },
    { id: 5, name: 'Coca-cola', category: 'Bebidas', price: 4.99, img:'https://i.ibb.co/fxCGP7k/coca-cola.png' },
    { id: 6, name: 'Milkshake', category: 'Bebidas', price: 4.99, img: 'https://i.ibb.co/QNb3DJJ/milkshake-ovomaltine.png' },
  ])

  const [filteredProducts, setFilteredProducts] = useState([])
  const [currentSale, setCurrentSale] = useState([])
  const [currentSearch, setCurrentSearch] = useState("")

  const showProducts = (productName) => {
    const filtered = 
    products.filter((item) => {
      return item.name === productName
    })
    setFilteredProducts(filtered)
  }

  const handleClick = (productId) => {
    const found = products.find((item) => item.id === productId)
    if(!currentSale.includes(found)) {
      setCurrentSale([...currentSale, found])
    }
  }

  const removeItem = (productId) => {
    const removed = currentSale.find((item) => item.id === productId)
    const removedIndex = currentSale.indexOf(removed)
    currentSale.splice(removedIndex, 1)
    setCurrentSale([...currentSale])
  }

  const total = currentSale
  .reduce((accumulator, item) => item.price + accumulator, 0)
  .toFixed(2)

  return (
    <>
    <header className="title-search">
    <div className="title-header">
      <h1 className="title">Mister Hamburgo</h1>
    </div>
    <div className="search">
        <input 
          className="search-input"
          type="text"
          value={currentSearch}
          onChange={(e) => setCurrentSearch(e.target.value)} />
        <button
          className="search-button"
          onClick={() => showProducts(currentSearch)}
        >
          Buscar
        </button>
    </div>
    </header>
    <body>
    <section>
        {filteredProducts.length > 0 ? (
          <MenuContainer products={filteredProducts} handleClick={handleClick} />
        ) : (
          <MenuContainer products={products} handleClick={handleClick} />
        )}
    </section>
    <section className="cart-section">
    <div className="cart-div">
        <h2 className="cart">Carrinho de compras</h2>
        <CartContainer products={currentSale} removeItem={removeItem} />
        <h3 className="total">Total {total}</h3>
    </div>
    </section>
    </body>
      </>
  );
}

export default App;
