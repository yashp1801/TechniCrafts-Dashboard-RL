import React, { useState, useEffect } from "react";
import { Select, DatePicker, Checkbox } from "antd";
import "./CustomReport.css";
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
import Joyride, { STATUS } from "react-joyride";

import FilteredReportGraph from "./FilteredReportGraph";
import FilteredReportTable from "./FilteredReportTable";
import ReportBuildLoader from "../../global/ReportBuilder/ReportBuildLoader";
import MedianReportDataTable from "./MedianReportDataTable";

const { Option } = Select;
const { RangePicker } = DatePicker;

const GenerateReport = () => {
  const [category, setCategory] = useState("");
  const [siteId, setSiteId] = useState("");
  const [station, setStation] = useState("");
  const [parameters, setParameters] = useState([]);
  const [timeInterval, setTimeInterval] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [averageReport, setAverageReport] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isError, setIsError] = useState();
  const [medianReport, setMedianReport] = useState();
  const [dateSelectionError, setDateSelectionError] = useState(false);
  const [firstTimeLogin, setFirstTimeLogin] = useState(false);

  const userType = localStorage.getItem("role");
  const userId = localStorage.getItem("siteId");

  const [{ run, steps }, setState] = useState({
    run: true,
    steps: [
      {
        content: <h2>Lets take a look at how you can Generate Report 📄 </h2>,
        locale: { skip: <strong>SKIP</strong> },
        placement: "center",
        target: "body",
      },
      {
        content: <h2>Select Category</h2>,
        locale: { skip: <strong>SKIP</strong> },
        placement: "bottom",
        target: "#category",
        disabled: userType === "opreator",
      },
      {
        content: <h2> Select Site Name </h2>,
        locale: { skip: <strong>SKIP</strong> },
        placement: "bottom",
        target: "#siteName",
        disabled: userType === "opreator",
      },
      {
        content: <h2> Select Station </h2>,
        locale: { skip: <strong>SKIP</strong> },
        placement: "bottom",
        target: "#stationName",
      },
      {
        content: <h2>Select Parameters</h2>,
        locale: { skip: <strong>SKIP</strong> },
        target: "#parameters",
      },
      {
        content: <h2>Select Time Interval</h2>,
        locale: { skip: <strong>SKIP</strong> },
        target: "#timeInterval",
      },
      {
        content: <h2>Select Valide Start and End Date</h2>,
        locale: { skip: <strong>SKIP</strong> },
        target: "#dateRange",
      },
      {
        content: (
          <h2>Check this box if you want report in graph format also</h2>
        ),
        locale: { skip: <strong>SKIP</strong> },
        target: "#graphCheckbox",
      },
      {
        content: <h2>Finally Click to Get Report!🎉</h2>,
        locale: { skip: <strong>SKIP</strong> },
        target: "#getReportBtn",
      },
    ],
  });

  const categoryData = useCategoryDataQuery();
  const siteNameData = useSiteNameQuery();
  const selectedSiteData = useGetSelectedSiteDataQuery(siteId);

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

  useEffect(() => {
    const isFirstTimeLogin = !localStorage.getItem("loggedInBefore");

    if (isFirstTimeLogin) {
      localStorage.setItem("loggedInBefore", true);
      setFirstTimeLogin(true);
    }
  }, []);

  const fetchData = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + "bdRqZw97UrvVWe1eeUgfebeGlaWzVF",
    };
    setIsLoading(true);
    try {
      const url1 = `http://192.168.1.103:6060/data/average?from=${startDate}&to=${endDate}&site_id=${siteId}&station=${station}&interval=${timeInterval}${parameters
        .map((item) => `&parameters=${item}`)
        .join("")}`; // For Average Report

      const url2 = `http://192.168.1.103:6060/data/statistics?from=${startDate}&to=${endDate}&site_id=${siteId}&station=${station}&interval=${timeInterval}&${parameters
        .map((item) => `&parameters=${item}`)
        .join("")}`; // For Median Report

      const request1 = axios.get(url1, { headers });
      const request2 = axios.get(url2, { headers });

      const [response1, response2] = await Promise.all([request1, request2]);

      setAverageReport(response1.data);
      setMedianReport(response2.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("This is error", error);
    }
  };

  // Validating Input Fields
  const handleButtonClick = () => {
    if (
      category &&
      siteId &&
      station &&
      parameters.length > 0 &&
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

  const filteredSiteName = siteNameData?.data?.filter(
    (item) => item.category === category
  );

  const filteredStationName = selectedSiteData?.data?.map((item) => {
    return item.stations.filter((name) => name.station === station);
  });

  const onDateChange = (dates, dateStrings) => {
    const currentDate = new Date();
    const selectedEndDate = new Date(dateStrings[1]);
    if (selectedEndDate > currentDate) {
      setDateSelectionError(true);
    } else {
      setStartDate(dateStrings[0]);
      setEndDate(dateStrings[1]);
      setDateSelectionError(false);
    }
  };

  if (categoryData.isLoading) return <Loader />;
  if (siteNameData.isLoading) return <Loader />;
  if (selectedSiteData.isLoading) return <Loader />;
  if (isLoading) return <ReportBuildLoader />;

  return (
    <div className="generatereport">
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
      <h1>Generate Report</h1>
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
            Please fill in all the input fields properly before generating the
            report.
          </div>
        ) : null}
      </div>
      <div className="generatereport__filter__wrapper">
        {userType === "operator" ? null : (
          <div className="generatereport__filter" id="category">
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
          <div className="generatereport__filter" id="siteName">
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
        <div className="generatereport__filter" id="stationName">
          <span>Select Station Name</span>
          <Select
            className="generatereport__filter__dropdown"
            size="large"
            placeholder="Select Station"
            value={station}
            onChange={(value) => setStation(value)}
            disabled={!siteId}
          >
            {selectedSiteData?.data?.map((item) => {
              return item.stations.map((name) => {
                return <Option value={name.station}>{name.station}</Option>;
              });
            })}
          </Select>
        </div>
        <div className="generatereport__filter" id="parameters">
          <span>Select Parameters</span>
          <Select
            mode="multiple"
            className="generatereport__filter__dropdown"
            size="large"
            value={parameters}
            onChange={(value) => setParameters(value)}
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
        <div className="generatereport__filter" id="timeInterval">
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
        <div className="generatereport__filter" id="dateRange">
          {dateSelectionError ? (
            <span style={{ color: "red" }}>Please Select Valid Date</span>
          ) : (
            <span>Select Start and End Date</span>
          )}
          <RangePicker
            aria-required
            className="generatereport__filter__dropdown"
            size="large"
            onChange={onDateChange}
          />
        </div>
        <div className="generatereport__filter" id="graphCheckbox">
          <Checkbox
            className="generatereport__filter__checkbox"
            onClick={() => setIsChecked(true)}
          >
            Get Graph View
          </Checkbox>
        </div>
        <div className="generatereport__filter" id="getReportBtn">
          <button
            className="generatereport__filter__getReport__btn"
            onClick={handleButtonClick}
          >
            Get Report
          </button>
        </div>
      </div>
      {isOpen && averageReport && (
        <div className="filteredreport__popup">
          <div className="filteredreport__popup__header">
            <div className="filteredreport__popup__header__content__wrapper">
              <AiOutlineFileDone className="filteredreport__popup__header__content__icon" />
              <div className="filteredreport__popup__header__content">
                <h1>Your Report is Ready!</h1>
                <p>
                  Export your data effortlessly in PDF and Excel formats for
                  seamless sharing and analysis.
                </p>
                <p>
                  (Please scroll down to view the report presented in a
                  graphical format.)
                </p>
              </div>
            </div>
            <button
              className="filteredreport__popup__header__btn"
              onClick={() => setIsOpen(false)}
            >
              <MdKeyboardArrowLeft className="filteredreport__popup__header__btn__icon" />{" "}
              Back to Report Generation
            </button>
          </div>
          <FilteredReportTable averageReport={averageReport} />
          <MedianReportDataTable medianReport={medianReport} />
          {isChecked && <FilteredReportGraph averageReport={averageReport} />}
        </div>
      )}
    </div>
  );
};

export default GenerateReport;
