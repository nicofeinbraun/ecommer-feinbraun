import {useState , useEffect } from "react"
import ItemList from "./ItemList"
import {useParams} from "react-router-dom"
//db es referencia a toda la base de datos donde estan todas las colecciones
import {db} from "../../../firebase"
//collection es un funcion que nos da una referencia a una coleccion
import { collection , getDoc , doc , getDocs , addDoc , query , where } from "firebase/firestore"

//import productosDeBaseDeDatos from "../../../productos.json"   

const ItemListContainer = ({greeting}) => {

    const [cargando,setCargando] = useState(true)
    const [productos, setProductos] = useState([])
    const {nombreCategoria} = useParams()
    

    useEffect(() => {

        const productosCollection = collection(db,`productos`)
        //const consulta = getDocs(productosCollection)
        

        if(nombreCategoria == undefined){
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
        
    /*if(nombreCategoria == undefined){
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
    },[nombreCategoria])*/
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