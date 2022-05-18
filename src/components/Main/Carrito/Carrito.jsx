import React, { useContext, useState } from 'react'
import {Link , NavLink} from 'react-router-dom'
import {cartContext} from "../../../miContexto"
import {db} from "../../../firebase"
import CarritoLista from "./CarritoLista"

const Carrito = () => {

  const {precio_total , carrito} = useContext(cartContext)
  const {clearCarrito} = useContext(cartContext)
  const handleClick = ()=>{
    clearCarrito()
  }
  console.log(carrito)
  
  return (
    <div>
      <h1>Carrito:</h1>
      {precio_total>0 ?<CarritoLista carritos={carrito}/>:<p>Todavia no realizo ninguna compra</p>}
      <h3>Precio Total: ${precio_total}</h3>
      {precio_total>0 ?<button onClick={()=>handleClick()}>Vaciar</button>:<Link to="/"><button>Volver</button></Link>}
    </div>
  )
}

export default Carrito

/*{precio_total>0 ? <h3>{carrito.codigo} -- {carrito.producto} -- {carrito.cantidad} <button onClick={()=>borrar(carrito.codigo)}>X</button></h3> : <p>Todavia no realizo ninguna compra</p>}*/