import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {
  useGetSiteSummaryDataQuery,
  useGetCurrentSiteDataQuery,
} from "../../Store/Slices/siteSummarySlice";
import Loader from "../../global/Loader/Loader";

export default function StationStatus({ siteId }) {
  const userType = localStorage.getItem("role");

  const res = useGetSiteSummaryDataQuery();
  const data = useGetCurrentSiteDataQuery(siteId);

  const columns = [
    { field: "site_id", headerName: "ID", width: 80 },
    {
      field: "stations",
      headerName: "Stations",
      width: 300,
      valueGetter: (params) =>
        params.row.stations
          ? params.row.stations.map((s) => s.station).join(",")
          : "",
    },
    { field: "name", headerName: "Name", width: 300 },
    {
      field: "monitoring_type",
      headerName: "Monitoring Type",
      width: 150,
      valueGetter: (params) =>
        params.row.stations.map((value) => value.monitoring_type),
    },
    {
      field: "make",
      headerName: "Make",
      width: 250,
      valueGetter: (params) => params.row.stations.map((value) => value.make),
    },
    {
      field: "model",
      headerName: "Model",
      width: 150,
      valueGetter: (params) => params.row.stations.map((value) => value.model),
    },
    {
      field: "configured_date",
      headerName: "Configured Date",
      width: 200,
      valueGetter: (params) =>
        params.row.stations.map((value) => value.configured_date),
    },
    {
      field: "expiry_date",
      headerName: "Expiry Date",
      width: 200,
      valueGetter: (params) =>
        params.row.stations.map((value) => value.expiry_date),
    },
  ];

  if (res.isLoading) return <Loader />;

  return (
    <div
      style={{
        padding: "5rem 2rem 2rem 2rem",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <h1>Station Status</h1>
      <DataGrid
        rows={userType === "admin" ? res.data : data.data}
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
