import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"


const Fornecedores = () => {
    const [fornecedor, setFornecedor] = useState([])
  


    useEffect(() => {

        axios.get("/api/fornecedores.json")
            
            .then(e => setFornecedor(e.data.data))

            
            
            .catch(e => console.log(e))
    }, [fornecedor.length])

    const postDelete = (id, e) => {
        e.preventDefault()
        axios.delete(`/api/fornecedores/${id}`)
        .then(e => console.log(e))
        .catch(e => console.log(e))
    }
   

    const list = fornecedor.map(item => {
        
        return (
            <div key={item.id}>
                
               
                <li>Nome: {item.attributes.nome}</li>
                <br></br>
                <li>Sobrenome:  {item.attributes.sobrenome}</li>
                <br></br>
                <li>Data de Nascimento: {item.attributes.dataDeNascimento}</li>
                <br></br>
                <li>Data de Admissão: {item.attributes.dataDeAdmissao}</li>
                <br></br>
                <li>Salário: {item.attributes.salario}</li>
                
          
                 <Link to={`/fornecedores/${item.id}`}>Editar</Link><span>----</span>
                <Link onClick={(e) => postDelete(item.id, e)}  to={`/fornecedores/${item.id}`}>deletar</Link>
                <br></br>
                <br></br>
                <br></br>
                
                


            </div>




        )
    })

    return (

        <div>
            <h2>Criar novo Fornecedor</h2>
            <Link to={`/fornecedores/criar`}>CRIAR</Link>
            
            <h3>Lista de fornecedores</h3>
            {list}
          
        </div>



    )
}


export default Fornecedores