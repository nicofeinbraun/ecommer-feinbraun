//id lo toma igual. class se pone classNAme
import NavBar from "../NavBar/NavBar"
import CartWidget from "./CartWidget"

const Header = () =>{
    const header = true
    return (
        <header className ="header">
                <h1 className="header_title">E-Commerce</h1>
                <NavBar contacto="Contacto"
                header={header}/>
                <CartWidget/>
            </header>
    )
}

export default Header