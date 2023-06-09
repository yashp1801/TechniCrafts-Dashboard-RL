import React, { useState } from "react";
import "./DataLogger.css";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import AddNewSite from "./AddNewSite";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

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

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const DataLogger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openAddNewSitePopUp = () => {
    setIsOpen(true);
  };
  const [open, setOpen] = React.useState(false);

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div className="datalogger">
      <div className="datalogger__header">
        <h1>Datalogger</h1>
        <button
          onClick={openAddNewSitePopUp}
          className="datalogger__header__btn"
        >
          Add new Site
        </button>
      </div>
      <div className="datalogger__datatable__wrapper">
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          experimentalFeatures={{ newEditingApi: true }}
          components={{
            Toolbar: GridToolbar,
          }}
        />
      </div>

      {/* Success Message Alert */}
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          open={open}
          autoHideDuration={5000}
          onClose={handleCloseAlert}
        >
          <Alert
            // onClose={handleCloseAlert}

            severity="success"
            sx={{ width: "100%" }}
          >
            Site Added Successfully
          </Alert>
        </Snackbar>
      </Stack>

      {isOpen && (
        <AddNewSite setIsOpen={setIsOpen} setOpen={setOpen} isOpen={isOpen} />
      )}
    </div>
  );
};

export default DataLogger;
