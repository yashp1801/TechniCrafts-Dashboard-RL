import React from "react";
import { CiCalendarDate } from "react-icons/ci";

const UserSideDate = () => {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
  const year = currentDate.getFullYear();

  const formattedDateDisplay = `${day < 10 ? "0" : ""}${day}.${
    month < 10 ? "0" : ""
  }${month}.${year}`;

  const options = { weekday: "long" };
  const formattedDay = currentDate.toLocaleDateString(undefined, options);

  return (
    <>
      <CiCalendarDate className="userSide__day__date__icon" />
      <p className="userSide__date">{formattedDateDisplay}</p>
      <p className="userSide__day">{formattedDay}</p>
    </>
  );
};

export default UserSideDate;
