import {memo, useEffect, useContext} from "react"
import {cartContext} from "../../../miContexto"

const CarritoItem = ({carrito}) => {
    const { removeItem} = useContext(cartContext)
    const borrar = (codigo)=>{
    removeItem(codigo)
    }

    return (
        <div>
            <h3>{carrito.producto} --- {carrito.cantidad}  ${carrito.precio}  <button onClick={()=>borrar(carrito.id)}>X</button></h3>
            </div>
    )
}
export default memo(CarritoItem)