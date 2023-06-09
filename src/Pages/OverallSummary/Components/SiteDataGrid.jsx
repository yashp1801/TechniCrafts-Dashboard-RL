import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import "../overallsummary.css";
import { useGetSitesDataQuery } from "../../../Store/Slices/overallSummarySlice";
import Loader from "../../../global/Loader/Loader";

const columns = [
  {
    field: "name",
    headerName: "Site Name",
    width: 730,
  },
  {
    field: "today_exceedance",
    headerName: "Today Exceedance",
    width: "200",
  },
];

export default function SiteDataGrid() {
  const [siteData, setSiteData] = useState([]);

  const res = useGetSitesDataQuery();

  if (res.isLoading) return <Loader />;

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={res?.data}
        getRowId={(row) => row.site_id}
        columns={columns}
        rowsPerPageOptions={[100]}
        experimentalFeatures={{ newEditingApi: true }}
        className="overallsummary__sitesdatatable"
      />
    </Box>
  );
}
