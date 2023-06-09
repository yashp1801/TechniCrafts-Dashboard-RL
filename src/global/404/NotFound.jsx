import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";
import { TbError404 } from "react-icons/tb";

const NotFound = () => {
  const userType = localStorage.getItem("role");

  return (
    <div className="notfound">
      <div className="notfound__content__wrapper">
        <h1>Page Not Found!</h1>
        <p>
          This page dosen't exist or was removed! <br />
          We suggest you back to home
        </p>

        {userType === "admin" ? (
          <Link to={"/admin"} className="notfound__content__wrapper__link">
            Back To Home
          </Link>
        ) : (
          <Link to={"/user"} className="notfound__content__wrapper__link">
            Back To Home
          </Link>
        )}
      </div>
      <TbError404 className="notfound__icon" />
    </div>
  );
};

export default NotFound;
