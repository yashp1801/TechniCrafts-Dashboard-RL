import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useGetCurrentSiteParameterDataQuery } from "../Store/Slices/siteSummarySlice";
import Loader from "../scenes/global/Loader";

const columns = [
  { field: "id", headerName: "Sr.No", width: 90 },
  {
    field: "parameter",
    headerName: "Parameter Name",
    width: 180,
    editable: true,
  },
  {
    field: "last_value",
    headerName: "Last Value",
    width: 180,
    editable: true,
  },
  {
    field: "today_min",
    headerName: "Min Value",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 180,
  },
  {
    field: "today_max",
    headerName: "Max Value",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 180,
  },
];

export default function MapViewPop({ siteId }) {
  const res = useGetCurrentSiteParameterDataQuery(siteId);
  console.log(res);

  if (res.isLoading) return <Loader />;
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={res.data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </Box>
  );
}
