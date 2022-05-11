import {useState , useEffect, onAdd} from "react"
import {Link} from 'react-router-dom'

const Contador = ({init,stock, onClick}) => {

    const [contador,setContador] = useState(init)
    const [confirmado,setConfirmado] = useState(false)

    const sumar = () => {
        if (contador < stock){
            setContador(contador + 1)
        }
    }

    const restar = () => {
        if(contador > 0){
            setContador( contador - 1)
        }
        
    }

    const handleClick = (conta) =>{
        setConfirmado(true)
        onClick(conta)
    }

    if (!confirmado){
        return(
            <div>
                <p>Unidades a comprar : {contador}</p>
                <button onClick={restar} className="material-icons">remove</button>
                <button onClick={()=>handleClick(contador)}>Confirmar</button>
                <button onClick={sumar} className="material-icons">add</button>
            </div>
        )
    }else{
        return(
            <div>
                <Link to="/cart">
                    <button>Terminar Compra</button>
                </Link>
            </div>
        )
    }
}

export default Contador