
//<></> A esto se lo llama fragmento

/*const App = () => {
    return (
        <>
            <header>
                <h1>Titulo</h1>
                <nav>
                    <a href="">link 1</a>
                    <a href="">link 2</a>
                    <a href="">link 3</a>
                </nav>
            </header>
            <footer>
                <p>Copyright &copy; - 2022</p>
            </footer>
        </>
    )
}*/

import Header from "./Header"
import Footer from "./Footer"
import Main from "./Main"
const App = () => {
    return (
        <>
            <Header/>
            <Main nombre="horacio">
                <p>Hola Mundo</p>
                <p>Hola Mundo 2</p>
            </Main>
            <Footer/>
        </>
    )
}

export default App
//Solo puede haber un export por archivo

/*export default app = () => {
    return "Hola Mundo"
}*/