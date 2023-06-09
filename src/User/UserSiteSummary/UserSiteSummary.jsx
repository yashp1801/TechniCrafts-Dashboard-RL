import React from "react";
import "./UserSiteSummary.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { TbBuildingFactory2 } from "react-icons/tb";
import {
  BiCurrentLocation,
  BiCategory,
  BiStation,
  BiTimeFive,
} from "react-icons/bi";
import UserSiteSummaryGraph from "./UserSiteSummaryGraph";

const UserSiteSummary = () => {
  return (
    <div className="usersitesummary">
      <h1>BASF India PVT LTD</h1>
      <div className="usersitesummary__wrapper">
        <div className="usersitesummary__leftside">
          <div className="usersitedata__header">
            <div className="usersitedata__header__card first">
              <p>BOD</p>
              <h1>39.01</h1>
              <span>mg/l</span>
              <span>Standard : 100 mg/l</span>
              <span>(15 minutes Average)</span>
            </div>

            <div className="usersitedata__header__card__wrapper">
              <div className="usersitedata__header__card__midpart">
                <div className="usersitedata__header__midpart__card">
                  <p>Total Exceedances</p>
                  <h1>0</h1>
                </div>
                <div className="usersitedata__header__midpart__card">
                  <p>Data Avaibility (%)</p>
                  <h1>95.83</h1>
                </div>
              </div>
              <div className="usersitedata__header__midpart__quickrange">
                <p>Quick Range</p>
                <ButtonGroup
                  variant="contained"
                  aria-label="outlined primary button group"
                >
                  <Button>One Day</Button>
                  <Button>Three Days</Button>
                  <Button>One Week</Button>
                </ButtonGroup>
              </div>
            </div>
            <div className="usersitedata__header__card second">
              <p>
                <TbBuildingFactory2 className="usersitedata__header__card__icon" />{" "}
                ETP
              </p>
              <p>
                <BiCurrentLocation className="usersitedata__header__card__icon" />{" "}
                Navi Mumbai , Maharashtra
              </p>
              <p>
                <BiCategory className="usersitedata__header__card__icon" />{" "}
                Chemical
              </p>
              <p>
                <BiTimeFive className="usersitedata__header__card__icon" />{" "}
                27-FEB-2023 12:09
              </p>
              <p>
                <BiStation className="usersitedata__header__card__icon" />{" "}
                Monitoring Stations : 1
              </p>
            </div>
          </div>
          <div className="usersitesummary__graph">
            <UserSiteSummaryGraph />
          </div>
        </div>
        <div className="usersitesummary__rightside">
          <input type="text" placeholder="Search by Parameter" />
          <div className="usersitesummary__rightside__card">
            <p>ETP BOD</p>
            <span>14.67 mg/l</span>
            <p>Standard - 1000 mg/l</p>
          </div>
          <div className="usersitesummary__rightside__card">
            <p>ETP TSS</p>
            <span>12.67 mg/l</span>
            <p>Standard - 1000 mg/l</p>
          </div>
          <div className="usersitesummary__rightside__card">
            <p>ETP COD</p>
            <span>19.90 mg/l</span>
            <p>Standard - 1000 mg/l</p>
          </div>
          <div className="usersitesummary__rightside__card">
            <p>ETP pH</p>
            <span>6.67.55 pH</span>
            <p>Standard - 14 pH</p>
          </div>
          <div className="usersitesummary__rightside__card">
            <p>ETP Flow</p>
            <span>14.67 m3/hr</span>
            <p>Standard - 1000 m3/hr</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSiteSummary;
