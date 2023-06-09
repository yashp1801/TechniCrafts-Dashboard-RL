import React from "react";
import { useState, useEffect } from "react";
import { MenuButton, MenuItem, MenuList, Menu, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import "./Topbar.css";
import { Link } from "react-router-dom";
import Logo from "../../Images/logo.png";
import { FaRegUserCircle } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import {
  MdExitToApp,
  MdKeyboardArrowRight,
  MdFullscreen,
  MdFullscreenExit,
} from "react-icons/md";
import { BsArrowsFullscreen, BsFullscreenExit } from "react-icons/bs";
import NotificationPopup from "../NotificationPopup/NotificationPopup";
import { AnimatePresence } from "framer-motion";
import { RxDotFilled } from "react-icons/rx";
import ResponsiveTopbar from "../ResponseTopbar/ResponsiveTopbar";
import { RiUserLine } from "react-icons/ri";
import LogoutPopup from "../LogOutPopup/LogoutPopup";

const Topbar = ({ userType }) => {
  const [notfication, setNotifications] = useState(true); // Notifications Alert
  const [handlePopUp, setHandlePopUp] = useState(false); //
  const [notificationPopup, setNotificationPopup] = useState(true); //  Notification Popup
  const [handleResponsiveMenuToggle, setHandleResponsiveMenuToggle] =
    useState(false); // Responsive Menu
  const [isFullscreen, setIsFullscreen] = useState(false); // Fullscreen Toggle

  // Notification Popup on Navbar
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setNotificationPopup(false);
    }, 5000); // 5 seconds
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  // Handling Fullscreen Toggle
  const handleToggleFullscreen = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  };

  // Admin Navbar
  if (userType === "admin") {
    return (
      <>
        <div className="topbar">
          <div className="topbar__logo">
            <img src={Logo} alt="" />
          </div>
          <div className="topbar__menu">
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                className="topbar__menuBtn"
              >
                Dashboard
              </MenuButton>
              <MenuList className="topbar__menulist">
                <MenuItem className="topbar__menulist__menuItem">
                  <Link to={"/admin"} className="topbar__menuLink">
                    Overall Summary
                    <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                  </Link>
                </MenuItem>
                <MenuItem className="topbar__menulist__menuItem">
                  <Link to={"/admin/sitesummary"} className="topbar__menuLink">
                    Site Summary
                    <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                className="topbar__menuBtn"
              >
                Live Status
              </MenuButton>
              <MenuList className="topbar__menulist">
                <MenuItem className="topbar__menulist__menuItem">
                  <Link to={"/admin/sitestatus"} className="topbar__menuLink">
                    Site Status
                    <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                  </Link>
                </MenuItem>
                <MenuItem className="topbar__menulist__menuItem">
                  <Link to={"/admin/mapview"} className="topbar__menuLink">
                    Map View
                    <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                  </Link>
                </MenuItem>
                <MenuItem className="topbar__menulist__menuItem">
                  <Link className="topbar__menuLink" to={"/admin/camerastream"}>
                    Camera Stream
                    <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                className="topbar__menuBtn"
              >
                Reports
              </MenuButton>
              <MenuList className="topbar__menulist">
                <MenuItem className="topbar__menulist__menuItem">
                  <Link to={"/admin/customreport"} className="topbar__menuLink">
                    Custom Report
                    <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                  </Link>
                </MenuItem>
                <MenuItem className="topbar__menulist__menuItem">
                  <Link
                    title="Page under Developnment"
                    className="topbar__menuLink wip"
                  >
                    Exceedance Report
                    <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                  </Link>
                </MenuItem>
                <MenuItem className="topbar__menulist__menuItem">
                  <Link className="topbar__menuLink wip">
                    Scheduled Report{" "}
                    <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                  </Link>
                </MenuItem>
                <MenuItem className="topbar__menulist__menuItem">
                  <Link className="topbar__menuLink wip">
                    Station Count Report
                    <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                  </Link>
                </MenuItem>
                <MenuItem className="topbar__menulist__menuItem">
                  <Link className="topbar__menuLink wip">
                    Site Status Report
                    <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                  </Link>
                </MenuItem>
                <MenuItem className="topbar__menulist__menuItem">
                  <Link className="topbar__menuLink wip">
                    Data Avaibility
                    <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                  </Link>
                </MenuItem>
                <MenuItem className="topbar__menulist__menuItem">
                  <Link
                    className="topbar__menuLink wip"
                  >
                    Percentile Report
                    <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                className="topbar__menuBtn"
              >
                Stations
              </MenuButton>
              <MenuList className="topbar__menulist">
                <MenuItem className="topbar__menulist__menuItem">
                  <Link
                    to={"/admin/stationstatus"}
                    className="topbar__menuLink"
                  >
                    Station Status{" "}
                    <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                  </Link>
                </MenuItem>
                <MenuItem className="topbar__menulist__menuItem">
                  <Link
                    to="/admin/parametersummary"
                    className="topbar__menuLink"
                  >
                    Parameters{" "}
                    <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={Button} 
                rightIcon={<ChevronDownIcon />}
                className="topbar__menuBtn"
              >
                Analytics
              </MenuButton>
              <MenuList className="topbar__menulist">
                <MenuItem className="topbar__menulist__menuItem">
                  <Link className="topbar__menuLink wip">
                    Multi Axis Report
                    <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                  </Link>
                </MenuItem>
                <MenuItem className="topbar__menulist__menuItem">
                  <Link className="topbar__menuLink wip">
                    Matrix Report
                    <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>

            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                className="topbar__menuBtn"
              >
                Calibration
              </MenuButton>
              <MenuList className="topbar__menulist">
                <MenuItem className="topbar__menulist__menuItem">
                  <Link className="topbar__menuLink wip">
                    Remote Calibration{" "}
                    <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                  </Link>
                </MenuItem>
                <MenuItem className="topbar__menulist__menuItem">
                  <Link className="topbar__menuLink wip">
                    Calibration Logs{" "}
                    <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <Link
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  fontWeight: "500",
                  marginRight: "1.5rem",
                  color: "#fff",
                }}
              >
                Audit Logs
              </Link>
            </Menu>
            <Menu>
              <Link
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  fontWeight: "500",
                  marginRight: "1.5rem",
                  color: "#fff",
                }}
              >
                Remote Devices
              </Link>
              <Link
                to="/admin/workflow"
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  fontWeight: "500",
                  color: "#fff",
                }}
              >
                WorkFlow
              </Link>
            </Menu>
          </div>
          <div>
            {isFullscreen ? (
              <MdFullscreenExit
                onClick={handleToggleFullscreen}
                className="topbar__fullscreen__icon"
                title="Exit Fullscreen"
                id="test2"
              />
            ) : (
              <MdFullscreen
                onClick={handleToggleFullscreen}
                className="topbar__fullscreen__icon"
                title="Fullscreen"
              />
            )}
          </div>
          <div className="topbar__myaccount">
            <Menu>
              <MenuButton as={Button} className="topbar__menuBtn">
                <RiUserLine className="topbar__myaccount__icon" />
              </MenuButton>
              <MenuList className="topbar__menulist">
                <MenuItem className="topbar__menulist__menuItem">
                  <Link
                    to={`/${userType}/myaccount`}
                    className="topbar__menuLink"
                  >
                    My Account{" "}
                    <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                  </Link>
                </MenuItem>
                <MenuItem className="topbar__menulist__menuItem">
                  <Link
                    to={`/${userType}/notifications`}
                    className="topbar__menuLink"
                  >
                    Notifications{" "}
                    <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                  </Link>
                </MenuItem>
                <MenuItem className="topbar__menulist__menuItem">
                  <Link
                    className="topbar__menuLink"
                    onClick={() => setHandlePopUp(true)}
                  >
                    Log Out
                    <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>

        {handlePopUp && <LogoutPopup setHandlePopUp={setHandlePopUp} />}

        <div className="hamburger__menu">
          {handleResponsiveMenuToggle ? (
            <MdExitToApp
              onClick={() => setHandleResponsiveMenuToggle(false)}
              className="responsiveMenu__toggle__icon"
            />
          ) : (
            <BiMenu
              onClick={() => {
                setHandleResponsiveMenuToggle(true);
              }}
              className="responsiveMenu__toggle__icon"
            />
          )}
        </div>
        <AnimatePresence>
          {handleResponsiveMenuToggle && (
            <ResponsiveTopbar
              setHandleResponsiveMenuToggle={setHandleResponsiveMenuToggle}
              userType={userType}
            />
          )}
        </AnimatePresence>
      </>
    );
  }

  // User Navbar
  else {
    return (
      <>
        <div className="topbar">
          <div className="topbar__logo">
            <img src={Logo} alt="" />
          </div>
          <div className="topbar__menu">
            <Menu className="topbar__menuBtn">
              <Link
                to="/user"
                style={{
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  fontWeight: "500",
                  marginRight: "2rem",
                  color: "#fff",
                }}
              >
                Dashboard
              </Link>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                className="topbar__menuBtn"
              >
                Live Status
              </MenuButton>
              <MenuList className="topbar__menulist">
                <MenuItem className="topbar__menulist__menuItem">
                  {/* <Link to={"/admin/camerastatus"} className="topbar__menuLink">
                  Camera Status
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link> */}
                </MenuItem>
                <MenuItem className="topbar__menulist__menuItem">
                  <Link to={"/operator/mapview"} className="topbar__menuLink">
                    Map View
                    <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                  </Link>
                </MenuItem>
                <MenuItem className="topbar__menulist__menuItem">
                  <Link
                    to={"/operator/camerastream"}
                    className="topbar__menuLink"
                  >
                    Camera Stream
                    <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                className="topbar__menuBtn"
              >
                Reports
              </MenuButton>
              <MenuList className="topbar__menulist">
                <MenuItem className="topbar__menulist__menuItem">
                  <Link
                    to={"/operator/customreport"}
                    className="topbar__menuLink"
                  >
                    Custom Report
                    <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                className="topbar__menuBtn"
              >
                Stations
              </MenuButton>
              <MenuList className="topbar__menulist">
                <MenuItem className="topbar__menulist__menuItem">
                  <Link
                    to={"/operator/stationstatus"}
                    className="topbar__menuLink"
                  >
                    Station Status{" "}
                    <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <Menu className="topbar__menuBtn">
                <Link
                  to={"/operator/workflow"}
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    fontWeight: "500",
                    marginRight: "2rem",
                  }}
                >
                  Workflow
                </Link>
              </Menu>
            </Menu>
          </div>
          <div className="topbar__myaccount">
            <Menu>
              <MenuButton as={Button} className="topbar__menuBtn">
                <FaRegUserCircle className="topbar__myaccount__icon" />
                {/* {notfication ? (
                <RxDotFilled className="topbar__myaccount__icon__notificationAlert" />
              ) : null} */}
              </MenuButton>
              <MenuList className="topbar__menulist">
                <MenuItem className="topbar__menulist__menuItem">
                  <Link
                    to={`/${userType}/myaccount`}
                    className="topbar__menuLink"
                  >
                    My Account{" "}
                    <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                  </Link>
                </MenuItem>
                {/* <MenuItem className="topbar__menulist__menuItem">
                <Link
                  to={"/user/notifications"}
                  className="topbar__menuLink"
                  style={{ position: "relative" }}
                  onClick={() => setNotifications(false)}
                >
                  Notifications{" "}
                  {notfication ? (
                    <RxDotFilled className="topbar__menulist__menuItem__notificationAlert" />
                  ) : null}
                  <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                </Link>
              </MenuItem> */}
                <MenuItem className="topbar__menulist__menuItem">
                  <Link
                    className="topbar__menuLink"
                    onClick={handleToggleFullscreen}
                  >
                    {isFullscreen
                      ? "Exit Full Screen Mode"
                      : "Full Screen Mode"}
                    <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                  </Link>
                </MenuItem>
                <MenuItem className="topbar__menulist__menuItem">
                  <Link
                    className="topbar__menuLink"
                    onClick={() => setHandlePopUp(true)}
                  >
                    Log Out
                    <MdKeyboardArrowRight className="topbar__menuLink__icon" />
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>
            {handlePopUp && <LogoutPopup setHandlePopUp={setHandlePopUp} />}
            {/* <AnimatePresence>
            {notificationPopup && (
              <NotificationPopup setNotificationPopup={setNotificationPopup} />
            )}
          </AnimatePresence> */}
          </div>
        </div>
        <div className="hamburger__menu">
          {handleResponsiveMenuToggle ? (
            <MdExitToApp
              onClick={() => setHandleResponsiveMenuToggle(false)}
              className="responsiveMenu__toggle__icon"
            />
          ) : (
            <BiMenu
              onClick={() => {
                setHandleResponsiveMenuToggle(true);
              }}
              className="responsiveMenu__toggle__icon"
            />
          )}
        </div>
        <AnimatePresence>
          {handleResponsiveMenuToggle && (
            <ResponsiveTopbar
              setHandleResponsiveMenuToggle={setHandleResponsiveMenuToggle}
              userType={userType}
            />
          )}
        </AnimatePresence>
      </>
    );
  }
};

export default Topbar;
