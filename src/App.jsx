import { useState } from 'react'
import logo from './logo.svg'

import NavBar from "./componentes/NavBar"

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './ItemListContainer/ItemListContainer';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">


      <NavBar />

      <ItemListContainer greeTing={"hola"} />
    </div>
  )
}

export default App
