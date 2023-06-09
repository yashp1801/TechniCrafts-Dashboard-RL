import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {
  useGetParameterDataQuery,
  useGetCurrentSiteDataQuery,
} from "../../Store/Slices/siteSummarySlice";
import Loader from "../../global/Loader/Loader";

export default function Parameters() {
  const siteId = localStorage.getItem("siteId");
  const userType = localStorage.getItem("role");
  const res = useGetParameterDataQuery();
  const currData = useGetCurrentSiteDataQuery(siteId);

  if (res.isLoading) return <Loader />;
  if (currData.isLoading) return <Loader />;

  const columns = [
    { field: "site_id", headerName: "ID", width: 80 },
    { field: "name", headerName: "Site Name", width: 300 },
    { field: "label", headerName: "Site Label", width: 100 },
    { field: "station", headerName: "Station ", width: 250 },
    { field: "status", headerName: "Status", width: 100 },
    { field: "parameter", headerName: "Parameter", width: 170 },
    { field: "unit", headerName: "Unit", width: 120 },
    { field: "normal_max", headerName: "Limit", width: 120 },
  ];

  return (
    <div
      style={{
        padding: "5rem 2rem 2rem 2rem",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <h1>Parameter Summary</h1>
      <DataGrid
        rows={userType === "admin" ? res.data : currData.data}
        columns={columns}
        getRowId={(row) => row.site_id}
        // pageSize={5}
        rowsPerPageOptions={[100]}
        // disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        className="overallsummary__sitesdatatable"
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </div>
  );
}
