import {Container} from "react-bootstrap"
import ItemListContainer from "./ItemListContainer"

const Main =() =>{
    return(
        <Container as="main">
            <ItemListContainer greeting="Lista productos"/>
        </Container>
    )
}
export default Main

/*return(
        <main>Main, bienvenido {nombre};
            {children}
        </main>
    )*/