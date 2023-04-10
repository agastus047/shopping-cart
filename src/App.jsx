import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Shop from './components/Shop'
import Cart from './components/Cart'
import itemsList from './assets/itemsList'
import { useState } from 'react'

function App() {
  const [items,setItems] = useState(itemsList);
  const [cartContents,setCartContents] = useState([]);

  function handleAddToCart(id) {
    let selectedItem;
    if(cartContents.some(item => item.id === id)) {
      setCartContents(cartContents.map(item => {
        if(item.id === id) {
          return {...item,count:count+1};
        }
        return item;
      }));
    }
    else {
      selectedItem = items.find(item => item.id === id);
      selectedItem = {...selectedItem,count: 1 };
      setCartContents([...cartContents,selectedItem]);
    }
  }

  function handleDecremetCount(id) {
    let selectedItem = cartContents.find(item => item.id === id);
    if(selectedItem.count === 1) {
      handleDeleteFromCart(id);
    }
    else {
      setCartContents(cartContents.map(item => {
        if(item.id === id) {
          return {...item,count:count-1};
        }
        return item;
      }));
    }
  }

  function handleDeleteFromCart(id) {
    setCartContents(cartContents.filter(item => item.id !== id));
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/shop" element={<Shop items={items} handleAddToCart={handleAddToCart}/>} />
          <Route path="/cart" element={<Cart handleAddToCart={handleAddToCart} handleDeleteFromCart={handleDeleteFromCart} handleDecremetCount={handleDecremetCount} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
