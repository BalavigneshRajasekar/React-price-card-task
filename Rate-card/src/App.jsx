import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Card from "./Card";

//The following data Which are in APP component  are exported to Card component by props
function App() {
  let title_1 = "Free";
  let title_2 = "PLUS";
  let title_3 = "PRO";
  let amount_1 = 0;
  let amount_2 = 9;
  let amount_3 = 49;
  let userType = ["Single User", "5GB User", "Unlimited User"];
  let styles = "dymanimcStyle";

  return (
    <div className="container  mt-5 gap-4 justify-content-evenly d-flex  flex-wrap parent justify-content-md-between">
      {/* First component */}
      <div className="card">
        <Card
          title={title_1}
          price={amount_1}
          user={userType[0]}
          tick={<i class="bi bi-check2 me-2 fw-bold"></i>}
          xMark={<i class="bi bi-x-lg me-2"></i>}
          dummy={<i class="bi bi-x-lg me-2"></i>}
          style={styles}
          style1={styles}
        ></Card>
      </div>
      {/* Second component */}
      <div className="card">
        <Card
          title={title_2}
          price={amount_2}
          user={userType[1]}
          tick={<i class="bi bi-check2 me-2 fw-bold"></i>}
          xMark={<i class="bi bi-check2 me-2 fw-bold"></i>}
          dummy={<i class="bi bi-x-lg me-2"></i>}
          style=""
          style1={styles}
        ></Card>
      </div>
      {/* Third component */}
      <div className="card">
        <Card
          title={title_3}
          price={amount_3}
          user={userType[2]}
          tick={<i class="bi bi-check2 me-2 fw-bold"></i>}
          xMark={<i class="bi bi-check2 me-2 fw-bold"></i>}
          dummy={<i class="bi bi-check2 me-2 fw-bold"></i>}
          style=""
        ></Card>
      </div>
    </div>
  );
}

export default App;
