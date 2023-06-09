import React, { useState, useEffect } from "react";
import "../UserSideDashboard.css";
import { GoPrimitiveDot } from "react-icons/go";

const UserWeeklyTracker = () => {
  const [loggedInStatus, setLoggedInStatus] = useState({
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false,
  });

  useEffect(() => {
    // Check if the "login" item exists in local storage
    const loginStatus = localStorage.getItem("login");

    if (loginStatus) {
      const parsedStatus = JSON.parse(loginStatus);

      // Update the logged-in status from local storage
      setLoggedInStatus(parsedStatus);
    }
  }, []);

  useEffect(() => {
    // Update the "login" item in local storage whenever the logged-in status changes
    localStorage.setItem("login", JSON.stringify(loggedInStatus));
  }, [loggedInStatus]);

  return (
    <div className="userweeklystatus">
      <h2>Weekly Activity Tracker</h2>
      <p>Track Your Weekly Activity Status</p>
      <ul className="userweeklystatus__list__wrapper">
        {Object.entries(loggedInStatus).map(([day, active]) => (
          <li key={day} className="userweeklystatus__list__item">
            {day}{" "}
            <span
              className={
                active
                  ? "userweeklystatus__list__item__status active"
                  : "userweeklystatus__list__item__status"
              }
            >
              <GoPrimitiveDot />
              {active ? "Active" : "Inactive"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserWeeklyTracker;
