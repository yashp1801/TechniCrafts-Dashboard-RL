import { useState } from "react";
import { Link } from "react-router-dom";
import "./ResponsiveTopbar.css";
import { motion } from "framer-motion";
import LogoutPopup from "../LogOutPopup/LogoutPopup";

const ResponsiveTopbar = ({ setHandleResponsiveMenuToggle }) => {
  const [handlePopUp, setHandlePopUp] = useState(false);
  const handleClosePopup = () => {
    setHandleResponsiveMenuToggle(false);
  };

  const userType = localStorage.getItem("role");
  console.log("Hello", userType);

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.2 }}
      exit={{ x: -500 }}
      className="reponsiveTopbar"
    >
      {userType === "admin" ? (
        <div className="reponsiveTopbar__menu__wrapper">
          <div className="reponsiveTopbar__menu">
            <h1>Dashboard </h1>
            <Link
              className="reponsiveTopbar__menu__link"
              to={`/admin`}
              onClick={handleClosePopup}
            >
              OverAll summary
            </Link>
            <Link
              className="reponsiveTopbar__menu__link"
              to={`/admin/sitesummary`}
              onClick={handleClosePopup}
            >
              Site Summary
            </Link>
          </div>
          <div className="reponsiveTopbar__menu">
            <h1>Live Status </h1>
            <Link
              className="reponsiveTopbar__menu__link"
              to={"/admin/camerastream"}
            >
              Camera Stream
            </Link>
            <Link
              className="reponsiveTopbar__menu__link"
              to={"/admin/mapview"}
              onClick={handleClosePopup}
            >
              Map View{" "}
            </Link>
            <Link
              className="reponsiveTopbar__menu__link"
              to={`/admin/sitestatus`}
            >
              Site Status
            </Link>
            <Link className="reponsiveTopbar__menu__link" to="/over">
              Live Site Display
            </Link>
          </div>
          <div className="reponsiveTopbar__menu">
            <h1>Reports </h1>
            <Link to={`/admin/customreport`} onClick={handleClosePopup}>
              Custom Report
            </Link>
            <Link>Exceedance Report</Link>
            <Link>Scheduled Report</Link>
            <Link>Station Count Report</Link>
            <Link>Site Status Report</Link>
            <Link>Data Avaibility</Link>
            <Link>Percentile Report</Link>
          </div>
          <div className="reponsiveTopbar__menu">
            <h1>Station</h1>
            <Link>Station Status</Link>
            <Link>Parameters</Link>
            <Link>Scheduled</Link>
          </div>
          <div className="reponsiveTopbar__menu">
            <h1>Analytics</h1>
            <Link>Multi Axis Report</Link>
            <Link>Matrix Report</Link>
          </div>
          <div className="reponsiveTopbar__menu">
            <h1>Calibration</h1>
            <Link>Remote Calibration</Link>
            <Link>Calibration Logs</Link>
          </div>
        </div>
      ) : (
        <div className="reponsiveTopbar__menu__wrapper">
          <div className="reponsiveTopbar__menu">
            <h1>Dashboard </h1>
            <Link
              className="reponsiveTopbar__menu__link"
              to={`/user`}
              onClick={handleClosePopup}
            >
              OverAll summary
            </Link>
          </div>
          <div className="reponsiveTopbar__menu">
            <h1>Live Status </h1>
            <Link
              className="reponsiveTopbar__menu__link"
              to={"/operator/mapview"}
              onClick={handleClosePopup}
            >
              Map View{" "}
            </Link>
            <Link
              className="reponsiveTopbar__menu__link"
              to={"/operator/camerastream"}
              onClick={handleClosePopup}
            >
              Camera Stream
            </Link>
          </div>
          <div className="reponsiveTopbar__menu">
            <h1>Reports </h1>
            <Link to={"/operator/customreport"} onClick={handleClosePopup}>
              Custom Report
            </Link>
          </div>
          <div className="reponsiveTopbar__menu">
            <h1>Station</h1>
            <Link to={"/operator/stationstatus"} onClick={handleClosePopup}>
              Station Status
            </Link>
          </div>
          <div className="reponsiveTopbar__menu">
            <h1>Station</h1>
            <Link to={"/operator/workflow"} onClick={handleClosePopup}>
              Workflow
            </Link>
          </div>
          <div className="reponsiveTopbar__menu">
            <h1>My account</h1>
            <Link to={"/operator/myaccount"} onClick={handleClosePopup}>
              My account
            </Link>
            <Link onClick={() => setHandlePopUp(true)}>Log Out</Link>
          </div>
        </div>
      )}
      {handlePopUp && <LogoutPopup setHandlePopUp={setHandlePopUp} />}
    </motion.div>
  );
};

export default ResponsiveTopbar;
