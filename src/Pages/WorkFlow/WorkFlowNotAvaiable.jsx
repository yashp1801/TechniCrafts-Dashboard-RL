import React from "react";
import "./WorkFlow.css";
import video from "./workflowNA.mp4";

const WorkFlowNotAvaiable = () => {
  return (
    <div className="workflow__NA">
      <video src={video} autoPlay loop muted></video>
      <h1>Workflow Feature coming very soon!</h1>
    </div>
  );
};

export default WorkFlowNotAvaiable;
