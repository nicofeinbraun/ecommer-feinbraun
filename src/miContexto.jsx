import {createContext , useState} from 'react'
import producto from "./productos.json"

export const cartContext = createContext()

const { Provider } = cartContext

export const CustomProvider =({ defaultValue = [], children,producto }) =>{

    const [carrito,setCarrito] = useState(defaultValue)

    const [precio_total,setPrecio_total] = useState(0)
    /*const valorDelContexto = {
        cantidad_total : 0,
        precio_total : 0,
        carrito : []
    }*/

    const addItem =( producto, cantidad,precio) => {
        if (isInCart(producto.codigo)){
            const newCarrito = [...carrito]
            for (const element of newCarrito){
                if(element.producto.codigo == producto.codigo){
                    producto.cantidad = it.cantidad + cantidad
                }
            }
            setCarrito(newCarrito)
        }else{
            setCarrito([...carrito,{
                codigo:producto.codigo,
                producto:producto.nombre,
                cantidad:cantidad,
                precio:precio
            }])
            setPrecio_total (precio_total + precio)
        }
    }

    const isInCart = (codigo) => {
        return carrito.find(e => e.codigo === codigo)
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