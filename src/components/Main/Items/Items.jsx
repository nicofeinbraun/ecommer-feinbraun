import { useNavigate } from "react-router-dom"



const Items = ({productos}) =>{
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/producto/${productos.id}`)
    }

    return (
        <article className="card">
            <h3>{productos.nombre}</h3>

            <img src={productos.img} alt =""></img>      
            <p>Precio : ${productos.precio}</p>
            <button onClick={handleClick}>Detalles</button>
            
        </article>
    )
}
export default Items