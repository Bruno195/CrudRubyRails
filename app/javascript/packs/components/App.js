import React from "react"
import {Routes, Route} from "react-router-dom"
import Fornecedor from "./Fornecedor/Fornecedor"
import Fornecedores from "./Fornecedores/Fornecedores"
import NovoUsuario from "./Fornecedor/NovoUsuario"
const App = (props) => {
    
    return (
    <Routes>
            
        <Route path="/" element={<Fornecedores />}></Route>   
        <Route path="/fornecedores/:id" element={<Fornecedor />}></Route>
        <Route path="/fornecedores/criar" element={<NovoUsuario />}></Route>            
        
    </Routes>
        )

}

export default App