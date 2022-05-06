import {useState , } from "react"
import Contador from "./Contador"
import { Link, useNavigate } from "react-router-dom"



const Items = ({productos}) =>{
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/producto/${productos.codigo}`)
    }

    return (
        <article className="card">
            <h3>{productos.nombre}</h3>

            <img src={process.env.PUBLIC_URL + productos.img} className="imagen" alt =""></img>      
            <p>Precio : ${productos.precio}</p>
            {/*<p>Categorias : {productos.categorias.map(categoria=>{
                return <span>{categoria}</span>
            })}</p>*/}
            {/*<Link to={`/producto/${productos.nombre}`}>Detalles</Link>*/}
            <button onClick={handleClick}>Detalles</button>
            
        </article>
    )
}
export default Items

//<Contador init = {0} stock ={10}/>