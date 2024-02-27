import React, { useEffect, useState } from "react";
import Table from "../Components/Table";
import axios from "axios";
import "./Xpagination.css";
const Xpagination = () => {
  const [tableData, setTableData] = useState();
  const [pageData, setPageData] = useState();
  const [pageNo, setPageNo] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
        );
        setTableData(response.data);
        setPageData((pageData) => response.data.slice(0, 10));
      } catch (e) {
        console.error(e);
        alert(e)
      }
    };
    fetchData();
  }, []);
  const handleNext = () => {
    if (!tableData) return;
    const current_page = pageNo + 1;
    const current_page_data = tableData.slice(pageNo * 10, current_page * 10);
    if (current_page_data.length) {
      setPageData(current_page_data);
      setPageNo((pageNo) => pageNo + 1);
    }
  };
  const handlePrevious = () => {
    if (!tableData) return;
    const current_page = pageNo - 1;
    const current_page_data = tableData.slice(
      (current_page - 1) * 10,
      current_page * 10
    );
    if (current_page > 0) {
      setPageData(current_page_data);
      setPageNo((pageNo) => pageNo - 1);
    }
  };
  return (
    <div className="PaginationApp">
      <h1>Employee Data Table</h1>
      {pageData && <Table pageData={pageData} />}
      <div className="buttonContainer">
        <button onClick={handlePrevious}>Previous</button>
        <div className="pageNoContainer">{pageNo}</div>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Xpagination;
