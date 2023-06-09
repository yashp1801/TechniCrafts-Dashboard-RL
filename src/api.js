const userRole = localStorage.getItem("role");
export const BASE_LOGIN_URL = "http://192.168.1.103:6060/users/login/";

export const HEADERS = {
  "Content-Type": "application/json",
  Authorization: "Bearer " + process.env.REACT_APP_API_KEY,
};

export const BASE_URL =
  userRole === "operator"
    ? "http://192.168.1.103:6060/"
    : "http://192.168.1.103:6060/";
