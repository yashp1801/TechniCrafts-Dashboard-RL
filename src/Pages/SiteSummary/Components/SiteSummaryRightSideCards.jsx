import React, { useState, useEffect } from "react";
import Loader from "../../../global/Loader/Loader";
import Error from "../../../global/Error/Error";
import "../../../User/UserSiteSummary/UserSiteSummary.css";
import { useGetCurrentSiteParameterDataQuery } from "../../../Store/Slices/siteSummarySlice";

const SiteSummaryRightSideCards = ({ siteId }) => {
  const res = useGetCurrentSiteParameterDataQuery(siteId);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      res.refetch();
    }, 10000); // refetch data every 10 seconds
    return () => clearInterval(intervalId); // clear interval on component unmount
  }, [res]);

  if (res.isLoading) return <Loader />;
  if (res.isError) return <Error />;

  // For Filtering data according to parameters
  const filteredData = res?.data.filter((item) =>
    item.parameter.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="usersitesummary__rightside">
      <input
        type="text"
        placeholder="Search by Parameter"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="usersitesummary__rightside__card__wrapper">
        {/* {filteredData.length === 0 && <p>No parameter found.</p>} */}
        {filteredData.map((item) => {
          return (
            <div className="usersitesummary__rightside__card" key={item.id}>
              <p className="usersitesummary__rightside__card__parameterName">
                {item.station} <br /> <span>{item.parameter}</span>
              </p>
              <p>
                <span className="usersitesummary__rightside__card__parameterValue">
                  {" "}
                  {item.last_value}
                </span>{" "}
                {item.unit}
              </p>
              <p>
                Std.limit - {item.normal_max} {item.unit}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SiteSummaryRightSideCards;
