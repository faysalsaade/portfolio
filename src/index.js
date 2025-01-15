import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import emailjs from "@emailjs/browser";
const root = ReactDOM.createRoot(document.getElementById("root"));
emailjs.init({
  publicKey: "IlpHOk0Zk5OU6OniM",
});
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
