import {memo} from "react"
import CarritoItem from "./CarritoItem"

const CarritoLista = ({carritos}) => {

    return (
    <ul>
        {carritos.map(carrito=>{
        return <CarritoItem key={carrito.codigo} carrito={carrito}/>
    })}
    </ul>
    )
}

export default /* memo( */CarritoLista/* ) */