
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Assure-toi que le fichier App.tsx existe
import './index.css';


// Mounting React to the 'root' div
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
