import { useState } from "react";
import { Select, Space, DatePicker, TimePicker } from "antd";
import "./WorkFlow.css";
import { HiOutlineUpload } from "react-icons/hi";
import { BsArrowLeftShort } from "react-icons/bs";

const WorkFlowPopup = ({ setHandlePopup, setOpen }) => {
  const [siteName, setSiteName] = useState();
  const [workCategory, setWorkCategory] = useState();
  const [assignedTo, setAssignedTo] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const { RangePicker } = DatePicker;

  const onDateChange = (dates, dateStrings) => {
    setStartDate(dateStrings[0]);
    setEndDate(dateStrings[1]);
  };

  return (
    <div className="workflowpopup">
      <div className="workflow__header">
        <h1>Add New Workflow</h1>
        <button
          onClick={() => {
            setHandlePopup(false);
          }}
        >
          <BsArrowLeftShort className="workflow__header__btn__icon" /> back
        </button>
      </div>
      <div className="workflow__popup__content">
        <Select
          defaultValue="Site Name"
          style={{
            width: "100%",
            fontSize: "2rem",
          }}
          value={siteName}
          size="large"
          className="dropdown"
          onChange={(value) => setSiteName(value)}
          options={[
            {
              value: "jack",
              label: "Jack",
            },
            {
              value: "lucy",
              label: "Lucy",
            },
            {
              value: "Yiminghe",
              label: "yiminghe",
            },
          ]}
        />
        <Select
          defaultValue="Select Work category"
          style={{
            width: "100%",
            fontSize: "2rem",
          }}
          value={workCategory}
          size="large"
          className="dropdown"
          onChange={(value) => setWorkCategory(value)}
          options={[
            {
              value: "In Progress",
              label: "In Progress",
            },
            {
              value: "Incomplete",
              label: "Incomplete",
            },
            {
              value: "Completed ",
              label: "Completed",
            },
          ]}
        />
        <Select
          defaultValue="Assigned To"
          style={{
            width: "100%",
            fontSize: "2rem",
          }}
          value={workCategory}
          size="large"
          className="dropdown"
          onChange={(value) => setAssignedTo(value)}
          options={[
            {
              value: "In Progress",
              label: "In Progress",
            },
            {
              value: "Incomplete",
              label: "Incomplete",
            },
            {
              value: "Completed ",
              label: "Completed",
            },
          ]}
        />

        <RangePicker
          className="generatereport__datePicker"
          onChange={onDateChange}
          size="large"
        />
        <TimePicker.RangePicker size="large" />

        <Select
          defaultValue="Estimated Work Duration"
          style={{
            width: "100%",
            fontSize: "2rem",
          }}
          // value={workCategory}
          size="large"
          className="dropdown"
          // onChange={(value) => setAssignedTo(value)}
          options={[
            {
              value: "In Progress",
              label: "In Progress",
            },
            {
              value: "Incomplete",
              label: "Incomplete",
            },
            {
              value: "Completed ",
              label: "Completed",
            },
          ]}
        />
      </div>
      <textarea type="text" placeholder="Enter work discription" />
      <button
        className="workflow__popup__submitBtn"
        onClick={() => {
          setHandlePopup(false);
          setOpen(true);
        }}
      >
        Add Workflow{" "}
        <HiOutlineUpload className="workflow__popup__submitBtn__icon" />
      </button>
    </div>
  );
};

export default WorkFlowPopup;
