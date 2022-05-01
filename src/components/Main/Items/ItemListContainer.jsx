import {useState , useEffect } from "react"
import ItemList from "./ItemList"
import {useParams} from "react-router-dom"

import productosDeBaseDeDatos from "../../../productos.json"   

const ItemListContainer = ({greeting}) => {

    const [cargando,setCargando] = useState(true)
    const [productos, setProductos] = useState([])
    const {nombreCategoria} = useParams()
    

    useEffect(() => {
    if(nombreCategoria == undefined){
        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(productosDeBaseDeDatos)
            },2000)    
        })
        .then((promesa)=>{
            console.log("Salio todo Bien")
            console.log("Recibo Productos!")
            setProductos(productosDeBaseDeDatos)
            setCargando(false)
        })
    }else{
        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(productosDeBaseDeDatos)
            },2000)    
        })
        .then((promesa)=>{
            console.log("Salio todo Bien")
            console.log("Recibo Productos!")
            setProductos(productosDeBaseDeDatos.filter(productosDeBaseDeDatos => productosDeBaseDeDatos.categorias == nombreCategoria))
            setCargando(false)
        })
        }
    },[nombreCategoria])
    if(cargando){
        return(
        <p>Cargando... </p>
        )
    }else{
        return(
            <>
            <p>{greeting}</p>
            <ItemList producto={productos}/>
            </>
        )
    }
}
export default ItemListContainer