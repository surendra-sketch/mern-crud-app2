import React from "react";
import "./App.css";
import { Footer, Navbar, HeroSection, AddUser, UpdatUser } from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HeroSection />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/updateuser/:id" element={<UpdatUser />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
