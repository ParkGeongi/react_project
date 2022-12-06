import 'auth/styles/SignUp.css'

import { useState } from 'react'
import{ signupApi } from '../api'




const SignUp = () =>{
    
  const [inputs, setInputs] = useState({})
  const {username, password, password_repeat} = inputs;
  
  const onChange = e =>{
    e.preventDefault()
    const{value,name} = e.target
    setInputs({...inputs, [name]: value})
  }
  
  const onClick = e =>{
    e.preventDefault()
    const signupRequest = {username, password, password_repeat}
    alert(`사용자 이름 : ${JSON.stringify(signupRequest)}`)
    signupApi(signupRequest)
  }
    
    
    return (<>
    
    <form action="action_page.php" style={{border:"1px solid #ccc"}}>
  <div className="container">
    <h1>Sign Up</h1>
    <div>Please fill in this form to create an account.</div>
    <hr></hr>

    <label htmlFor="username"><b>Username</b></label>
    <input type="text" placeholder="Enter username" name="username"  onChange={onChange} required/>

    <label htmlFor="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password"  onChange={onChange} required/>

    <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="password_repeat"  onChange={onChange} required/>

    <label>
      <input type="checkbox"  name="remember" style={{marginbottom:"15px"}}/> Remember me
    </label>

    <div>By creating an account you agree to our <a  href="home" style={{color:"dodgerblue"}}>Terms & Privacy</a>.</div>

    <div className="clearfix">
      <button type="button" className="cancelbt">Cancel</button>
      <button onClick={onClick}  className="signupbtn">Sign Up</button>
    </div>
  </div>
</form>

    </>)
}

export default SignUp