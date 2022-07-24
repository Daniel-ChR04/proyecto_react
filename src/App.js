import React, {useState, useEffect} from "react";
import List from "./components/List";
import WithLoadingList from "./components/WithLoadingList";
import './App.css';
import { getFetch, postFetch, putFetch, deleteFetch } from "./components/FetchMethods";


function App() {


  return (
    <div>
      <h1 className="Header">Inicio de Sesión</h1>
      <a className="Caption">Ingrese su nombre de usuario: </a>
      <input style ={{margin: "3px"}} type="text" placeholder="Usuario" />
      <br/>   
      <a className="Caption">Ingrese su contraseña: </a>
      <input style ={{margin: "3px"}} type="text" placeholder="Contraseña" />
      <button>Aceptar</button>
      <br/>
      <a className="Caption">Rol: </a>





    </div>

  )
}
export default App;