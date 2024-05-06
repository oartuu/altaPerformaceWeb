import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

function Cadastro() {
  const[user, setUser] = useState('')
  const[password, setPassword] = useState('')
  const[password2, setPassword2] = useState('')
  const navigate = useNavigate()
  
  const submit = ()=>{
    if (user !=='' && password !== ''&& password2 !== ''){
      if(password === password2 ){
      localStorage.setItem("usuario", user)
      localStorage.setItem("senha", password)
      navigate('/')
      }else{
        window.alert("as senhas não são iguais")
      }
     } else if (user === ''){
      window.alert("digite um nome de usuário")
    }else if (password === '' || password2 === ''){
      window.alert("digite uma senha")
    }else{
      window.alert("digite um usuário e uma senha")  
    }
  }
  return (
    <> 
    <h1> Cadastre-se </h1>
    <label htmlFor="user">Usuário</label>
    <input type="text" name="user" placeholder="Digite seu nome de usuário" onChange={(e)=>setUser(e.target.value)}/>
    <label htmlFor="password">Senha</label>
    <input type="password" name="password" placeholder="Digite sua senha" onChange={(e)=>setPassword(e.target.value)}/>
    <label htmlFor="password2">Senha</label>
    <input type="password" name="password2" placeholder="Confirme sua senha" onChange={(e)=>setPassword2(e.target.value)}/>

    <button onClick={submit}>enviar</button>

    <Link to={"/"}>Já tem uma conta?</Link>
    
  </>
  )
}

export default Cadastro