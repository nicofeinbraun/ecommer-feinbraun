import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Main from "./components/Main/Main"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
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
            <ToastContainer />
        </BrowserRouter>
    )
}

export default App