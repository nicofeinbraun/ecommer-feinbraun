import {useState , useEffect, onAdd} from "react"

const Contador = ({init,stock}) => {

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

    const confirmar = () =>{
        setConfirmado(true)
    }

    if (!confirmado){
        return(
            <div>
                <p>Unidades a comprar : {contador}</p>
                <button onClick={restar} className="material-icons">remove</button>
                <button onClick={confirmar}>Confirmar</button>
                <button onClick={sumar} className="material-icons">add</button>
            </div>
        )
    }else{
        return(
            <div>
                <p>Unidades a comprar : {contador}</p>
                <button onClick={restar} className="material-icons">remove</button>
                <button onClick={confirmar}>Confirmar</button>
                <button onClick={sumar} className="material-icons">add</button>
                <p className="confir">Se confirmaron {contador} unidades!</p>
            </div>
        )
    }
}

export default Contador