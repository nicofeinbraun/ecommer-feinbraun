import React from 'react'
import Contador from "./Contador"
//import Contador from "./Contador"

const ItemDetail = ({productos}) => {
    return (
        <article className="card">
            <h3>{productos.nombre}</h3>
            <img src={productos.img}></img>        
            <p>Precio : ${productos.precio}</p>
            <p>Categorias : {productos.categorias.map(categoria=>{
                return <span>{categoria}</span>
            })}</p>
            <p>Detalle : {productos.descripcion}</p>
            <button>Detalles</button>
            <Contador init = {0} stock ={10}/>
        </article>
        )
}

export default ItemDetail