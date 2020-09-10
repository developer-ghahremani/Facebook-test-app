import React, { useEffect, useState } from "react";
import { auth, googleAuth } from "./../firebase";
import { useDispatch } from "react-redux";
import { SET_USER } from "../Redux/type";
import firebase from "firebase";
import { useRef } from "react";
import PhoneAuth from "./PhoneAuth";
import { useHistory } from "react-router-dom";
const Auth = () => {
  const dispatch = useDispatch();
  const [phoneAuth, setPhoneAuth] = useState(false);
  const signInBtn = useRef(null);
  const { replace } = useHistory();

  useEffect(() => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      signInBtn.current,
      {
        size: "invisible",
        callback: function (response) {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // onSignInSubmit();
        },
      }
    );
  }, []);

  const handlePhoneLogin = async (params) => {
    setPhoneAuth(true);
  };

  const handleGoogleLogin = async () => {
    try {
      const { credential, user } = await auth.signInWithPopup(googleAuth);
      localStorage.setItem("credential", JSON.stringify(credential));
      dispatch({ type: SET_USER, payload: user });
      replace("/");
    } catch (error) {
      console.log(error, "err");
    }
  };

  return (
    <div
      className="bg-light w-100 d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}>
      <div className="container">
        <div className="row">
          <div className="auth-left-side col-md-7">
            <h1
              className="text-blue-light mt-5 font-weight-bold"
              style={{ fontSize: "4rem" }}>
              facebook
            </h1>
            <h3 className="text-dark">
              Facebook helps you connect and share with the pwople in your life
            </h3>
          </div>

          <div className="auth-right-side col-md-5">
            <div className="card shadow w-100">
              <div className="card-body">
                <form action="" className="form-group">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>

                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </div>

                  <button
                    className="btn btn-primary w-100 bg-blue-light"
                    type="submit">
                    <h5>Log In</h5>
                  </button>
                </form>
                <div className="d-flex flex-column align-items-center">
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <p>Forgotten Password?</p>
                  </a>
                  <div className="divider"></div>

                  <button type="button" className="btn bg-green my-2">
                    Create New Account
                  </button>

                  <div className="row justify-content-between w-100">
                    <button
                      type="button"
                      className="btn bg-red my-2"
                      onClick={handleGoogleLogin}>
                      Log In With Google
                    </button>

                    <button
                      ref={signInBtn}
                      className="btn bg-primary  my-2"
                      onClick={handlePhoneLogin}>
                      Log in With Phone
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-2">
              <strong>Create a Page for, </strong>
              celebrity, band, or business
            </p>
          </div>
        </div>
      </div>
      <PhoneAuth isOpen={phoneAuth} setOpen={setPhoneAuth} />;
    </div>
  );
};

export default Auth;
