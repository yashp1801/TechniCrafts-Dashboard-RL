import React, { useState } from "react";
import "./WorkFlow.css";
import { Select, Space, DatePicker, TimePicker } from "antd";
import { HiPlusSm } from "react-icons/hi";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import WorkFlowPopup from "./WorkFlowPopup";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const WorkFlow = () => {
  const [siteName, setSiteName] = useState();
  const [workCategory, setWorkCategory] = useState();
  const [assignedTo, setAssignedTo] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [handlePopup, setHandlePopup] = useState(false);
  const [open, setOpen] = useState(false);

  const { RangePicker } = DatePicker;

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const columns = [
    { field: "id", headerName: "Sr.No", width: 10 },
    { field: "action", headerName: "Action", width: 70 },
    {
      field: "industryName",
      headerName: "Industry Name",
      // Class Name for Header
      width: 300,
    },
    {
      field: "city",
      headerName: "City",
      width: 110,
      editable: true,
    },
    {
      field: "district",
      headerName: "District",
      width: 110,
    },
    {
      field: "industryCategory",
      headerName: "Industry Category",
      sortable: false,
      width: 160,
    },
    {
      field: "monitoringCategory",
      headerName: "Monitory Category",
      sortable: false,
      width: 160,
    },
    {
      field: "parameter",
      headerName: "Parameter",
      sortable: false,
      width: 160,
    },
    {
      field: "camerastatus",
      headerName: "Camera Status",
      sortable: true,
      width: 160,
    },
  ];

  const rows = [
    {
      id: 1,

      city: "City",
      industryName: "name 1",
      district: "district",
      industryCategory: "Industry Category",
      monitoringCategory: "Monitory Category",
      parameter: "Parameter",
      camerastatus: "Camera Status",
    },
    {
      id: 2,
      city: "City",
      industryName: "name 1",
      district: "district",
      industryCategory: "Industry Category",
      monitoringCategory: "Monitory Category",
      parameter: "Parameter",
      camerastatus: "Camera Status",
    },
    {
      id: 3,
      city: "City",
      industryName: "name 1",
      district: "district",
      industryCategory: "Industry Category",
      monitoringCategory: "Monitory Category",
      parameter: "Parameter",
      camerastatus: "Camera Status",
    },
    {
      id: 4,
      city: "City",
      industryName: "name 1",
      district: "district",
      industryCategory: "Industry Category",
      monitoringCategory: "Monitory Category",
      parameter: "Parameter",
      camerastatus: "Camera Status",
    },
    {
      id: 5,
      city: "City",
      industryName: "name 1",
      district: "district",
      industryCategory: "Industry Category",
      monitoringCategory: "Monitory Category",
      parameter: "Parameter",
      camerastatus: "Camera Status",
    },
    {
      id: 6,
      city: "City",
      industryName: "name 1",
      district: "district",
      industryCategory: "Industry Category",
      monitoringCategory: "Monitory Category",
      parameter: "Parameter",
      camerastatus: "Camera Status",
    },
    {
      id: 7,
      city: "City",
      industryName: "name 1",
      district: "district",
      industryCategory: "Industry Category",
      monitoringCategory: "Monitory Category",
      parameter: "Parameter",
      camerastatus: "Camera Status",
    },
    {
      id: 8,
      city: "City",
      industryName: "name 1",
      district: "district",
      industryCategory: "Industry Category",
      monitoringCategory: "Monitory Category",
      parameter: "Parameter",
      camerastatus: "Camera Status",
    },
    {
      id: 9,
      city: "City",
      industryName: "name 1",
      district: "district",
      industryCategory: "Industry Category",
      monitoringCategory: "Monitory Category",
      parameter: "Parameter",
      camerastatus: "Camera Status",
    },
    {
      id: 10,
      city: "City",
      industryName: "name 1",
      district: "district",
      industryCategory: "Industry Category",
      monitoringCategory: "Monitory Category",
      parameter: "Parameter",
      camerastatus: "active",
    },
  ];

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div className="workflow">
      <div className="workflow__header">
        <h1>WorkFlow</h1>
        <span style={{ color: "red" }}>(Page under developnment)</span>
        <button onClick={() => setHandlePopup(true)}>
          <HiPlusSm /> Add new Workflow
        </button>
      </div>

      <div style={{ height: "450px" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          experimentalFeatures={{ newEditingApi: true }}
          components={{
            Toolbar: GridToolbar,
          }}
        />
      </div>
      {/*  */}
      <Snackbar open={open} autoHideDuration={5000} onClose={handleCloseAlert}>
        <Alert
          // onClose={handleCloseAlert}

          severity="success"
          sx={{ width: "100%" }}
        >
          New workflow added successfully
        </Alert>
      </Snackbar>
      {handlePopup && (
        <WorkFlowPopup setOpen={setOpen} setHandlePopup={setHandlePopup} />
      )}
    </div>
  );
};

export default WorkFlow;
