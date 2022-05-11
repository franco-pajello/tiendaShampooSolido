import { useState } from 'react'
import logo from './logo.svg'

import NavBar from "./componentes/NavBar"

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemCount from './itemCount/ItemCount';

function App() {


  return (
    <div className="App">


      <NavBar />

      <ItemListContainer greeTing={"hola"} />

      <>

        <ItemCount />
      </>
    </div>
  )
}

export default App
