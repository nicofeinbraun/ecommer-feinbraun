import {useState , useEffect, onAdd} from "react"

const Contador = ({init,stock, onClick}) => {

    const [contador,setContador] = useState(init)
    const [confirmado,setConfirmado] = useState(false)
    //const {agregarProducto} = useContext(contexto)

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
        console.log(conta)
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
                <button>Cancelar</button>
            </div>
        )
    }
}

export default Contador