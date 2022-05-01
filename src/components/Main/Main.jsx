import {Container} from "react-bootstrap"
import { Routes , Route } from "react-router-dom"
import ItemDetailContainer from "./Items/ItemDetailContainer"
import ItemListContainer from "./Items/ItemListContainer"
import { BrowserRouter } from "react-router-dom"
import Carrito from "./Carrito"

const Main =() =>{
    return(
        <Container as="main">
            <Routes>
                <Route path="/" element={<ItemListContainer greeting="Lista productos"/>}/>
                <Route path="/productos/:nombreCategoria" element={<ItemListContainer greeting="Lista productos"/>}/>
                <Route path="/producto/:id" element={<ItemDetailContainer/>}/>
                <Route path="/cart" element={<Carrito/>}/>
            </Routes>
        </Container>
    )
}
//
export default Main