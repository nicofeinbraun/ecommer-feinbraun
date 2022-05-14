import {createContext , useState} from 'react'
import producto from "./productos.json"

export const cartContext = createContext()

const { Provider } = cartContext

export const CustomProvider =({ defaultValue = [], children,producto }) =>{

    const [carrito,setCarrito] = useState(defaultValue)

    const [precio_total,setPrecio_total] = useState(0)

    const addItem =( producto, cantidad,precio) => {
        if (isInCart(producto.id)==undefined){
            setCarrito([...carrito,{
                codigo:producto.id,
                producto:producto.nombre,
                cantidad:cantidad,
                precio:precio
            }])
            setPrecio_total (precio_total + precio)
        }else{
            const newCarrito = [...carrito]
            for (const element of newCarrito){
                if(element.producto.id === producto.id){
                    element.cantidad = element.cantidad + cantidad
                }
            }
            setCarrito(newCarrito)
        }
    }

    const isInCart = (codigo) => {
        return carrito.find(e => e.producto.codigo === codigo)
    }

    const removeItem = (codigo) => {
        const newCarrito = [...carrito].map(element => element.codigo !== codigo);
        setCarrito(newCarrito)
    }

    const clearCarrito = () => {
        setCarrito([])
    }
    return (
        <Provider value={{carrito, addItem, precio_total}}>
            {children}
        </Provider>
    )
}
export default cartContext