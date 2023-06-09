import "./Login.css";
import { useState, useEffect } from "react";
import backGroundImg from "./Images/BackgroundImg.jpg";
import Img from "./Images/Technicrafts.png";
import logo from "./Images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AfterLoginLoader from "./AfterLoginLoader";
import { RxEyeOpen, RxEyeClosed } from "react-icons/rx";
import { BASE_LOGIN_URL } from "../api";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("login")) {
      const role = localStorage.getItem("role");
      if (role === "admin") {
        navigate("/admin");
      } else if (role === "operator") {
        navigate("/user");
      }
    }
  }, []);

  const loginData = {
    username: username,
    password: password,
  };

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_API_KEY,
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(BASE_LOGIN_URL, loginData, { headers });
      setUserData(response.data);
      setLoading(true);
      console.log(response);
      if (response.data?.data?.role === "Admin") {
        localStorage.setItem("login", true);
        localStorage.setItem("username", username);
        localStorage.setItem("userpassword", password);
        localStorage.setItem("role", "admin");
        setTimeout(() => {
          setLoading(false);
          navigate("/admin");
        }, 7000);
      } else if (response.data?.data.role === "Operator") {
        localStorage.setItem("login", true);
        localStorage.setItem("username", username);
        localStorage.setItem("userpassword", password);
        localStorage.setItem("role", "operator");
        const siteId = response.data?.data?.site_id;
        localStorage.setItem("siteId", siteId);
        setTimeout(() => {
          setLoading(false);
          navigate("/user");
        }, 7000);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="login">
      <div className="login__wrapper">
        <div className="login__container">
          <div className="login__container__wrapper">
            <span>Welcome to TechniCrafts</span>
            <h1>
              Log into your <br /> Account
            </h1>
            <form className="login__form" onSubmit={handleSubmit}>
              {userData?.message ? (
                <p className="login__form__message">{userData?.message}</p>
              ) : null}
              {/* */}
              <input
                type="text"
                placeholder="Username"
                required
                value={username}
                className={userData?.message ? "incorrect" : null}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className={userData?.message ? "incorrect" : null}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ position: "relative" }}
              />
              {showPassword ? (
                <RxEyeClosed
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }
                  className="showpass"
                />
              ) : (
                <RxEyeOpen
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }
                  className="showpass"
                />
              )}

              <button type="submit" className="loginBtn">
                {loading ? "Loading" : "Submit"}
              </button>
            </form>
            <Link to="/forgotpassword" className="f_pass__link">
              Forgot Password
            </Link>
          </div>
          <div className="login__container__footer">
            <span>@Technicrafts 2023</span>
            <span>v0.1</span>
          </div>
        </div>
        <div className="login__rightside__container">
          <img
            src={backGroundImg}
            alt="img"
            className="login__rightside__container__bgImg"
          />
          {/* Right side */}
          <div className="login__logo">
            <img src={logo} alt="logo" className="login__logo__img1" />
            <img src={Img} alt="logo" className="login__logo__img2" />
          </div>
        </div>
      </div>
      {loading && userData.status === "success" && (
        <AfterLoginLoader userData={userData} />
      )}
    </div>
  );
};

export default Login;
