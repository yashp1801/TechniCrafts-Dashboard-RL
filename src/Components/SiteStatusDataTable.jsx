import { useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useGetCurrentSiteParameterDataQuery } from "../Store/Slices/siteSummarySlice";
import Loader from "../global/Loader/Loader";

const columns = [
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

export default function DataGridDemo({ siteId }) {
  const res = useGetCurrentSiteParameterDataQuery(siteId);

  useEffect(() => {
    const intervalId = setInterval(() => {
      res.refetch();
    }, 10000); // refetch data every 10 seconds
    return () => clearInterval(intervalId); // clear interval on component unmount
  }, [res]);

  if (res.isLoading) return <Loader />;
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={res.data}
        columns={columns}
        rowsPerPageOptions={[100]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </Box>
  );
}
