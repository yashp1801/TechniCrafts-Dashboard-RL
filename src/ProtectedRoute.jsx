import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const ProtectedRoute = (props) => {
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    const login = localStorage.getItem("login");
    console.log("login :", login);
    if (login === null || login === undefined || login === "false") {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      <Component />
    </>
  );
};

export default ProtectedRoute;
