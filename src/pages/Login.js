import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.text.value;
    const password = event.target.password.value;

    // Here, you'll need to make an API call to your backend to verify the username and password
    // For demonstration purposes, I'll assume a successful login
    if (username === "admin" && password === "password") {
      // Redirect to the dashboard
      navigate("/dashboard", { replace: true });
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="container">
      <div className="center">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="txt_field">
            <input type="text" name="text" required />
            <span></span>
            <label>Username</label>
          </div>
          <div className="txt_field">
            <input type="password" name="password" required />
            <span></span>
            <label>Password</label>
          </div>
          <div className="pass">Forget Password?</div>
          <input name="submit" type="Submit" value="Login" />
          <div className="signup_link">
            Not a Member ? <Link to="/register">Signup</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;