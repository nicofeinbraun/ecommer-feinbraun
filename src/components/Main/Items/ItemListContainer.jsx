import {useState , useEffect} from "react"
import ItemList from "./ItemList"


const productosDeBaseDeDatos = [
    {
        "id": 1,
        "nombre":"conjunto deportivo",
        "precio": 7199,
        "descripcion": 30,
        "img":"./fotos/conjuntodeportivo.jpg",
    },
    {
        "id": 2,
        "nombre":"saco",
        "precio": 6000,
        "descripcion": 10,
        "img":"./fotos/Saco.jpg",
    },
    {
        "id": 3 ,
        "nombre":"remera hombre",
        "precio": 800,
        "descripcion": 100,
        "img":"./fotos/Remera.jpg",
    }
]

    

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([])
    useEffect(() => {
    const promesa = new Promise((res,rej)=>{
        res(productosDeBaseDeDatos)
    })
    .then((promesa)=>{
        console.log("Salio todo Bien")
        setTimeout(() => {
        console.log("Recibo Productos!")
        setProductos(productosDeBaseDeDatos)
        }, 2000)
    })
    .catch(()=>{
        console.log("Salio todo Mal")
    })
    },[])
    return(
        <>
        <p>{greeting}</p>
        <ItemList producto={productos}/>
        </>

    )
}
export default ItemListContainer