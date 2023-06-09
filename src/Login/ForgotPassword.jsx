import React from "react";
import { BiKey, BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  return (
    <div className="f__pass">
      <div className="f__pass__wrapper">
        <div className="f__pass__wrapper__icon__wrapper">
          <BiKey className="f__pass__wrapper__icon" />
        </div>{" "}
        <h1>Forgot Password?</h1>
        <p>No worries, we'll send you reset instructions. </p>
        <div className="f__pass__form">
          <label>Email</label>
          <input
            type="email"
            required
            placeholder="Enter your email"
            className="f__pass__form__input"
          />
          <button className="f__pass__form__btn">Reset Password</button>
        </div>
        <Link to="/" className="f__pass__goback__link">
          {" "}
          <BiArrowBack className="f__pass__goback__link__icon" />
          Go back to Log in
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;
