import React from 'react'
import Contador from "./Contador"

const ItemDetail = ({productos}) => {
    console.log(productos)
    return (
        <article className="card">
            <h3>{productos.nombre}</h3>
            <img src={productos.img}></img>        
            <p>Precio : ${productos.precio}</p>
            <p>Detalle : {productos.descripcion}</p>
            <Contador init = {0} stock ={10}/>
        </article>
        )
}

export default ItemDetail