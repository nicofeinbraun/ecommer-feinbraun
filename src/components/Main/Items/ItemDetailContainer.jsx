import {useState , useEffect} from "react"
import ItemDetail from "./ItemDetail"
import {useParams} from "react-router-dom"
import {db} from "../../../firebase"
import { toast } from "react-toastify";
import { collection , getDoc , doc } from "firebase/firestore"


const ItemDetailContainer = () => {
    
    const [cargando,setCargando] = useState(true)
    const [productos, setProductos] = useState([])
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
                toast.error(error)
            })
        },[id])
if(cargando){
    return (
        toast.info("Cargando producto...")
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