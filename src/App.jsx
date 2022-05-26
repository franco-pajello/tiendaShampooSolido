import {useContext} from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItenDetailContainer/ItemDetailContainer';
import Carrito from "./pages/CarritoContenedor/Carrito"
import NavBar from './pages/NavBar/NavBar';
import CartContextProvider from './contenedores/Context/CartContext';




function App() {



  return (
    <CartContextProvider>

    <BrowserRouter>
      <div className="App">


        <NavBar/>


        <Routes>

          <Route path="/" element={<ItemListContainer/>} />

          <Route path="/categoria/:id" element={<ItemListContainer/>} />

          <Route path="/detalle/:id" element={<ItemDetailContainer/>} />


          <Route path="/carrito" element={<Carrito/>} />


          <Route path="/*" element={<Navigate to="/" replace />} />

        </Routes>

      </div>
    </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
