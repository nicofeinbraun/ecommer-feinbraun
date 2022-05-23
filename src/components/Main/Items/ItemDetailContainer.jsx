import {useState , useEffect} from "react"
import ItemDetail from "./ItemDetail"
//import productosDeBaseDeDatos from "../../../productos.json"
import {useParams} from "react-router-dom"
import {db} from "../../../firebase"
//collection es un funcion que nos da una referencia a una coleccion
import { collection , getDoc , doc } from "firebase/firestore"


const ItemDetailContainer = () => {
    
    const [cargando,setCargando] = useState(true)
    const [productos, setProductos] = useState([])
    const [id2,setId2] = useState([])
    const {id} = useParams()

    useEffect(() => {

        const productoCollection = collection(db,`productos`)
        const resultadoDelDoc = doc(productoCollection,id)
        const consulta = getDoc(resultadoDelDoc)

        consulta
            .then((resultado)=>{
                setProductos(resultado.data())
                setCargando(false)
            })
            .catch((error)=>{

            })
        /*const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(productosDeBaseDeDatos)
            },2000)
        })
        .then((promesa)=>{
            console.log("Salio todo Bien")
            console.log("Recibo Productos!")
            const resultado = productosDeBaseDeDatos.filter((producto)=>{
                return producto.codigo == articulo.id
            })
            setProductos(resultado)
            setCargando(false)
        })
        .catch(()=>{
            console.log("Salio todo Mal")
        })*/
        },[id])
if(cargando){
    return (
        <p>Cargando ... </p>
        )
}else{
    return (
        <>
            <ItemDetail productos={productos} id={id}/>      
        </>
    )
}
}

export default ItemDetailContainer