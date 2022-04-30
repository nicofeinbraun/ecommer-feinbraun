import {useState , useEffect} from "react"
import ItemList from "./ItemList"

import productosDeBaseDeDatos from "../../../productos.json"


/*const productosDeBaseDeDatos = [
    {
        "id": 1,
        "nombre":"Conjunto Deportivo",
        "precio": 7199,
        "categorias" : ["deporte","hombres"],
        "descripcion": 30,
        "img":{conjunto},
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

    

const ItemListContainer = ({greeting}) => {

    const [cargando,setCargando] = useState(true)

    const [productos, setProductos] = useState([])

    useEffect(() => {
    const promesa = new Promise((res,rej)=>{
        setTimeout(()=>{
            res(productosDeBaseDeDatos)
            //res(["prod1","prod2","prod3"])
        },2000)
    })
    .then((promesa)=>{
        console.log("Salio todo Bien")
        console.log("Recibo Productos!")
        setProductos(productosDeBaseDeDatos)
        setCargando(false)
    })
    .catch(()=>{
        console.log("Salio todo Mal")
    })
    },[])
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