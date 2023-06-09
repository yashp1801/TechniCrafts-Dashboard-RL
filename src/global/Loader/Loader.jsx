import React from "react";
import "./Loader.css";
import logo from "../../Images/logo.png";
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader__container">
        <img src={logo} alt="img" className="loader__container__img" />
      </div>
    </div>
  );
};

export default Loader;
