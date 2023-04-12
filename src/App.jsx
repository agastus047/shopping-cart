import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Shop from './components/Shop'
import Cart from './components/Cart'
import itemsList from './assets/itemsList'
import { useState } from 'react'
import Footer from './components/Footer'
import ItemCard from './components/ItemCard'
import 'primeicons/primeicons.css';

function App() {
  const [items,setItems] = useState(itemsList);
  const [cartContents,setCartContents] = useState([]);

  function handleAddToCart(id) {
    let selectedItem;
    if(cartContents.some(item => item.id === id)) {
      setCartContents(cartContents.map(item => {
        if(item.id === id) {
          return {...item,count:item.count+1};
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

  function handleDecrementCount(id) {
    let selectedItem = cartContents.find(item => item.id === id);
    if(selectedItem.count === 1) {
      handleDeleteFromCart(id);
    }
    else {
      setCartContents(cartContents.map(item => {
        if(item.id === id) {
          return {...item,count:item.count-1};
        }
        return item;
      }));
    }
  }

  function handleDeleteFromCart(id) {
    setCartContents(cartContents.filter(item => item.id !== id));
  }

  return (
    <div className="App min-h-screen flex flex-col font-source">
      <BrowserRouter>
        <Navbar cartContents={cartContents}/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/shop" element={<Shop items={items} />} />
          <Route path="/shop/:id" element={<ItemCard items={items} handleAddToCart={handleAddToCart} />} />
          <Route path="/cart" element={<Cart cartContents={cartContents} handleAddToCart={handleAddToCart} handleDeleteFromCart={handleDeleteFromCart} handleDecrementCount={handleDecrementCount} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
