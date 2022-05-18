import {createContext , useState} from 'react'
import producto from "./productos.json"

export const cartContext = createContext()

const { Provider } = cartContext

export const CustomProvider =({ defaultValue = [], children,producto }) =>{

    const [carrito,setCarrito] = useState(defaultValue)

    const [precio_total,setPrecio_total] = useState(0)
    const [cantidad_total,setCantidad_total] = useState(0)
    const addItem =(producto, cantidad,precio) => {
        if (isInCart(producto.id)==undefined){
            setCarrito([...carrito,{
                id:producto.id,
                producto:producto.nombre,
                cantidad:cantidad,
                precio:precio
            }])

        }else{
            const newCarrito = [...carrito]
            for (const element of newCarrito){
                if(element.id === producto.id){
                    element.cantidad = element.cantidad + cantidad
                    element.precio = element.precio + precio
                }
            }
            setCarrito(newCarrito)
        }
        setPrecio_total (precio_total + precio)
        setCantidad_total (cantidad_total + cantidad)
    }

    const isInCart = (codigo) => {
        return carrito.find(e => e.id === codigo)
    }

    const removeItem = (codigo) => {
        //const newCarrito = [...carrito].map(element => element.codigo !== codigo);
        const newCarrito = [...carrito]
        console.log(newCarrito)
        const borro = carrito.find(e => e.id === codigo)
        console.log(borro.precio)
        setPrecio_total (precio_total - borro.precio)
        setCantidad_total (cantidad_total - borro.cantidad)
        setCarrito(carrito.filter(carrito=>carrito.id!=codigo))
    }

    const clearCarrito = () => {
        setCarrito([])
        setPrecio_total(0)
        setCantidad_total(0)
    }
    return (
        <Provider value={{carrito, addItem, precio_total, removeItem, clearCarrito,cantidad_total}}>
            {children}
        </Provider>
    )
}
export default cartContext