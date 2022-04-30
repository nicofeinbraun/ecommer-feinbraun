import {useState , useEffect} from "react"
import ItemDetail from "./ItemDetail"
import productosDeBaseDeDatos from "../../../productos.json"


console.log("entre")
/*const productosDeBaseDeDatos = [
    {
        "id": 1,
        "nombre":"Conjunto Deportivo",
        "precio": 7199,
        "categorias" : ["deporte","hombres"],
        "descripcion": 30,
        "img":"./fotos/Saco.jpg",
    },
    {
        "id": 2,
        "nombre":"Saco",
        "precio": 6000,
        "categorias" : ["formal","hombres"],
        "descripcion": 10,
        "img":"./fotos/Saco.jpg",
    },
    {
        "id": 3 ,
        "nombre":"Remera Hombre",
        "precio": 800,
        "categorias" : ["deporte","hombres"],
        "descripcion": 100,
        "img":"./fotos/Remera.jpg",
    }
]*/


const productoEjemplo ={
        "id": 1,
        "nombre":"Conjunto Deportivo",
        "precio": 7199,
        "categorias" : ["deporte","hombres"],
        "descripcion": "Lorem ipsum dolor sit amet.",
        "img":"./fotos/conjuntodeportivo.jpg",
}

const ItemDetailContainer = () => {

    const [cargando,setCargando] = useState(true)

    const [productos, setProductos] = useState([])

    useEffect(() => {
        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(productoEjemplo)
            },2000)
        })
        .then((promesa)=>{
            console.log("Salio todo Bien")
            console.log("Recibo Productos!")
            setProductos(productoEjemplo)
            setCargando(false)
        })
        .catch(()=>{
            console.log("Salio todo Mal")
        })
        },[])

if(cargando){
    return (
        <p>Cargando ... </p>
        )
}else{
    return (
        <>
        <ItemDetail productos={productoEjemplo}/>
        </>
    )
}
}

export default ItemDetailContainer
//<ItemDetail id={productoEjemplo.id} nombre={productoEjemplo.nombre} img={productoEjemplo.img} precio={productoEjemplo.precio} detalle={productoEjemplo.detalle}/>