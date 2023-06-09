import React from "react";
import "./SiteSummary.css";
import SiteSummaryDataHeader from "./Components/SiteSummaryDataHeader";
import SiteSummaryGraph from "./Components/SiteSummaryGraph";
import SiteSummaryRightSideCards from "./Components/SiteSummaryRightSideCards";

const SiteSummaryDataMain = ({ siteId }) => {
  return (
    <>
      <SiteSummaryDataHeader siteId={siteId} />
      <div className="sitesummary__data__wrapper" id="main">
        <SiteSummaryGraph siteId={siteId} />
        <SiteSummaryRightSideCards siteId={siteId} />
      </div>
    </>
  );
};

export default SiteSummaryDataMain;
