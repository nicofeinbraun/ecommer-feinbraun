import NavBar from "../NavBar/NavBar"
import React, { useContext } from 'react'
import CartWidget from "./CartWidget"
import {Link} from 'react-router-dom'
import {cartContext} from "../../miContexto"


const Header = () =>{
    const header = true
    const {cantidad_total} = useContext(cartContext) 
    return (
        <header className ="header">
                <Link to="/"><h1 className="header_title">E-Commerce</h1></Link>
                <NavBar contacto="Contacto"
                header={header}/>
                {cantidad_total !==0 ? <CartWidget/>:<p></p>}
            </header>
    )
}

export default Header