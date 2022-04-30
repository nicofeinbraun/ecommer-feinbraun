import {useState , useEffect} from "react"
import Contador from "./Contador"



const Items = ({productos}) =>{
    return (
        <article className="card">
            <h3>{productos.nombre}</h3>

            <img src={process.env.PUBLIC_URL + productos.img} className="imagen"></img>      
            <p>Precio : ${productos.precio}</p>
            <p>Categorias : {productos.categorias.map(categoria=>{
                return <span>{categoria}</span>
            })}</p>
            <button>Detalles</button>
            <Contador init = {0} stock ={10}/>
        </article>
    )
}
export default Items