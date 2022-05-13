import { useState } from 'react'
import logo from './logo.svg'

import NavBar from "./componentes/NavBar"
import ItemListContainer from "./itemListContainer/ItemListContainer"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (
    <div className="App">


      <NavBar />


      <ItemListContainer greeTing='hola' />



    </div>
  )
}

export default App
