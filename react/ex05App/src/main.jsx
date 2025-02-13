import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
// import Chip from "./ChipsOrder.jsx";
import ChoosePlace from "./ChoosePlace.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Chip /> */}
    <ChoosePlace />
  </StrictMode>
);
