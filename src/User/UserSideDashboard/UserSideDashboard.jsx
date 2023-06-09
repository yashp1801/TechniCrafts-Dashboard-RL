import { useState, useEffect } from "react";
import "./UserSideDashboard.css";
import UserSideQuickLinks from "./Components/UserSideQuickLinks";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { siteSummaryApi } from "../../Store/Slices/siteSummarySlice";
import UserSideDate from "./Components/UserSideDate";
import SiteSummary from "../../Pages/SiteSummary/SiteSummary";
import Joyride, { STATUS } from "react-joyride";

const UserSideDashboard = () => {
  const [localDate, setLocalDate] = useState("");

  const [firstTimeLogin, setFirstTimeLogin] = useState(false);
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
        content: <h2> Quickly Navigate to your Destination </h2>,
        locale: { skip: <strong>SKIP</strong> },
        placement: "bottom",
        target: "#quickLinks",
      },
      {
        content: <h2> Today's Date 📅 </h2>,
        locale: { skip: <strong>SKIP</strong> },
        placement: "bottom",
        target: "#localDate",
      },
      {
        content: <h2> Take a look at your live Data </h2>,
        locale: { skip: <strong>SKIP</strong> },
        placement: "center",
        target: "body",
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
    const currentDate = new Date();
    setLocalDate(currentDate.toLocaleDateString("en-GB"));
  }, []);

  return (
    <ApiProvider api={siteSummaryApi}>
      <div className="userSide">
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
        <h1 className="userSide__title">Hello {userName}!</h1>
        <div className="userSide__QL__date__wrapper">
          <div className="userSide__quickLink" id="quickLinks">
            <UserSideQuickLinks />
          </div>
          <div className="userSide__day__date__wrapper" id="localDate">
            <UserSideDate />
          </div>
        </div>
        <div className="userSide__siteSummary__wrapper">
          <SiteSummary />
        </div>

        {/* <div className="userSide__slider__WF__wrapper">
          <UserSideHomeAdSlider />
          <UserSideWorkflowWidget />
        </div> */}
  
      </div>
    </ApiProvider>
  );
};

export default UserSideDashboard;
