import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./components/Home";
import Department from "./components/Department";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="mainDiv">
      <div className="div1">
        <Sidebar />
      </div>
      <div className="div2">
        <Router>
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="Department" element={<Department />} />

            </Routes>
          </Container>
        </Router>{" "}
      </div>
    </div>
  );
}

export default App;
