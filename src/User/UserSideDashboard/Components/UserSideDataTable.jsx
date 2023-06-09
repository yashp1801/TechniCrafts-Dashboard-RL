import React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useGetCurrentSiteParameterDataQuery } from "../../../Store/Slices/siteSummarySlice";

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

const UserSideDataTable = ({ userSiteId }) => {
  const data = useGetCurrentSiteParameterDataQuery(userSiteId);

  useEffect(() => {
    const intervalId = setInterval(() => {
      data.refetch();
    }, 10000); // refetch data every 1 seconds
    return () => clearInterval(intervalId); // clear interval on component unmount
  }, [data]);

  if (data.isLoading) return <div>Loading...</div>;
  if (data.isError) return <div>Sorry Data not avaiable</div>;

  return (
    <Box
      sx={{
        height: 400,
        width: "100%",
        backgroundColor: "#fff",
        marginTop: "1rem",
      }}
    >
      <DataGrid
        rows={data.data}
        getRowId={(row) => row.id}
        columns={columns}
        rowsPerPageOptions={[100]}
        experimentalFeatures={{ newEditingApi: true }}
        className="overallsummary__sitesdatatable"
      />
    </Box>
  );
};

export default UserSideDataTable;
