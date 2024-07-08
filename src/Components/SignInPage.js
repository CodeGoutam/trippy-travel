import { Link } from "react-router-dom";
import "./SignPageStyle.css";
import Model from "react-modal";
// import SignInPage from "./SignInPage";
const SignInPage = () => {
  return (
    <div className="signPage">
      <div className="border">
        <div className="leftImg">
          <img
            src="https://content3.jdmagicbox.com/comp/def_content/tour-operators-for-honeymoon/shutterstock-222508168-tour-operators-for-honeymoon-2-iiemz.jpg"
            alt="image"
          />
        </div>
        <div className="rightPart">
          <div className="form">
            <Link className="close" to="/">
              X
            </Link>
            <p>Welcome  to <b>Trippy Tour</b></p>
                        <form>
              <h4>Email</h4>
              <input placeholder="example@gmail.com" />
              <h4>Password</h4>
              <input placeholder="6+ characters 1 Capital letter" />
              <br />
              <button className="createBtn">Log In</button>
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
export default SignInPage ;
