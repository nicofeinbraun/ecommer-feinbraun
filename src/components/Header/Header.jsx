//id lo toma igual. class se pone classNAme
import NavBar from "../NavBar/NavBar"
import CartWidget from "./CartWidget"
import {Link , NavLink} from 'react-router-dom'

const Header = () =>{
    const header = true
    return (
        <header className ="header">
                <Link to="/"><h1 className="header_title">E-Commerce</h1></Link>
                <NavBar contacto="Contacto"
                header={header}/>
                <Link to="/cart"><CartWidget/></Link>
            </header>
    )
}

export default Header