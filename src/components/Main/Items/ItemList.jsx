import {useState , useEffect} from "react"
import Items from "./Items"


const ItemList =({producto}) => {
  return (
    <section className="card-container">                        
              {producto.map((productos)=>{
                return (
                  <Items key={productos.codigo} productos={productos}/>
                  )
                })}           
    </section>
)

}
export default ItemList
