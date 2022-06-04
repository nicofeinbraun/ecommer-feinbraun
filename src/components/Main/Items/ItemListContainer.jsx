import {useState , useEffect } from "react"
import ItemList from "./ItemList"
import {useParams} from "react-router-dom"
import {db} from "../../../firebase"
import { toast } from "react-toastify";
import { collection , getDocs , query , where } from "firebase/firestore" 

const ItemListContainer = () => {

    const [cargando,setCargando] = useState(true)
    const [productos, setProductos] = useState([])
    const {nombreCategoria} = useParams()

    useEffect(() => {

        const productosCollection = collection(db,`productos`)

        if(nombreCategoria === undefined){
            const consulta = getDocs(productosCollection)
            consulta
                .then((resultado)=>{
                    const productos = resultado.docs.map(doc=>{

                        const productoConId = doc.data()
                        productoConId.id = doc.id
                        return productoConId
                    })
                    
                    setTimeout(()=>{
                        setProductos(productos)
                        toast.dismiss()
                        toast.success("Productos cargados!")  
                    },2000)
                    setCargando(false)  
                    
                })
                .catch((error)=>{

                })
                .finally(()=>{

                })
        }else{
            const queryDe = query(productosCollection,where("categorias","==",nombreCategoria))
            const consulta = getDocs(queryDe)
            consulta
                .then((resultado)=>{
                    const productos = resultado.docs.map(doc=>{

                        const productoConId = doc.data()
                        productoConId.id = doc.id
                        return productoConId
                    })

                    setProductos(productos)
                    setCargando(false)
                })
                .catch((error)=>{

                })
                .finally(()=>{

                })

        }
    },[nombreCategoria])

    if(cargando){
        return(
            toast.info("Cargando productos...")
        )
    }else{
        return(
            <ItemList producto={productos}/>
        )
    }
}
export default ItemListContainer