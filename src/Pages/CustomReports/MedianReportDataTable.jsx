import React from "react";
import "./CustomReport.css";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";

const MedianReportDataTable = ({ medianReport }) => {
  const parameterNames = Object.keys(medianReport[0]);

  // export to EXCEL
  const exportToExcel = () => {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(medianReport);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Filtered Report");
    XLSX.writeFile(workbook, "filtered_report.xlsx");
  };

  // export to PDF
  const exportToPDF = () => {
    const doc = new jsPDF();
    const tableData = medianReport.map((row) =>
      parameterNames.map((parameterName) => row[parameterName])
    );

    // Add title/header to the PDF
    doc.setFontSize(16);
    doc.text("Filtered Report", 10, 10);

    doc.autoTable({
      head: [
        ["Parameter", "Average", "Min", "Max", "Median", "Mode", "Deviation"],
      ],
      body: tableData.map((row) =>
        Object.values(row).map((value) => value.toString())
      ),
    });
    doc.save("filtered_report.pdf");
  };

  return (
    <div className="filteredreport__table">
      <div className="filteredreport__table__export__btns__wrapper">
        <button
          className="filteredreport__table__export__btns"
          onClick={exportToExcel}
        >
          Export to Excel
        </button>
        <button
          className="filteredreport__table__export__btns"
          onClick={exportToPDF}
        >
          Export to PDF
        </button>
      </div>
      <h1>Table View</h1>
      <div className="filtered-report-table-wrapper">
        {/* Data Table */}
        <table className="filtered-report-table">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Average</th>
              <th>Min</th>
              <th>Max</th>
              <th>Median</th>
              <th>Mode</th>
              <th>Deviation</th>
            </tr>
          </thead>
          <tbody>
            {parameterNames.map((parameterName, index) => (
              <tr key={index}>
                <td>{parameterName}</td>
                {Object.values(medianReport[0][parameterName]).map(
                  (value, index) => (
                    <td key={index}>{value}</td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MedianReportDataTable;
