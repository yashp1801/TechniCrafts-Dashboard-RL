import React, { useState, useEffect } from "react";
import { Select, DatePicker, Checkbox, Input } from "antd";
import Loader from "../../global/Loader/Loader";
import { GoNote } from "react-icons/go";
import axios from "axios";
import { AiOutlineFileDone } from "react-icons/ai";
import { MdKeyboardArrowLeft, MdOutlineErrorOutline } from "react-icons/md";
import {
  useCategoryDataQuery,
  useSiteNameQuery,
  useGetSelectedSiteDataQuery,
} from "../../Store/Slices/generateReportSlice";
import "../CustomReports/CustomReport.css";
import ReportBuildLoader from "../../global/ReportBuilder/ReportBuildLoader";

const PercentileReport = () => {
  const { Option } = Select;
  const { RangePicker } = DatePicker;

  const [category, setCategory] = useState("");
  const [siteId, setSiteId] = useState("");
  const [station, setStation] = useState("");
  const [parameter, setParameter] = useState([]);
  const [timeInterval, setTimeInterval] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [percentileReport, setPercentileReport] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isError, setIsError] = useState();

  const categoryData = useCategoryDataQuery();
  const siteNameData = useSiteNameQuery();
  const selectedSiteData = useGetSelectedSiteDataQuery(siteId);

  const userType = localStorage.getItem("role");
  const userId = localStorage.getItem("siteId");

  useEffect(() => {
    if (userType) {
      // Set default category and site based on userType
      if (userType === "admin") {
        setCategory(""); // Enable category selection for admin
        setSiteId(""); // Enable site selection for admin
      } else {
        setCategory("text");
        setSiteId(userId); // Replace 'userSiteId' with the actual site ID value for users
      }
    }
  }, [userType]);

  const fetchData = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + "bdRqZw97UrvVWe1eeUgfebeGlaWzVF",
    };
    setIsLoading(true);
    try {
      const url = `http://192.168.1.30:6060/data/percentile?from=${startDate}&to=${endDate}&site_id=${siteId}&station=${station}&interval=${timeInterval}&parameters=${parameter}&&value=77`;
      // This is realtime and time
      const response = await axios.get(url, { headers });
      setPercentileReport(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };
  const handleButtonClick = () => {
    if (
      category &&
      siteId &&
      station &&
      parameter &&
      timeInterval &&
      startDate &&
      endDate
    ) {
      fetchData();
      setIsOpen(true);
    } else {
      // Display an error message or handle the incomplete form submission as desired
      setIsError(true);
    }
  };

  if (categoryData.isLoading) return <Loader />;
  if (siteNameData.isLoading) return <Loader />;
  if (selectedSiteData.isLoading) return <Loader />;

  console.log(percentileReport);

  const filteredSiteName = siteNameData.data.filter(
    (item) => item.category === category
  );

  const filteredStationName = selectedSiteData.data.map((item) => {
    return item.stations.filter((name) => name.station === station);
  });

  const onDateChange = (dates, dateStrings) => {
    setStartDate(dateStrings[0]);
    setEndDate(dateStrings[1]);
  };

  if (isLoading) return <ReportBuildLoader />;

  return (
    <div className="generatereport">
      <h1>Percentile Report</h1>
      <div className="generatereport__userNote">
        <GoNote className="generatereport__userNote__icon" />
        <p>
          Please select appropriate values in the dropdown menus below. If you
          would like to view the report graphically, please check the "get Graph
          view" checkbox. Please note that we cannot provide data reports for
          periods more than six months in the past. If you require data from
          further back than six months, please contact TechniCrafts for
          assistance.
        </p>
        {isError ? (
          <div className="generatereport__filter__errorMsg">
            <MdOutlineErrorOutline className="generatereport__filter__errorMsg__icon" />
            Please fill in all the input fields before generating the report.
          </div>
        ) : null}
      </div>

      <div className="generatereport__filter__wrapper">
        {userType === "operator" ? null : (
          <div className="generatereport__filter">
            <span>Select Site Category</span>
            <Select
              className="generatereport__filter__dropdown"
              placeholder="Select Category"
              size="large"
              value={category}
              onChange={(value) => setCategory(value)}
            >
              {categoryData.data.map((item) => {
                return (
                  <Option key={item.id} value={item.category}>
                    {" "}
                    {item.category}{" "}
                  </Option>
                );
              })}
            </Select>
          </div>
        )}
        {userType === "operator" ? null : (
          <div className="generatereport__filter">
            <span>Select Site Name</span>
            <Select
              className="generatereport__filter__dropdown"
              size="large"
              placeholder="Select Site Name"
              value={siteId}
              onChange={(value) => setSiteId(value)}
            >
              {filteredSiteName.map((item) => {
                return (
                  <Option key={item.site_id} value={item.site_id}>
                    {item.name}
                  </Option>
                );
              })}
            </Select>
          </div>
        )}
        <div className="generatereport__filter">
          <span>Select Station Name</span>
          <Select
            className="generatereport__filter__dropdown"
            size="large"
            placeholder="Select Station"
            value={station}
            onChange={(value) => setStation(value)}
            disabled={!siteId}
          >
            {selectedSiteData.data.map((item) => {
              return item.stations.map((name) => {
                return <Option value={name.station}>{name.station}</Option>;
              });
            })}
          </Select>
        </div>
        <div className="generatereport__filter">
          <span>Select Parameter</span>
          <Select
            className="generatereport__filter__dropdown"
            size="large"
            placeholder="Select Parameter"
            value={parameter}
            onChange={(value) => setParameter(value)}
            disabled={!siteId}
          >
            {filteredStationName[0]?.map((item) => {
              return item.parameters?.map((names, id) => {
                return (
                  <Option key={id} value={names}>
                    {names}
                  </Option>
                );
              });
            })}
          </Select>
        </div>

        <div className="generatereport__filter">
          <span>Select Time Interval</span>

          <Select
            className="generatereport__filter__dropdown"
            size="large"
            value={timeInterval}
            onChange={(value) => setTimeInterval(value)}
          >
            <Option value={1}>1 Minute</Option>
            <Option value={5}>5 Minutes</Option>
            <Option value={15}>15 Minutes</Option>
            <Option value={30}>30 Minutes</Option>
            <Option value={60}>1 hour</Option>
          </Select>
        </div>
        <div className="generatereport__filter">
          <span>Enter Value</span>
          <Input
            placeholder="Value"
            size="large"
            className="generatereport__filter__dropdown"
            type="number"
          />
        </div>
        <div className="generatereport__filter">
          <span>Select Start and End Date</span>
          <RangePicker
            aria-required
            className="generatereport__filter__dropdown"
            size="large"
            onChange={onDateChange}
          />
        </div>
        <div className="generatereport__filter">
          <span>Click to Get Report</span>
          <button
            className="generatereport__filter__getReport__btn"
            onClick={handleButtonClick}
          >
            Get Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default PercentileReport;
