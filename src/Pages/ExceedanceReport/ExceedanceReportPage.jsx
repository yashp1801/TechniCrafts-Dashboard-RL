import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { maxHeight, maxWidth } from "@mui/system";
import jsPDF from "jspdf";
import "jspdf-autotable";

export default function ExceedanceReportPage() {
  const columns = [
    { field: "name", headerName: "Site Name", width: 730 },
    { field: "today_exceedance", headerName: "Today Exceedance", width: 200 },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: ({ rowData }) => (
        <button onClick={() => setSiteID()}>Click me</button>
      ),
    },
  ];

  const [siteData, setSiteData] = useState([]);
  const [siteID, setSiteID] = useState();

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Report", 20, 10);
    doc.autoTable({
      columns: columns.map((col) => ({ ...col, dataKey: col.field })),
      head: [columns.map((col) => col.headerName)],
      body: siteData,
    });
    doc.save("report.pdf");
  };

  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + "bdRqZw97UrvVWe1eeUgfebeGlaWzVF",
    };

    fetch("http://envicrafts.com:8080/sites", {
      method: "GET",
      headers: headers,
    })
      .then((response) => response.json())
      .then((response) => setSiteData(response))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div style={{ height: "100vh" }}>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={siteData}
          columns={columns}
          // pageSize={5}
          rowsPerPageOptions={[100]}
          // disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
          className="overallsummary__sitesdatatable"
          loading={!siteData.length}
          components={{
            Toolbar: GridToolbar,
          }}
        />
      </Box>
      <button onClick={downloadPDF}>PDF</button>
    </div>
  );
}
