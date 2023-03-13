import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Routes from "../routes/Routes";
import Foter from "../footer/Footer";
import "./app.less";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={`app ${darkTheme ? "dark" : ""}`}>
      <Navbar />
      <Routes />
      <Foter />
    </div>
  );
};

export default App;
