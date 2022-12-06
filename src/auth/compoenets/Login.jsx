import 'auth/styles/Login.css'
import { useState } from 'react'
import{ loginApi} from '../api'

const Login = () => {
  const [inputs, setInputs] = useState({})
  const {username, password} = inputs;
  
  const onChange = e =>{
    e.preventDefault()
    const{value,name} = e.target
    setInputs({...inputs, [name]: value})
  }
  
  const onClick = e =>{
    e.preventDefault()
    const loginRequest = {username, password}
    alert(`사용자 이름 : ${JSON.stringify(loginRequest)}`)
    loginApi(loginRequest)
  }
  


  return(<>
    <h2>Login Form</h2>

  <form action="auth/action_page.php" method="post">
  <div className="imgcontainer">
  <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" className="avatar" ></img>
  </div>

  <div className="container">
    <label htmlFor="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="username"  onChange={onChange} required/>

    <label htmlFor="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password"  onChange={onChange} required/>
        
    <button onClick={onClick}  className="Loginbtn">Login</button>
    <label>
      <input type="checkbox" name="remember"/> Remember me
    </label>
  </div>

  <div className="container" style={{backgroundcolor:"#f1f1f1"}}>
    <button type="button" className="cancelbtn">Cancel</button>
    <span className="psw"><a href="home"> Forgot password?</a></span>
  </div>
</form>


    </>)
}

export default Login