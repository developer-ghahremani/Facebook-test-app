import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { useDispatch } from "react-redux";
import { SET_USER } from "../Redux/type";
const MobileVerifCart = () => {
  const { replace } = useHistory();
  const [code, setCode] = useState("");
  const { addToast } = useToasts();
  const confirmationResult = window.confirmationResult;
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    
    if (code.length === 0) {
      addToast("You Should Fill this Field", { appearance: "error" });
      return;
    }

    try {
      const result = await confirmationResult.confirm(code);
      console.log(result);
      dispatch({ type: SET_USER, payload: result.user });
      replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleAuthPage = () => {
    replace("/auth");
  };
  return (
    <div className="container">
      <div className="col-lg-8 offset-2">
        <div className="card">
          <div className="px-3 pt-3">
            <span className="font-weight-bold">Mobile Verification Code</span>
            <hr className="m-0" />
          </div>

          <div className="card-body">
            <div className="px-3">
              <span className="font-size-small ">
                Enter Mobile Verification cod
              </span>
              <input
                type="text"
                value={code}
                maxLength={6}
                onChange={({ target }) => {
                  setCode(target.value);
                }}
                placeholder="Enter Code"
                className="form-control text-center font-size-small"
              />
            </div>
          </div>
          <div className="card-footer py-2">
            <div className="row justify-content-end">
              <button
                type="submit"
                className="btn btn-primary btn-sm mx-2"
                onClick={handleSubmit}>
                Submit
              </button>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={handleAuthPage}>
                Auth Page
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileVerifCart;
