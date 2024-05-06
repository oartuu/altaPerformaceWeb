import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"


function Login() {
  const[user, setUser] = useState()
  const[password, setPassword] = useState()
  const navigate = useNavigate()
  const submit = ()=>{
    const usuario = localStorage.getItem("usuario")
    const senha = localStorage.getItem("senha")

    if(usuario === user && password === senha){
      navigate('/article')
    }

  }

  return (
   <> 
    <h1>Faça Login para ver a matéria </h1>
    <label htmlFor="user">Usuário</label>
    <input type="text" name="user" placeholder="Digite seu nome de usuário" onChange={(e)=>setUser(e.target.value)}/>
    <label htmlFor="password">Senha</label>
    <input type="password" name="password" placeholder="Digite sua senha" onChange={(e)=>setPassword(e.target.value)}/>
    <button onClick={submit}>enviar</button>
    <Link to={"/logout"}>Não tem uma conta?</Link>
    
  </>
  )
}

export default Login