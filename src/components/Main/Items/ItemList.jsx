import {useState , useEffect} from "react"
import Contador from "./Contador"
import Items from "./Items"


const ItemList =({producto}) => {
  console.log(producto)

  return (
    <>
                        
            <ul>
                {producto.map((productos)=>{
                  return (
                    <li key={productos.id}><Items precio={productos.precio} nombre={productos.nombre} img={productos.img} />
                    <Contador init = {0} stock ={10}/>
                    </li>
                    )
                  })}
            </ul>            
        </>
)

}

export default ItemList
