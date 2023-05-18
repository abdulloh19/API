import axios from "axios";
import React, { useEffect, useState } from "react";

const Users = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      url: "https://jsonplaceholder.typicode.com/users",
      method: "get",
    }).then((response) => {
      setData(response.data);
    });
  });
  return (
    <div className="row">
      <div className="col-md-12">
        <table className="table table-bordered">
          <thead>
            <th>No_</th>
            <th>Name</th>
            <th>UserName</th>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
