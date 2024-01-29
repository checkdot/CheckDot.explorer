import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import ExplorerRoutes from "./ExplorerRoutes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ExplorerRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <ExplorerRoutes />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById("root"),
// );
