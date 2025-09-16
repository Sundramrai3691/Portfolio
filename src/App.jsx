// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResumePage from "./pages/ResumePage";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ResumePage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
