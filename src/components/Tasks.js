import axios from "axios";
import React, { useEffect, useState } from "react";

const Tasks = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      url: "https://jsonplaceholder.typicode.com/todos",
      method: "get",
    }).then((response) => {
      setData(response.data);
    });
  }, []);
  return (
    <div className="row">
      <div className="col-md-12">
        <table className="table table-bordered mt-3">
          <thead>
            <th>No_</th>
            <th>Title</th>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.completed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tasks;
