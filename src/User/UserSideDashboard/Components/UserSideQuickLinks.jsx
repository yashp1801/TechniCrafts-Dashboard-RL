import { useState } from "react";
import { TbReportAnalytics } from "react-icons/tb";
import { BsGraphUp } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../UserSideDashboard.css";
import { FiArrowUpRight } from "react-icons/fi";
import { VscVmActive } from "react-icons/vsc";
import { MdOutlineNotificationsActive } from "react-icons/md";
import SiteStatusData from "../../../Pages/SiteStatus/SiteStatusData";

const UserSideQuickLinks = () => {

  return (
    <>
      <h1> Quick Links</h1>
      <div className="userSide__quickLink__card__wrapper">
        <Link className="userSide__link__card">
          <TbReportAnalytics className="userSide__link__card__icon" />
          <span className="userSide__card__link">Generate Report</span>
          <FiArrowUpRight className="userSide__onHover__icon" />
        </Link>
        <Link className="userSide__link__card">
          <BsGraphUp className="userSide__link__card__icon" />
          <span className="userSide__card__link">Site Summary</span>
          <FiArrowUpRight className="userSide__onHover__icon" />
        </Link>
        <Link className="userSide__link__card">
          <VscVmActive className="userSide__link__card__icon" />
          <span className="userSide__card__link">Site Status</span>
          <FiArrowUpRight className="userSide__onHover__icon" />
        </Link>
        <Link className="userSide__link__card">
          <MdOutlineNotificationsActive className="userSide__link__card__icon" />
          <span className="userSide__card__link">Notifications</span>
          <FiArrowUpRight className="userSide__onHover__icon" />
        </Link>
      </div>
    </>
  );
};

export default UserSideQuickLinks;
