import { useState, useEffect } from "react";
import "./overallsummary.css";
import SiteStatusPie from "./Components/SiteStatusPie";
import BarChartComponent from "./Components/BarChartComponent";
import BasicTable from "./Components/SiteDataGrid";
import Loader from "../../global/Loader/Loader";
import Error from "../../global/Error/Error";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import { useGetSiteStatusQuery } from "../../Store/Slices/overallSummarySlice";
import { SlLocationPin } from "react-icons/sl";
import { BiStation } from "react-icons/bi";
import { IoNavigate } from "react-icons/io5";
import { VscGraphLine } from "react-icons/vsc";
import Joyride, { STATUS } from "react-joyride";

const OverallSummary = () => {
  const responseInfo = useGetSiteStatusQuery(); // Overall site status
  const [firstTimeLogin, setFirstTimeLogin] = useState(true);
  const [{ run, steps }, setState] = useState({
    run: true,
    steps: [
      {
        content: <h2>Welcome Aboard! 🎉 </h2>,
        locale: { skip: <strong>SKIP</strong> },
        placement: "center",
        target: "body",
      },
      {
        content: (
          <h2>This is your first Time, We will guide you through out!</h2>
        ),
        locale: { skip: <strong>SKIP</strong> },
        placement: "center",
        target: "body",
      },
      {
        content: (
          <h2>
            In case of any Issue please fell free to Contact us through
            Envicrafts Chatbox , We will be Happy to help You!😊{" "}
          </h2>
        ),
        locale: { skip: <strong>SKIP</strong> },
        placement: "center",
        target: "body",
      },
      {
        content: <h2> Lets Get Started! </h2>,
        locale: { skip: <strong>SKIP</strong> },
        placement: "center",
        target: "body",
      },
      {
        content: <h2> Get Quick Activity Status About Sites </h2>,
        locale: { skip: <strong>SKIP</strong> },
        placement: "bottom",
        target: "#headerCards",
      },
      {
        content: <h2> Quick Navigate to your Destination 🧭 </h2>,
        locale: { skip: <strong>SKIP</strong> },
        placement: "bottom",
        target: "#quickNavigate",
      },
      {
        content: <h2> Last Week Site Status </h2>,
        locale: { skip: <strong>SKIP</strong> },
        placement: "bottom",
        target: "#lastWeekSiteStatus",
      },
      {
        content: <h2> Sites with their live Exceedance count </h2>,
        locale: { skip: <strong>SKIP</strong> },
        target: "#exceedanceTable",
      },
      {
        content: <h2> Pie Charts , Hover over the chart for more info </h2>,
        locale: { skip: <strong>SKIP</strong> },
        placement: "left",
        target: "#siteStatusPie",
      },
    ],
  });

  const userName = localStorage.getItem("username");

  useEffect(() => {
    const isFirstTimeLogin = !localStorage.getItem("loggedInBefore");
    if (isFirstTimeLogin) {
      localStorage.setItem("loggedInBefore", true);
      setFirstTimeLogin(true);
    }
  }, []);

  // Condition Loader Loading
  if (responseInfo.isLoading) return <Loader />;
  if (responseInfo.isError) return <Error />;
  return (
    <div className="overallsummary">
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
      <h1 className="overallsummary__title">
        Overall Analytics{" "}
        <VscGraphLine className="overallsummary__title__icon" />{" "}
      </h1>
      <div className="dashboard__container">
        {/* Card and BarDiagram Container */}
        <div className="overallsummary__leftside__wrapper">
          {/* <button onClick={getData}>Get data</button> */}
          <div
            className="overallsummary__bardiagram__infocard"
            id="headerCards"
          >
            <div className="overallsummary__header__card">
              <div className="card__content">
                <div className="card__content__main">
                  <p>Total sites</p>
                  <h1>
                    {responseInfo?.data.totalSiteStatus.active +
                      responseInfo?.data.totalSiteStatus.inactive +
                      responseInfo?.data.totalSiteStatus.delayed}
                  </h1>
                </div>
                <div className="card__iconwrapper">
                  <SlLocationPin className="card__icon" />
                </div>
              </div>
              <div className="card__content__h5" id="test">
                <h5>Active : {responseInfo?.data.totalSiteStatus.active}</h5>
                <h5>
                  inactive : {responseInfo?.data.totalSiteStatus.inactive}
                </h5>
                <h5>delayed : {responseInfo?.data.totalSiteStatus.delayed} </h5>
              </div>
            </div>
            <div className="overallsummary__header__card">
              <div className="card__content">
                <div className="card__content__main">
                  <p>Total Stations</p>
                  <h1>
                    {responseInfo?.data.totalStation.effluent +
                      responseInfo?.data.totalStation.emission}
                  </h1>
                </div>
                <div className="card__iconwrapper">
                  <BiStation className="card__icon" />
                </div>
              </div>
              <div className="card__content__h5">
                <h5>Effluent : {responseInfo?.data.totalStation.effluent}</h5>
                <h5>Emission : {responseInfo?.data.totalStation.emission}</h5>
              </div>
            </div>
            <div className="overallsummary__header__card">
              <div className="card__content">
                <div className="card__content__main">
                  <p>Total parameters</p>
                  <h1>{responseInfo?.data.totalParameter.data}</h1>
                </div>
                <div className="card__iconwrapper">
                  <BiStation className="card__icon" />
                </div>
              </div>
            </div>
            <div className="overallsummary__header__card" id="quickNavigate">
              <div className="card__content">
                <div className="card__content__main">
                  <p>Quick Navigate </p>
                </div>
                <div className="card__iconwrapper">
                  <IoNavigate className="card__icon" />
                </div>
              </div>
              <Link
                to="/admin/sitesummary"
                className="card__content__main__link"
              >
                Site Summary
                <BsArrowRightShort className="card__content__main__link__icon" />
              </Link>
              <Link
                to="/admin/sitestatus"
                className="card__content__main__link"
              >
                Site Status
                <BsArrowRightShort className="card__content__main__link__icon" />
              </Link>
              <Link
                to="/admin/customreport"
                className="card__content__main__link"
              >
                Custom Report
                <BsArrowRightShort className="card__content__main__link__icon" />
              </Link>
            </div>
          </div>
          {/* bar chart Component */}
          <div className="overall__summary__barchart" id="lastWeekSiteStatus">
            <p className="barchart__header">Last Week Site Status</p>
            <BarChartComponent />
          </div>
          {/* Site Data table */}
          <div className="overall__summary__datatable" id="exceedanceTable">
            <BasicTable />
          </div>
        </div>
        <div className="overallsummary__rightside__wrapper" id="siteStatusPie">
          <SiteStatusPie />
        </div>
      </div>
    </div>
  );
};

export default OverallSummary;
