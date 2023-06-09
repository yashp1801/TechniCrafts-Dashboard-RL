import React from "react";
import "./CustomReport.css";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";

const FilteredReportTable = ({ averageReport }) => {
  const parameterNames = Object.keys(averageReport[0]);

  const exportToExcel = () => {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(averageReport);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Filtered Report");
    XLSX.writeFile(workbook, "filtered_report.xlsx");
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    const tableData = averageReport.map((row) =>
      parameterNames.map((parameterName) => row[parameterName])
    );
    doc.autoTable({
      head: [parameterNames],
      body: tableData,
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
        <table className="filtered-report-table">
          <thead>
            <tr>
              {parameterNames.map((parameterName) => (
                <th key={parameterName}>{parameterName}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {averageReport.map((row, index) => (
              <tr key={index}>
                {parameterNames.map((parameterName) => (
                  <td key={parameterName}>{row[parameterName]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FilteredReportTable;
