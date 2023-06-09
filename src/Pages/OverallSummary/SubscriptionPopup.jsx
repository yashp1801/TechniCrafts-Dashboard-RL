import React from "react";
import "./overallsummary.css";
import alert from "../../Images/alert.mp4";
import { RiCloseCircleLine } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";

const SubscriptionPopup = (props) => {
  const closePopUp = () => {
    props.setIsEnding(false);
  };

  return (
    <div className="subPopup">
      <AnimatePresence>
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.5 }}
          exit={{ y: "-100%" }}
          className="subPopup__container"
        >
          <video
            src={alert}
            autoPlay
            loop
            muted
            className="subPopup__container__video"
          ></video>
          <RiCloseCircleLine
            onClick={closePopUp}
            className="subPopup__container__closeBtn"
          />
          <h1 className="subPopup__container__header">
            Subscription Ending Soon!
          </h1>
          <p className="subPopup__container__discription">
            Your subscription is expiring in <span className="subPopup__container__discription__span">20 days </span>
            <br /> renew now to avoid service interruption.
          </p>
          <button className="subPopup__container__button">renew now</button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SubscriptionPopup;
