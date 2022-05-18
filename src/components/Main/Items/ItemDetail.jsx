import React, { useContext, useState } from 'react'
import Contador from "./Contador"
import {Link , NavLink} from 'react-router-dom'
import {cartContext} from "../../../miContexto"

const ItemDetail = ({productos}) => {

    const [cantidad,setCantidad] =useState(0)
    const {addItem} = useContext(cartContext)

    const handleClick = (e) =>{
        setCantidad (e)  
        addItem(productos,e,(productos.precio*e))  
    }

    return (
        <article className="card">
            <h3>{productos.nombre}</h3>
            <img src={productos.img} className="imagen" alt =""></img>           
            <p>Precio : ${productos.precio}</p>
            <p>Detalle : {productos.descripcion}</p>
            <Contador init = {0} stock ={10} onClick={handleClick}/>
            <Link to="/">
            <button>Volver</button>
            </Link>
        </article>
        )
}

export default ItemDetail