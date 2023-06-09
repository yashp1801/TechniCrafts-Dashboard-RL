import { useEffect } from "react";
import OverallSummary from "../Pages/OverallSummary/OverallSummary";

const AdminDashboard = () => {
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
      <OverallSummary />
    </>
  );
};

export default AdminDashboard;
