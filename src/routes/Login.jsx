import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../components/Input'


export const Login = () => {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [loginError, setLoginError] = useState(false);
 
  function handleChange(name, value){
    if (name === 'user'){
        setUser(value)
    }else {
        if(value.length < 3){
          setPasswordError(true)
        }else{
          setPassword(value)
          setPasswordError(false)
        }              
    }
  };

  function handleSubmit(){
    let account = {user, password}
    if(account){
      console.log('account: ', account)
      console.log('logeado: ', isLogin)
      ifMatch(account);
    }
  }

  function ifMatch(param){
    if(param.user.length > 0 && param.password.length > 0){
      if(param.user === 'kitchen' && param.password === '123'){
        const {user, password} = param;
        let ac = {user, password};
        //aqui se tiene que comunicar con la api
        setIsLogin(true);
        setLoginError(false);
      }else{
        setIsLogin(false);
        setLoginError(true);
      }
    }else{
      setIsLogin(false);
      setLoginError(true);
    }
  }

  return (
    <div>
      <div className='login-container'>
      <h1 className="Header">Inicio de Sesión</h1><br/>
        <a style ={{margin: "10px"}}>Ingrese su nombre de usuario: </a>
          <Input           
          attribute={{
            id: 'user',
            name: 'user',
            type: 'text',
            placeholder: 'Usuario'
          }} 
          handleChange = {handleChange}          
          /><br/>

        <a style ={{margin: "10px"}}>Ingrese su contraseña: </a>
        <Input           
          attribute={{
            id: 'password',
            name: 'password',
            type: 'password',
            placeholder: 'Contraseña'
          }} 
          handleChange={handleChange}
          param = {passwordError}
          />

          { passwordError &&
          <label className='Error' style ={{margin: "1px 10px"}}> 
            Contraseña inválida (Lím mínimo de caracteres: 3)
          </label>
          }

          { loginError &&
          <label className='Error'  style ={{margin: "1px 10px"}}>
            Su usuario o contraseña son incorrectos, o no existen</label>
          }

        <p style ={{margin: "10px"}}>Seleccione un rol: </p>
        <div style ={{margin: "10px"}} class="radio">
          <label><input type="radio" name="optradio" checked/>Aministrador</label><br/>
          <label><input type="radio" name="optradio" checked/>Cocina</label>
        </div>


        <Link to = {isLogin ? '/orders' : '/login'} onClick={handleSubmit} 
        style ={{margin: "10px"}} class="btn btn-outline-success my-2 my-sm-0" type="submit">Aceptar

        </Link>

        
        <Link to = {isLogin ? '/orders' : '/main'} className="btn btn-outline-danger my-2 my-sm-0"> Cancelar
        </Link>
        

        </div>
    </div>
  )
}

