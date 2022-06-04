import NavBar from "../NavBar/NavBar"

const Footer = () =>{

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