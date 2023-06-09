import React from "react";
import "./LogOutPopup.css";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlinePoweroff } from "react-icons/ai";

const LogoutPopup = (props) => {
  const navigate = useNavigate();
  const closePopup = () => {
    props.setHandlePopUp(false);
  };

  const handleLogOut = () => {
    navigate("/");
    localStorage.removeItem("login");
    localStorage.removeItem("username");
    localStorage.removeItem("userpassword");
    localStorage.removeItem("role");
    localStorage.removeItem("siteId");
  };

  return (
    <div className="account__popup">
      <div className="account__popup__wrapper">
        <AiOutlinePoweroff className="account__popup__icon" />
        <h1>
          Oh no! You're leaving... <br /> Are you sure?{" "}
        </h1>
        <div className="account__popup__btn__wrapper">
          <button onClick={closePopup} className="account__popup__btn ">
            Cancel
          </button>
          <button
            to="/"
            className="account__popup__btn signout"
            onClick={handleLogOut}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutPopup;
