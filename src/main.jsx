import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CoursesProvider from "./context/CoursesContext.jsx";
import TrainersProvider from "./context/TrainersContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TrainersProvider>
      <CoursesProvider>
        <App />
      </CoursesProvider>
    </TrainersProvider>
  </StrictMode>
);
