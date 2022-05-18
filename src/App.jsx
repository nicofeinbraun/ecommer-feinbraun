import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Main from "./components/Main/Main"
import { BrowserRouter } from "react-router-dom"
import {CustomProvider} from "./miContexto"




const App = () => {
    return (
        <BrowserRouter>
            <CustomProvider>
                <Header/>
                <Main/>
            </CustomProvider>
            <Footer/>
        </BrowserRouter>
    )
}

export default App
//Solo puede haber un export por archivo