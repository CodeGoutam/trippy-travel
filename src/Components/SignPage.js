import { Link } from "react-router-dom";
import "./SignPageStyle.css";
import Model from "react-modal";
import SignInPage from "./SignInPage";
const SignPage = () => {
  return (
    <div className="signPage">
      <div className="border">
        <div className="leftImg">
          <img
            src="https://st.depositphotos.com/18722762/51522/v/450/depositphotos_515228796-stock-illustration-online-registration-sign-login-account.jpg"
            alt="image"
          />
        </div>
        <div className="rightPart">
          <div className="form">
            <Link className="close" to="/">
              X
            </Link>
            <h4>Sign up to Trippy Tour</h4>
            <p>
              Already having account ?
              <Link className="link" to='/signIn'>
                <b>Log-in</b>
              </Link>
            </p>
            <form>
              <h4>Email</h4>
              <input placeholder="example@gmail.com" />
              <h4>Password</h4>
              <input placeholder="6+ characters 1 Capital letter" />
              <br />
              <button className="createBtn">Create account</button>
              <br />
              <button className="googleBtn">
                <i className="fa-brands fa-google-plus-g"></i> Log-in using
                Google account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export { SignPage };
