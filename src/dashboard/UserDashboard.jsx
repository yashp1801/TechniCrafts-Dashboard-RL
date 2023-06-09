import React, { useEffect } from "react";
import UserSideDashboard from "../User/UserSideDashboard/UserSideDashboard";

const UserDashboard = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js-na1.hs-scripts.com/39954599.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <UserSideDashboard />
    </>
  );
};

export default UserDashboard;
