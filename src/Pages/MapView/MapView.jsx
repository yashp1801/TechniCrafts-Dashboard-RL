import { useState, useEffect } from "react";
import "./MapView.css";
import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";
import SiteStatusData from "../SiteStatus/SiteStatusData";
import Loader from "../../global/Loader/Loader";
import Error from "../../global/Error/Error";
import {
  useGetSiteSummaryDataQuery,
  useGetCurrentSiteDataQuery,
} from "../../Store/Slices/siteSummarySlice";
import Joyride, { STATUS } from "react-joyride";

const center = { lat: 20.5937, lng: 78.9629 };

const MapView = () => {
  const [firstTimeLogin, setFirstTimeLogin] = useState(false);
  const [{ run, steps }, setState] = useState({
    run: true,
    steps: [
      {
        content: <h2>Welcome to Map View!📌 </h2>,
        locale: { skip: <strong>SKIP</strong> },
        placement: "center",
        target: "body",
      },
      {
        content: <h2>Click on the Marker for more details</h2>,
        locale: { skip: <strong>SKIP</strong> },
        placement: "center",
        target: "body",
      },
    ],
  });

  const userType = localStorage.getItem("role");
  const currSiteId = localStorage.getItem("siteId");

  const response = useGetSiteSummaryDataQuery();
  const currdata = useGetCurrentSiteDataQuery(currSiteId);

  const [siteId, setSiteId] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const openPopUp = (id) => {
    setSiteId(id);
    setIsOpen(true);
  };

  useEffect(() => {
    const isFirstTimeLogin = !localStorage.getItem("loggedInBefore");
    if (isFirstTimeLogin) {
      localStorage.setItem("loggedInBefore", true);
      setFirstTimeLogin(true);
    }
  }, []);

  const getMarkerColor = (status) => {
    switch (status) {
      case "active":
        return "#FBBC04"; // Yellow
      case "inactive":
        return "#FF0000"; // Red
      case "maintenance":
        return "#00FF00"; // Green
      default:
        return "#0000FF"; // Blue
    }
  };

  if (response.isLoading) return <Loader />;
  if (response.isError) return <Error />;

  return (
    <div className="mapview">
      {firstTimeLogin ? (
        <Joyride
          continuous
          callback={() => {}}
          run={run}
          steps={steps}
          hideCloseButton
          scrollToFirstStep
          showSkipButton
        />
      ) : null}
      <GoogleMap
        center={center}
        zoom={6}
        mapContainerStyle={{ width: "100%", height: "100%" }}
      >
        {/* <PolygonF paths={maharashtraCoords} /> */}
        {userType === "admin" ? (
          <>
            {response?.data.map((item) => {
              return (
                <MarkerF
                  key={item.station_id}
                  position={{
                    lat: parseFloat(item.latitude),
                    lng: parseFloat(item.longitude),
                  }}
                  onClick={() => openPopUp(item.site_id)}
                />
              );
            })}{" "}
          </>
        ) : (
          <>
            {currdata?.data.map((item) => {
              return (
                <MarkerF
                  key={item.station_id}
                  position={{
                    lat: parseFloat(item.latitude),
                    lng: parseFloat(item.longitude),
                  }}
                  onClick={() => openPopUp(item.site_id)}
                />
              );
            })}{" "}
          </>
        )}
      </GoogleMap>
      {isOpen && <SiteStatusData siteId={siteId} setIsOpen={setIsOpen} />}
    </div>
  );
};

export default MapView;
