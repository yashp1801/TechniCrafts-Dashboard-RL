import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "./SiteStatus.css";
import { TbBuildingFactory } from "react-icons/tb";
import { MdOutlineWaterDrop } from "react-icons/md";
import { RiLightbulbFlashLine } from "react-icons/ri";
import Loader from "../../global/Loader/Loader";
import Error from "../../global/Error/Error";

export default function SiteLiveReadings({ res }) {
  const [value, setValue] = React.useState("1");


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  if (res.isLoading) return <Loader />;
  if (res.isError) return <Error />;

  const effluent = res?.data.filter(
    (item) => item.monitoring_type === "effluent"
  );

  const emission = res?.data.filter(
    (item) => item.monitoring_type === "emission"
  );
  const ambient = res?.data.filter(
    (item) => item.monitoring_type === "ambient"
  );

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            variant="scrollable"
            visibleScrollbar="true"
            scrollButtons="auto"
            aria-label="lab API tabs example"
          >
            <Tab label="Effluent" value="1" />
            <Tab label="Emission" value="2" />
            <Tab label="Ambient" value="3" />
          </TabList>
        </Box>
        <TabPanel value="2" style={{ backgroundColor: "#1414141c" }}>
          <div className="realtimereport__livereading">
            {emission?.find((item) => item.monitoring_type === "emission") ? (
              emission?.map((item) => {
                return (
                  <div
                    className="realtimereport__livereading__card"
                    key={item.id}
                  >
                    <TbBuildingFactory className="realtimereport__livereading__card__icon" />
                    <div className="realtimereport__livereading__card__content">
                      <p className="realtimereport__livereading__card__content__parameterName">
                        {item.parameter}
                      </p>
                      <p>{item.station}</p>
                      <p>
                        <span>
                          {item.last_value} {item.unit}
                        </span>
                      </p>
                      <p>
                        Limit : {item.normal_min} - {item.normal_max}{" "}
                        {item.unit}
                      </p>
                      <p>
                        {" "}
                        Range : {item.today_min} - {item.today_max}
                      </p>

                      <p> Last Sync Date : {item?.last_sync?.slice(0, 10)}</p>
                      <p> Last Sync Time : {item?.last_sync?.slice(11, 19)}</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <div>No Data Available</div>
            )}
          </div>
        </TabPanel>
        <TabPanel value="1" style={{ backgroundColor: "#1414141c" }}>
          <div className="realtimereport__livereading">
            {effluent?.find((item) => item.monitoring_type === "effluent") ? (
              effluent?.map((item) => {
                return (
                  <div
                    className="realtimereport__livereading__card"
                    key={item.id}
                  >
                    <MdOutlineWaterDrop className="realtimereport__livereading__card__icon" />
                    <div className="realtimereport__livereading__card__content">
                      <p className="realtimereport__livereading__card__content__parameterName">
                        {item.parameter}
                      </p>
                      <p>{item.station}</p>
                      <p>
                        <span>
                          {item.last_value} {item.unit}
                        </span>
                      </p>
                      <p>
                        Limit : {item.normal_min} - {item.normal_max}{" "}
                        {item.unit}
                      </p>
                      <p>
                        {" "}
                        Range : {item.today_min} - {item.today_max}
                      </p>
                      <p> Last Sync Date : {item.last_sync?.slice(0, 10)}</p>
                      <p> Last Sync Time : {item.last_sync?.slice(11, 19)}</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <div>No Data Available</div>
            )}
          </div>
        </TabPanel>
        <TabPanel value="3" style={{ backgroundColor: "#1414141c" }}>
          {" "}
          <div className="realtimereport__livereading">
            {ambient?.find((item) => item.monitoring_type === "ambient") ? (
              ambient?.map((item) => {
                return (
                  <div
                    className="realtimereport__livereading__card"
                    key={item.id}
                  >
                    <RiLightbulbFlashLine className="realtimereport__livereading__card__icon" />
                    <div className="realtimereport__livereading__card__content">
                      <p>{item.parameter}</p>
                      <p>{item.station}</p>
                      <p>
                        <span>
                          {item.last_value} {item.unit}
                        </span>
                      </p>
                      <p>
                        Limit : {item.normal_min} - {item.normal_max}{" "}
                        {item.unit}
                      </p>
                      <p>
                        {" "}
                        Range : {item.today_min} - {item.today_max}
                      </p>
                      <p> Last Sync Date : {item.last_sync?.slice(0, 10)}</p>
                      <p> Last Sync Time : {item.last_sync?.slice(11, 19)}</p>
                    </div>
                  </div>
                );
              })
            ) : (
              <div>No Data Available</div>
            )}
          </div>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
