import React, { useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import {cartContext} from "../../../miContexto"
import {db} from "../../../firebase"
import CarritoLista from "./CarritoLista"
import {collection , addDoc} from "firebase/firestore"

const Carrito = () => {

  const {precio_total , carrito} = useContext(cartContext)
  const {clearCarrito} = useContext(cartContext)
  const [idCompra,setIdCompra] = useState()
  const handleClick = ()=>{
    clearCarrito()
  }

  console.log(idCompra)
  const guardarCompra =()=>{
    const ordenesCollection = collection(db,`ordenes`)

    const orden = {
      buyer : {
        //armar formulario antes de entregar proyecto final
        name:"juan",
        phone:"1111111",
        email:"ejemplo@ejemplo.com"
      },
      items: carrito,
      date:"",
      total: precio_total 
    }

    const consulta = addDoc(ordenesCollection,orden)

    consulta
    .then((resultado)=>{
      setIdCompra(resultado.id)
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  
  return (
    <div>
      <h1>Carrito:</h1>
      {precio_total>0 ?<>
        {idCompra ? <h3>Compra guradada con id: {idCompra}</h3> : <CarritoLista carritos={carrito}/> }        
        </>:<p>Todavia no realizo ninguna compra</p>}
      <h3>Precio Total: ${precio_total}</h3>
      {precio_total>0 ?<><button onClick={()=>handleClick()}>Vaciar</button>, <button onClick={()=>guardarCompra()}>Finalizar Compra</button></>:<Link to="/"><button>Volver</button></Link>}
    </div>
  )
}

export default Carrito

/*{precio_total>0 ? <h3>{carrito.codigo} -- {carrito.producto} -- {carrito.cantidad} <button onClick={()=>borrar(carrito.codigo)}>X</button></h3> : <p>Todavia no realizo ninguna compra</p>}*/