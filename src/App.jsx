import { useState } from 'react'
import logo from './logo.svg'



import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './contenedores/ItemListContainer/ItemListContainer';
import NavBar from './contenedores/componentes/NavBar';
import ItemDetailContainer from './contenedores/ItenDetailContainer/ItemDetailContainer';


function App() {


  return (
    <div className="App">


      <NavBar />

     <ItemListContainer greeTing='hola' /> 

    <ItemDetailContainer/>

    </div>
  )
}

export default App
