import {useState , useEffect} from "react"
import ItemDetail from "./ItemDetail"
import productosDeBaseDeDatos from "../../../productos.json"
import {useParams} from "react-router-dom"


const ItemDetailContainer = () => {
    
    const [cargando,setCargando] = useState(true)
    const [productos, setProductos] = useState([])
    const articulo = useParams()

    useEffect(() => {
        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(productosDeBaseDeDatos)
            },2000)
        })
        .then((promesa)=>{
            console.log("Salio todo Bien")
            console.log("Recibo Productos!")
            setProductos(productosDeBaseDeDatos.filter(productosDeBaseDeDatos => productosDeBaseDeDatos.codigo == articulo.id))
                        
            setCargando(false)
        })
        .catch(()=>{
            console.log("Salio todo Mal")
        })
        },[articulo])
if(cargando){
    return (
        <p>Cargando ... </p>
        )
}else{
    return (
        <>
            <ItemDetail productos={productos[0]}/>      
        </>
    )
}
}

export default ItemDetailContainer
//<ItemDetail id={productos.id} nombre={productos.nombre} img={productos.img} precio={productos.precio} detalle={productos.descripcion}/>