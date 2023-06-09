import React from "react";
import "../UserSideDashboard.css";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
const UserSideWorkflowWidget = () => {
  return (
    <div className="userSideWorkflow__widget">
      <div className="userSideWorkflow__widget__header">
        <h1>Workflow</h1>
        <span>The current workflow in progress will be presented here.</span>
      </div>
      <div className="userSideWorkflow__widget__container">
        <p>No Workflows in Progress</p>
      </div>
      <Link to={"/operator/workflow"} className="userSideWorkflow__widget__btn">
        Start New Workflow{" "}
        <BsArrowRightShort className="userSideWorkflow__widget__btn__icon" />
      </Link>
    </div>
  );
};

export default UserSideWorkflowWidget;
