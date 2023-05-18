import React, { useEffect, useState } from "react";
import axios from "axios";

const Posts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      url: "https://jsonplaceholder.typicode.com/posts",
      method: "get",
    }).then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <table className="table table-bordered">
            <thead>
              <th>No_</th>
              <th>Name</th>
            </thead>
            <br />
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td className="mt-5">{item.id})</td>
                  <td>{item.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Posts;
