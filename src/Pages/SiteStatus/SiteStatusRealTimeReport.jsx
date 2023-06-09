import React from "react";
import "./SiteStatusRealTimeReport.css";
import { TfiReload } from "react-icons/tfi";
import SiteLiveReadings from "./SiteLiveReadings";
import { useGetCurrentSiteParameterDataQuery } from "../../Store/Slices/siteSummarySlice";
import { useEffect } from "react";

const SiteStatusRealTimeReport = ({ siteId }) => {
  const res = useGetCurrentSiteParameterDataQuery(siteId);

  useEffect(() => {
    const intervalId = setInterval(() => {
      res.refetch();
    }, 10000); // refetch data every 10 seconds
    return () => clearInterval(intervalId); // clear interval on component unmount
  }, [res]);

  return (
    <div className="realtimereport__container" id="realtimeReport" >
      <SiteLiveReadings res={res} />
    </div>
  );
};

export default SiteStatusRealTimeReport;
