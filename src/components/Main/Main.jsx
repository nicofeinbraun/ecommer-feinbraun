import {Container} from "react-bootstrap"
import ItemListContainer from "./ItemListContainer"
import Contador from "./Contador"

const Main =() =>{

    const onAdd = () =>{
        console.log("confirmar")
    }
    return(
        <Container as="main">
            <ItemListContainer greeting="Lista productos"/>
            <Contador init = {0} stock ={10} onAdd={onAdd}/>
        </Container>
    )
}
export default Main