import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useGetSiteSummaryDataQuery } from "../../Store/Slices/siteSummarySlice";
import Loader from "../../global/Loader/Loader";
import SiteSummaryDataMain from "./SiteSummaryDataMain";
import Error from "../../global/Error/Error";

const SiteSummaryMain = () => {
  const [siteId, setSiteId] = useState("");
  const res = useGetSiteSummaryDataQuery();

  const userType = localStorage.getItem("role");
  if (userType === "operator") {
    const siteId = localStorage.getItem("siteId");
    return <SiteSummaryDataMain siteId={siteId} />;
  }
  
  if (res.isLoading) return <Loader />;
  if (res.isError) return <Error />;
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Site Name</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={siteId}
          label="Select Site Name"
          onChange={(e) => setSiteId(e.target.value)}
          className="sitesummarymain__dropdown"
        >
          {res.data.map((item, id) => {
            return (
              <MenuItem key={id} value={item.site_id}>
                {item.name}
              </MenuItem>
            );
          })}
        </Select>

        {siteId ? (
          <SiteSummaryDataMain siteId={siteId} />
        ) : (
          <p className="sitesummary__dropdown__helper">
            (Please select site name to get started)
          </p>
        )}
      </FormControl>
    </div>
  );
};

export default SiteSummaryMain;
