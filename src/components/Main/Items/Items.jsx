import {useState , useEffect} from "react"
//import Contador from "./Contador"



const Items = ({precio,nombre,img}) =>{
    return (
        <>
        <p>{nombre}</p>
        <img src={img}></img>
        <p>{precio}</p>
        <button>Descripcion</button>
        
        </>
    )
}

export default Items