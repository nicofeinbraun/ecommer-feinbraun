import React, { useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import {cartContext} from "../../../miContexto"
import {db} from "../../../firebase"
import CarritoLista from "./CarritoLista"
import {collection , addDoc} from "firebase/firestore"
import { toast } from "react-toastify";

const Carrito = () => {

  const {precio_total , carrito} = useContext(cartContext)
  const [buyer,setBuyer] = useState([])
  const[nombre,setNombre] = useState("")
  const[tel,setTel] = useState("")
  const[email,setEmail] = useState("")
  const {clearCarrito} = useContext(cartContext)
  const [idCompra,setIdCompra] = useState()
  const handleClick = ()=>{
    clearCarrito()
  }


  const handleNombre = (e) => {
    setNombre(e.target.value)
  }
  const handleTel = (e) => {
    setTel(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }


  const guardarCompra =()=>{
    const ordenesCollection = collection(db,`ordenes`)

    const orden = {
      setBuyer : {
        name:nombre,
        phone:tel,
        email:email
      },
      items: carrito,
      date: new Date().toLocaleString()+"",
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
    toast.success("Compra Finalizada")
  }

  return (
    <div>      


      {precio_total>0 ?<>
        {idCompra ? <h3>Compra guradada con id: {idCompra}</h3> : 
        <>
          <form className="col">
          <h1>Datos Cliente</h1>
            <div className="col-md-3">
                <input type="text" placeholder="Nombre" className="form-control" onChange={handleNombre} name="nombre"></input>
            </div>
            <div className="col-md-3">
                <input type="number" placeholder="telefono" className="form-control" onChange={handleTel} name="tel"></input>
            </div>
            <div className="col-md-3">
                <input type="text" placeholder="email" className="form-control" onChange={handleEmail} name="email"></input>
            </div>
          </form>
          <h1>Carrito:</h1>
          <CarritoLista carritos={carrito}/>
        </> }        
        </>:<p>Todavia no realizo ninguna compra</p>}
      <h3>Precio Total: ${precio_total}</h3>
      {precio_total>0 ?<><button onClick={()=>handleClick()}>Vaciar</button>, <button onClick={()=>guardarCompra()}>Finalizar Compra</button></>:<Link to="/"><button>Volver</button></Link>}
    </div>
  )
}

export default Carrito