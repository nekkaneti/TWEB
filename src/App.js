import React, { useState } from "react";
import { useEffect } from "react";

// import "./App.css";
 
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Movies from "./Pages/Movies";
import Users from "./Pages/User";

const App = () => {
  const [frontPage, setFrontPage] = useState("");

  useEffect(() => {
    setFrontPage(<Movies />);
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={frontPage} />
          <Route exact path="/users" element={<Users />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
