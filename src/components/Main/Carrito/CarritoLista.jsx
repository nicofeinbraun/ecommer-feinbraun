import CarritoItem from "./CarritoItem"

const CarritoLista = ({carritos}) => {

    return (
    <ul>
        {carritos.map(carrito=>{
        return <CarritoItem key={carrito.id} carrito={carrito}/>
    })}
    </ul>
    )
}

export default CarritoLista