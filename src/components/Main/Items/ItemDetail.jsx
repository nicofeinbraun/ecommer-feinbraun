import React, { useContext } from 'react'
import Contador from "./Contador"
import {Link } from 'react-router-dom'
import {cartContext} from "../../../miContexto"

const ItemDetail = ({productos , id}) => {

    const {addItem} = useContext(cartContext)
    

    const handleClick = (e) =>{
        addItem(productos,e,(productos.precio*e),id)  
    }

    return (
        <article className="card">
            <h3>{productos.nombre}</h3>
            <img src={productos.img} className="imagen" alt =""></img>           
            <p>Precio : ${productos.precio}</p>
            <p>Detalle : {productos.descripcion}</p>
            <Contador init = {0} stock ={10} onClick={handleClick}/>
            <Link to="/productos">
            <button>Volver</button>
            </Link>
        </article>
        )
}

export default ItemDetail