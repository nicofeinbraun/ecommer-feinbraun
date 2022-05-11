import React, { useContext, useState } from 'react'
import {cartContext} from "../../miContexto"

const Carrito = () => {

  const {precio_total , carrito} = useContext(cartContext)
  console.log(carrito.codigo)
  return (
    <div>
      <h1>Carrito:</h1>
      <h3>{carrito.codigo} -- {carrito.producto} -- {carrito.cantidad}</h3>
      <h3>Precio Total: ${precio_total}</h3>
    </div>
  )
}

export default Carrito