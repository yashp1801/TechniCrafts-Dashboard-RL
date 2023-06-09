import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useGetNotificationsDataQuery } from "../../Store/Slices/notificationSlice";
import "./Notifications.css";
import Loader from "../../global/Loader/Loader";

export default function Notifications() {
  const [value, setValue] = React.useState("1");
  const res = useGetNotificationsDataQuery();
  console.log(res);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (res.isLoading) return <Loader />;

  return (
    <div className="notifications">
      <div className="notifications__container">
        <h1>Notifications</h1>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                className="notifications__tablist"
              >
                <Tab label="Email" value="1" className="notifications__tab" />
                <Tab label="SMS" value="2" className="notifications__tab" />
              </TabList>
            </Box>
            <TabPanel value="1" className="notifications__tabpanel">
              {res?.data.map((item) => {
                return (
                  <div className="notifications__email__card">
                    <span className="card__email">teamTC@technicrafts.com</span>
                    <p>{item.verb}</p>
                    <p>{item.description}</p>
                    <p style={{ color: "#8b8888" }}>23 Dec, 2022 at 12:43</p>
                  </div>
                );
              })}
            </TabPanel>
            <TabPanel value="2" className="notifications__tabpanel">
              No SMS
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </div>
  );
}
