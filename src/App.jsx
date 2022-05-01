import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Main from "./components/Main/Main"
import { BrowserRouter } from "react-router-dom"

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Main nombre="horacio">
                <p>Hola Mundo</p>
                <p>Hola Mundo 2</p>
            </Main>
            <Footer/>
        </BrowserRouter>
    )
}

export default App
//Solo puede haber un export por archivo