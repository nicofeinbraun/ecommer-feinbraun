import React, { useState } from 'react'
import Contador from "./Contador"
import {Link , NavLink} from 'react-router-dom'

const ItemDetail = ({productos}) => {

    const [cantidad,setCantidad] =useState(0)

    const handleClick = (e) =>{
        setCantidad (e)
       
    }

    return (
        <article className="card">
            <h3>{productos.nombre}</h3>
            <img src={process.env.PUBLIC_URL + productos.img} className="imagen" alt =""></img>           
            <p>Precio : ${productos.precio}</p>
            <p>Detalle : {productos.descripcion}</p>
            <Contador init = {0} stock ={10} onClick={handleClick}/>
            <Link to="/cart">
            <button>Terminar Compra</button>
            </Link>
        </article>
        )
}

export default ItemDetail