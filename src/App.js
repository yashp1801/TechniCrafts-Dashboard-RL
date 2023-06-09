import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react"; // import lazy and Suspense
import Login from "./Login/Login";
import Topbar from "./global/Topbar/Topbar";
import ForgotPassword from "./Login/ForgotPassword";
import MapViewWrapper from "./Pages/MapView/MapViewWrapper";
import SiteStatusWrapper from "./Pages/SiteStatus/SiteStatusWrapper";
import Loader from "./global/Loader/Loader";
import ProtectedRoute from "./ProtectedRoute";
import StationStatusWrapper from "./Pages/StationStatus/StationStatusWrapper";
import NotFound from "./global/404/NotFound";
import NotificationsWrapper from "./Pages/Notifications/NotificationsWrapper";
import ParametersWrapper from "./Pages/Parameters/ParametersWrapper";
import WorkFlowNotAvaiable from "./Pages/WorkFlow/WorkFlowNotAvaiable";
import "./index.css";
import CameraStatus from "../src/Pages/CameraStatus/CameraStatus";
import PercentileReportWrapper from "./Pages/PercentileReport/PercentileReportWrapper";

const AdminDashboard = lazy(() => import("./dashboard/AdminDashboard"));
const UserDashboard = lazy(() => import("./dashboard/UserDashboard"));
const MyAccount = lazy(() => import("./Pages/MyAccount/MyAccount"));
const CustomReport = lazy(() => import("./Pages/CustomReports/CustomReport"));
const SiteSummary = lazy(() => import("./Pages/SiteSummary/SiteSummary"));

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [userInfo, setUserInfo] = useState();
  const [role, setRole] = useState();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsAuthenticated(localStorage.getItem("login"));
    setUserInfo(JSON.parse(localStorage.getItem("userInfo")));
  }, []);


  useEffect(() => {
    if (isAuthenticated && role === "admin") {
      navigate("/admin");
    }
  }, [isAuthenticated, role, navigate]);

  // Disable Topbar for particular pages

  const showTopbar =
    location.pathname !== "/" &&
    location.pathname !== "/forgotpassword" &&
    location.pathname !== "*";

  const userType = localStorage.getItem("role"); // For detecting Operator

  return (
    <div className="app">
      {showTopbar && <Topbar userType={userType} />}
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <Login setUserInfo={setUserInfo} />
            </Suspense>
          }
        />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route
          path={`/${userType}`}
          element={
            <Suspense fallback={<Loader />}>
              <ProtectedRoute Component={AdminDashboard} />
            </Suspense>
          }
        />
        <Route
          path={`/${userType}/myaccount`}
          element={
            <Suspense fallback={<Loader />}>
              <ProtectedRoute Component={MyAccount} />
            </Suspense>
          }
        />
        <Route
          path="/user"
          element={
            <Suspense fallback={<Loader />}>
              <ProtectedRoute Component={UserDashboard} />
            </Suspense>
          }
        />
        <Route
          path={`/${userType}/sitesummary`}
          element={
            <Suspense fallback={<Loader />}>
              <ProtectedRoute Component={SiteSummary} />
            </Suspense>
          }
        />
        <Route
          path={`/${userType}/mapview`}
          element={
            <Suspense fallback={<Loader />}>
              <ProtectedRoute Component={MapViewWrapper} />
            </Suspense>
          }
        />
        <Route
          path={`/${userType}/sitestatus`}
          element={
            <Suspense fallback={<Loader />}>
              <ProtectedRoute Component={SiteStatusWrapper} />
            </Suspense>
          }
        />
        <Route
          path={`/${userType}/workflow`}
          element={
            <Suspense fallback={<Loader />}>
              <ProtectedRoute Component={WorkFlowNotAvaiable} />
            </Suspense>
          }
        />
        <Route
          path={`/${userType}/customreport`}
          element={
            <Suspense fallback={<Loader />}>
              <ProtectedRoute Component={CustomReport} />
            </Suspense>
          }
        />
        <Route
          path={`/${userType}/notifications`}
          element={
            <Suspense fallback={<Loader />}>
              <ProtectedRoute Component={NotificationsWrapper} />
            </Suspense>
          }
        />
        <Route
          path={`/${userType}/stationstatus`}
          element={
            <Suspense fallback={<Loader />}>
              <ProtectedRoute Component={StationStatusWrapper} />
            </Suspense>
          }
        />
        <Route
          path={`/${userType}/parametersummary`}
          element={
            <Suspense fallback={<Loader />}>
              <ProtectedRoute Component={ParametersWrapper} />
            </Suspense>
          }
        />
        <Route
          path={`/${userType}/percentilereport`}
          element={
            <Suspense fallback={<Loader />}>
              <ProtectedRoute Component={PercentileReportWrapper} />
            </Suspense>
          }
        />
        <Route
          path={`/${userType}/camerastream`}
          element={
            <Suspense fallback={<Loader />}>
              <ProtectedRoute Component={CameraStatus} />
            </Suspense>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
