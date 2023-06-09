import { useGetCurrentSiteDataQuery } from "../../../Store/Slices/siteSummarySlice";
import Loader from "../../../global/Loader/Loader";

const SiteSummaryDataHeader = ({ siteId }) => {
  const currentSiteData = useGetCurrentSiteDataQuery(siteId);

  let className = "";
  let graphColor = "";

  if (currentSiteData.isLoading) return <Loader />;

  if (currentSiteData.data[0].status === "Active") {
    className = "sitesummary__maincard__siteDetails__active";
    graphColor = "green";
  } else if (currentSiteData.data[0].status === "Inactive") {
    className = "sitesummary__maincard__siteDetails__inactive";
    graphColor = "red";
  } else {
    className = "sitesummary__maincard__siteDetails__delayed";
    graphColor = "gold";
  }

  const userType = localStorage.getItem("role");

  return (
    <div className="sitesummarydataheader">
      <div className="sitesummary__data__maincard__siteDetails">
        {currentSiteData?.data.map((item) => {
          return (
            <>
              <div
                className="sitesummary__maincard__siteDetails__wrapper"
                key={item.id}
              >
                {userType === "admin" ? (
                  <div className="sitesummarydataheader__title">
                    <h1>{item.name}</h1>{" "}
                  </div>
                ) : null}
                <div className="sitesummary__maincard__siteDetails">
                  <div>
                    <span>City</span>
                    <p> {item.city}</p>
                  </div>
                  <div>
                    <span>State</span>
                    <p> {item.state}</p>
                  </div>
                  <div>
                    <span>Category</span>
                    <p> {item.category} </p>
                  </div>
                  <div>
                    <span>Configured Date</span>
                    {item?.stations.map((item) => {
                      return <p> {item.configured_date}</p>;
                    })}
                  </div>
                  <div>
                    <span>Monitoring Station</span>
                    {item?.stations.map((item) => {
                      return <p> {item.station}</p>;
                    })}
                  </div>
                  <div>
                    <span>Status</span>
                    <p className={className}>• {item.status}</p>
                  </div>
                  <div>
                    <span>Total Parameters</span>
                    {item?.stations.map((item) => {
                      return <p> {item.parameters.length}</p>;
                    })}
                  </div>
                  <div>
                    <span> Today's Exceedances </span>
                    <p style={{ color: "red" }}> {item.today_exceedance}</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
        {/* TODO add realtime value */}
      </div>
    </div>
  );
};

export default SiteSummaryDataHeader;
