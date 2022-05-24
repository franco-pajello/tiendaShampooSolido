import { useState } from 'react'
import logo from './logo.svg'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './contenedores/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './contenedores/ItenDetailContainer/ItemDetailContainer';
import Carrito from "./contenedores/CarritoContenedor/Carrito"
import NavBar from './conponentes/NavBar';

function App() {

  return (
    <BrowserRouter>
      <div className="App">


        <NavBar />


        <Routes>

          <Route path="/" element={<ItemListContainer />} />

          <Route path="/categoria/:id" element={<ItemListContainer />} />

          <Route path="/detalle/:id" element={<ItemDetailContainer />} />


          <Route path="/carrito" element={<Carrito />} />


          <Route path="/*" element={<Navigate to="/" replace />} />

        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App
