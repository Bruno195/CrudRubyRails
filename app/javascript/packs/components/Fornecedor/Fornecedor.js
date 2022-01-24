import React, {useState, useEffect} from "react";
import axios from "axios"
const Fornecedor = (props) => {
    const [fornecedores, setFornecedor] = useState([])
    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [nascimento, setNascimento] = useState("")
    const [admissao, setAdmissao] = useState("")
    const [salario, setSalario] = useState(0.0)

    useEffect(() => {
        axios.get('/api/fornecedores.json').then((response) => {
            console.log(response)
          setFornecedor(response.data.data);
        });
      }, []);
    
    function handleSubmit(e){
        e.preventDefault()

     
    }
 
   
   
    return (
        <>
        <form onSubmit={handleSubmit}>
          Nome:  <input type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)}/> 
          Sobrenome:  <input type="text" placeholder="Sobrenome" value={sobrenome} onChange={e => setSobrenome(e.target.value)}/> 
          Data de Nascimento:  <input type="text" placeholder="Data de Nascimento" value={nascimento} onChange={e => setNascimento(e.target.value)}/>  
          Data de Admissão:  <input type="text" placeholder="Data de Admissão" value={admissao} onChange={e => setAdmissao(e.target.value)}/>  
          Salário: <input type="number"  pattern="^\d*(\.\d{0,2})?$" placeholder="Salario" value={salario} onChange={e => setSalario(e.target.value)}/>   
          <button type="submit">Editar Fornecedor</button>
      
        </form>
       
  
        </>
    )
}

export default Fornecedor