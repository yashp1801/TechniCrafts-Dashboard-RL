import React from "react";
import "./NotificationPopup.css";
import { MdOutlineNotificationsActive, MdArrowDropUp } from "react-icons/md";
import { Link } from "react-router-dom";
import { RxDotFilled } from "react-icons/rx";
import { motion } from "framer-motion";

const NotificationPopup = ({ setNotificationPopup }) => {
  const handlePopUpToggle = () => {
    setNotificationPopup(false);
  };
  return (
    <motion.div
      initial={{ x: "200%" }}
      animate={{ x: 0 }}
      transition={{ delay: 1, duration: 0.9 }}
      exit={{ x: "200%" }}
      className="notificationpopup"
    >
      <div className="notificationpopup__wrapper">
        <div className="notificationpopup__wrapper__content">
          <RxDotFilled className="notificationpopup__dot" />
          <p>
            You have 2 new <br /> notfications
          </p>
        </div>
        <MdOutlineNotificationsActive className="notificationpopup__icon" />
      </div>
      <div className="notificationpopup__link__wrapper">
        <Link
          to="/user/notifications"
          className="notificationpopup__link"
          onClick={handlePopUpToggle}
        >
          View Notifications
        </Link>
      </div>
    </motion.div>
  );
};

export default NotificationPopup;
