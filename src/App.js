import "./App.css";
import Posts from "./components/Posts";
import Users from "./components/Users";
import Tasks from "./components/Tasks";
import Photos from "./components/Photos";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const [active, setActive] = useState(0);

  const show = (num) => {
    setActive(num);
  };

  return (
    <div className="App">
      <div className="row">
        <div className="col-md-12">
          <button className="btn btn-info" onClick={() => show("1")}>
            Users
          </button>
          <button className="btn btn-info mx-3" onClick={() => show("2")}>
            Tasks
          </button>
          <button className="btn btn-info " onClick={() => show("3")}>
            Posts
          </button>
          <button className="btn btn-info mx-3" onClick={() => show("4")}>
            Photos
          </button>

          {active === "1" ? (
            <Users />
          ) : active === "2" ? (
            <Tasks />
          ) : active === "3" ? (
            <Posts />
          ) : active === "4" ? (
            <Photos />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
