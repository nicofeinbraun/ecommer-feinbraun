import {useState , useEffect} from "react"
import ItemDetail from "./ItemDetail"
//import productosDeBaseDeDatos from "../../../productos.json"
import {useParams} from "react-router-dom"
import {db} from "../../../firebase"
//collection es un funcion que nos da una referencia a una coleccion
import { collection , getDoc , doc , getDocs , addDoc , query , where } from "firebase/firestore"


const ItemDetailContainer = () => {
    
    const [cargando,setCargando] = useState(true)
    const [productos, setProductos] = useState([])
    const [productos2, setProductos2] = useState([])
    const articulo = useParams()

    useEffect(() => {

        const productosCollection = collection(db,`productos`)
        const queryDe = query(productosCollection,where("id","==",articulo))
        const consulta = getDocs(productosCollection)
        //const consulta = getDocs(queryDe)

        consulta
                .then((resultado)=>{
                    const productos = resultado.docs.map(doc=>{
                        const productoConId = doc.data()
                        productoConId.id = doc.id
                        return productoConId
                    })
                    setProductos(productos)
                    const productos2 = productos.filter((producto)=>{
                        return producto.id == articulo.id
                    })
                    setProductos2(productos2)
                    setCargando(false)
                })
                .catch((error)=>{

                })
                .finally(()=>{

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
        },[articulo])
if(cargando){
    return (
        <p>Cargando ... </p>
        )
}else{
    return (
        <>
            <ItemDetail productos={productos2[0]}/>      
        </>
    )
}
}

export default ItemDetailContainer