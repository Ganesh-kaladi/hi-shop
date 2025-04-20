import "./Login.css";
import { FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa";

function Login() {
  return (
    <section className="login">
      <div className="login__box">
        <div className="login__container">
          <h1>Login</h1>
          <form>
            <div className="form__fields">
              <span>Username</span>
              <input
                type="text"
                name="username"
                placeholder="Please Enter User Name..."
              />
              <span>Password</span>
              <input
                type="password"
                name="password"
                placeholder="Please Enter Password..."
              />
            </div>
            <div>
              <button className="btn btn__login">Login</button>
            </div>
          </form>
          <div className="login__icon__container">
            <span>or</span>
            <div className="login__icons">
              <ul>
                <li>
                  <FaFacebook size={40} color="blue" />
                </li>
                <li>
                  <FaTwitter size={40} color="blue" />
                </li>
                <li>
                  <FaGoogle size={40} color="red" />
                </li>
              </ul>
            </div>
          </div>
          <div className="login__footer">
            <ul>
              <li>
                Forget <span>Username</span> / <span>Password</span>
              </li>
              <li>
                Don't have an account? <span>Sign up</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
