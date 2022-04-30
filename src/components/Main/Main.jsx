import {Container} from "react-bootstrap"
import ItemDetailContainer from "./Items/ItemDetailContainer"
import ItemListContainer from "./Items/ItemListContainer"

const Main =() =>{
    return(
        <Container as="main">
            <ItemListContainer greeting="Lista productos"/>
            <ItemDetailContainer/>
        </Container>
    )
}
//
export default Main