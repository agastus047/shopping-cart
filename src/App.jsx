import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Shop from './components/Shop'
import Cart from './components/Cart'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App