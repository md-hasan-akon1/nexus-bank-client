import React from "react";

const Table = () => {
  return (
    <div className="overflow-x-auto overflow-auto">
      <table className="table table-zebra text-lg">
        <thead className="text-lg">
          <tr>
            <th>Employee Id</th>
            <th>Full Name</th>
            <th>Designation</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Manik Sarker</td>
            <td>Manager</td>
            <td>01754545</td>
            <td>amnik@gamilc.om</td>
            <td>Delete</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
