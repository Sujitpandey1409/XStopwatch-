import React, { Component } from "react";
import "./Table.css";
const Table = ({ pageData }) => {
    console.log(pageData);
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {pageData.map((el) => {
          return <tr key={el.id}>
            <td>{el.id}</td>
            <td>{el.name}</td>
            <td>{el.email}</td>
            <td>{el.role}</td>
          </tr>;
        })}
      </tbody>
    </table>
  );
};

export default Table;
