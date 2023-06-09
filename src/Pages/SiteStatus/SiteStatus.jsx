import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Loader from "../../global/Loader/Loader";
import Error from "../../global/Error/Error";
import { useGetSiteSummaryDataQuery } from "../../Store/Slices/siteSummarySlice";
import SiteStatusData from "./SiteStatusData";

// Site Status data navigation
export default function SimpleTable() {
  const [isOpen, setIsOpen] = useState(false);
  const [siteId, setSiteId] = useState();

  const res = useGetSiteSummaryDataQuery();
  console.log(res);

  const handlePopup = (id) => {
    setIsOpen(true);
    setSiteId(id);
  };

  console.log(siteId);
  if (res.isLoading) return <Loader />;
  if (res.isError) return <Error />;

  const columns = [
    { field: "site_id", headerName: "ID", width: 70 },
    {
      field: "action",
      headerName: "Action",
      width: 100,
      renderCell: (params) => (
        <button
          className="sitestatus__table__btn"
          onClick={() => handlePopup(params.row.site_id)}
        >
          View Details
        </button>
      ),
    },
    { field: "name", headerName: "Name", width: 250 },
    { field: "label", headerName: "Label", width: 150 },
    { field: "category", headerName: "Category", width: 150 },
    { field: "status", headerName: "Status", width: 150 },
    { field: "authority", headerName: "Authority", width: 150 },
    { field: "state", headerName: "State", width: 150 },
    { field: "city", headerName: "City", width: 150 },
    {
      field: "today_exceedance",
      headerName: "Today Exceedance",
      width: 200,
    },
    { field: "address", headerName: "Address", width: 200 },
    { field: "latitude", headerName: "Latitude", width: 150 },
    { field: "longitude", headerName: "Longitude", width: 150 },
    {
      field: "stations",
      headerName: "Stations",
      width: 250,
      valueGetter: (params) =>
        params.row.stations
          ? params.row.stations.map((s) => s.station).join(",")
          : "",
    },
    {
      field: "parameters",
      headerName: "Parameters",
      width: 450,
      valueGetter: (params) =>
        params.row.stations.map((value) =>
          value.parameters.map((item) => item)
        ),
    },
  ];

  return (
    <div className="sitestatus">
      <h1>User Site Status</h1>
      <div
        style={{ height: 450, width: "100%" }}
        className="sitestatus__tablewrapper"
      >
        <DataGrid
          rows={res.data}
          getRowId={(row) => row.site_id}
          sx={{
            ".siteStatus__datatable__header": {
              backgroundColor: "#23395d",
              color: "#fff",
            },
          }}
          columns={columns}
          pageSize={100}
        />
      </div>
      {isOpen && <SiteStatusData siteId={siteId} setIsOpen={setIsOpen} />}
    </div>
  );
}
