import NavBar from "../NavBar/NavBar"

const Footer = () =>{

    //const edad = 28
    //const saludo =() => {}
    //const links =["link1","link2","link3","contactame","faq","tienda"]
    const header = false
    return(
        <footer className="footer">
                <p>Copyright &copy; - 2022</p>
                <p>Todos los derechos reservados</p>
                <NavBar 
                instagram = "instagram"
                facebook = "facebook"
                header ={header}
                />
        </footer>
    )
}

export default Footer

/*              nombre="nicolas" 
                apellido="feinbraun" 
                edad={edad} 
                onADD={saludo} 
                link={links}
*/