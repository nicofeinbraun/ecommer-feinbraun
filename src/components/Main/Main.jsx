import {Container} from "react-bootstrap"
import { Routes , Route } from "react-router-dom"
import ItemDetailContainer from "./Items/ItemDetailContainer"
import ItemListContainer from "./Items/ItemListContainer"
import Home from "../Home/Home"
import Carrito from "./Carrito/Carrito"

const Main =() =>{
    return(
        <Container as="main">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/productos" element={<ItemListContainer/>}/>
                <Route path="/productos/:nombreCategoria" element={<ItemListContainer/>}/>
                <Route path="/producto/:id" element={<ItemDetailContainer/>}/>
                <Route path="/cart" element={<Carrito/>}/>
            </Routes>
        </Container>
    )
}
//
export default Main