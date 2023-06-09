import { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "./SiteStatus.css";
import { useGetCurrentSiteDataQuery } from "../../Store/Slices/siteSummarySlice";
import Loader from "../../global/Loader/Loader";
import SiteStatusDataTable from "../../Components/SiteStatusDataTable";
import Error from "../../global/Error/Error";
import SiteStatusRealTimeReport from "./SiteStatusRealTimeReport";
import { MdArrowBack } from "react-icons/md";
import Joyride, { STATUS } from "react-joyride";

export default function SiteStatusData({ siteId, setIsOpen }) {
  const res = useGetCurrentSiteDataQuery(siteId);
  const [value, setValue] = useState("1");
  const [{ run, steps }, setState] = useState({
    run: true,
    steps: [
      {
        content: (
          <h3>
            You can Navigate between record view which will be in table format
            and Realtime Report by clicking on repective Tab Names{" "}
          </h3>
        ),
        locale: { skip: <strong>SKIP</strong> },
        placement: "center",
        target: "#realtimeReport",
      },
      {
        content: (
          <h3>
            For More than One Site Station type , you can Navigate between
            Emission , Effluent , Ambient Tabs to view your data
          </h3>
        ),
        locale: { skip: <strong>SKIP</strong> },
        placement: "center",
        target: "body",
      },
    ],
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (res.isLoading) return <Loader />;
  if (res.isError) return <Error />;

  return (
    <div className="sitestatusdata">
      <Joyride
        continuous
        callback={() => {}}  
        run={run}
        steps={steps}
        hideCloseButton
        scrollToFirstStep
        showSkipButton
        styles={{
          options: {
            // Customize the width here
            width: '500px',
          },
        }}
          
      />
      {res?.data.map((item) => {
        return (
          <div className="sitestatusdata__header__content">
            <div className="sitestatusdata__header">
              <h1>{item.name}</h1>
              <div>
                <p>
                  {item.city} , {item.state}
                </p>
                <p>{item.category}</p>
              </div>
            </div>
            <button
              className="sitestatusdata__header__content__btn"
              onClick={() => setIsOpen(false)}
            >
              <MdArrowBack className="sitestatusdata__header__content__btn__icon" />
              Back
            </button>
          </div>
        );
      })}
      <div className="sitestatusdata__container">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Real Time Report" value="1" />
                <Tab label="Record view" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <SiteStatusRealTimeReport siteId={siteId} />
            </TabPanel>
            <TabPanel value="2">
              <SiteStatusDataTable siteId={siteId} />
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  );
}
