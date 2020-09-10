import React, {  useState } from "react";
import { Modal } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
const PhoneAuth = ({ isOpen, setOpen }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [mobile, setMobile] = useState("+989900880072");
  const { replace } = useHistory();
  const { addToast } = useToasts();

  const handleSendSMS = async (params) => {
    setIsLoading(true);
    try {
      const confirmationResult = await auth.signInWithPhoneNumber(
        mobile,
        window.recaptchaVerifier
      );
      window.confirmationResult = confirmationResult;
      setIsLoading(false);
      addToast("Send Sms Successfully", { appearance: "success" });
      replace("/MobileVerification");
    } catch (error) {
      addToast(error.message, { appearance: "error" });
    } finally {
      setOpen(false);
    }
  };
  const handleClose = (params) => {
    setOpen(false);
  };
  return (
    <Modal
      visible={isOpen}
      closable={false}
      footer={null}
      bodyStyle={{ padding: "0px" }}>
      <div>
        <div className="pt-4 px-4">
          <h5>Find Your Account</h5>
          <hr className="m-0 mb-3" />
        </div>
        <div className="px-5">
          <span>
            Please enter your phone number to search for your account.
          </span>
          <input
            type="text"
            value={mobile}
            onChange={({ target }) => {
              setMobile(target.value);
            }}
            className="form-control font-size-small text-center"
          />
        </div>
        <div className="card-footer mt-3">
          <div className="d-flex justify-content-end">
            <button
              type="submit"
              className="btn btn-primary btn-sm mx-1 px-3"
              onClick={handleSendSMS}>
              Submit
              {isLoading ? <LoadingOutlined className="mx-1" /> : ""}
            </button>
            <button
              type="submit"
              className="btn btn-secondary btn-sm"
              onClick={handleClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PhoneAuth;
