import React, { useState } from "react";
import "./ExceedanceReport.css";
import { DatePicker } from "antd";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const ExceedanceReport = () => {
  const { RangePicker } = DatePicker;
  const [selectedSite, setSelectedSite] = useState("");
  const [selectedDate, setSelectedDate] = useState();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedStation, setSelectedStation] = useState("");
  const [selectedParameter, setSeletedParameter] = useState("");

  return (
    <div className="exceedancereport">
      <div className="exceedancereport__container">
        <h1>Exceedance Report</h1>
        <div className="exceedancereport__filter__wrapper">
          <p>Categorize Report</p>
          <div className="exceedancereport__filter">
            {/* Date Picker */}
            <RangePicker
              className="generatereport__datePicker"
              onChange={(date, dateString) => setSelectedDate(dateString)}
            />
            {/* Dropdown */}
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Select Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                }}
                label="Selected Category"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="ten">Ten</MenuItem>
                <MenuItem value="twenty">Twenty</MenuItem>
                <MenuItem value="thirty">Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Select Site
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={selectedSite}
                onChange={(e) => {
                    setSelectedSite(e.target.value);
                  }}
                label="Selected Site"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Select Station
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={selectedStation}
                onChange={(e) => {
                    setSelectedStation(e.target.value);
                  }}
                label="Selected Station"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Select Parameter
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={selectedParameter}
                onChange={(e) => {
                    setSeletedParameter(e.target.value);
                  }}
                label="Selected Parameter"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <button className="exceedancereport__filter__btn">Get Report</button>
        </div>
      </div>
    </div>
  );
};

export default ExceedanceReport;
