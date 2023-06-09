import { useState } from "react";
import "./MapViewPopUp.css";
import { Link } from "react-router-dom";
import { CgCloseO } from "react-icons/cg";
import { HiLocationMarker } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import SiteStatusDataTable from "../../Components/SiteStatusDataTable";
import SiteStatusData from "../SiteStatus/SiteStatusData";
import { useGetCurrentSiteDataQuery } from "../../Store/Slices/siteSummarySlice";
import Loader from "../../global/Loader/Loader";
import Error from "../../global/Error/Error";

export default function MapViewPopUp({ siteId, setIsOpen }) {
  const currentSiteData = useGetCurrentSiteDataQuery(siteId);
  const [siteStatusIsOpen, setSiteStatusIsOpen] = useState(false);

  const closePopup = () => {
    setIsOpen(false);
  };

  // This is the loader if data is not recived
  if (currentSiteData.isLoading) return <Loader />;
  if (currentSiteData.isError) return <Error />;

  return (
    <div className="mapviewpopup">
      <AnimatePresence>
        <motion.div
          className="mapviewpopup__content__wrapper"
          initial={{ y: "-50%" }}
          animate={{ y: "0%" }}
          exit={{ y: "50%" }}
        >
          <button>
            {" "}
            <CgCloseO onClick={closePopup} className="mapviewpopup__closebtn" />
          </button>
          <div className="mapviewpopup__content__header">
            {currentSiteData?.data.map((item) => {
              return (
                <div key={item.station_id}>
                  <h1> {item.name} </h1>
                  <div className="mapviewpopup__content__header__location">
                    <HiLocationMarker />
                    <span>
                      {item.city}, {item.state}
                    </span>
                  </div>
                </div>
              );
            })}
            <button onClick={() => setSiteStatusIsOpen(true)}>
              View Details
            </button>
          </div>
          <div className="mapviewpopup__data__wrapper">
            <SiteStatusDataTable siteId={siteId} />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
