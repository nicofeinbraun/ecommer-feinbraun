import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Main from "./components/Main/Main"
import { BrowserRouter } from "react-router-dom"
import MiCustomProvider from "./miContexto"

const App = () => {
    return (
        <BrowserRouter>
            <MiCustomProvider>
                <Header/>
                <Main>
                </Main>
                <Footer/>
            </MiCustomProvider>
        </BrowserRouter>
    )
}

export default App
//Solo puede haber un export por archivo