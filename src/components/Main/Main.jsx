import {Container} from "react-bootstrap"
import ItemListContainer from "./Items/ItemListContainer"

const Main =() =>{

    const onAdd = () =>{
        console.log("confirmar")
    }
    return(
        <Container as="main">
            <ItemListContainer greeting="Lista productos"/>
        </Container>
    )
}
export default Main