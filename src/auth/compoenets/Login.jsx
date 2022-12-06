import 'auth/styles/Login.css'
const Login = () => {

    return(<>
    <h2>Login Form</h2>

  <form action="auth/action_page.php" method="post">
  <div class="imgcontainer">
  <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" class="avatar" ></img>
  </div>

  <div class="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>
        
    <button type="submit" class="Loginbtn">Login</button>
    <label>
      <input type="checkbox" name="remember"/> Remember me
    </label>
  </div>

  <div class="container" style={{backgroundcolor:"#f1f1f1"}}>
    <button type="button" class="cancelbtn">Cancel</button>
    <span class="psw"><a href="home"> Forgot password?</a></span>
  </div>
</form>


    </>)
}

export default Login