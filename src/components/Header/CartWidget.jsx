import React, { useContext } from 'react'
import {Link } from 'react-router-dom'
import {cartContext} from "../../miContexto"

const CartWidget = () => {
    const {cantidad_total} = useContext(cartContext)  
    return(
        <Link to="/cart">
            <span className="material-icons">
            shopping_cart 
            </span>
            {cantidad_total}
        </Link>
    )
}

export default CartWidget