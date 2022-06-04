//1) Tener la variable react en scope
import React from "react"

//2) Tener la variable reactDOM en scope
import ReactDOM from "react-dom/client"

import App from "./App"
import "./estilos.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)
